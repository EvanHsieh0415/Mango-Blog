---
title: 神秘代碼解碼
description: 這是一些網站的代碼轉換器，讓你可以快速地將代碼轉換為網址。
icon: file-shield
pageInfo: [ "Author", "Date" ]
contributors: false
---

<ClientOnly>

<table>
  <thead>
    <tr>
      <th>類型</th>
      <th><input v-model="code" /></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="name in services" :key="index">
      <td><img :src="getIcon(name)" class="icon" /> {{ name }}</td>
      <td><a :href="getUrl(name)"><code>{{ getUrl(name) }}</code></a></td>
    </tr>
  </tbody>
</table>

</ClientOnly>

<style scoped lang="scss">
  input {
    width: 100%;
    border-radius: 4px;
  }

  .icon {
    width: 1em;
  }
</style>

<script lang="ts">
const _services = {
  Pixiv: "https://www.pixiv.net/artworks/{code}",
  "Twitter / X": "https://x.com/i/status/{code}",
  Discord: "https://discord.com/invite/{code}",
  NHentai: "https://nhentai.net/g/{code}",
  "禁漫天堂": "https://18comic.org/album/{code}",
};
const specialConsumers = {
  icon: {
    Discord: "https://cdn-icons-png.flaticon.com/512/5968/5968756.png",
  }
}

export default {
  data() {
    return {
      code: "",
      services: Object.keys(_services),
    };
  },
  methods: {
    getUrl(service: string): string {
      return _services[service].replace("{code}", this.code);
    },
    getIcon(service: string): string {
      return specialConsumers.icon[service] ?? new URL(this.getUrl(service)).origin + "/favicon.ico";
    }
  }
};
</script>
