import { type HeroAction } from '@lobehub/ui/awesome';
import { type FeatureItemProps } from '@lobehub/ui/es/awesome/Features';

export type ImageContainerType = 'light' | 'primary' | 'soon';

export interface HeroConfig {
  actions: HeroAction[];
  description?: string;
  features?: FeatureItemProps[];
  title?: string;
}
