import { Footer as Foot, FooterProps } from '@lobehub/ui';
import { Divider } from 'antd';
import isEqual from 'fast-deep-equal';
import { memo } from 'react';
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
  const { styles, theme } = useStyles({ mobile });

  if (!footer) return;

  const columns = footerConfig?.columns
    ? footerConfig?.columns
    : getColumns({ github: githubUrl || (pkg as any).homepage });

  if (footerConfig?.resources) columns[0] = footerConfig?.resources;
  if (footerConfig?.moreProducts) columns[3] = footerConfig?.moreProducts;

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
