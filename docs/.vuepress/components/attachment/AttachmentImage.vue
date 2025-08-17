<template>
  <figure>
    <img :src="link" :alt="text || 'image'" />
    <figcaption v-if="text">{{ text }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
interface Props {
  link: string;
  text?: string;
}

const props = defineProps<Props>();
</script>
