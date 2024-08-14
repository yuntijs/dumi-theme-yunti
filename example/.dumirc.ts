import { defineConfig } from 'dumi';
import path from 'node:path';

import { homepage, name } from '../package.json';
import { defineThemeConfig } from '../src/defineThemeConfig';

const isProduction = process.env.NODE_ENV === 'production';
const isPreview = process.env.PREVIEW === 'true';
const isWin = process.platform === 'win32';

const themeConfig = defineThemeConfig({
  logo: 'https://lingwu.cn/v1/gpts/images/c6978e9c-d991-4cd4-a74b-b5189cdf647b',
  actions: [
    {
      icon: 'Github',
      link: homepage,
      openExternal: true,
      text: 'Github',
    },
    {
      link: '/components/example',
      text: 'Get Started',
      type: 'primary',
    },
  ],
  apiHeader: {
    docUrl: `{github}/tree/master/src/{atomId}/index.md`,
    match: ['/components'],
    pkg: name,
    sourceUrl: `{github}/tree/master/src/{atomId}/index.tsx`,
    type: 'doc',
  },
  footer: 'Made with ☁️ by YuntiJS',
  giscus: {
    category: 'Q&A',
    categoryId: 'DIC_kwDOK7a7Ac4CcBHb',
    repo: 'yuntijs/yunti-ui',
    repoId: 'R_kgDOK7a7AQ',
  },
  name: 'DUMI',
  socialLinks: {
    github: homepage,
  },
  header: {
    userActionButton: {
      button: {
        className: 'user-action-button',
        type: 'primary',
      },
    },
  },
  title: 'Dumi Theme YuntiJS',
  description: 'Yunti documentation site theme package designed for Dumi 2',
  keywords: ['theme', 'antd', 'dumi', 'dumi-theme'],
  sidebarGroupModePath: ['/config', '/components'],
  nav: {
    'zh-CN': [
      { title: 'Components', link: '/components/example' },
      { title: '分组示例', link: '/config/base' },
      { title: '折叠示例', link: '/demo/secondary-sidebar-colors' },
      { title: '自定义页面', link: '/custom', target: '_blank' },
      { title: 'Changelog', link: '/changelog' },
      { title: 'Yunti UI', link: 'https://yuntijs.github.io/yunti-ui/' },
    ],
    'en-US': [
      { title: 'Group Demo', link: '/config/base-en' },
      { title: 'Collapse Demo', link: '/demo/secondary-sidebar-colors-en' },
    ],
  },
  customPages: [
    {
      path: '/custom',
      title: '自定义页面',
      description: '自定义页面的描述',
      keywords: ['自定义页面', 'dumi', 'dumi-theme', 'yunti-ui'],
      sider: false,
      header: false,
      footer: false,
    },
  ],
});

const base = isProduction && !isPreview ? '/dumi-theme-yunti/' : '/';

export default defineConfig({
  alias: {
    '@': path.resolve(__dirname, '../src'),
    'dumi-theme-yunti': path.resolve(__dirname, '../src'),
  },
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
  define: {
    'process.env': process.env,
  },
  base,
  publicPath: base,
  outputPath: `./dist${base}`,
  favicons: ['https://avatars.githubusercontent.com/u/148947838?s=64&v=4'],
  locales: [
    { id: 'zh-CN', name: '中文', suffix: '' },
    { id: 'en-US', name: 'English', suffix: '-en' },
  ],
  mfsu: isWin ? undefined : {},
  npmClient: 'pnpm',
  exportStatic: {
    // 忽略预渲染失败的错误
    ignorePreRenderError: true,
  },
  ...(isProduction ? { ssr: { builder: 'webpack' } } : {}),
  ...(isPreview ? { devtool: 'source-map' } : {}),
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #000; }
  }`,
  ],
  themeConfig,
});
