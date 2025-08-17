<template>
  <div v-if="hasInfoBox" class="component-modinfo-block">
    <div v-if="name">{{ locale.name }}<br />　{{ name }}</div>
    <div v-if="author">{{ locale.author }}<br />　{{ author }}</div>
    <div v-if="hasExternalLink">
      <span v-for="link in externalLinks" :key="link.key">
        <component :is="`Badge${link.key}`" :path="link.url.value" /><br />
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.component-modinfo-block {
  background-color: var(--vp-c-bg-alt);
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  margin: 0.5rem 1rem;

  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: var(--vp-c-text-mute);

  div {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    white-space: nowrap;
  }
}
</style>

<script setup lang="ts">
import { usePageFrontmatter } from "vuepress/client";
import { useLocaleConfig } from "@vuepress/helper/client";
import { computed } from "vue";

const locale = useLocaleConfig({
  "/": {
    name: "Mod Name: ",
    author: "Author: ",
  },
  "/zh-cn/": {
    name: "模组名称：",
    author: "作者：",
  },
  "/zh-tw/": {
    name: "模組名稱：",
    author: "作者：",
  },
});

interface ModData {
  name?: string;
  author?: string | string[];
  CurseForge?: string;
  Modrinth?: string;
  GitHub?: string;
  McMod?: string;
  Wiki?: string;
}

// get frontmatter
const frontmatter = usePageFrontmatter<{ mod?: ModData }>().value;
const mod = computed(() => frontmatter.mod ?? {});

// get name and author
const name = computed(() => mod.value.name);
const author = computed(() => {
  const { author } = mod.value;
  if (Array.isArray(author)) return author.join(", ");
  return author;
});

// get external links
function getFirstAvailableKey<T extends object>(obj: T, keys: (keyof T | string)[]): any {
  for (const key of keys) {
    if (obj[key as keyof T] !== undefined) return obj[key as keyof T];
  }
  return undefined;
}

const modKeyMap = {
  CurseForge: ["CurseForge", "curseforge"],
  Modrinth: ["Modrinth", "modrinth"],
  GitHub: ["GitHub", "Github", "github"],
  McMod: ["McMod", "Mcmod", "mcmod"],
  Wiki: ["Wiki", "wiki"],
};

function getModField(field: keyof typeof modKeyMap) {
  return computed(() => getFirstAvailableKey(mod.value, modKeyMap[field]));
}

const externalLinks = computed(() =>
  (Object.keys(modKeyMap) as (keyof typeof modKeyMap)[])
    .map((key) => ({
      key,
      url: getModField(key),
    }))
    .filter((link) => link.url.value)
);

// checkers
const hasExternalLink = computed(() => externalLinks.value.length);
const hasInfoBox = computed(() => mod.value && (name.value || author.value || hasExternalLink.value));
</script>
