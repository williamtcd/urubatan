export default {
  themeConfig: {
    appearance: false,
    nav: [],  // Desativa a navbar do VitePress
    siteTitle: false,  // Desativa o título do site na navbar
    logo: false,  // Desativa o logo na navbar
  },
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: '@import "./theme/index.css";',
        },
      },
    },
  },
};