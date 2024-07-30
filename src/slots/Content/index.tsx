import { Typography } from '@lobehub/ui';
import { useResponsive } from 'antd-style';
import isEqual from 'fast-deep-equal';
import { memo, useEffect } from 'react';
import { Flexbox } from 'react-layout-kit';

import ContentFooter from '@/slots/ContentFooter';
import { themeConfig, useSiteStore } from '@/store';
import { DivProps } from '@/types';

import { useStyles } from './style';

const Content = memo<DivProps>(({ children, ...props }) => {
  const loading = useSiteStore(s => s.siteData.loading);
  const { docStyle } = useSiteStore(themeConfig, isEqual);
  const { styles, cx } = useStyles(docStyle === 'pure');
  const { mobile } = useResponsive();

  useEffect(() => {
    document.body.scrollTo(0, 0);
  }, [loading]);

  return (
    <Flexbox gap={mobile ? 0 : 24} width={'100%'} {...props}>
      <div className={cx('dumi-antd-style-content', styles.content)}>
        <Typography>{children}</Typography>
      </div>
      <ContentFooter />
    </Flexbox>
  );
});

export default Content;
