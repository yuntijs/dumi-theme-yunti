import { type FeatureItem } from '@lobehub/ui';

import { CustomPageConfigItem } from '@/types';

import { SiteStore } from '../useSiteStore';

export const isHeroPageSel = (s: SiteStore) => Boolean(s.routeMeta.frontmatter.hero);

const localeValueSel = (s: SiteStore, value: any) => {
  if (!value) return;

  if (value[s.locale.id]) return value[s.locale.id];

  return value;
};

export const heroTitleSel = (s: SiteStore) =>
  s.routeMeta.frontmatter.hero?.title ||
  localeValueSel(s, s.siteData.themeConfig.hero)?.title ||
  localeValueSel(s, s.siteData.themeConfig.title) ||
  s.siteData.themeConfig.name;

export const heroDescSel = (s: SiteStore) =>
  s.routeMeta.frontmatter.hero?.description ||
  localeValueSel(s, s.siteData.themeConfig.hero)?.description ||
  localeValueSel(s, s.siteData.themeConfig.description);

export const heroActionsSel = (s: SiteStore) =>
  s.routeMeta.frontmatter.hero?.actions ||
  localeValueSel(s, s.siteData.themeConfig.hero)?.actions ||
  localeValueSel(s, s.siteData.themeConfig.actions);

export const featuresSel = (s: SiteStore): FeatureItem[] => {
  if (!isHeroPageSel(s)) return [];

  return (
    localeValueSel(s, s.siteData.themeConfig.hero)?.features ||
    localeValueSel(s, s.siteData.themeConfig.features) ||
    s.routeMeta.frontmatter.features ||
    []
  );
};

export const customConfigSel = (s: SiteStore): CustomPageConfigItem | undefined => {
  const customePages = s.siteData.themeConfig.customPages;
  if (!customePages || customePages.length === 0) {
    return;
  }

  return customePages.find(c => c.path === s.location.pathname);
};
