/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        accent: '#50E3C1',
        primary: '#8C89FF',
        text_dark: '#344659',
        text_light: '#576266',
        text_ultralight: '#9FADB2',
        app_bg: '#ECECEC'
      }
    }
  },

  plugins: []
};

module.exports = config;
