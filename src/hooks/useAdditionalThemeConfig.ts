// 获取 dumi-theme-antd 额外的配置
import { useSiteData } from 'dumi';

import type { AllSiteThemeConfig } from '../types';

interface IuseAdditionalThemeConfig {
  (): AllSiteThemeConfig;
}

export const useAdditionalThemeConfig: IuseAdditionalThemeConfig = () => {
  const { themeConfig } = useSiteData();
  const additionalThemeConfig = themeConfig;

  return additionalThemeConfig;
};
