import { Footer as Foot, FooterProps } from '@lobehub/ui';
import { Divider } from 'antd';
import isEqual from 'fast-deep-equal';
import { memo, useMemo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';
import { shallow } from 'zustand/shallow';

import { useResponsive } from '@/hooks/useResponsive';
import { githubSel, useSiteStore } from '@/store';

import { getColumns } from './columns';
import { useStyles } from './style';

const Footer = memo(() => {
  const { themeConfig, pkg } = useSiteStore(s => s.siteData, isEqual);
  const { footerConfig, footer } = themeConfig;
  const githubUrl = useSiteStore(githubSel, shallow);
  const { mobile } = useResponsive();
  const { styles, theme } = useStyles();

  const columns = useMemo(() => {
    const cs = footerConfig?.columns
      ? footerConfig?.columns
      : getColumns({ github: githubUrl || (pkg as any).homepage });
    if (footerConfig?.resources) cs[0] = footerConfig?.resources;
    if (footerConfig?.moreProducts) cs[3] = footerConfig?.moreProducts;

    return cs.filter(c => c.items && c.items.length > 0);
  }, [footerConfig?.columns, footerConfig?.moreProducts, footerConfig?.resources, githubUrl, pkg]);

  if (!footer) return;
  const bottomFooter = footerConfig?.bottom || footer;

  return (
    <Foot
      bottom={
        mobile ? (
          <Center className={styles.container}>
            Copyright © {new Date().getFullYear()}
            <Flexbox
              align={'center'}
              dangerouslySetInnerHTML={{ __html: bottomFooter }}
              horizontal
            ></Flexbox>
          </Center>
        ) : (
          <Center horizontal>
            Copyright © {new Date().getFullYear()} <Divider type={'vertical'} />
            <span dangerouslySetInnerHTML={{ __html: bottomFooter }} />
          </Center>
        )
      }
      columns={columns}
      contentMaxWidth={theme.contentMaxWidth}
      theme={theme.appearance as FooterProps['theme']}
    />
  );
});

export default Footer;
