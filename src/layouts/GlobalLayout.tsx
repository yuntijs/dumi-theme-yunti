import {
  StyleProvider,
  createCache,
  extractStyle,
  legacyNotSelectorLinter,
  logicalPropertiesLinter,
  parentSelectorLinter,
} from '@ant-design/cssinjs';
import { Outlet, useServerInsertedHTML } from 'dumi';
import type { FC } from 'react';
import React from 'react';

import { useAdditionalThemeConfig } from '../hooks/useAdditionalThemeConfig';

const GlobalLayout: FC = () => {
  const { ssr } = useAdditionalThemeConfig();
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

  const BaseGlobalLayoutJSX = (
    <>
      <Outlet />
    </>
  );

  const SSRGlobalLayoutJSX = (
    <StyleProvider
      cache={styleCache}
      linters={[logicalPropertiesLinter, legacyNotSelectorLinter, parentSelectorLinter]}
    >
      {BaseGlobalLayoutJSX}
    </StyleProvider>
  );
  if (ssr) {
    (global as any).styleCache = styleCache;
    return SSRGlobalLayoutJSX;
  }
  return BaseGlobalLayoutJSX;
};

export default GlobalLayout;
