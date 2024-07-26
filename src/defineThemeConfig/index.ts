import type { AllSiteThemeConfig } from '../types';

/**
 * @description provider declaration of config files
 * @param {ThemeConfig} config theme config
 * @returns {ThemeConfig}
 */
export function defineThemeConfig(
  config: Partial<AllSiteThemeConfig>
): Partial<AllSiteThemeConfig> {
  return config;
}
