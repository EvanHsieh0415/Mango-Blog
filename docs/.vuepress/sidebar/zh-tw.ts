import { sidebar } from "vuepress-theme-hope";

export const zhTwSidebar = sidebar({
  "/zh-tw/": [
    "/zh-tw/",
    {
      text: "文章",
      icon: "book",
      link: "posts/",
      prefix: "posts/",
      children: "structure",
    },
    {
      text: "學習筆記",
      icon: "book",
      link: "studing/",
      prefix: "studing/",
      children: "structure",
    },
    {
      text: "遊戲專欄",
      icon: "gamepad",
      link: "games/",
      prefix: "games/",
      children: "structure",
    },
    "intro",
  ],
});
