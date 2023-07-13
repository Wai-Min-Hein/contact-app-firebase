/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],

  theme: {
    fontFamily: {
      'primary': ['Poppins', 'sans-serif'],
      'secondary': ['Roboto', 'sans-serif'],
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1537px',
      // => @media (min-width: 1537px) { ... }
    }
,
    extend: {
      colors: {
        primary: "#1D5B79",
        secondary:"#468B97",
        red: "#EF6262",
        yellow: "#F3AA60",
        'background' : '#f0f9ff', //[sky-50]
        'headline' : '#082f49', //[sky-950]
        'para' : '#075985', //[sky-800]
        'button' : '#0ea5e9', //[sky-500]
        'button-text' : '#e0f2fe', //[sky-200]
        'hover': '#7dd3fc',
        'placeholder' : '#38bdf8', //[sky-400] placeholder,link
      }

    },
  },
  plugins: [],
}


