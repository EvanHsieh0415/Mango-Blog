import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  locales: {
    "/en-us/": {
      lang: "en-US",
      title: "Mango's Blog",
      description: "MangoJellyPudding's personal blog, hosted on CloudFlare Page",
    },
    "/zh-tw/": {
      lang: "zh-TW",
      title: "芒果的部落格",
      description: "芒果凍布丁的個人部落格，架設於 CloudFlare Page 上",
    },
  },

  theme,

  clientConfigFile: path.resolve(__dirname, "./client.ts"),
});
