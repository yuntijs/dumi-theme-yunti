import { defineConfig } from 'dumi';
import path from 'node:path';

import { homepage, name } from '../package.json';

const isProduction = process.env.NODE_ENV === 'production';
const isWin = process.platform === 'win32';

const themeConfig = {
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
  description: 'Yunti UI is an open-source UI component library for building chatbot web apps',
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
  title: 'Dumi Theme YuntiJS',
};

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
  // favicons: ['https://npm.elemecdn.com/@lobehub/assets-favicons/assets/favicon.ico'],
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'English' },
  ],
  mfsu: isWin ? undefined : {},
  npmClient: 'pnpm',
  // ssr: false,
  ...(isProduction ? { ssr: { builder: 'webpack' } } : {}),
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #000; }
  }`,
  ],
  themeConfig,
  title: 'Dumi Theme YuntiJS',
});
