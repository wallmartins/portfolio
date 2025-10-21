export const servicesSEOData = [
  {
    key: "webDevelopment",
    keywords: [
      "desenvolvimento web",
      "desenvolvedor web",
      "website",
      "aplicação web",
      "site responsivo",
      "development",
    ],
  },
  {
    key: "landingPages",
    keywords: [
      "landing page",
      "página de conversão",
      "página para leads",
      "página de vendas",
      "professional landing page",
    ],
  },
  {
    key: "apiIntegration",
    keywords: [
      "integração de API",
      "integração de banco de dados",
      "integração CRM",
      "webhook",
      "API development",
    ],
  },
  {
    key: "designSystem",
    keywords: [
      "design system",
      "componentes reutilizáveis",
      "component library",
      "design tokens",
      "UI kit",
    ],
  },
  {
    key: "performanceSeo",
    keywords: [
      "SEO",
      "otimização SEO",
      "performance web",
      "velocidade site",
      "core web vitals",
      "SEO optimization",
    ],
  },
  {
    key: "authSecurity",
    keywords: [
      "autenticação",
      "segurança web",
      "login",
      "cadastro",
      "controle de acesso",
      "authentication",
      "security",
    ],
  },
  {
    key: "chatbotsAutomation",
    keywords: [
      "chatbot",
      "WhatsApp bot",
      "automação",
      "chatbot WhatsApp",
      "automação de processos",
      "automation",
      "bot integration",
    ],
  },
  {
    key: "codeRefactoring",
    keywords: [
      "refatoração de código",
      "melhoria de código",
      "refactoring",
      "otimização de performance",
      "clean code",
      "code optimization",
    ],
  },
  {
    key: "aiIntegration",
    keywords: [
      "integração IA",
      "integração OpenAI",
      "machine learning",
      "AI integration",
      "inteligência artificial",
      "artificial intelligence",
      "generative AI",
    ],
  },
  {
    key: "smartChatbots",
    keywords: [
      "chatbot inteligente",
      "chatbot IA",
      "bot com IA",
      "smart chatbot",
      "AI chatbot",
      "conversational AI",
    ],
  },
  {
    key: "automatedContent",
    keywords: [
      "conteúdo automatizado",
      "geração de texto com IA",
      "resumo automático",
      "automated content",
      "AI-generated content",
      "text generation",
    ],
  },
  {
    key: "smartSearch",
    keywords: [
      "busca inteligente",
      "busca com IA",
      "search optimization",
      "semantic search",
      "natural language search",
    ],
  },
  {
    key: "dataManagement",
    keywords: [
      "data management",
      "gestão de dados",
      "categorização de dados",
      "data organization",
      "data analysis",
    ],
  },
  {
    key: "businessAi",
    keywords: [
      "IA para negócios",
      "machine learning para negócios",
      "AI solutions",
      "business intelligence",
      "AI para empresa",
    ],
  },
];

export function getServiceKeywords(serviceKey: string): string[] {
  const service = servicesSEOData.find((s) => s.key === serviceKey);
  return service?.keywords || [];
}
