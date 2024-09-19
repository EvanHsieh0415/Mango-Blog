import { defineClientConfig } from "vuepress/client";
import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "D:/Github/EvanHsieh0415/Mango-Blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.52_@vuepress+plugin-redirect@2.0.0-rc.40_vuepress@2.0.0-rc.14_@v_pznslfvsouabbofxzmzjzei3au/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "D:/Github/EvanHsieh0415/Mango-Blog/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.39_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0.0-rc.14__ucqi3fe4aq6yrad7kiacwrzoti/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, SocialMedias, Timeline, setupBlog } from "D:/Github/EvanHsieh0415/Mango-Blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.52_@vuepress+plugin-redirect@2.0.0-rc.40_vuepress@2.0.0-rc.14_@v_pznslfvsouabbofxzmzjzei3au/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "D:/Github/EvanHsieh0415/Mango-Blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.52_@vuepress+plugin-redirect@2.0.0-rc.40_vuepress@2.0.0-rc.14_@v_pznslfvsouabbofxzmzjzei3au/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";
import { GlobalEncrypt, LocalEncrypt } from "D:/Github/EvanHsieh0415/Mango-Blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.52_@vuepress+plugin-redirect@2.0.0-rc.40_vuepress@2.0.0-rc.14_@v_pznslfvsouabbofxzmzjzei3au/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "D:/Github/EvanHsieh0415/Mango-Blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.52_@vuepress+plugin-redirect@2.0.0-rc.40_vuepress@2.0.0-rc.14_@v_pznslfvsouabbofxzmzjzei3au/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "D:/Github/EvanHsieh0415/Mango-Blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.39_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0.0-rc.14_@types+n_qs533cafytahlkk2mbqflekzyi/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "D:/Github/EvanHsieh0415/Mango-Blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.52_@vuepress+plugin-redirect@2.0.0-rc.40_vuepress@2.0.0-rc.14_@v_pznslfvsouabbofxzmzjzei3au/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
  }
});