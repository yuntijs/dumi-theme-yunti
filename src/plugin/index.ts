// import { extractStaticStyle } from 'antd-style';
import createEmotionServer from '@emotion/server/create-instance';
import chalk from 'chalk';
import type { IApi } from 'dumi';
import fs from 'node:fs';
import path from 'node:path';

import { getHash } from './utils';

function extractEmotionStyle(html: string) {
  // copy from emotion ssr
  // https://github.com/vercel/next.js/blob/deprecated-main/examples/with-emotion-vanilla/pages/_document.js
  const styles = global.__ANTD_STYLE_CACHE_MANAGER_FOR_SSR__.getCacheList().map(cache => {
    const result = createEmotionServer(cache).extractCritical(html);
    if (!result.css) {
      return null;
    }

    const { css, ids } = result;

    return {
      key: cache.key,
      css,
      ids,
      tag: `<style data-emotion="${cache.key} ${result.ids.join(' ')}">${result.css}</style>`,
    };
  });
  return styles.filter(Boolean);
}

const SSRPlugin = (api: IApi) => {
  // const ssrCssFileName = `ssr-${Date.now()}.css`;

  // api.describe({
  //   key: '@',
  // });

  api.describe({
    key: `dumi-theme:${require('../../package.json').name}`,
  });
  api.modifyDefaultConfig(memo =>
    Object.assign(memo, {
      cjs: {
        output: 'dist/defineThemeConfig',
        input: 'src/defineThemeConfig',
      },
    })
  );

  if (!api.userConfig.ssr) return;

  api.logger.info('detect ssr config, when building html will extract css.');

  // add ssr css file to html
  const writeCSSFile = (key: string, hashKey: string, cssString: string) => {
    const fileName = `ssr-${key}.${getHash(hashKey)}.css`;

    const filePath = path.join(api.paths.absOutputPath, fileName);

    if (!fs.existsSync(filePath)) {
      api.logger.event(chalk.grey(`write to: ${filePath}`));
      fs.writeFileSync(filePath, cssString, 'utf8');
    }

    return fileName;
  };

  const addLinkStyle = (html: string, cssFile: string) => {
    const prefix = api.userConfig.publicPath || api.config.publicPath;

    return html.replace('</head>', `<link rel="stylesheet" href="${prefix + cssFile}"></head>`);
  };

  api.modifyExportHTMLFiles(files =>
    files
      // exclude dynamic route path, to avoid deploy failed by `:id` directory
      .filter(f => !f.path.includes(':'))

      .map(file => {
        // const antdCache = (global as any).__ANTD_CACHE__;
        // const styles = extractStaticStyle(file.content, { antdCache });

        // 1. 提取 antd-style 样式
        const styles = extractEmotionStyle(file.content);

        for (const result of styles) {
          api.logger.event(
            `${chalk.yellow(file.path)} include ${chalk.blue`[${result!.key}]`} ${chalk.yellow(
              result!.ids.length
            )} styles`
          );

          const cssFile = writeCSSFile(result!.key, result!.ids.join(''), result!.css);

          file.content = addLinkStyle(file.content, cssFile);
        }

        return file;
      })
  );

  // add ssr css file to html
  api.modifyConfig(memo => {
    memo.styles ??= [];
    // memo.styles.push(`/${ssrCssFileName}`);

    return memo;
  });
};

export default SSRPlugin;
