import DefaultTheme from 'vitepress/theme'
import './index.css'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Layout', Layout)
  }
}
