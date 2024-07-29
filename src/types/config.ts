import type { FeaturesProps, FooterProps, HeroProps } from '@lobehub/ui';
import type { IThemeConfig, SocialTypes } from 'dumi/dist/client/theme-api/types';
import { FooterColumn } from 'rc-footer/es/column';

import type { SiteCustomToken } from '@/styles/customToken';

import type { HeroConfig } from './hero';

export type SidebarGroupModePathItem = string;

// 分组类型，将 children 换位字符串数组
export type SidebarEnhanceItemType = {
  title: string;
  link: string;
  target?: string;
};

export type SidebarEnhanceChildrenType = string | SidebarEnhanceItemType;
export type SidebarEnhanceSubType = {
  children: SidebarEnhanceChildrenType[];
  title: string;
};

// 增强模式的 sidebar 相关类型
export type SidebarEnhanceGroupChildren = (SidebarEnhanceSubType | SidebarEnhanceChildrenType)[];
export type SidebarEnhanceGroupType = {
  type: 'group';
  title: string;
  children: SidebarEnhanceGroupChildren;
};
export type SidebarEnhanceType =
  | SidebarEnhanceSubType
  | SidebarEnhanceGroupType
  | SidebarEnhanceChildrenType;
export type SidebarEnhanceItems = SidebarEnhanceType[];

export interface SidebarOrderItem {
  order?: number;
}

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
  /** sidebar group 模式路由 */
  sidebarGroupModePath?: true | SidebarGroupModePathItem[];
}

export interface AllSiteThemeConfig extends SiteThemeConfig, Omit<IThemeConfig, 'socialLinks'> {}

export type SiteConfigToken = Partial<
  Pick<
    SiteCustomToken,
    'headerHeight' | 'footerHeight' | 'sidebarWidth' | 'tocWidth' | 'contentMaxWidth'
  >
>;