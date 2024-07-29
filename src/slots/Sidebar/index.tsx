import { ConfigProvider, Menu, theme as antTheme } from 'antd';
import { useLocation } from 'dumi';
import React, { useMemo } from 'react';

import { useAdditionalThemeConfig } from '@/hooks/useAdditionalThemeConfig';

import { useMenu } from '../../hooks/useMenu';
import { useStyles } from './style';

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  const { sidebarGroupModePath } = useAdditionalThemeConfig();
  const isSideBarGroupMode = useMemo(
    () =>
      sidebarGroupModePath === true
        ? true
        : (sidebarGroupModePath ?? []).some(rule => {
            return pathname.startsWith(rule);
          }),
    [pathname, sidebarGroupModePath]
  );
  const { styles } = useStyles({ isSideBarGroupMode });
  const { token } = antTheme.useToken();
  const [menuItems, selectedKey, openKeys] = useMenu();

  const menuChild = (
    <ConfigProvider
      theme={{
        components: { Menu: { itemBg: token.colorBgLayout, darkItemBg: token.colorBgLayout } },
      }}
    >
      <Menu
        className={styles.asideContainer}
        defaultOpenKeys={openKeys}
        inlineIndent={30}
        items={menuItems}
        key={openKeys?.[0]}
        mode="inline"
        selectedKeys={[selectedKey]}
      />
    </ConfigProvider>
  );

  return (
    <div className={styles.mainMenu}>
      <section className="main-menu-inner">{menuChild}</section>
    </div>
  );
};

export default Sidebar;
