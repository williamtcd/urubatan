/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './docs/**/*.{md,vue,js,ts,jsx,tsx}', // Caminho para arquivos Markdown e Vue
      './index.md',
    ],
    darkMode: 'class', // Usa a classe 'dark' no elemento <html>
    theme: {
      extend: {
        colors: {
          lightBgPrimary: '#D1DDED',
          lightBgSecondary: '#758BA5',
          lightBgTertiary: '#B3D6F9',
  
          darkBgPrimary: '#031930',
          darkBgSecondary: '#223A59',
          darkBgTertiary: '#3684DB',
          
          lightTextPrimary: '#031930',
          lightTextSecondary: '#223A59',
          lightTextTertiary: '#3684DB',
  
          darkTextPrimary: '#D1DDED',
          darkTextSecondary: '#758BA5',
          darkTextTertiary: '#B3D6F9'
        },
      },
    },
    plugins: [],
  };