/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        '300': '3', // Добавление пользовательского значения для увеличения на 175%
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        qwitcher: ["Qwitcher Grypen", "cursive"], // Добавляем шрифт
      },
      colors: {
        peach: "rgb(238, 164, 153)",
      },
      textShadow: {
        'outline-peach': '1px 1px 0 rgb(238, 164, 153), -1px -1px 0 rgb(238, 164, 153), 1px -1px 0 rgb(238, 164, 153), -1px 1px 0 rgb(238, 164, 153)'
      }
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities({
        '.text-outline-peach': {
          color: theme('colors.white'),
          textShadow: theme('textShadow.outline-peach'),
        },
      });
    },
  ],
};
