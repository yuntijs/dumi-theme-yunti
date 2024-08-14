import type { FeaturesProps, FooterProps, HeroProps } from '@lobehub/ui';
import { ButtonProps, MenuProps } from 'antd';
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

export interface CustomPageConfigItem {
  /** 页面路径 */
  path: string;
  /** 页面标题 */
  title?: string;
  /** 页面描述，该值会用于生成 <meta> 标签 */
  description?: string;
  /** 页面关键词，该值会用于生成 <meta> 标签 */
  keywords?: string[];
  /** 是否展示头部 */
  header?: boolean;
  /** 是否展示侧边栏 */
  sider?: boolean;
  /** 是否展示页脚 */
  footer?: boolean;
}

export interface SiteThemeConfig {
  actions?: HeroProps['actions'];
  apiHeader?: ApiHeaderConfig | false;
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
  header?: {
    /** 用户信息，默认会从 __LOGIN_USER 本地存储中获取 user 和 avatar，不存在的话展示 登录按钮  */
    userActionButton?: {
      button?: Omit<ButtonProps, 'children'>;
      menuItems?: MenuProps['items'];
    };
  };
  title?: string;
  /** 默认描述，未设置描述的页面，该值会用于生成 <meta> 标签 */
  description?: string;
  /** 默认关键词，未设置关键词的页面，该值会用于生成 <meta> 标签 */
  keywords?: string[];
  /** sidebar group 模式路由 */
  sidebarGroupModePath?: true | SidebarGroupModePathItem[];
  /** 自定义页面，可以通过配置去掉页面的头部、侧边栏和页脚 */
  customPages?: CustomPageConfigItem[];
}

export interface AllSiteThemeConfig extends SiteThemeConfig, Omit<IThemeConfig, 'socialLinks'> {}

export type SiteConfigToken = Partial<
  Pick<
    SiteCustomToken,
    'headerHeight' | 'footerHeight' | 'sidebarWidth' | 'tocWidth' | 'contentMaxWidth'
  >
>;
