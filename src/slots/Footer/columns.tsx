import { Icon } from '@lobehub/ui';
import { Link } from 'dumi';
import { Bug, FileClock, GitFork, Github } from 'lucide-react';
import { FooterColumn, FooterColumnItem } from 'rc-footer/es/column';

interface GetColumnParameters {
  github?: string;
}
export const getColumns = ({ github }: GetColumnParameters) => {
  const resources: FooterColumn = {
    items: [
      {
        description: 'AIGC UI Components',
        openExternal: true,
        title: 'Yunti UI',
        url: 'https://github.com/yuntijs/yunti-ui',
      },
      {
        description: 'Awesome lint configs',
        openExternal: true,
        title: 'Yunti Lint',
        url: 'https://github.com/yuntijs/yunti-lint',
      },
      {
        description: 'Yunti Dumi Theme',
        openExternal: true,
        title: 'Designed for Dumi 2',
        url: 'https://github.com/yuntijs/dumit-theme-yunti',
      },
    ],
    title: 'Resources',
  };
  const community: FooterColumn = {
    items: [
      github && {
        icon: <Icon icon={Bug} size="small" />,
        openExternal: true,
        title: 'Report Bug',
        url: `${github}/issues/new/choose`,
      },
      github && {
        icon: <Icon icon={GitFork} size="small" />,
        openExternal: true,
        title: 'Request Feature',
        url: `${github}/issues/new/choose`,
      },
    ].filter(Boolean) as FooterColumnItem[],
    title: 'Community',
  };

  const help: FooterColumn = {
    items: [
      github && {
        icon: <Icon icon={Github} size="small" />,
        openExternal: true,
        title: 'GitHub',
        url: github,
      },
      {
        LinkComponent: Link,
        icon: <Icon icon={FileClock} size="small" />,
        title: 'Changelog',
        url: '/changelog',
      },
    ].filter(Boolean) as FooterColumnItem[],
    title: 'Help',
  };

  const more: FooterColumn = {
    items: [
      {
        description: 'Framework for k8s',
        openExternal: true,
        title: 'Kubebb',
        url: 'https://github.com/kubebb',
      },
      {
        description: 'One-stop LLMOps platform',
        openExternal: true,
        title: 'KubeAGI',
        url: 'https://github.com/kubeagi',
      },
      {
        description: 'AI agent creation and distribution platform',
        openExternal: true,
        title: 'Botnow',
        url: 'https://botnow.cn',
      },
      {
        description: 'AI Smart Assistant',
        openExternal: true,
        title: '灵小悟',
        url: 'https://lingwu.cn',
      },
    ],
    title: 'More Products',
  };

  return [resources, community, help, more];
};
