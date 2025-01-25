export default {
    title: 'Minha Landing Page',
    description: 'Landing page incrível com VitePress e Tailwind.',
    themeConfig: {
      nav: [
        { text: 'Início', link: '/' },
        { text: 'Sobre', link: '/sobre' },
      ],
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
  }
  