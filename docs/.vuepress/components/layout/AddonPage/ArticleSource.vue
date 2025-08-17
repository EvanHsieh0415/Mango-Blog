<template>
  <div v-if="infoList.length" class="component-info-block">
    <div v-for="item in infoList" :key="item.key">{{ item.label }}<span v-html="item.content"></span></div>
  </div>
</template>

<style lang="scss" scoped>
.component-info-block {
  background-color: var(--vp-c-bg-alt);
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  margin: 0.5rem 1rem;

  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: var(--vp-c-text-mute);

  text-align: center;
}
</style>

<script setup lang="ts">
import { usePageFrontmatter } from "vuepress/client";
import { useLocaleConfig } from "@vuepress/helper/client";
import { computed } from "vue";

const locale = useLocaleConfig({
  "/": {
    source: "Original Article:",
    license: "License: ",
    idea: "Idea from: ",
  },
  "/zh-cn/": {
    source: "原文：",
    license: "许可：",
    idea: "灵感来源：",
  },
  "/zh-tw/": {
    source: "原文：",
    license: "許可：",
    idea: "靈感來源：",
  },
}).value;

const frontmatter = usePageFrontmatter();
const displayName = ["source", "license", "idea"] as const;
const infoList = computed(() =>
  displayName
    .filter((key) => frontmatter.value[key])
    .map((key) => ({
      key,
      label: locale[key],
      content:
        key === "source" || key === "idea"
          ? `<a href="${frontmatter.value[key]}" target="_blank" rel="noopener noreferrer">${frontmatter.value[key]}</a>`
          : frontmatter.value[key],
    }))
);
</script>
