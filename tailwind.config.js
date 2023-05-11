/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {

      fontFamily:{
        prata: "'Prata', serif",
      },

      colors:{
        "color-primary": "#161720",
        "color-secondary": "#DCA54C",
        "color-gray": "#333",
        "color-white": "#fff",
        "color-blob": "#A427DF",
        "color-gray2": "#172C39",
        "color-black": "#011220"

      }
    },

    container: { 
      center: true,
      padding: {
        DEFAULT: '2rem',
        md: '2rem',
      }
    },

  },
  

  plugins: [],
}
