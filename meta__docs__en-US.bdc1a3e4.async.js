"use strict";(self.webpackChunkdumi_theme_yunti_example=self.webpackChunkdumi_theme_yunti_example||[]).push([[7430],{7654:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(92379),n=e(86638),d={}},45775:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(92379),n=e(74547),d={}},24239:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(92379),n=e(6092),d={}},53596:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(92379),n=e(41291),d={}},58573:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(92379),n=e(33643),d={}},31048:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(92379),n=e(47061),d={}},76139:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(92379),n=e(27992),d={}},56986:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(92379),n=e(78100),d={}},21410:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(92379),n=e(63298),d={}},43826:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(92379),n=e(34571),d={}},10454:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(92379),n=e(92537),d={}},25667:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(92379),n=e(748),d={}},94101:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(92379),n=e(31665),d={}},95128:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(86638);const n=[{value:"Here are some dumi-theme-antd common questions and official answers for your reference.",paraId:0},{value:"0.3.0+",paraId:1},{value:"The home page of ",paraId:2,tocIndex:0},{value:"dumi-theme-antd",paraId:2,tocIndex:0},{value:" is generated according to the configuration by default, and there will inevitably be some custom modules in the actual use process. ",paraId:2,tocIndex:0},{value:"dumi-theme-antd",paraId:2,tocIndex:0},{value:" internally separates the home page module into a built-in component of ",paraId:2,tocIndex:0},{value:"HomeBaseLayout",paraId:2,tocIndex:0},{value:", if you want While fully customizing the homepage and wanting to retain the layout of the built-in homepage, it can be introduced and used in the page. For example, to create a new page:",paraId:2,tocIndex:0},{value:`<!-- .dumi/pages/index.md -->

<HomeBaseLayout></HomeBaseLayout>
....some text or images
<YourCustomComponent></YourCustomComponent>
`,paraId:3,tocIndex:0},{value:"Or import it as a React component:",paraId:4,tocIndex:0},{value:`/*.dumi/pages/index.tsx */
import { HomeBaseLayout } from 'dumi-theme-antd';

const CustomHomePage = () => {
  return (
    <div>
      <HomeBaseLayout />
      <div>other content</div>
    </div>
  );
};

export default CustomHomePage;
`,paraId:5,tocIndex:0},{value:"0.3.3+",paraId:6,tocIndex:0},{value:"The theme package has been adapted to the conventional secondary navigation function provided by dumi, which is convenient for organizing documents. For the specific directory structure and FrontMatter configuration, please refer to the official website ",paraId:7,tocIndex:1},{value:"Conventional secondary navigation",paraId:7,tocIndex:1},{value:"\u3002",paraId:7,tocIndex:1},{value:"The theme switching logic inside the theme package is compatible with dumi\u2019s built-in ",paraId:8,tocIndex:2},{value:"usePrefersColor",paraId:8,tocIndex:2},{value:" API, so you can use the ",paraId:8,tocIndex:2},{value:"@dark-selector",paraId:8,tocIndex:2},{value:" global variable in the Less file to add a dark mode style to the components of the theme package:",paraId:8,tocIndex:2},{value:`.some-container {
  // Bright color mode is white
  color: #fff;

  // dark mode is black
  @{dark-selector} & {
    color: #000;
  }
}
`,paraId:9,tocIndex:2},{value:"If it is a pure css file, you can use ",paraId:10,tocIndex:2},{value:"prefers-color-scheme",paraId:10,tocIndex:2},{value:" to achieve.",paraId:10,tocIndex:2},{value:"0.3.9+",paraId:11,tocIndex:2},{value:"The theme package supports ssr, and the cssinjs' style was not completely compatible before the ` 0.3.9' version, but the problem has been fixed in later versions. SSR recommends the following configuration:",paraId:12,tocIndex:3},{value:`export default defineConfig({
  ssr: process.env.NODE_ENV === 'development' ? false : {},
});
`,paraId:13,tocIndex:3},{value:"When configured as SSR, if the homepage uses the built-in homepage module of the theme package, a 404 routing page will appear briefly when it is loaded for the first time. The reason is that the built-in homepage did not export ",paraId:14},{value:"index.html",paraId:14},{value:". is not immediately loaded into the corresponding resource. The solution is to create a custom homepage, then import the built-in ",paraId:14},{value:"<HomeBaseLayout />",paraId:14},{value:" module of the theme package, and then package and export",paraId:14},{value:"index.html",paraId:14},{value:", you can refer to [dumi-theme-antd official website homepage](https:// github.com/KuangPF/dumi-theme-antd/blob/main/example/.dumi/pages/index/index.tsx).",paraId:14},{value:"index.html",paraId:15},{value:"After using ",paraId:16,tocIndex:4},{value:"dumi-theme-antd",paraId:16,tocIndex:4},{value:" theme package, the homepage is generated through configuration, and ",paraId:16,tocIndex:4},{value:"index.md",paraId:16,tocIndex:4},{value:" is not written, so ",paraId:16,tocIndex:4},{value:"index.html",paraId:16,tocIndex:4},{value:" will not be generated. If you want to generate ",paraId:16,tocIndex:4},{value:"index.html",paraId:16,tocIndex:4},{value:", you can add ",paraId:16,tocIndex:4},{value:"index.md",paraId:16,tocIndex:4},{value:" or completely customize the home page, and then import the built-in ",paraId:16,tocIndex:4},{value:"HomeBaseLayout",paraId:16,tocIndex:4},{value:" component.",paraId:16,tocIndex:4},{value:"When deploying GitHub Pages, it will search for the ",paraId:17},{value:"index.html",paraId:17},{value:" file step by step by default. If you use nginx deployment, you can configure ",paraId:17},{value:"try_files",paraId:17},{value:" related parameters. When ",paraId:17},{value:"index.html",paraId:17},{value:" cannot be found in the root directory, it will go to other directories to find",paraId:17},{value:" index.html",paraId:17},{value:".",paraId:17}]},5634:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(74547);const n=[{value:"dumi-theme-antd",paraId:0},{value:" In order to better adapt to the theme style of the antd v5 official website, some unique fields have been added and placed in the ",paraId:0},{value:"themeConfig",paraId:0},{value:" field of the ",paraId:0},{value:"dumi",paraId:0},{value:" theme configuration item. The specific configuration fields are as follows:",paraId:0},{value:`import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-antd/dist/defineThemeConfig';

export default defineConfig({
  themeConfig: defineThemeConfig({
    title: 'Dumi Theme Ant Design',
  }),
});
`,paraId:1},{value:"type\uFF1A",paraId:2,tocIndex:1},{value:"string",paraId:2,tocIndex:1},{value:"default\uFF1A",paraId:2,tocIndex:1},{value:"null",paraId:2,tocIndex:1},{value:"The Github icon link in the navigation bar. If this field is not configured, it will not be displayed, and it is compatible with the official ",paraId:3,tocIndex:1},{value:"socialLinks.github",paraId:3,tocIndex:1},{value:" configuration.",paraId:3,tocIndex:1},{value:"type\uFF1A",paraId:4,tocIndex:2},{value:"IBannerConfig",paraId:4,tocIndex:2},{value:"default\uFF1A",paraId:4,tocIndex:2},{value:"bannerConfigDefault",paraId:4,tocIndex:2},{value:`export interface IBannerConfig {
  /** Whether to display the header banner background*/
  showBanner?: boolean;
  /** banner url */
  bannerImgUrl?: string;
  /** banner mobile url */
  bannerMobileImgUrl?: string;
}

const bannerConfigDefault: IBannerConfig = {
  showBanner: true,
  bannerMobileImgUrl: 'xx', // antd v5 official website comes with banner image
  bannerImgUrl: 'xx', // antd v5 official website comes with banner image
};
`,paraId:5,tocIndex:2},{value:"Home page header banner image configuration options",paraId:6,tocIndex:2},{value:"type\uFF1A",paraId:7,tocIndex:3},{value:"ILocaleEnhance[]",paraId:7,tocIndex:3},{value:"default\uFF1A",paraId:7,tocIndex:3},{value:"dumi-theme-antd",paraId:7,tocIndex:3},{value:`interface ILocaleEnhance {
  /** Same as the id in the locales item in themeConfig */
  id: string;
  /** The prefix used to display switching when there are only two items in multiple languages */
  switchPrefix: string;
}
`,paraId:8,tocIndex:3},{value:"The display of the multi-language switching prefix icon in the navigation header is only applicable to two multi-language situations.",paraId:9,tocIndex:3},{value:"type\uFF1A",paraId:10,tocIndex:4},{value:"string | Record<string, string>",paraId:10,tocIndex:4},{value:"default\uFF1A",paraId:10,tocIndex:4},{value:"Dumi Theme AntD",paraId:10,tocIndex:4},{value:`// multi-language configuration object, the key is the language name
title: {
  'zh-CN': 'Dumi Ant Design \u4E3B\u9898',
  'en-US': 'Dumi Theme Ant Design'
}
`,paraId:11,tocIndex:4},{value:"Configure the title of the first screen area on the home page.",paraId:12,tocIndex:4},{value:"0.2.6+",paraId:13,tocIndex:4},{value:"type\uFF1A",paraId:14,tocIndex:5},{value:"Omit<ThemeConfig, 'algorithm'>",paraId:14,tocIndex:5},{value:"default\uFF1A",paraId:14,tocIndex:5},{value:"undefined",paraId:14,tocIndex:5},{value:`theme: {
  token: {
    colorPrimary: '#00b96b',
  },
}
`,paraId:15,tocIndex:5},{value:"It is used to customize antd theme style, same as ",paraId:16,tocIndex:5},{value:"theme",paraId:16,tocIndex:5},{value:" in ",paraId:16,tocIndex:5},{value:"ConfigProvider",paraId:16,tocIndex:5},{value:", delete its preset algorithm ",paraId:16,tocIndex:5},{value:"algorithm",paraId:16,tocIndex:5},{value:" attribute, and the preset algorithm can be modified through the page theme style button.",paraId:16,tocIndex:5},{value:"type\uFF1A",paraId:17,tocIndex:6},{value:"string | Record<string, string>",paraId:17,tocIndex:6},{value:"default\uFF1A",paraId:17,tocIndex:6},{value:"null",paraId:17,tocIndex:6},{value:"Configure the introduction text of the first screen area on the home page.",paraId:18,tocIndex:6},{value:"\u7C7B\u578B\uFF1A",paraId:19,tocIndex:7},{value:"IDocVersion",paraId:19,tocIndex:7},{value:"\u9ED8\u8BA4\u503C\uFF1A",paraId:19,tocIndex:7},{value:"null",paraId:19,tocIndex:7},{value:`interface IDocVersion {
  [propName: string]: string;
}
// .dumi.ts
docVersions: {
  '1.0.0': '',
  '0.x.x': 'http://xxxx.com'
}
`,paraId:20,tocIndex:7},{value:"Display the current document version or multi-document drop-down selection box in the navigation bar, and the default first attribute is the current document version.",paraId:21,tocIndex:7},{value:"0.2.12+",paraId:22,tocIndex:7},{value:"Type: ",paraId:23,tocIndex:8},{value:"FooterColumn[] | Record<string, FooterColumn[]>",paraId:23,tocIndex:8},{value:"Default: ",paraId:23,tocIndex:8},{value:"null",paraId:23,tocIndex:8},{value:"FooterColumn",paraId:24,tocIndex:8},{value:" is the ",paraId:24,tocIndex:8},{value:"rc-footer",paraId:24,tocIndex:8},{value:" component ",paraId:24,tocIndex:8},{value:"columns",paraId:24,tocIndex:8},{value:" attribute type value, ",paraId:24,tocIndex:8},{value:"click to view details",paraId:24,tocIndex:8},{value:".",paraId:24,tocIndex:8},{value:`// Just configure the array for single language
footerLinks: [
   {
     title: 'More Products',
     icon: 'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
     items: [
       {
         icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
         title: 'Yuque',
         url: 'https://yuque.com',
         description: 'Build your digital garden',
         openExternal: true
       }
     ]
   }
]

// Multi-language configuration object, the key is the language name
footerLinks: {
   'zh-CN': [],
   'en-US': [],
},
`,paraId:25,tocIndex:8},{value:"The friendly link module at the top of footer, such as more products, community links, etc.",paraId:26,tocIndex:8},{value:"\u7C7B\u578B\uFF1A",paraId:27,tocIndex:9},{value:"IMoreLink[] | Record<string, IMoreLink[]>",paraId:27,tocIndex:9},{value:"\u9ED8\u8BA4\u503C\uFF1A",paraId:27,tocIndex:9},{value:"null",paraId:27,tocIndex:9},{value:`interface IMoreLink {
  /** link text description */
  text: string;
  /** link */
  link: string;
}
// Just configure the array for single language
moreLinks: [
  {
    text: 'Dumi',
    link: 'https://d.umijs.org/'
  },
  {
    text: 'Ant Design',
    link: 'https://ant.design/'
  }
];
// Multi-language configuration object, the key is the language name
moreLinks: {
  'zh-CN': [],
  'en-US': [],
},
`,paraId:28,tocIndex:9},{value:"Configure more ecosystem links in the navigation bar.",paraId:29,tocIndex:9},{value:"type\uFF1A",paraId:30,tocIndex:10},{value:"boolean",paraId:30,tocIndex:10},{value:"default\uFF1A",paraId:30,tocIndex:10},{value:"true",paraId:30,tocIndex:10},{value:"Whether to display the rtl navigation button, it is displayed by default.",paraId:31,tocIndex:10},{value:"type\uFF1A",paraId:32,tocIndex:11},{value:"IAction[] | Record<string, IAction[]>",paraId:32,tocIndex:11},{value:"default\uFF1A",paraId:32,tocIndex:11},{value:"null",paraId:32,tocIndex:11},{value:`interface IAction {
  /** \u6309\u94AE\u6587\u5B57\u63CF\u8FF0 */
  text: string;
  /** \u6309\u94AE\u94FE\u63A5 */
  link: string;
  /** \u6309\u94AE\u7C7B\u578B */
  type?: 'primary' | 'default';
}

// Just configure the array for single language
actions: [{ type: 'primary', text: '\u5F00\u59CB\u4F7F\u7528', link: '/guide/introduce' }]
// Multi-language configuration object, the key is the language name
actions: {
  'zh-CN': [{ type: 'primary', text: '\u5F00\u59CB\u4F7F\u7528', link: '/guide/introduce' }],
  'en-US': [{ type: 'primary', text: 'Start', link: '/guide/introduce-en' }],
},
`,paraId:33,tocIndex:11},{value:"Configure the operation buttons in the first screen area of the home page.",paraId:34,tocIndex:11},{value:"type\uFF1A",paraId:35,tocIndex:12},{value:"IFeature[] | Record<string, IFeature[]>",paraId:35,tocIndex:12},{value:"default\uFF1A",paraId:35,tocIndex:12},{value:"null",paraId:35,tocIndex:12},{value:`interface IFeature {
  /** title */
  title: string;
  /** detail */
  details: string;
}
// Just configure the array for single language
features: [{ title: '\u5F00\u7BB1\u5373\u7528'}, { details: '\u63A5\u5165\u7B80\u5355\uFF0C\u5B89\u88C5\u5373\u4F7F\u7528\uFF0C\u5168\u9762\u878D\u5165 Ant Design 5.0 \u98CE\u683C\u3002'}]
// Multi-language configuration object, the key is the language name
features: {
  'zh-CN': [{ title: '\u5F00\u7BB1\u5373\u7528'}, { details: '\u63A5\u5165\u7B80\u5355\uFF0C\u5B89\u88C5\u5373\u4F7F\u7528\uFF0C\u5168\u9762\u878D\u5165 Ant Design 5.0 \u98CE\u683C\u3002'}],
  'en-US': [{ title: 'Simple Use'}, { details: 'Simple access, installation and use, fully integrated into Ant Design 5.0 style.'}],
},
`,paraId:36,tocIndex:12},{value:"After configuration, the page will be presented as the homepage, used to display the features of the component library in the form of 3 per row.",paraId:37,tocIndex:12},{value:"type\uFF1A",paraId:38,tocIndex:13},{value:"Array<string> | true",paraId:38,tocIndex:13},{value:"default\uFF1A",paraId:38,tocIndex:13},{value:"[]",paraId:38,tocIndex:13},{value:`export default {
  themeConfig: {
    antdTheme: {
      // sidebarGroupModePath: true, // when true, all routes will be treated as a group
      sidebarGroupModePath: [
        // Matches routes starting with \`/config\`
        '/config',
      ],
    },
  },
};
`,paraId:39,tocIndex:13},{value:"Whether the left navigation bar needs to be treated as a group, please refer to antd ",paraId:40,tocIndex:13},{value:"menuitemgrouptype",paraId:40,tocIndex:13},{value:".",paraId:40,tocIndex:13},{value:"type\uFF1A",paraId:41,tocIndex:14},{value:"Record<string, SidebarEnhanceItems>",paraId:41,tocIndex:14},{value:"default\uFF1A",paraId:41,tocIndex:14},{value:"undefined",paraId:41,tocIndex:14},{value:`export default {
  themeConfig: {
    sidebarEnhance: {
      '/welcome': [
        {
          title: '\u5FEB\u901F\u5F00\u59CB',
          type: 'group',
          children: [
            {
              // \u652F\u6301\u591A\u5C42\u7EA7
              title: '\u5B89\u88C5',
              children: [
                '/welcome/getting-started/installation', // \u652F\u6301\u4EC5\u586B\u5199\u94FE\u63A5\uFF0Ctitle \u81EA\u52A8\u6839\u636E \`# xxx\` \u751F\u6210
                '/welcome/getting-started/installation/docker',
              ],
            },
            {
              title: '\u5347\u7EA7',
              children: [
                '/welcome/getting-started/upgrading',
                '/welcome/getting-started/upgrading/docker-compose',
              ],
            },
          ],
        },
        // \u652F\u6301\u5BF9\u8C61\u7684\u65B9\u5F0F
        {
          title: '\u66F4\u65B0\u8BB0\u5F55',
          link: 'https://github.com/xx/xx/changelog.md',
        },
      ],
    },
  },
};
`,paraId:42,tocIndex:14},{value:"Since dumi only supports two-level sidebar ",paraId:43,tocIndex:14},{value:"issues",paraId:43,tocIndex:14},{value:", if the customization needs need to support three-level sidebar or want to fully customize the sidebar display , you can use this parameter. For configuration parameters, refer to the ",paraId:43,tocIndex:14},{value:"items attribute",paraId:43,tocIndex:14},{value:" of the ant-design menu component.",paraId:43,tocIndex:14},{value:"type: ",paraId:44,tocIndex:16},{value:"ILoading",paraId:44,tocIndex:16},{value:".",paraId:44,tocIndex:16},{value:"default: ",paraId:44,tocIndex:16},{value:"undefined",paraId:44,tocIndex:16},{value:`interface ILoading {
  skeleton?: Array<string>;
}
`,paraId:45,tocIndex:16},{value:"In the loading status of the current page, routing is enabled on demand by default, so there will be a loading process when switching routes. ",paraId:46,tocIndex:16},{value:"Dumi-theme-antd",paraId:46,tocIndex:16},{value:" provides two common forms of loading: ",paraId:46,tocIndex:16},{value:"Skeleton",paraId:46,tocIndex:16},{value:" and ",paraId:46,tocIndex:16},{value:"spin",paraId:46,tocIndex:16},{value:", and the corresponding loading forms can be set for different routes, with the default Spin form.",paraId:46,tocIndex:16},{value:`/* .dumi/loading.tsx */
export { default } from 'dumi-theme-antd/loading';
`,paraId:47,tocIndex:16},{value:"The import method after ",paraId:48,tocIndex:16},{value:"0.3.1",paraId:48,tocIndex:16},{value:" version:",paraId:48,tocIndex:16},{value:`/* .dumi/loading.tsx */
export { Loading as default } from 'dumi-theme-antd';
`,paraId:49,tocIndex:16},{value:"Configure the loading value",paraId:50,tocIndex:16},{value:`/* .dumirc.ts */
export default {
  themeConfig: {
    loading: {
      Skeleton: [
        '/guide',
        ' /config',
      ] /* the route loading component at the beginning of /config or /guide are in skeleton form. */,
    },
  },
};
`,paraId:51,tocIndex:16}]},17416:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(6092);const n=[{value:"All Markdown configurations are configured in the form of FrontMatter at the top of the Markdown file, for example",paraId:0},{value:`---
title: configure page title
---

Additional Markdown content
`,paraId:1},{value:"Currently the theme supports the following Markdown configurations.",paraId:2},{value:"This configuration needs to be distinguished from the ",paraId:3,tocIndex:0},{value:"sidebarEnhance",paraId:3,tocIndex:0},{value:" parameter. The ",paraId:3,tocIndex:0},{value:"sidebarEnhance",paraId:3,tocIndex:0},{value:" parameter is to deal with issues such as multi-level file directories, custom sidebars, and preventing multi-level sidebar clicks and jumps. The Markdown configuration is in the same Under the file directory, functions such as grouping and three-level sidebars are realized through configuration.",paraId:3,tocIndex:0},{value:"Configuring multi-level sidebars mainly depends on two fields ",paraId:4,tocIndex:0},{value:"group",paraId:4,tocIndex:0},{value:" and ",paraId:4,tocIndex:0},{value:"type",paraId:4,tocIndex:0},{value:", ",paraId:4,tocIndex:0},{value:"group",paraId:4,tocIndex:0},{value:" configures the first-level sidebar, and ",paraId:4,tocIndex:0},{value:"type",paraId:4,tocIndex:0},{value:" configures the second-level sidebar. First level sidebar configuration:",paraId:4,tocIndex:0},{value:`## <!-- /xx/a.md -->

group: '\u5168\u5C40\u6837\u5F0F'
order: 0
title: '\u8272\u5F69'

---

## <!-- /xx/b.md -->

group: '\u5168\u5C40\u6837\u5F0F'
order: 1
title: '\u5E03\u5C40'

---
`,paraId:5,tocIndex:0},{value:"Second level sidebar configuration:",paraId:6,tocIndex:0},{value:`## <!-- /xx/c.md -->

group: '\u8BBE\u8BA1\u6A21\u5F0F'
order: 0
title: '\u6982\u89C8'

---

## <!-- /xx/d.md -->

group: '\u8BBE\u8BA1\u6A21\u5F0F'
type: '\u6A21\u677F\u6587\u6863'
order: 1
title: '\u8868\u5355\u9875'

---

## <!-- /xx/e.md -->

group: '\u8BBE\u8BA1\u6A21\u5F0F'
type: '\u6A21\u677F\u6587\u6863'
order: 0
title: '\u6570\u636E\u53EF\u89C6\u5316\u9875'

---
`,paraId:7,tocIndex:0},{value:"The ",paraId:8,tocIndex:0},{value:"group",paraId:8,tocIndex:0},{value:" field type supports object format, which is used to adjust the display order of ",paraId:8,tocIndex:0},{value:"group",paraId:8,tocIndex:0},{value:". For example, setting the ",paraId:8,tocIndex:0},{value:"order",paraId:8,tocIndex:0},{value:" field in ",paraId:8,tocIndex:0},{value:"group",paraId:8,tocIndex:0},{value:" can adjust the order of ",paraId:8,tocIndex:0},{value:"global style",paraId:8,tocIndex:0},{value:" and ",paraId:8,tocIndex:0},{value:"design mode",paraId:8,tocIndex:0},{value:":",paraId:8,tocIndex:0},{value:`## <!-- /xx/a.md -->

group:
title: '\u5168\u5C40\u6837\u5F0F'
order: 2
order: 1
title: '\u5E03\u5C40'

---

## <!-- /xx/c.md -->

group:
title: '\u8BBE\u8BA1\u6A21\u5F0F'
order: 1
order: 0
title: '\u6982\u89C8'

---
`,paraId:9,tocIndex:0},{value:"Similarly, ",paraId:10,tocIndex:0},{value:"type",paraId:10,tocIndex:0},{value:" field type also supports object format, which is used to adjust the display order of ",paraId:10,tocIndex:0},{value:"type",paraId:10,tocIndex:0},{value:".",paraId:10,tocIndex:0},{value:"To hide the sidebar just set the ",paraId:11,tocIndex:1},{value:"sidebar",paraId:11,tocIndex:1},{value:" value to ",paraId:11,tocIndex:1},{value:"false",paraId:11,tocIndex:1},{value:" in FrontMatter:",paraId:11,tocIndex:1},{value:`---
sidebar: false
nav: example
title: hide sidebar
order: 3
---
`,paraId:12,tocIndex:1},{value:"+0.3.4",paraId:13,tocIndex:1},{value:"In order to display the menu bar update or identify the status, the menu supports tag configuration:",paraId:14,tocIndex:2},{value:`---
tag:
  title: new
  color: success <!-- Same as color attribute of antd Tag component,eg. success,processing,warning etc.-->
---
`,paraId:15,tocIndex:2},{value:"The menu is then rendered as:",paraId:16,tocIndex:2},{value:`
<img description="tag" width=300 src="`,paraId:16,tocIndex:2},{value:"https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/259418494-f44e99d2-7ce2-4816-8eb1-45b66c473ea6.png",paraId:16,tocIndex:2},{value:'" / >',paraId:16,tocIndex:2},{value:"You can also directly use the simple mode and configure it directly as a string. In this case, the default color is ",paraId:17,tocIndex:2},{value:"processing",paraId:17,tocIndex:2},{value:".",paraId:17,tocIndex:2},{value:`---
tag: new
---
`,paraId:18,tocIndex:2}]},30030:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(41291);const n=[{value:"Ant Design allows you to customize our design tokens to satisfy UI diversity from business or brand requirements, including primary color, border radius, border color, etc.",paraId:0},{value:"In version 5.0, we provide a new way to customize themes. Different from the less and CSS variables of the 4.x version, with CSS-in-JS, the ability of theming has also been enhanced, including but not limited to:",paraId:1},{value:"Switching theme dynamically\uFF1B",paraId:2},{value:"Multiple themes\uFF1B",paraId:2},{value:"Customizing theme variables for some component\uFF1B",paraId:2},{value:"...",paraId:2}]},88831:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(33643);const n=[{value:`
  `,paraId:0},{value:"Ant Financial has a large number of enterprise-level products. With complex scenarios, designers and developers often need to respond fast due to frequent changes in product demands and concurrent R & D workflow. Many similar contents exist in the process. Through abstraction, we could obtain some stable and highly reusable components and pages.",paraId:1},{value:"On the other hand, with the trend of commercialization, more and more enterprise products begin to pursue better user experiences. Under this situation, Ant User-Experience Design Team builds a design system for enterprise products based on four design values of Natural, Certain, Meaningful, and Growing. It aims to uniform the user interface specs and reduce redundancies and excessive production costs, helping product designers to focus on better user experience.",paraId:2}]},63095:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(47061);const n=[{value:"In order to help users understand what the application is currently doing, and to refer to the user's next behavior, and to understand the results of the operation, when the user need to interact with the system , use different modes to feedback information or results. When the designer uses feedback or customizes some feedback, please note:",paraId:0},{value:"Provide users with necessary, positive and immediate feedback at all stages;",paraId:1},{value:"Avoid excessive feedback, so as not to cause unnecessary disturbance to the user, you can omit the feedback prompt at the results users can see immediately and simple operation.",paraId:1}]},9933:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(27992);const n=[{value:"Broadly speaking, anything telling users where they are, where to go and how to get there can be called navigation. When using navigation or customizing navigational structures, please pay attention to following common pitfalls:",paraId:0},{value:"Provide visual and contextual cues as many as possible, to prevent users from getting lost",paraId:1},{value:"Maintain consistency between form and behavior, or reduce the number of items in navigation, to decrease user's learning cost",paraId:1},{value:"Minimize page transitions (i.e. reduce the number of page transitions required by a task from several to just once or twice), to ensure that user travels only a short distance from any page to another",paraId:1}]},23275:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(78100);const n=[{value:"The use of design patterns in enterprise-level businesses can significantly increase the certainty of the R&D team, save unnecessary design and maintain system consistency, allowing designers to focus on creativity where it is most needed.",paraId:0},{value:"Design patterns adhere to Ant Design design values and provide a general solution to recurring design issues in enterprise products. The designer can directly use the design pattern to complete the interface design, or the design pattern can be used as a starting point to derive a more business-specific solution to meet the individual design needs.",paraId:1}]},12974:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(63298);const n=[{value:"When several items are in close proximity to each other, they become one visual unit rather than several separate units. Otherwise, their distance should be larger and look more like several visual units. The basic purpose of proximity is to organize. To give an apparent view of the page structure and the hierarchy of information to users.",paraId:0}]},17964:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(34571);const n=[{value:"Ant Design interprets the color system into two levels: a system-level color system and a product-level color system.",paraId:0},{value:"The system-level color system mainly defines the basic color palette, neutral color palette and data visualization color palette in the design of Ant Financial. The product-level color system is in the specific design process, based on the color of the system to further define the tone of the product in accordance with the requirements and function of the color.",paraId:1}]},99977:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(92537);const n=[{value:"The font system is one of the most foundational parts of any interface design.",paraId:0},{value:`Text is a major channel for users to understand application content and complete their work, and a well designed font system will greatly enhance the user's reading experience and work efficiency. The Ant Design typography system is based on the design principle of "dynamic order" combined with the law of natural logarithm and temperament. We strongly recommend it since it has been verified by a large number of Ant products. While defining the font system for a visual system, we propose to start from the following five aspects:`,paraId:1},{value:"Font Family",paraId:2},{value:"Base Font Size",paraId:2},{value:"Font Scale & Line Height",paraId:2},{value:"Font Weight",paraId:2},{value:"Font Color",paraId:2}]},91384:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(748);const n=[{value:"Spatial layout is the starting point of systematic visual design. The difference from traditional graphic design is that the layout space of UI interface should be based on the dynamic and systematic perspective. We were inspired by the architectural ethic of the architect Le Corbusier and explored the dynamic spatial order in UI design and formed the interface layout of Ant Design based on the principle of 'beauty of order', making it possible for designers to create spatial layout that comes with rational beauty.",paraId:0},{value:"While defining the layout system in a visual system, we propose to start from the following 5 aspects:\uFF1A",paraId:1},{value:"Unified Canvas Dimension",paraId:2},{value:"Adaptation",paraId:2},{value:"Grid Unit",paraId:2},{value:"Raster",paraId:2},{value:"Common Scales",paraId:2}]},99034:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(31665);const n=[{value:"Button",paraId:0},{value:"Property",paraId:1,tocIndex:0},{value:"Description",paraId:1,tocIndex:0},{value:"Type",paraId:1,tocIndex:0},{value:"Default",paraId:1,tocIndex:0},{value:"Version",paraId:1,tocIndex:0},{value:"block",paraId:1,tocIndex:0},{value:"Option to fit button width to its parent width",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"false",paraId:1,tocIndex:0},{value:"classNames",paraId:1,tocIndex:0},{value:"Semantic DOM class",paraId:1,tocIndex:0},{value:"Record<SemanticDOM, string>",paraId:2,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"5.4.0",paraId:1,tocIndex:0},{value:"danger",paraId:1,tocIndex:0},{value:"Set the danger status of button",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"false",paraId:1,tocIndex:0},{value:"disabled",paraId:1,tocIndex:0},{value:"Disabled state of button",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"false",paraId:1,tocIndex:0},{value:"ghost",paraId:1,tocIndex:0},{value:"Make background transparent and invert text and border colors",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"false",paraId:1,tocIndex:0},{value:"href",paraId:1,tocIndex:0},{value:"Redirect url of link button",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"htmlType",paraId:1,tocIndex:0},{value:"Set the original html ",paraId:1,tocIndex:0},{value:"type",paraId:1,tocIndex:0},{value:" of ",paraId:1,tocIndex:0},{value:"button",paraId:1,tocIndex:0},{value:", see: ",paraId:1,tocIndex:0},{value:"MDN",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"button",paraId:1,tocIndex:0},{value:"icon",paraId:1,tocIndex:0},{value:"Set the icon component of button",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"loading",paraId:1,tocIndex:0},{value:"Set the loading status of button",paraId:1,tocIndex:0},{value:"boolean | { delay: number }",paraId:1,tocIndex:0},{value:"false",paraId:1,tocIndex:0},{value:"shape",paraId:1,tocIndex:0},{value:"Can be set button shape",paraId:1,tocIndex:0},{value:"default",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"circle",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"round",paraId:1,tocIndex:0},{value:"default",paraId:1,tocIndex:0},{value:"size",paraId:1,tocIndex:0},{value:"Set the size of button",paraId:1,tocIndex:0},{value:"large",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"middle",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"small",paraId:1,tocIndex:0},{value:"middle",paraId:1,tocIndex:0},{value:"styles",paraId:1,tocIndex:0},{value:"Semantic DOM style",paraId:1,tocIndex:0},{value:"Record<SemanticDOM, CSSProperties>",paraId:3,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"5.4.0",paraId:1,tocIndex:0},{value:"target",paraId:1,tocIndex:0},{value:"Same as target attribute of a, works when href is specified",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"type",paraId:1,tocIndex:0},{value:"Set button type",paraId:1,tocIndex:0},{value:"primary",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"dashed",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"link",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"text",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"default",paraId:1,tocIndex:0},{value:"default",paraId:1,tocIndex:0},{value:"onClick",paraId:1,tocIndex:0},{value:"Set the handler to handle ",paraId:1,tocIndex:0},{value:"click",paraId:1,tocIndex:0},{value:" event",paraId:1,tocIndex:0},{value:"(event: MouseEvent) => void",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0}]}}]);
