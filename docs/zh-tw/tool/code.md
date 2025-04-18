---
title: 神秘代碼解碼
---

<ClientOnly>

| 類型        | <input v-model="code" />                          |
| ----------- | ------------------------------------------------- |
| Pixiv       | <a :href="pixiv"><code>{{pixiv}}</code></a>       |
| Twitter / X | <a :href="twitter"><code>{{twitter}}</code></a>   |
| Discord     | <a :href="discord"><code>{{discord}}</code></a>   |
| NHentai     | <a :href="nhentai"><code>{{nhentai}}</code></a>   |
| 18comic     | <a :href="_18comic"><code>{{_18comic}}</code></a> |
</ClientOnly>

<style scoped lang="scss">
  input {
    width: 100%;
    border-radius: 4px;
  }
</style>

<script lang="ts">
export default {
  data() {
    return {
      code: "",
    };
  },
  computed: {
    pixiv() { return `https://www.pixiv.net/artworks/${this.code}`; },
    twitter() { return `https://x.com/i/status/${this.code}`; },
    discord() { return `https://discord.com/invite/${this.code}`; },
    nhentai() { return `https://nhentai.net/g/${this.code}`; },
    _18comic() { return `https://18comic.org/album/${this.code}`; },
  },
};
</script>
