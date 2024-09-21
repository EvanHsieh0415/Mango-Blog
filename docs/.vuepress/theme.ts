import { hopeTheme } from "vuepress-theme-hope";

import { enUsNavbar, zhTwNavbar } from "./navbar/index.js";
import { enUsSidebar, zhTwSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://mango-blog.pages.dev/",
  iconAssets: "fontawesome-with-brands",
  logo: "https://avatars.githubusercontent.com/u/74277414",
  repo: "EvanHsieh0415/Mango-Blog",
  favicon: "https://avatars.githubusercontent.com/u/74277414",

  locales: {
    "/en-us/": {
      navbar: enUsNavbar,
      sidebar: enUsSidebar,
      displayFooter: true,
      blog: {
        name: "MangoJellyPudding",
        description: "Information Technology undergraduate student,<br>passionate about the game called coding",
        intro: "intro",
        medias: {
          Discord: "https://discord.com/invite/SCAfRyAVnR",
          GitHub: "https://github.com/EvanHsieh0415",
          Twitter: "https://twitter.com/evan_mango",
          Youtube: "https://www.youtube.com/@YTMango",
        },
      },
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    "/zh-tw/": {
      navbar: zhTwNavbar,
      sidebar: zhTwSidebar,
      displayFooter: true,
      blog: {
        name: "芒果凍布丁",
        description: "資訊科技系大學生，<br>熱衷於名為程式設計的遊戲中",
        intro: "intro",
        medias: {
          BiliBili: "https://space.bilibili.com/430008973",
          Discord: "https://discord.com/invite/SCAfRyAVnR",
          GitHub: "https://github.com/EvanHsieh0415",
          Twitter: "https://twitter.com/evan_mango",
          Youtube: "https://www.youtube.com/@YTMango",
        },
      },
      metaLocales: {
        editLink: "在 GitHub 上編輯此頁",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // enable it to preview all changes in time
  // hotReload: true,

  plugins: {
    redirect: {
      config: {
        "/": "/en-us/",
      },
      switchLocale: "modal",
    },

    blog: true,

    components: {
      components: ["Badge", "VPCard", "PDF"],
    },

    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
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
    },
  },
});
