/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    BlogMasterTheme: [
      {
        mytheme: {
          primary: "#027785",
          secondary: "#a991f7",
          accent: "#0C7BEA",
          neutral: "#343a40",
          mute: "#6c757d",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}

