import type { ISidebarGroup } from 'dumi/dist/client/theme-api/types';

export const isBrowser = typeof window !== 'undefined';

// 删除标题中的 HTML 标签
export const removeTitleCode = (title = '') => {
  return title.replace(/<\w+>.*<\/\w+>/g, '');
};

export const handleFullSidebarData = (
  fullSidebarData: Record<string, ISidebarGroup[]>
): Record<string, ISidebarGroup[]> => {
  const nextFullSidebarData: Record<string, ISidebarGroup[]> = {};
  for (const [key, value] of Object.entries(fullSidebarData)) {
    const existedLevelOneNavList = Object.keys(nextFullSidebarData);
    if (key.split('/').length === 3) {
      // 二级目录
      const levelOneNavKey = `/${key.split('/')[1]}`;
      let _levelTwoNav = value[0]?.children?.find(item => {
        const _frontmatterInfo = item.frontmatter?.nav;
        return typeof _frontmatterInfo === 'object' && typeof _frontmatterInfo?.second === 'object';
      });
      // 如果是 second 配置不为对象，直接获取其值即可
      if (!_levelTwoNav) {
        _levelTwoNav = value[0]?.children[0];
      }
      // 找找二级菜单名称以及顺序
      const _levelTwoNavInfo = _levelTwoNav?.frontmatter?.nav;
      const frontmatterNavSecond: { order: number; title?: string } = {
        order: 0,
        title: undefined,
      };
      if (typeof _levelTwoNavInfo !== 'string') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        frontmatterNavSecond.order = _levelTwoNavInfo?.second?.order ?? 0;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        frontmatterNavSecond.title = _levelTwoNavInfo?.second?.title ?? _levelTwoNavInfo?.second;
      }

      if (existedLevelOneNavList.includes(levelOneNavKey)) {
        // 已存在，直接 push 为 children
        nextFullSidebarData[levelOneNavKey].push({
          title: frontmatterNavSecond.title,
          order: frontmatterNavSecond.order,
          children: value[0]?.children,
        });
      } else {
        nextFullSidebarData[levelOneNavKey] = value.map(item => ({
          ...item,
          title: frontmatterNavSecond.title,
          order: frontmatterNavSecond.order,
        }));
      }
    } else if (existedLevelOneNavList.includes(key)) {
      nextFullSidebarData[key] = [...nextFullSidebarData[key], ...value];
    } else {
      nextFullSidebarData[key] = value;
    }
  }
  return nextFullSidebarData;
};

export const isExternalLinks = (link?: string): boolean => {
  return /^(\w+:)\/\/|^(mailto|tel):/.test(link ?? '');
};
