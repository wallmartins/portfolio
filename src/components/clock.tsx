"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Clock() {
  const [dateHour, setDateHour] = useState("");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const update = () => {
      setVisible(false); // inicia a transição de saída
      setTimeout(() => {
        const now = new Date();
        setDateHour(now.toLocaleString());
        setVisible(true); // volta com transição de entrada
      }, 150); // tempo da animação de saída
    };

    update(); // primeira exibição
    const interval = setInterval(update, 1000); // atualiza a cada segundo

    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className={clsx(
        "text-sm font-button transition-all duration-300 ease-in-out p-0 m-0",
        visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}
    >
      {dateHour}
    </p>
  );
}
