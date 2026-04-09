import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  { text: 'Главная', link: '/' },
  { text: 'Гайд', link: '/guide' },
  { text: 'UI Kit', link: '/ui-kit' }
]

export const sidebar: DefaultTheme.SidebarItem[] = [
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
