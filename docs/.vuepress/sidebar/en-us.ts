import { sidebar } from "vuepress-theme-hope";

export const enUsSidebar = sidebar({
  "/en-us/": [
    "/en-us/",
    {
      text: "Articles",
      icon: "book",
      link: "posts/",
      prefix: "posts/",
      children: "structure",
    },
    {
      text: "Learning Notes",
      icon: "book",
      link: "studing/",
      prefix: "studing/",
      children: "structure",
    },
    {
      text: "Game Column",
      icon: "gamepad",
      link: "games/",
      prefix: "games/",
      children: "structure",
    },
    "intro",
  ],
});
