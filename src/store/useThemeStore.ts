import type { ThemeMode } from 'antd-style';
import { persist } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';

export interface ThemeStore {
  themeMode: ThemeMode;
}
export const useThemeStore = createWithEqualityFn<ThemeStore>()(
  persist(
    () => ({
      themeMode: 'light' as ThemeMode,
    }),
    { name: 'ANTD_STYLE_DOC_STORE' }
  )
);
