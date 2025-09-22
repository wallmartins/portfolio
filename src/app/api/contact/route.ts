import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactData {
  name: string;
  email: string;
  message: string;
}

const requestIPs = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 10;

const sanitizeInput = (input: string): string => {
  if (typeof input !== "string") return "";
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, "")
    .replace(/javascript:/gi, "")
    .trim();
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidName = (name: string): boolean => {
  return name.length >= 2 && name.length <= 50;
};

const isValidMessage = (message: string): boolean => {
  const trimmedMessage = message.trim();
  return trimmedMessage.length >= 5 && trimmedMessage.length <= 2000;
};

const checkRateLimit = (
  ip: string
): { allowed: boolean; remaining?: number } => {
  const now = Date.now();
  const requests = requestIPs.get(ip) || [];

  const recentRequests = requests.filter(
    (timestamp: number) => now - timestamp < RATE_LIMIT_WINDOW
  );

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false };
  }

  recentRequests.push(now);
  requestIPs.set(ip, recentRequests);

  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - recentRequests.length,
  };
};

setInterval(() => {
  const now = Date.now();
  for (const [ip, requests] of requestIPs.entries()) {
    const recentRequests = requests.filter(
      (timestamp: number) => now - timestamp < RATE_LIMIT_WINDOW
    );
    if (recentRequests.length === 0) {
      requestIPs.delete(ip);
    } else {
      requestIPs.set(ip, recentRequests);
    }
  }
}, RATE_LIMIT_WINDOW);

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Muitas requisições. Tente novamente em 15 minutos." },
        { status: 429 }
      );
    }

    const contentType = request.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      return NextResponse.json(
        { error: "Content-Type deve ser application/json" },
        { status: 415 }
      );
    }

    let body: ContactData;
    try {
      body = await request.json();
    } catch (error) {
      return NextResponse.json(
        { error: `JSON inválido, ${error}` },
        { status: 400 }
      );
    }

    if (typeof body !== "object" || body === null) {
      return NextResponse.json(
        { error: "Dados devem ser um objeto JSON" },
        { status: 400 }
      );
    }

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { error: "Todos os campos devem ser strings" },
        { status: 400 }
      );
    }

    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);

    const validationErrors: string[] = [];

    if (!isValidName(sanitizedName)) {
      validationErrors.push("Nome deve ter entre 2 e 50 caracteres");
    }

    if (!isValidEmail(sanitizedEmail)) {
      console.log("❌ Email considerado inválido:", sanitizedEmail);
      validationErrors.push(
        "Email inválido. Use um formato como: exemplo@email.com"
      );
    }

    if (!isValidMessage(sanitizedMessage)) {
      validationErrors.push("Mensagem deve ter entre 5 e 2000 caracteres");
    }

    if (validationErrors.length > 0) {
      console.log("❌ Erros de validação:", validationErrors);
      return NextResponse.json(
        {
          error: "Dados inválidos",
          details: validationErrors,
          receivedEmail: sanitizedEmail,
        },
        { status: 400 }
      );
    }

    console.log("✅ Todas as validações passaram!");

    if (!process.env.GODADDY_EMAIL || !process.env.GODADDY_EMAIL_PASSWORD) {
      console.error("❌ Credenciais de email não configuradas");
      return NextResponse.json(
        { error: "Configuração de email não encontrada" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.GODADDY_SMTP_HOST || "smtpout.secureserver.net",
      port: parseInt(process.env.GODADDY_SMTP_PORT || "465"),
      secure: true,
      auth: {
        user: process.env.GODADDY_EMAIL,
        pass: process.env.GODADDY_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Formulário de Portfólio" <${process.env.GODADDY_EMAIL}>`,
      to: process.env.GODADDY_EMAIL,
      replyTo: sanitizedEmail,
      subject: `Nova mensagem de ${sanitizedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; background: transparent">
          <h3>Nova mensagem do portfólio</h3>
          <p><strong>Nome:</strong> ${sanitizedName}</p>
          <p><strong>Email:</strong> ${sanitizedEmail}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${sanitizedMessage.replace(/\n/g, "<br>")}</p>
        </div>
      `,
      text: `Nome: ${sanitizedName}\nEmail: ${sanitizedEmail}\nMensagem: ${sanitizedMessage}`,
    };

    console.log("📤 Tentando enviar email para:", process.env.GODADDY_EMAIL);

    await transporter.sendMail(mailOptions);

    console.log("✅ Email enviado com sucesso!");

    return NextResponse.json(
      {
        message: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Erro ao enviar email:", error);

    return NextResponse.json(
      { error: "Erro ao processar sua mensagem. Tente novamente." },
      { status: 500 }
    );
  }
}
