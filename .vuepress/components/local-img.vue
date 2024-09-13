<script setup>
import { computed } from "vue";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  alt: {
    type: String,
    required: false,
  },
});

const imgSrc = computed(() => {
  return `/.../${props.path}`; // todo: get current file path
});

const ImageAlt = computed(() => {
  return ;
});
</script>

<template>
  <img :src="imgSrc" :alt="ImageAlt" />
</template>
