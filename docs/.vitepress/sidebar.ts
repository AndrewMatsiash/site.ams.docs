import type { DefaultTheme } from 'vitepress'

const sidebarPaths: DefaultTheme.SidebarItem[] = [
  {
    text: 'UI Kit',
    collapsed: false,
    items: [{ text: 'Предпросмотр компонентов', link: '/ui-kit' }]
  },
  {
    text: 'Прошивка Whatsminer',
    collapsed: true,
    items: [
      { text: 'Технические требования', link: '/whatsminer-firmware/technical-requirements' },
      { text: 'Подключение устройства', link: '/whatsminer-firmware/connecting-a-device' },
      {
        text: 'Первоначальная настройка',
        items: [
          { text: 'Поиск майнера в сети', link: '/whatsminer-firmware/network-identification' },
          { text: 'Настройка отображения данных', link: '/whatsminer-firmware/data-display-setup' }
        ]
      }
    ]
  },
  {
    text: 'Прошивка Antminer',
    collapsed: true,
    items: [{ text: 'Обзор', link: '/antminer-firmware/' }]
  },
  {
    text: 'Автоматизация',
    collapsed: true,
    items: [{ text: 'Обзор', link: '/automated/' }]
  },
  {
    text: 'Руководство по Whatsminer ASIC',
    collapsed: true,
    items: [{ text: 'Обзор', link: '/user-guide-whatsminer-asic/' }]
  }
]

const sidebarPathsEn: DefaultTheme.SidebarItem[] = [
  {
    text: 'UI Kit',
    collapsed: false,
    items: [{ text: 'Components preview', link: '/ui-kit' }]
  },
  {
    text: 'Whatsminer Firmware',
    collapsed: true,
    items: [
      { text: 'Technical requirements', link: '/whatsminer-firmware/technical-requirements' },
      { text: 'Connecting a device', link: '/whatsminer-firmware/connecting-a-device' },
      {
        text: 'Initial device setup',
        items: [
          { text: 'Miner identification on the network', link: '/whatsminer-firmware/network-identification' },
          { text: 'Data display setup', link: '/whatsminer-firmware/data-display-setup' }
        ]
      }
    ]
  },
  {
    text: 'Antminer Firmware',
    collapsed: true,
    items: [{ text: 'Overview', link: '/antminer-firmware/' }]
  },
  {
    text: 'Automated',
    collapsed: true,
    items: [{ text: 'Overview', link: '/automated/' }]
  },
  {
    text: 'User guide for Whatsminer ASIC',
    collapsed: true,
    items: [{ text: 'Overview', link: '/user-guide-whatsminer-asic/' }]
  }
]

function prefixSidebarLinks(items: DefaultTheme.SidebarItem[], prefix: string): DefaultTheme.SidebarItem[] {
  return items.map((item) => {
    const next = { ...item } as DefaultTheme.SidebarItem
    if (item.link) {
      next.link = `${prefix}${item.link}`
    }
    if (item.items) {
      next.items = prefixSidebarLinks(item.items, prefix)
    }
    return next
  })
}

export const navRu: DefaultTheme.NavItem[] = [{ text: 'Связаться', link: '/' }]

export const navEn: DefaultTheme.NavItem[] = [{ text: 'Get in touch', link: '/en/' }]

export const sidebarRu = sidebarPaths

export const sidebarEn = prefixSidebarLinks(sidebarPathsEn, '/en')
