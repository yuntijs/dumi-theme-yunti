// import { isBrowser } from '@/utils';
import {
  StyleProvider,
  createCache,
  extractStyle,
  legacyNotSelectorLinter,
  logicalPropertiesLinter,
  parentSelectorLinter,
} from '@ant-design/cssinjs';
import { App } from 'antd';
import { useLocation, useOutlet, useServerInsertedHTML } from 'dumi';
import type { FC } from 'react';
import React from 'react';

const GlobalLayout: FC = () => {
  const { pathname } = useLocation();
  const outlet = useOutlet();
  const [styleCache] = React.useState(() => createCache());

  useServerInsertedHTML(() => {
    const styleText = extractStyle(styleCache, {
      plain: true,
      types: 'style',
    });
    return <style dangerouslySetInnerHTML={{ __html: styleText }} data-type="antd-cssinjs" />;
  });

  useServerInsertedHTML(() => {
    const styleText = extractStyle(styleCache, {
      plain: true,
      types: ['cssVar', 'token'],
    });
    return (
      <style
        dangerouslySetInnerHTML={{ __html: styleText }}
        data-rc-order="prepend"
        data-rc-priority="-9999"
        data-type="antd-css-var"
      />
    );
  });

  const demoPage = pathname.startsWith('/~demos');

  // ============================ Render ============================
  let content: React.ReactNode = outlet;

  // Demo page should not contain App component
  if (!demoPage) {
    content = <App>{outlet}</App>;
  }

  // if (!isBrowser) {
  //   (global as any).styleCache = styleCache;
  // }

  return (
    <StyleProvider
      cache={styleCache}
      linters={[logicalPropertiesLinter, legacyNotSelectorLinter, parentSelectorLinter]}
    >
      {content}
    </StyleProvider>
  );
};

export default GlobalLayout;
