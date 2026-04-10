---
title: MC百科用模組橫幅生成工具
---

# MC百科用模組橫幅生成工具

這個工具專為生成 MC百科所需的橫幅比例設計。上傳圖片後，預設會自動套用模糊背景填充模式。

<ClientOnly>
  <div class="tool-container">
    <div class="upload-section">
      <input type="file" ref="fileInput" @change="handleUpload" accept="image/*" />
      <p v-if="!originalImg" class="hint-text">請上傳圖片以開始處理橫向影像</p>
    </div>
    <div v-if="originalImg" class="controls">
      <div class="button-group">
        <button @click="process('stretch')">橫向強行拉伸</button>
        <button @click="process('blur-fill')">模糊背景填充</button>
        <button @click="process('color-fill')">自定義顏色填充</button>
        <button @click="process('transparent')">透明填充</button>
      </div>
      <div class="settings-row">
        <div class="setting-item">
          <label>前景縮放: {{ Math.round(foregroundScale * 100) }}%</label>
          <input type="range" v-model="foregroundScale" min="0.1" max="1.0" step="0.02" @input="updatePreview" @change="syncDownloadUrl" />
        </div>
        <div class="setting-item" v-if="currentMode === 'blur-fill'">
          <label>背景模糊: {{ backgroundBlur }}px</label>
          <input type="range" v-model="backgroundBlur" min="0" max="100" step="1" @input="updatePreview" @change="syncDownloadUrl" />
        </div>
        <div class="setting-item" v-if="currentMode === 'blur-fill'">
          <label>背景處理模式:</label>
          <div class="radio-group">
            <label class="radio-label">
              <input type="radio" value="stretch-bg" v-model="bgStyle" @change="handleBgStyleChange" />
              直接拉伸 (16:10)
            </label>
            <label class="radio-label">
              <input type="radio" value="crop-bg" v-model="bgStyle" @change="handleBgStyleChange" />
              1:1 裁切 (16:16)
            </label>
          </div>
        </div>
        <div class="setting-item" v-if="currentMode === 'color-fill'">
          <label>背景顏色:</label>
          <input type="color" v-model="bgColor" @input="updatePreview" @change="syncDownloadUrl" />
        </div>
      </div>
    </div>
    <div class="preview-area" v-if="originalImg">
      <h3>圖片預覽 (16:10)</h3>
      <div class="canvas-wrapper">
        <canvas ref="mainCanvas"></canvas>
      </div>
      <div class="download-section">
        <button class="download-btn" @click="downloadImage" v-if="processedUrl">
          下載圖片
        </button>
      </div>
    </div>
  </div>
</ClientOnly>

<script setup>
import { ref, nextTick } from 'vue'

const fileInput = ref(null)
const mainCanvas = ref(null)
const originalImg = ref(null)
const processedUrl = ref(null)
const currentMode = ref('blur-fill')
const foregroundScale = ref(0.8)
const backgroundBlur = ref(40)
const bgColor = ref('#ffffff')
const bgStyle = ref('crop-bg')

const handleUpload = (e) => {
  const file = e.target.files[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = (event) => {
    const img = new Image()
    img.onload = async () => {
      originalImg.value = img
      // 確保 Vue 渲染出 Canvas 節點後再繪圖
      await nextTick()
      process('blur-fill')
    }
    img.src = event.target.result
  }
  reader.readAsDataURL(file)
}

const handleBgStyleChange = () => {
  updatePreview()
  syncDownloadUrl()
}

const updatePreview = () => {
  renderCanvas(currentMode.value)
}

const syncDownloadUrl = () => {
  if (mainCanvas.value) {
    processedUrl.value = mainCanvas.value.toDataURL('image/png')
  }
}

const process = (mode) => {
  currentMode.value = mode
  updatePreview()
  syncDownloadUrl()
}

const renderCanvas = (mode) => {
  const canvas = mainCanvas.value
  if (!canvas || !originalImg.value) return
  const ctx = canvas.getContext('2d')
  const img = originalImg.value

  const targetW = 1600
  const targetH = 1000
  canvas.width = targetW
  canvas.height = targetH

  const baseScale = Math.min(targetW / img.width, targetH / img.height)
  const finalScale = baseScale * foregroundScale.value
  const renderW = img.width * finalScale
  const renderH = img.height * finalScale
  const x = (targetW - renderW) / 2
  const y = (targetH - renderH) / 2

  ctx.clearRect(0, 0, targetW, targetH)

  switch (mode) {
    case 'stretch':
      ctx.drawImage(img, 0, 0, targetW, targetH)
      break
    case 'blur-fill':
      ctx.save()
      ctx.filter = `blur(${backgroundBlur.value}px) brightness(0.8)`
      if (bgStyle.value === 'stretch-bg') {
        ctx.drawImage(img, 0, 0, targetW, targetH)
      } else {
        const side = Math.max(targetW, 1600) 
        ctx.drawImage(img, (targetW - side) / 2, (targetH - side) / 2, side, side)
      }
      ctx.restore()
      ctx.drawImage(img, x, y, renderW, renderH)
      break
    case 'color-fill':
      ctx.fillStyle = bgColor.value
      ctx.fillRect(0, 0, targetW, targetH)
      ctx.drawImage(img, x, y, renderW, renderH)
      break
    case 'transparent':
      ctx.drawImage(img, x, y, renderW, renderH)
      break
  }
}

const downloadImage = () => {
  syncDownloadUrl()
  const link = document.createElement('a')
  link.download = `mc-banner-${Date.now()}.png`
  link.href = processedUrl.value
  link.click()
}
</script>

<style scoped>
.tool-container {
  margin: 2rem 0;
  padding: 1.5rem;
  border: 1px solid var(--c-border, #ddd);
  border-radius: 12px;
  background: var(--c-bg-light, #f9f9f9);
  color: var(--c-text, #2c3e50);
}
.hint-text { color: var(--c-text-lighter); }
.controls { margin: 1.5rem 0; }
.button-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.settings-row {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  align-items: flex-start;
}
.setting-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.setting-item label {
  font-size: 0.85rem;
  font-weight: bold;
}
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: rgba(0,0,0,0.03);
  padding: 8px;
  border-radius: 6px;
}
.radio-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: normal !important;
  cursor: pointer;
  font-size: 0.85rem;
}
input[type="range"] { width: 180px; }
input[type="color"] {
  width: 50px;
  height: 30px;
  padding: 0;
  border: 1px solid var(--c-border);
  cursor: pointer;
}
button {
  padding: 8px 18px;
  border-radius: 6px;
  border: 1px solid #3eaf7c;
  background: #3eaf7c;
  color: white;
  cursor: pointer;
  font-weight: 500;
}
.download-btn {
  background: #2c3e50;
  border-color: #2c3e50;
  padding: 12px 24px;
}
.preview-area {
  text-align: center;
  border-top: 1px dashed var(--c-border);
}
.canvas-wrapper {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}
canvas {
  max-width: 100%;
  height: auto;
  border: 2px solid #3eaf7c;
  border-radius: 4px;
  background-color: #ffffff;
  background-image: linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
                    linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
                    linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
                    linear-gradient(-45deg, transparent 75%, #f0f0f0 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}
</style>