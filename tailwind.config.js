/** @type {import('tailwindcss').Config} */

const flowbite = require('flowbite/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite],
}

