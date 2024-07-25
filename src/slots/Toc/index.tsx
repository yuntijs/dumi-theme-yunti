import { Toc as T } from '@lobehub/ui';
import { useResponsive, useTheme } from 'antd-style';
import { useLocation } from 'dumi';
import isEqual from 'fast-deep-equal';
import { memo, useEffect, useState } from 'react';

import { tocAnchorItemSel, useSiteStore } from '@/store';

const GAP = 48;

const Toc = memo(() => {
  const items = useSiteStore(tocAnchorItemSel, isEqual);
  const { mobile } = useResponsive();
  const theme = useTheme();
  const [spacing, setSpacing] = useState<number>(GAP);
  const location = useLocation();

  useEffect(() => {
    const ApiTitle = document.querySelector('#api-header');
    if (ApiTitle) setSpacing(ApiTitle.clientHeight + GAP);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.hash, location.search, items]);

  if (items?.length < 1) return;

  return (
    <>
      {!mobile && <div style={{ height: spacing }} />}
      <T
        getContainer={() => document.body}
        headerHeight={theme.headerHeight}
        isMobile={mobile}
        items={items}
        tocWidth={theme.tocWidth}
      />
    </>
  );
});

export default Toc;
