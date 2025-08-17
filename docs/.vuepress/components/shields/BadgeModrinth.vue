<template>
  <a :href="aHref" class="custom-badge" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Modrinth-313338?style=for-the-badge&logo=Modrinth" :alt="imageAlt" />
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  name?: string;
  path: string;
}

const props = defineProps<Props>();

const aHref = computed(() =>
  props.path.startsWith("i-")
    ? `https://modrinth.com/project/${props.path.slice(2)}`
    : `https://modrinth.com/${props.path}`
);

const imageAlt = computed(() => `${props.name ?? props.path} Modrinth Badge`);
</script>