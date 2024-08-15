import { Avatar } from '@lobehub/ui';
import { Space } from 'antd';
import { Link } from 'dumi';
import isEqual from 'fast-deep-equal';
import { memo } from 'react';

import { useResponsive } from '@/hooks/useResponsive';
import { themeConfig } from '@/store/selectors/siteBasicInfo';
import { useSiteStore } from '@/store/useSiteStore';

import { useStyles } from './style';

const Logo = memo(() => {
  const config = useSiteStore(themeConfig, isEqual);
  const locale = useSiteStore(s => s.locale, isEqual);
  const { mobile } = useResponsive();
  const { styles, cx } = useStyles({ mobile });

  return (
    config && (
      <Link className={cx(styles)} to={'base' in locale ? locale.base : '/'}>
        <Space>
          <Avatar
            avatar={config.logo || 'https://avatars.githubusercontent.com/u/148947838'}
            size={mobile ? 32 : 36}
          />
          {config.name}
        </Space>
      </Link>
    )
  );
});

export default Logo;
