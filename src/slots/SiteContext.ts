import type { ThemeMode } from 'antd-style';
import type { DirectionType } from 'antd/lib/config-provider';
import { createContext } from 'react';

export interface SiteContextProps {
  direction: DirectionType;
  isMobile: boolean;
  theme: ThemeMode[];
  updateSiteConfig: (props: Partial<SiteContextProps>) => void;
}

const SiteContext = createContext<SiteContextProps>({
  direction: 'ltr',
  isMobile: false,
  theme: ['dark'],
  updateSiteConfig: () => {},
});

export default SiteContext;
