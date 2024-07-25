import {
  useIntl,
  useLocale,
  useLocation,
  useNavData,
  useRouteMeta,
  useSidebarData,
  useSiteData,
  useTabMeta,
} from 'dumi';
import { AtomAsset } from 'dumi-assets-types';
import {
  ILocale,
  ILocalesConfig,
  INavItem,
  IPreviewerProps,
  IRouteMeta,
  ISidebarGroup,
} from 'dumi/dist/client/theme-api/types';
import { PICKED_PKG_FIELDS } from 'dumi/dist/constants';
import type { Location } from 'history';
import { ComponentType, useMemo } from 'react';

import { AllSiteThemeConfig } from '@/types';

export type NavData = (INavItem & { children?: INavItem[] | undefined })[];

export interface ISiteData {
  components: Record<string, AtomAsset>;
  demos: Record<
    string,
    {
      asset: IPreviewerProps['asset'];
      component: ComponentType;
      routeId: string;
    }
  >;
  entryExports: Record<string, any>;

  loading: boolean;
  locales: ILocalesConfig;
  pkg: Partial<Record<keyof typeof PICKED_PKG_FIELDS, any>>;
  setLoading: (status: boolean) => void;
  themeConfig: AllSiteThemeConfig;
}

export interface SiteStore {
  locale: ILocale;
  location: Location;
  navData: NavData;
  routeMeta: IRouteMeta;
  sidebar?: ISidebarGroup[];
  siteData: ISiteData;
  tabMeta?: NonNullable<IRouteMeta['tabs']>[0]['meta'];
}

export const initialState: SiteStore = {
  locale: { id: 'zh-CN', name: '中文', suffix: '' },
  location: {
    hash: '',
    key: '',
    pathname: '',
    search: '',
    state: '',
  },
  navData: [],

  routeMeta: {
    // @ts-ignore
    frontmatter: {},

    tabs: undefined,

    texts: [],

    toc: [],
  },

  sidebar: [],

  siteData: {
    components: {},

    demos: {},

    entryExports: {},

    loading: true,

    locales: [],

    pkg: {},
    // @ts-ignore
    setLoading: undefined,
    // @ts-ignore
    themeConfig: {},
  },
};

export const useInitialState = (): SiteStore => {
  const { themeConfig }: any = useSiteData();
  const navData = useNavData();
  const sidebar = useSidebarData();
  const routeMeta = useRouteMeta();
  const tabMeta = useTabMeta();
  const location = useLocation();
  const locale = useLocale();
  const intl = useIntl();
  const homeNav = useMemo(
    () => ({
      activePath: '/',
      link: '/',
      title: intl.formatMessage({ id: 'header.nav.home' }),
    }),
    [intl]
  );
  const newNavdata = themeConfig.hideHomeNav ? navData : [homeNav, ...navData];
  // console.log('themeConfig', themeConfig);

  return {
    ...initialState,
    locale: locale || initialState.locale,
    location: location || initialState.location,
    navData: newNavdata || initialState.navData,
    routeMeta: routeMeta || initialState.routeMeta,
    sidebar: sidebar || initialState.sidebar,
    siteData: {
      ...initialState.siteData,
      themeConfig,
    },
    tabMeta: tabMeta || initialState.tabMeta,
  };
};
