module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-orbitron)"],
        button: ["var(--font-audiowide)"],
        body: ["var(--font-space-grotesk)"],
      },
      blur: {
        xl: "24px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
