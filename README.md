<a name="readme-top"></a>

<div align="center">

<h1>Dumi Theme YuntiJS</h1>

dumi-theme-yunti is a documentation site theme package designed for `Dumi 2`. <br/>It provides a more beautiful and user-friendly development and reading experience based on `@lobehub/ui`

[![][npm-release-shield]][npm-release-link]
[![][github-releasedate-shield]][github-releasedate-link]
[![][github-action-test-shield]][github-action-test-link]
[![][github-action-release-shield]][github-action-release-link]<br/>
[![][github-contributors-shield]][github-contributors-link]
[![][github-forks-shield]][github-forks-link]
[![][github-stars-shield]][github-stars-link]
[![][github-issues-shield]][github-issues-link]
[![][github-license-shield]][github-license-link]

[Changelog](./CHANGELOG.md) · [Report Bug][github-issues-link] · [Request Feature][github-issues-link]

![](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

</div>

<details>
<summary><kbd>Table of contents</kbd></summary>

#### TOC

- [✨ Features](#-features)
- [📦 Installation](#-installation)
- [☁️ Usage](#️-usage)
- [⌨️ Local Development](#️-local-development)
- [🤝 Contributing](#-contributing)
- [🔗 Links](#-links)
  - [More Products](#more-products)

####

</details>

## ✨ Features

- [x] 🤯 **Modern Theme Style:** This theme package adopts modern design techniques such as gradient colors, frosted glass, lighting effects, and natural animations to present the interface in a more concise and visually appealing way, making the documents more intuitive, readable, and user-friendly.
- [x] 🌓 **One-click Switch between Light and Dark Theme Mode:** Based on antd v5, custom algorithms for light and dark themes are provided by default, offering aesthetically pleasing and user-friendly options. Users can choose the theme mode according to their preferences and enjoy a good reading experience in different lighting environments.
- [x] 💅 **Based on Ant Design and CSSinJS:** This theme package uses antd as the base component library and implements the style solution using CSSinJS, which helps to better control the style details and improve style reusability and maintainability. The underlying antd-style library provides more flexibility, readability, and ease of maintenance in writing styles.
- [x] 🪄 **Exquisite Syntax Highlighting:** This theme package provides accurate and beautiful syntax highlighting. It utilizes modern syntax highlighting libraries like Shiki and Prism, and offers a rich set of code highlighting schemes to enhance code readability.
- [x] 🧩 **Flexible Component Reusability:** This theme package provides high flexibility for customizing local themes. It exports premium components from the theme package, which can be reused as independent modules. Developers can freely combine and use these components in the dumi local theme package.
- [x] 📱 **Well-Adapted for Mobile Devices:** This theme package is well-adapted for mobile devices. With the flexible style solution based on CSSinJS, multiple layout options are easily implemented. Users can enjoy a consistent and smooth experience across different devices.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 📦 Installation

To install `dumi-theme-yunti`, run the following command:

```bash
$ pnpm add dumi dumi-theme-yunti
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ☁️ Usage

Usage After installation, start the site with `dumi`, and the theme will be automatically loaded for use.

```ts
interface SiteThemeConfig {
  actions?: HeroProps['actions'];
  apiHeader?: ApiHeaderConfig | false;
  description?: string;
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
  logo?: string;
  logoType?: LogoProps['type'];
  name?: string;
  siteToken?: SiteConfigToken;
  // socialLinks?: {
  //   discord?: `https://discord.gg/${string}`;
  //   github?: string;
  // };
  title?: string;
}
```

> \[!NOTE]\
> For detailed configuration, please refer to the [📘 Type file](https://github.com/yuntijs/dumi-theme-yunti/blob/master/src/types/config.ts) / [📘 Example](https://github.com/yuntijs/dumi-theme-yunti/blob/master/example/.dumirc.ts).

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ⌨️ Local Development

You can use Github Codespaces for online development:

[![][github-codespace-shield]][github-codespace-link]

Or clone it for local development:

```bash
$ git clone https://github.com/yuntijs/dumi-theme-yunti.git
$ cd dumi-theme-yunti
$ bun install
$ bun dev
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤝 Contributing

Contributions of all types are more than welcome, if you are interested in contributing code, feel free to check out our GitHub [Issues][github-issues-link] to get stuck in to show us what you’re made of.

[![][pr-welcome-shield]][pr-welcome-link]

[![][github-contrib-shield]][github-contrib-link]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🔗 Links

### More Products

- **[☁️ Yunti](https://github.com/yuntijs/yunti)** - A lowcode platform.
- **[🍭 Yunti UI](https://github.com/yuntijs/yunti-ui)** - An open-source UI component library for building AIGC web apps.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

---

#### 📝 License

Copyright © 2024 [YuntiJS][profile-link]. <br />
This project is [MIT](./LICENSE) licensed.

<!-- LINK GROUP -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-black?style=flat-square
[github-action-release-link]: https://github.com/yuntijs/dumi-theme-yunti/actions/workflows/release.yml
[github-action-release-shield]: https://img.shields.io/github/actions/workflow/status/yuntijs/dumi-theme-yunti/release.yml?label=release&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-action-test-link]: https://github.com/yuntijs/dumi-theme-yunti/actions/workflows/test.yml
[github-action-test-shield]: https://img.shields.io/github/actions/workflow/status/yuntijs/dumi-theme-yunti/test.yml?label=test&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-codespace-link]: https://codespaces.new/yuntijs/dumi-theme-yunti
[github-codespace-shield]: https://github.com/codespaces/badge.svg
[github-contrib-link]: https://github.com/yuntijs/dumi-theme-yunti/graphs/contributors
[github-contrib-shield]: https://contrib.rocks/image?repo=yuntijs%2Fdumi-theme-yuntijs
[github-contributors-link]: https://github.com/yuntijs/dumi-theme-yunti/graphs/contributors
[github-contributors-shield]: https://img.shields.io/github/contributors/yuntijs/dumi-theme-yunti?color=c4f042&labelColor=black&style=flat-square
[github-forks-link]: https://github.com/yuntijs/dumi-theme-yunti/network/members
[github-forks-shield]: https://img.shields.io/github/forks/yuntijs/dumi-theme-yunti?color=8ae8ff&labelColor=black&style=flat-square
[github-issues-link]: https://github.com/yuntijs/dumi-theme-yunti/issues
[github-issues-shield]: https://img.shields.io/github/issues/yuntijs/dumi-theme-yunti?color=ff80eb&labelColor=black&style=flat-square
[github-license-link]: https://github.com/yuntijs/dumi-theme-yunti/blob/main/LICENSE
[github-license-shield]: https://img.shields.io/github/license/yuntijs/dumi-theme-yunti?color=white&labelColor=black&style=flat-square
[github-releasedate-link]: https://github.com/yuntijs/dumi-theme-yunti/releases
[github-releasedate-shield]: https://img.shields.io/github/release-date/yuntijs/dumi-theme-yunti?labelColor=black&style=flat-square
[github-stars-link]: https://github.com/yuntijs/dumi-theme-yunti/network/stargazers
[github-stars-shield]: https://img.shields.io/github/stars/yuntijs/dumi-theme-yunti?color=ffcb47&labelColor=black&style=flat-square
[npm-release-link]: https://www.npmjs.com/package/dumi-theme-yunti
[npm-release-shield]: https://img.shields.io/npm/v/dumi-theme-yunti?color=369eff&labelColor=black&logo=npm&logoColor=white&style=flat-square
[pr-welcome-link]: https://github.com/yuntijs/dumi-theme-yunti/pulls
[pr-welcome-shield]: https://img.shields.io/badge/%F0%9F%A4%AF%20PR%20WELCOME-%E2%86%92-ffcb47?labelColor=black&style=for-the-badge
[profile-link]: https://github.com/yuntijs
