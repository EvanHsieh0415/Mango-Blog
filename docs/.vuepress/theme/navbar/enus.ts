import { navbar } from "vuepress-theme-hope";

export const enusNavbar = navbar([
  "/",
  {
    text: "Articles",
    icon: "pen-to-square",
    link: "/posts/",
  },
  {
    text: "Learning Notes",
    icon: "pen-to-square",
    link: "/studing/",
  },
  {
    text: "Game Column",
    icon: "gamepad",
    link: "/games/",
  },
]);
