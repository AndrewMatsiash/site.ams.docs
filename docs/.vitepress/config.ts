import { defineConfig } from 'vitepress'
import { navEn, navRu, sidebarEn, sidebarRu } from './sidebar'

const base = '/site.ams.docs/'

const localSearchOptions = {
  locales: {
    root: {
      translations: {
        button: {
          buttonText: 'Поиск',
          buttonAriaLabel: 'Поиск по документации'
        },
        modal: {
          noResultsText: 'Ничего не найдено',
          resetButtonTitle: 'Сбросить',
          backButtonTitle: 'Назад',
          displayDetails: 'Показать подробности',
          footer: {
            selectText: 'перейти',
            selectKeyAriaLabel: 'Enter',
            navigateText: 'навигация',
            navigateUpKeyAriaLabel: 'Стрелка вверх',
            navigateDownKeyAriaLabel: 'Стрелка вниз',
            closeText: 'закрыть',
            closeKeyAriaLabel: 'Escape'
          }
        }
      }
    },
    en: {
      translations: {
        button: {
          buttonText: 'Search',
          buttonAriaLabel: 'Search documentation'
        },
        modal: {
          noResultsText: 'No results found',
          resetButtonTitle: 'Reset search',
          backButtonTitle: 'Back',
          displayDetails: 'Display detailed list',
          footer: {
            selectText: 'to select',
            selectKeyAriaLabel: 'enter',
            navigateText: 'to navigate',
            navigateUpKeyAriaLabel: 'up arrow',
            navigateDownKeyAriaLabel: 'down arrow',
            closeText: 'to close',
            closeKeyAriaLabel: 'escape'
          }
        }
      }
    }
  }
}

export default defineConfig({
  base,
  themeConfig: {
    logo: {
      light: '/images/logo.svg',
      dark: '/images/logo-dark.svg',
      alt: 'AMS Docs'
    },
    search: {
      provider: 'local',
      options: localSearchOptions
    }
  },
  locales: {
    root: {
      label: 'Русский',
      lang: 'ru-RU',
      title: 'Документация',
      description: 'Документация',
      themeConfig: {
        nav: navRu,
        sidebar: sidebarRu,
        outline: { label: 'На этой странице' },
        docFooter: { prev: 'Назад', next: 'Далее' },
        sidebarMenuLabel: 'Меню',
        returnToTopLabel: 'Наверх',
        darkModeSwitchLabel: 'Тема оформления',
        lightModeSwitchTitle: 'Светлая тема',
        darkModeSwitchTitle: 'Тёмная тема',
        langMenuLabel: 'Язык',
        skipToContentLabel: 'Перейти к содержимому'
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'Documentation',
      description: 'Documentation',
      themeConfig: {
        nav: navEn,
        sidebar: sidebarEn,
        outline: { label: 'On this page' },
        docFooter: { prev: 'Previous', next: 'Next' },
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Switch to light theme',
        darkModeSwitchTitle: 'Switch to dark theme',
        langMenuLabel: 'Change language',
        skipToContentLabel: 'Skip to content'
      }
    }
  }
})
