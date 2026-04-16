import type { UserConfig, DefaultTheme } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

export const sidebarOptions = [
  {
    documentRootPath: '/docs',
    scanStartPath: 'ru',
    resolvePath: '/',
    basePath: '/',
    collapsed: true,
    collapseDepth: 1,
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    excludeByGlobPattern: ['**/test.md']
  },
  {
    documentRootPath: '/docs',
    scanStartPath: 'en',
    resolvePath: '/en/',
    basePath: '/en/',
    collapsed: true,
    collapseDepth: 1,
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    excludeByGlobPattern: ['**/test.md']
  }
] 

export function withLocalizedSidebar(config: UserConfig): UserConfig {
  return withSidebar(config, sidebarOptions)
}

export const navRu: DefaultTheme.NavItem[] = []

export const navEn: DefaultTheme.NavItem[] = []
