import { TabsNav } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { Link, history, useLocation } from 'dumi';
import NavbarExtra from 'dumi/theme-default/slots/NavbarExtra';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';

import { useSiteStore } from '@/store';
import { isExternalLinks } from '@/utils';

const useStyles = createStyles(({ css, stylish, token, responsive, prefixCls }) => {
  return {
    link: css`
      ${stylish.resetLinkColor}
      padding: 6px 0;
    `,
    tabs: css`
      .${prefixCls}-tabs-tab-active a {
        color: ${token.colorText} !important;
      }
      ${responsive.mobile} {
        display: none;
      }
    `,
  };
});
const Navbar = memo(() => {
  const { styles } = useStyles();
  const { pathname } = useLocation();

  const nav = useSiteStore(s => s.navData, shallow);
  const activeMenuItem = pathname.split('/').slice(0, 2).join('/');

  return (
    <>
      <TabsNav
        // activeKey={activePath}
        activeKey={activeMenuItem}
        className={styles.tabs}
        items={nav.map(item => {
          const linkKeyValue =
            item.activePath || (item.link ?? '').split('/').slice(0, 2).join('/');
          return {
            key: isExternalLinks(item.link) ? item.link! : linkKeyValue,
            label: isExternalLinks(item.link) ? (
              <a className={styles.link} href={String(item.link)} rel="noreferrer" target="_blank">
                {item.title}
              </a>
            ) : (
              <Link className={styles.link} to={String(item.link)}>
                {item.title}
              </Link>
            ),
          };
        })}
        onChange={path => {
          const url = nav.find(index => index.activePath === path || index.link === path)?.link;

          if (!url) return;

          history.push(url);
        }}
      />
      <NavbarExtra />
    </>
  );
});

export default Navbar;
