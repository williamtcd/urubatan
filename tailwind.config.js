module.exports = {
  content: [
    './index.md',
    './docs/**/*.{md,vue}', // Padrão para arquivos markdown e vue
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
