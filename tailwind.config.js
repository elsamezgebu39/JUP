/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'hero_bg': "url('/background.svg')",
        'cc_bg': "url('/cc.jpg')",

      },
      colors: {
        "primary-orange": "#FF5722",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#881337",
          "secondary": "#fecdd3",
          "accent": "#34d399",
          "neutral": "#333c4d",
          "base-100": "#ffffff",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
