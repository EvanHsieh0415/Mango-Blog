<script setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  }
});

const aHref = computed(() => {
  return `https://curseforge.com/${props.path}`;
});

const ImageAlt = computed(() => {
  return `${props.name} CurseForge Badge`;
});
</script>

<template>
  <a :href="aHref"><img src="https://img.shields.io/badge/CurseForge-313338?style=for-the-badge&logo=CurseForge" :alt="ImageAlt" class="wool-icon" /></a>
</template>
