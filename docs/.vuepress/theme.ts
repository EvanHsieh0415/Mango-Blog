import { hopeTheme } from "vuepress-theme-hope";
import locales from "./theme/locales.js";

export default hopeTheme(
  {
    // Basic
    hostname: "https://mango-blog.pages.dev",
    favicon: "https://avatars.githubusercontent.com/u/74277414",
    license: "AGPL-3.0",
    // hotReload: true, // enable it to preview all changes in time
    // author: "MangoJellyPudding",
    locales,

    // Feature
    encrypt: {
      config: {
        "/zh-tw/test": ["1234"],
      },
    },

    // Layouts
    // - Navbar
    // navbarLayout: {
    //   start: ["Brand", "Language", "Search"],
    //   center: ["Links"],
    //   end: ["Repo", "Outlook"],
    // },
    logo: "https://avatars.githubusercontent.com/u/74277414",
    repo: "EvanHsieh0415/Mango-Blog",

    // - Metadata
    lastUpdated: true,
    contributors: true,
    editLink: true,
    docsRepo: "EvanHsieh0415/Mango-Blog",
    docsBranch: "main",
    docsDir: "docs",

    // - Footer
    copyright: "Copyright © 2025 EvanHsieh0415",
    displayFooter: true,

    // Appearance
    darkmode: "auto",
    externalLinkIcon: false,
    fullscreen: true,
    pure: true,
    focus: false,

    // i18n
    blogLocales: {
      empty: "",
    },

    // Markdown
    markdown: {
      alert: true,
      hint: true,
      align: true,
      attrs: true,
      codeTabs: true,
      component: true,
      demo: true,
      figure: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      highlighter: {
        type: "shiki",
        theme: "one-dark-pro",
        collapsedLines: false,
        notationDiff: true,
        notationFocus: true,
        notationHighlight: true,
        notationErrorLevel: true,
        notationWordHighlight: true,
        whitespace: "trailing",
      },
    },

    plugins: {
      redirect: {
        config: {
          "/": "/en-us/",
        },
        switchLocale: "modal",
      },

      blog: true,

      components: {
        components: ["Badge", "VPCard", "VidStack", "SiteInfo", "VPBanner"],
      },

      icon: {
        prefix: "fa6-solid:",
      },

      search: {
        locales: {
          "/zh-tw/": {
            placeholder: "搜尋",
          },
        },
        maxSuggestions: 20,
        getExtraFields: (page) =>
          (<string[]>page.frontmatter.tags ?? []).concat(<string[]>page.frontmatter.categories ?? []),
      },

      git: {
        changelog: true,
        contributors: true,
        createdTime: true,
        updatedTime: true,
      },
    },
  },
  {
    custom: true,
  }
);
