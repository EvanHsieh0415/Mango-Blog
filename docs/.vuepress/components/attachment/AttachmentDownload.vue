<template>
  <a :href="link" download>{{ text }}</a>
</template>

<script setup lang="ts">
interface Props {
  link: string;
  text: string;
}

const props = defineProps<Props>();
</script>
