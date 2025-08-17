<template>
  <VidStack :src="link" :title="text" />
</template>

<script setup lang="ts">
interface Props {
  link: string;
  text?: string;
}

const props = defineProps<Props>();
</script>
