import type { FeaturesProps, FooterProps, HeroProps } from '@lobehub/ui';
import type { IThemeConfig, SocialTypes } from 'dumi/dist/client/theme-api/types';
import { FooterColumn } from 'rc-footer/es/column';

import type { SiteCustomToken } from '@/styles/customToken';

import type { HeroConfig } from './hero';

export interface ApiHeaderConfig {
  docUrl?: string | false;
  match?: string[];
  pkg?: string;
  sourceUrl?: string | false;
  type?: 'component' | 'doc';
}

export interface FooterConfig {
  bottom?: FooterProps['bottom'];
  columns?: FooterProps['columns'];
  moreProducts?: FooterColumn;
  resources?: FooterColumn;
}

export interface SiteThemeConfig {
  actions?: HeroProps['actions'];
  apiHeader?: ApiHeaderConfig | false;
  description?: string;
  docStyle?: 'block' | 'pure';
  features?: FeaturesProps['items'];
  footer?: string | false;
  footerConfig?: FooterConfig;
  giscus?: {
    category: string;
    categoryId: string;
    repo: `${string}/${string}`;
    repoId: string;
  };
  hero?: HeroConfig | Record<string, HeroConfig>;
  hideHomeNav?: boolean;
  // logo?: string;
  // logoType?: LogoProps['type'];
  name?: string;
  siteToken?: SiteConfigToken;
  socialLinks?: {
    [key in SocialTypes | 'discord']?: string;
  };
  title?: string;
}

export interface AllSiteThemeConfig extends SiteThemeConfig, Omit<IThemeConfig, 'socialLinks'> {}

export type SiteConfigToken = Partial<
  Pick<
    SiteCustomToken,
    'headerHeight' | 'footerHeight' | 'sidebarWidth' | 'tocWidth' | 'contentMaxWidth'
  >
>;
