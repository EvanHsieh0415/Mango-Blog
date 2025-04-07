import { navbar } from "vuepress-theme-hope";

export const zhtwNavbar = navbar([
  "/zh-tw/",
  {
    text: "文章",
    icon: "pen-to-square",
    link: "/zh-tw/posts/",
  },
  {
    text: "學習筆記",
    icon: "pen-to-square",
    link: "/zh-tw/studing/",
  },
  {
    text: "遊戲專欄",
    icon: "gamepad",
    link: "/zh-tw/games/",
  },
]);
