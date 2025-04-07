import { enusNavbar, zhtwNavbar } from "./navbar/index.js";
import { zhTWLocale } from "./patch/i18n/zh_tw.js";
import { enusSidebar, zhtwSidebar } from "./sidebar/index.js";

export default {
  "/": {
    navbar: enusNavbar,
    sidebar: enusSidebar,

    blog: {
      author: "MangoJellyPudding",
      description: "Information Technology undergraduate student,<br>passionate about the game called coding",
      intro: "intro",

      medias: {
        Discord: "https://discord.com/invite/SCAfRyAVnR",
        GitHub: "https://github.com/EvanHsieh0415",
        Twitter: "https://twitter.com/evan_mango",
        Youtube: "https://www.youtube.com/@YTMango",
      },
    },
  },
  "/zh-tw/": {
    navbar: zhtwNavbar,
    sidebar: zhtwSidebar,

    blog: {
      author: "芒果凍布丁",
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

    ...zhTWLocale,
    navbarLocales: {
      langName: "正體中文",
    },
  },
};
