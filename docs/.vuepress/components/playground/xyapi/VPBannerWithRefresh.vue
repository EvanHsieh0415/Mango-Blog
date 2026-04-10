<script setup>
import { ref, computed } from 'vue'

const contentData = ref({
  tag: "生活",
  name: "佚名",
  origin: "木芽",
  content: "有些东西可以留下，例如服务器操作日志，数据库操作日志。有些东西转身就删了，例如聊天记录，每天清除一切软件的聊天记录，是我每天乐于干的一件事，留着过夜的记录是我一天的失败"
})

const loading = ref(false)
const updateKey = ref(0) // 強制重新渲染的 key

async function fetchData() {
  loading.value = true

  try {
    const res = await fetch('https://api.xygeng.cn/openapi/one')
    const json = await res.json()

    if (json?.data) {
      contentData.value = {
        tag: json.data.tag || '',
        name: json.data.name || '佚名',
        origin: json.data.origin || '',
        content: json.data.content || ''
      }
      // 強制組件重新渲染
      updateKey.value++
    }
  } catch (error) {
    console.error('Failed to fetch data:', error)
  } finally {
    loading.value = false
  }
}

const computedTitle = computed(() => {
  const tag = contentData.value.tag ? `[${contentData.value.tag}]` : ''
  const origin = contentData.value.origin || ''
  return `${tag} ${origin}`.trim()
})

const computedContent = computed(() => {
  const content = contentData.value.content || ''
  const name = contentData.value.name || '佚名'
  return `${content} —— ${name}`
})
</script>

<template>
  <div class="banner-wrapper" :key="updateKey">
    <div class="banner-content">
      <div class="banner-title">{{ computedTitle }}</div>
      <div class="banner-text">{{ computedContent }}</div>
    </div>
    <button @click="fetchData" :disabled="loading" class="refresh-btn">
      {{ loading ? '加載中...' : '刷新內容' }}
    </button>
  </div>
</template>

<style scoped>
.banner-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  color: white;
  font-family: system-ui, -apple-system, sans-serif;
  /* 避免自訂字體 */
}

.banner-content {
  flex: 1;
}

.banner-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.banner-text {
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.95;
}

.refresh-btn {
  align-self: flex-start;
  padding: 8px 24px;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.refresh-btn:hover:not(:disabled) {
  background-color: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.6);
}

.refresh-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>