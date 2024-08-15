import { useResponsive as baseUseResponsive } from 'antd-style';

import { isBrowser } from '@/utils';

export const useResponsive = () => {
  const responsive = baseUseResponsive();

  if (!isBrowser) {
    if (process.env.MOBILE) {
      responsive.mobile = process.env.MOBILE === 'true';
    }
    if (process.env.DESKTOP) {
      responsive.desktop = process.env.DESKTOP === 'true';
    }
  }

  return responsive;
};
