import { devtools } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';

import { isBrowser } from '@/utils';

import { type SiteStore, initialState, useInitialState } from './initialState';

const browserStore = createWithEqualityFn<SiteStore>()(
  devtools(() => initialState, { name: 'dumi-theme-yunti' })
);

export const useSiteStore = (
  isBrowser
    ? browserStore
    : <U>(selector: (state: SiteStore) => U, equalityFn?: (a: U, b: U) => boolean): U => {
        const SSRState = useInitialState();
        const useStore = createWithEqualityFn<SiteStore>()(
          devtools(() => SSRState, { name: 'dumi-theme-yunti' })
        );

        Object.assign(useSiteStore, useStore);

        return useStore(selector, equalityFn);
      }
) as typeof browserStore;

export * from './initialState';
