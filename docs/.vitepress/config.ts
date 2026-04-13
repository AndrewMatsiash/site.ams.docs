import { defineConfig } from 'vitepress'
import { nav, sidebar } from './sidebar'

const base = '/site.ams.docs/'

export default defineConfig({
  base,
  title: 'AMS Docs',
  description: 'Documentation prototype',
  themeConfig: {
    nav,
    sidebar,
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Поиск',
            buttonAriaLabel: 'Поиск по документации'
          }
        }
      }
    }
  }
})
