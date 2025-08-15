import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { Options as DocsOptions } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'GeaFlow',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.png',


  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  // future: {
  //   v4: true, // Improve compatibility with the upcoming Docusaurus v4
  // },

  // Set the production url of your site here
  url: 'https://kaiming-l.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: 'geaflow-website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: "warn",
  // onBrokenMarkdownLinks: "warn",
  // onBrokenAnchors: "warn",

  // trailingSlash: false,

  markdown: {
    format: "md",
    mermaid: true,
    preprocessor: ({ filePath, fileContent }) => {
      if (filePath.includes("application-development/1.api/1.overview")) {
        const regex = /<([A-Z\s,]+)>/g;
        const newContent = fileContent
          ?.replace(regex, "")
          ?.replace(/<IVertex>|<IEdge>/g, "");
        return newContent;
      }
      // 使用正则表达式替换匹配到的标签为空字符串
      return fileContent;
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'zh-CN'],
    localeConfigs: {
      'en-US': {
        path: "en-US",
        label: 'English',
        htmlLang: 'en-US',
      },
      'zh-CN': {
        path: "zh-CN",
        label: '简体中文',
        htmlLang: 'zh-CN',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          id: "current_en",
          sidebarPath: "./versions_sidebars/version-current-en.ts",
          path: "./versions/version-current/docs-en/source",
          routeBasePath: "docs",
          versions: {}
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "content-docs",
      {
        id: "current_zh",
        sidebarPath: "./versions_sidebars/version-current-zh.ts",
        path: "./versions/version-current/docs-cn/source",
        routeBasePath: "docs/zh",
        editCurrentVersion: false,
      } satisfies DocsOptions,
    ],
    [
      "content-docs",
      {
        id: "0-0-1_zh",
        sidebarPath: "./versions_sidebars/version-0.0.1-zh.ts",
        path: "./versions/version-0.0.1/docs-cn/source",
        routeBasePath: "docs/0.0.1/zh",
        editCurrentVersion: false,
      } satisfies DocsOptions,
    ],
    [
      "content-docs",
      {
        id: "0-0-1_en",
        sidebarPath: "./versions_sidebars/version-0.0.1-en.ts",
        path: "./versions/version-0.0.1/docs-en/source",
        routeBasePath: "docs/0.0.1",
        editCurrentVersion: false,
      } satisfies DocsOptions,
    ],
    [
      "content-docs",
      {
        id: "community-en",
        sidebarPath: "./sidebars.ts",
        path: "./community/en",
        routeBasePath: "community",
        editCurrentVersion: false,
      } satisfies DocsOptions,
    ],
    [
      "content-docs",
      {
        id: "community-zh",
        sidebarPath: "./sidebars.ts",
        path: "./community/zh",
        routeBasePath: "community/zh",
        editCurrentVersion: false,
      } satisfies DocsOptions,
    ],
  ],

  themeConfig: {
    algolia: {
      apiKey: "315fd6a0c1acbdeecd5ba56d8062d00d",
      indexName: "geaflowZH",
      appId: "HO4M21RAQI",
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'GeaFlow Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          id: 'docs',
          position: 'left',
          label: 'Docs',
          to: '/guide',
          activeBasePath: 'docs',
        },
        {
          id: 'community',
          to: '/how_to_contribute',
          position: 'left',
          label: 'Community',
          activeBasePath: 'community',
        },
        {
          to: '/user',
          position: 'left',
          label: 'User',
        },
        {
          position: 'left',
          to: '/download',
          label: 'Download',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: 'dropdown',
          label: 'ASF',
          position: 'left',
          items: [
            {
              label: 'Foundation',
              to: 'https://www.apache.org/'
            },
            {
              label: 'License',
              to: 'https://www.apache.org/licenses/'
            },
            {
              label: 'Events',
              to: 'https://www.apache.org/events/current-event.html'
            },
            {
              label: 'Privacy',
              to: 'https://privacy.apache.org/policies/privacy-policy-public.html'
            },
            {
              label: 'Security',
              to: 'https://www.apache.org/security/'
            },
            {
              label: 'Sponsorship',
              to: 'https://www.apache.org/foundation/sponsorship.html'
            },
            {
              label: 'Thanks',
              to: 'https://www.apache.org/foundation/thanks.html'
            },
            {
              label: 'Code of Conduct',
              to: 'https://www.apache.org/foundation/policies/conduct.html'
            }
          ]
        },
        {
          type: 'localeDropdown',
          position: 'right',
          className: 'header-locale-dropdown',
        },
        {
          href: 'https://github.com/apache/geaflow',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "algolia-site-verification",
        content: "4AB782AC2021573E",
      },
    },
    {
      tagName: "script",
      attributes: {
        src: "https://tarptaeya.github.io/repo-card/repo-card.js"
      }

    }
  ],
};

export default config;
