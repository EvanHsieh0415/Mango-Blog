<template>
  <a :href="aHref" class="custom-badge" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Wiki-313338?style=for-the-badge&logo=wikipedia" :alt="imageAlt" />
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  name?: string;
  path: string;
}

const props = defineProps<Props>();

const aHref = computed(() => `https://wiki.mcmod.cn/${props.path}`);
const imageAlt = computed(() => `${props.name ?? props.path} Wiki Badge`);
</script>
