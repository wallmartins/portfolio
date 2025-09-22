import React, { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactCard: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          text: data.message || "Mensagem enviada com sucesso!",
          type: "success",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Mostrar erros detalhados do backend
        const errorMessage = data.details
          ? `${data.error}: ${data.details.join(", ")}`
          : data.error || "Erro ao enviar mensagem";

        setMessage({ text: errorMessage, type: "error" });
      }
    } catch (error) {
      setMessage({ text: "Erro de conexão com o servidor", type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto p-6 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-title mb-2">Bora conversar?</h2>
      <p className="mb-6 text-gray-400 font-body">
        Adoraria receber sua mensagem! Seja para falar sobre um projeto, tirar
        dúvidas sobre meus serviços ou só para dar um oi, fique à vontade para
        me contatar pelo formulário abaixo.
      </p>

      {message.text && (
        <div
          className={`p-3 rounded mb-4 ${
            message.type === "success"
              ? "bg-green-500/20 text-green-400 border border-green-500/30"
              : "bg-red-500/20 text-red-400 border border-red-500/30"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
            className="w-1/2 p-3 bg-[#181d2c] border border-[#181d2c] rounded focus:outline-none focus:ring-2 focus:ring-[#2a334d]"
            required
            disabled={isLoading}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="w-1/2 p-3 bg-[#181d2c] border border-[#181d2c] rounded focus:outline-none focus:ring-2 focus:ring-[#2a334d]"
            required
            disabled={isLoading}
          />
        </div>
        <textarea
          name="message"
          placeholder="Mensagem"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 bg-[#181d2c] border border-[#181d2c] rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#2a334d]"
          required
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#181d2c] hover:bg-[#2a334d] text-white font-semibold py-3 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
};

export default ContactCard;
