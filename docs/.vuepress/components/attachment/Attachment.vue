<template>
  <component :is="currentComponent" :link="resolvedLink" :text="resolvedText" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vuepress/client";
import Image from "./AttachmentImage.vue";
import Video from "./AttachmentVideo.vue";
import Download from "./AttachmentDownload.vue";

interface Props {
  type?: "download" | "video" | "image";
  link: string;
  text?: string;
}

const props = defineProps<Props>();

// 預設副檔名對應組件的映射
const extensionComponentMap: Record<string, any> = {
  mp4: Video,
  mp3: Video,
  ogg: Video,
  png: Image,
  jpg: Image,
  jpeg: Image,
  gif: Image,
};

// 取副檔名（更嚴謹，忽略 query/hash）
function getExtension(filename: string): string {
  // 去掉查詢字串與哈希
  const cleanName = filename.split(/[?#]/)[0];
  const dotIndex = cleanName.lastIndexOf(".");
  if (dotIndex === -1) return "";
  return cleanName.slice(dotIndex + 1).toLowerCase();
}

const route = useRoute();

// 計算組件
const currentComponent = computed(() => {
  if (props.type) {
    switch (props.type) {
      case "download":
        return Download;
      case "video":
        return Video;
      case "image":
        return Image;
    }
  }
  const ext = getExtension(props.link);
  return extensionComponentMap[ext] ?? Download;
});

// 安全組合路徑，確保最後有 `/`
const resolvedLink = computed(() => {
  // 把路徑轉成不帶.html 且以 '/' 結尾
  const basePath = route.path.replace(/\.html$/, "/");
  // 避免多餘的斜線，拼接成絕對路徑
  const url = new URL(props.link, `https://example.com${basePath}`);
  return url.pathname; // 會保留斜線開頭的路徑
});

const resolvedText = computed(() => props.text ?? props.link);
</script>
