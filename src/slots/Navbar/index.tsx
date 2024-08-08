import { Icon, TabsNav } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { Link, history, useLocation } from 'dumi';
import NavbarExtra from 'dumi/theme-default/slots/NavbarExtra';
import { ExternalLink } from 'lucide-react';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';

import { useSiteStore } from '@/store';
import { isExternalLinks } from '@/utils';

const useStyles = createStyles(({ css, stylish, token, responsive, prefixCls }) => {
  return {
    link: css`
      ${stylish.resetLinkColor}
      display: inline-flex;
      align-items: center;

      & > .lint-text {
        ${stylish.resetLinkColor}
      }

      & > .anticon {
        margin-left: ${token.marginXS}px;
        font-size: ${token.fontSizeSM}px;
        color: ${token.colorTextTertiary};
      }
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

const linkToKey = (path?: string) => (path ?? '').split('/').slice(0, 2).join('/');

const Navbar = memo(() => {
  const { styles } = useStyles();
  const { pathname } = useLocation();

  const nav = useSiteStore(s => s.navData, shallow);
  const activeMenuItem = pathname.split('/').slice(0, 2).join('/');

  return (
    <>
      <TabsNav
        activeKey={activeMenuItem}
        className={styles.tabs}
        items={nav.map(item => {
          const linkKeyValue = item.activePath || linkToKey(item.link);
          return {
            key: isExternalLinks(item.link) ? item.link! : linkKeyValue,
            label: isExternalLinks(item.link) ? (
              <a
                className={styles.link}
                href={String(item.link)}
                onClick={e => e.preventDefault()}
                rel="noreferrer"
                target={item.target || '_blank'}
              >
                <span className="lint-text">{item.title}</span> <Icon icon={ExternalLink} />
              </a>
            ) : (
              <Link
                className={styles.link}
                onClick={e => e.preventDefault()}
                target={item.target}
                to={String(item.link)}
              >
                {item.title}
              </Link>
            ),
          };
        })}
        onTabClick={activeKey => {
          const targetNav = nav.find(
            index =>
              index.activePath === activeKey ||
              index.link === activeKey ||
              linkToKey(index.link) === activeKey
          );

          if (!targetNav?.link) return;

          if (isExternalLinks(targetNav.link) || targetNav.target === '_blank') {
            return window.open(targetNav.link);
          }

          history.push(targetNav.link);
        }}
      />
      <NavbarExtra />
    </>
  );
});

export default Navbar;
