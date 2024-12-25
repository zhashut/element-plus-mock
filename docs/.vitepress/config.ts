import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Element-Plus-Mock",
  vite: {
    plugins: [],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],

    sidebar: [
      {
        text: '组件',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Collapse', link: '/components/collapse' },
          { text: 'Icon', link: '/components/icon' },
          { text: 'Tooltip', link: '/components/tooltip' },
          { text: 'Dropdown', link: '/components/dropdown' },
          { text: 'Message', link: '/components/message' },
          { text: 'Input', link: '/components/input' },
          { text: 'Switch', link: '/components/switch' },
          { text: 'Select', link: '/components/select' },
          { text: 'Form', link: '/components/form' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
