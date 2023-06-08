/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#65799b",

          "secondary": "#FFC107",

          "accent": "#FF4141",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

