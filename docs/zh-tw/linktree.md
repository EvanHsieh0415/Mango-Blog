---
icon: circle-info
isOriginal: true
title: Linktree
sidebar: false
---

:::center

## 社群平台

<VPCard v-for="link in Links.socialMedia"
  :key="link.title"
  :title="link.title"
  :desc="link.desc"
  :logo="link.logo"
  :link="link.link.toString()"
/>

## 遊戲

### Minecraft

<VPCard v-for="link in Links.games.minecraft"
  :key="link.title"
  :title="link.title"
  :desc="link.desc"
  :logo="link.logo"
  :link="link.link.toString()"
/>

:::

<style>
  .vp-card-logo {
    height: 3em;
    width: auto;
    border-radius: 0% !important;
    image-rendering: pixelated;    /* 放大時保持像素感 (鋸齒狀) */
    image-rendering: crisp-edges;  /* 嘗試保持銳利邊緣 (不同瀏覽器支援度不同) */
  }
  .theme-container.no-sidebar.has-toc .vp-page {
    padding-inline-end: 0;
  }
</style>

<script setup lang="ts">
  class Link {
    public link: URL;
    public logo: string;

    constructor(title: string, desc: string, logo: string, link: string);
    constructor(title: string, desc: string, link: string);
    
    constructor(
      public title: string,
      public desc: string,
      link: string,
      logo: string = undefined
    ) {
      this.link = new URL(link);
      if (logo) {
        this.logo = logo;
      } else {
        this.logo = `${this.link.protocol}//${this.link.hostname}/favicon.ico`;
      }
    }
  }

  const Links = {
    socialMedia: [
      new Link(
        "芒果凍布丁",
        "Youtube",
        "https://www.youtube.com/@%E8%8A%92%E6%9E%9C%E5%87%8D%E5%B8%83%E4%B8%81",
        "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
      ),
      new Link(
        "芒果凍布丁4我啦",
        "Twitch",
        "https://www.twitch.tv/cl_mango",
        "https://cdn-icons-png.flaticon.com/512/5968/5968819.png",
      ),
      new Link(
        "u/MangoJellyPudding999",
        "Reddit",
        "https://www.reddit.com/user/MangoJellyPudding999/",
        "https://cdn-icons-png.flaticon.com/512/5968/5968908.png",
      ),
      new Link(
        "@YTMango1",
        "X / Twitter",
        "https://x.com/YTMango1",
        "https://cdn-icons-png.flaticon.com/512/5968/5968958.png",
      ),
      new Link(
        "@ytmango.bsky.social",
        "Bluesky",
        "https://bsky.app/profile/ytmango.bsky.social",
        "https://upload.wikimedia.org/wikipedia/commons/7/7a/Bluesky_Logo.svg",
      ),
      new Link(
        "Default",
        "Discord",
        "https://discord.com/invite/SCAfRyAVnR",
        "https://cdn-icons-png.flaticon.com/512/5968/5968756.png",
      ),
      new Link(
        "芒果冻布丁",
        "BiliBili",
        "https://space.bilibili.com/430008973",
        "https://img.icons8.com/?id=5E24fZ9ORelo&format=png",
      ),
      new Link(
        "EvanHsieh0415",
        "Github",
        "https://github.com/EvanHsieh0415",
        "https://cdn-icons-png.flaticon.com/512/2111/2111432.png",
      ),
    ],
    games: {
      minecraft: [
        new Link(
          "MangoJellyPudding",
          "Modrinth",
          "https://modrinth.com/user/MangoJellyPudding",
          "https://cdn.modrinth.com/modrinth-new.png",
        ),
        new Link(
          "MangoJellyPudding",
          "CurseForge",
          "https://www.curseforge.com/members/cl_mango/"
        ),
        new Link(
          "芒果凍布丁",
          "MC 百科",
          "https://www.mcmod.cn/author/27768.html",
        ),
        new Link(
          "芒果凍布丁",
          "XYEBBS",
          "https://bbs.xyeidc.com/members/129047",
          "/icon/xyebbs.png",
        ),
        new Link(
          "芒果凍布丁",
          "BBSMC",
          "https://bbsmc.net/user/%E8%8A%92%E6%9E%9C%E5%87%8D%E5%B8%83%E4%B8%81"
        )
      ]
    }
  }
</script>
