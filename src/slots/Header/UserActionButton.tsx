import { Icon } from '@lobehub/ui';
import { Avatar, Button, Dropdown } from 'antd';
import { createStyles } from 'antd-style';
import { useIntl } from 'dumi';
import { LogOut, User2 } from 'lucide-react';
import React, { memo, useCallback, useEffect, useState } from 'react';

import { headerSel, useSiteStore } from '@/store';

export const useStyles = createStyles(({ css }) => {
  return {
    avatar: css`
      cursor: pointer;
    `,
    menu: css`
      width: 180px;
    `,
  };
});

const LOGIN_USER_KEY = '__LOGIN_USER';

export const HeaderUserActionButton: React.FC = memo(() => {
  const { styles } = useStyles();
  const headerConfig = useSiteStore(headerSel);
  const loginUser = useSiteStore(s => s.loginUser);
  const intl = useIntl();
  const [userInfo, setUserInfo] = useState(loginUser);
  useEffect(() => {
    const loginUserStr = window.localStorage.getItem(LOGIN_USER_KEY);
    if (loginUserStr) {
      try {
        const loginUser = JSON.parse(loginUserStr);
        setUserInfo(loginUser);
        useSiteStore.setState({ loginUser });
      } catch (error) {
        console.warn(`parse login user info from ${LOGIN_USER_KEY} failed`, error);
      }
    }
  }, []);

  const clearLoginUser = useCallback(() => {
    window.localStorage.removeItem(LOGIN_USER_KEY);
  }, []);

  if (!headerConfig?.userActionButton?.button) {
    return;
  }
  if (userInfo?.user) {
    return (
      <Dropdown
        menu={{
          className: styles.menu,
          items: headerConfig.userActionButton.menuItems || [
            {
              icon: <Icon icon={User2} />,
              label: <a href="https://console.botnow.cn/oidc/management/account">账户中心</a>,
              key: 'account',
            },
            { type: 'divider' },
            {
              icon: <Icon icon={LogOut} />,
              label: (
                <a href="https://console.botnow.cn/oidc/logout" onClick={clearLoginUser}>
                  退出登录
                </a>
              ),
              key: 'logout',
            },
          ],
        }}
      >
        <Avatar className={styles.avatar} size="small" src={userInfo.avatar}>
          {userInfo.user.charAt(0).toUpperCase()}
        </Avatar>
      </Dropdown>
    );
  }
  return (
    <Button {...headerConfig.userActionButton.button}>
      {intl.formatMessage({ id: 'header.actions.user' })}
    </Button>
  );
});
