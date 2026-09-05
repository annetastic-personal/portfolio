module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        brand: {
          background: "#ffffff",
          primary: "#2d033b",
          secondary: "#6366f1",
          tertiary: "#14b8a6",
          accent: "#65a30d",
          highlight: "#ff1fae",
          text: "#6b6375",
        },
      },
      boxShadow: {
        soft: "0 4px 24px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  safelist: [
    "bg-white",
    "rounded-2xl",
    "mx-auto",
    "my-4",
    "px-6",
    "py-4",
    "max-w-3xl",
    "min-h-[80vh]",
    "shadow-lg",
    "flex",
    "flex-col",
    "border-4",
    "border-green-400",
    "flex-1",
  ],
};
