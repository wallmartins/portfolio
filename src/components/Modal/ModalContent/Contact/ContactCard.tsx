import React, { useState } from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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
          text: data.message || t("messageSent"),
          type: "success",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Mostrar erros detalhados do backend
        const errorMessage = data.details
          ? `${data.error}: ${data.details.join(", ")}`
          : data.error || t("messageError");

        setMessage({ text: errorMessage, type: "error" });
      }
    } catch (error) {
      setMessage({
        text: `${t("serverError")}, ${error}`,
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto p-3 lg:p-6 text-white rounded-lg shadow-md">
      <h2 className="text-xl lg:text-2xl font-title mb-2">{t("letsTalk")}</h2>
      <p className="mb-4 lg:mb-6 text-gray-400 font-body text-xs lg:text-sm">{t("contactDescription")}</p>

      {message.text && (
        <div
          className={`p-2 lg:p-3 rounded mb-3 lg:mb-4 text-xs lg:text-sm ${
            message.type === "success"
              ? "bg-green-500/20 text-green-400 border border-green-500/30"
              : "bg-red-500/20 text-red-400 border border-red-500/30"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-4">
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
          <input
            type="text"
            name="name"
            placeholder={t("name")}
            value={formData.name}
            onChange={handleChange}
            className="w-full lg:w-1/2 p-2 lg:p-3 text-sm bg-[#181d2c] border border-[#181d2c] rounded focus:outline-none focus:ring-2 focus:ring-[#2a334d]"
            required
            disabled={isLoading}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full lg:w-1/2 p-2 lg:p-3 text-sm bg-[#181d2c] border border-[#181d2c] rounded focus:outline-none focus:ring-2 focus:ring-[#2a334d]"
            required
            disabled={isLoading}
          />
        </div>
        <textarea
          name="message"
          placeholder={t("message")}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 lg:p-3 text-sm bg-[#181d2c] border border-[#181d2c] rounded h-24 lg:h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#2a334d]"
          required
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#181d2c] hover:bg-[#2a334d] text-white font-semibold py-2 lg:py-3 text-sm rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? t("sending") : t("send")}
        </button>
      </form>
    </div>
  );
};

export default ContactCard;
