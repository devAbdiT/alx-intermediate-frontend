// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Add ALL paths where you use Tailwind classes
    "./*.html",
    "./src/*.html",
    "./**/*.html",
    // Or be more specific:
    // "./index.html",
    // "./**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
