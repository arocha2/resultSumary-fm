/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Light-red": "hsl(0, 100%, 67%)",
        "Orangey-yellow": "hsl(39, 100%, 56%)",
        "Green-teal": "hsl(166, 100%, 37%)",
        "Cobalt-blue": "hsl(234, 85%, 45%)",

        "Pale-blue": "hsl(221, 100%, 96%)",
        "Light-lavender": "hsl(241, 100%, 89%)",
        "Dark-gray-blue": "hsl(224, 30%, 27%)",
      },
    },
  },
  plugins: [],
};
