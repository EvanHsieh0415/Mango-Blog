<template>
  <a :href="aHref" class="custom-badge" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Github-313338?style=for-the-badge&logo=Github" :alt="imageAlt"
      rel="noopener noreferrer" />
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  name?: string;
  path: string;
}

const props = defineProps<Props>();

const aHref = computed(() => `https://github.com/${props.path}`);

const imageAlt = computed(() => `${props.name ?? props.path} GitHub Badge`);
</script>