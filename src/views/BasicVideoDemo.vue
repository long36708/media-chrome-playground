<!--
 * @Author: longmo
 * @Date: 2026-03-18 23:15:11
 * @LastEditTime: 2026-03-18 23:45:39
 * @FilePath: src/views/BasicVideoDemo.vue
 * @Description:
-->
<script setup>
import { ref, onMounted } from 'vue'
import 'media-chrome'

const videoUrl = ref('https://stream.mux.com/A3VXy02VoUinw01pwyomEO3bHnG4P32xzV7u1j1FSzjNg/high.mp4')
const currentSrc = ref('')
const videoRef = ref(null)

const loadUrl = () => {
  if (videoUrl.value) {
    currentSrc.value = videoUrl.value
    if (videoRef.value) {
      videoRef.value.src = videoUrl.value
    }
  }
}

const loadFile = (event) => {
  const file = event.target.files[0]
  if (file) {
    currentSrc.value = URL.createObjectURL(file)
    if (videoRef.value) {
      videoRef.value.src = currentSrc.value
    }
  }
}

onMounted(() => {
  loadUrl()
})
</script>

<template>
  <div>
    <h2>Media Chrome - Basic Video Usage Example</h2>

    <div class="controls">
      <div class="url-input">
        <label>视频URL:</label>
        <input v-model="videoUrl" type="text" placeholder="输入视频URL" />
        <button @click="loadUrl">加载URL</button>
      </div>

      <div class="file-input">
        <label>选择本地文件:</label>
        <input type="file" accept="video/*" @change="loadFile" />
      </div>
    </div>

    <media-controller>
      <video ref="videoRef" playsinline="" slot="media" :src="currentSrc"></video>
      <media-poster-image slot="poster" src="https://image.mux.com/A3VXy02VoUinw01pwyomEO3bHnG4P32xzV7u1j1FSzjNg/thumbnail.jpg" placeholdersrc="data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUADADASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAECBAP/xAAdEAEBAAEEAwAAAAAAAAAAAAAAARECAxITFCFR/8QAGQEAAwADAAAAAAAAAAAAAAAAAAEDAgQF/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAETERL/2gAMAwEAAhEDEQA/ANeC4ldyI1b2EtIzzrrIqYZLvl5FGkGdbfQzGPvo76WsPxXLlfqbaA5va2iVJADgPELACsD/2Q=="></media-poster-image>
      <media-loading-indicator slot="centered-chrome" noautohide=""></media-loading-indicator>
      <media-control-bar>
        <media-play-button></media-play-button>
        <media-mute-button></media-mute-button>
        <media-volume-range></media-volume-range>
        <media-time-display></media-time-display>
        <media-time-range></media-time-range>
        <media-duration-display></media-duration-display>
        <media-playback-rate-button></media-playback-rate-button>
        <media-fullscreen-button></media-fullscreen-button>
      </media-control-bar>
    </media-controller>
  </div>
</template>

<style scoped>
.controls {
  margin: 20px 0;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.url-input,
.file-input {
  display: flex;
  align-items: center;
  gap: 10px;
}

.url-input input[type="text"] {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 400px;
  font-size: 14px;
}

.url-input button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.url-input button:hover {
  background-color: #0056b3;
}

.file-input input[type="file"] {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

label {
  font-weight: 500;
  font-size: 14px;
}
</style>
