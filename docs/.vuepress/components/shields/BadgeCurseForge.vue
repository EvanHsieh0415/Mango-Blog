<template>
  <a :href="aHref" class="custom-badge" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/CurseForge-313338?style=for-the-badge&logo=CurseForge" :alt="imageAlt"
      rel="noopener noreferrer" />
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  name?: string;
  path: string | number;
}

const props = defineProps<Props>();

const aHref = computed(() => {
  // path 是數字（或可轉成數字）時，走 projects 路徑，否則走 minecraft 路徑
  return Number.isInteger(Number(props.path))
    ? `https://curseforge.com/projects/${props.path}`
    : `https://curseforge.com/minecraft/${props.path}`;
});

const imageAlt = computed(() => `${props.name ?? props.path} CurseForge Badge`);
</script>