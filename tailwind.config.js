/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "5xl": "0 0 10px rgba(0, 0, 0, 0.3)",
        "login-shadow": "0 0 10px 0 rgba(0, 0, 0, 0.45)",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://cybersoft-movie-phutran.web.app/static/media/bglogin.4c4a3b7b.jpg')",
        login:
          "linear-gradient( to bottom, rgba(20, 50, 93, 0.9), rgba(8, 22, 48, 0.9));",
      },
      // colors: {
      //   'login-form' :
      // }
    },
  },
  plugins: [],
};
