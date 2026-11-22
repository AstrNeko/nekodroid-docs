import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/nekodroid-docs/',
  title: 'AstrNeko Docs',
  description: '文档站',
  themeConfig: {
    nav: [{ text: '首页', link: '/' }],
    sidebar: { '/guide/': [{ text: '快速开始', link: '/guide/getting-started' }] }
  }
})

