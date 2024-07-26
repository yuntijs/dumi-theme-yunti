import { ConfigProvider, Menu, theme as antTheme } from 'antd';
import React from 'react';

import { useMenu } from '../../hooks/useMenu';
import { useStyles } from './style';

const Sidebar: React.FC = () => {
  const { styles } = useStyles();
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
