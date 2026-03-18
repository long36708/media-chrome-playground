<script setup>
import { ref } from 'vue'
import 'media-chrome'

const videoUrl = ref('https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4')

const handleUrlChange = (event) => {
  videoUrl.value = event.target.value
}

const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    videoUrl.value = URL.createObjectURL(file)
  }
}
</script>

<template>
  <div class="media-controls">
    <div class="input-group">
      <label for="video-url">视频 URL:</label>
      <input
        id="video-url"
        type="text"
        :value="videoUrl"
        @change="handleUrlChange"
        placeholder="输入视频 URL"
      />
    </div>
    <div class="input-group">
      <label for="file-input">选择本地文件:</label>
      <input
        id="file-input"
        type="file"
        accept="video/*"
        @change="handleFileChange"
      />
    </div>
  </div>

  <media-controller>
    <video
        slot="media"
        :src="videoUrl"
    ></video>
    <media-control-bar>
      <media-play-button></media-play-button>
      <media-mute-button></media-mute-button>
      <media-volume-range></media-volume-range>
      <media-time-range></media-time-range>
      <media-pip-button></media-pip-button>
      <media-fullscreen-button></media-fullscreen-button>
    </media-control-bar>
  </media-controller>
</template>

<style scoped>
.media-controls {
  margin-bottom: 1rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
}

.input-group {
  margin-bottom: 0.75rem;
}

.input-group:last-child {
  margin-bottom: 0;
}

label {
  display: block;
  margin-bottom: 0.25rem;
  font-weight: 500;
  color: #333;
}

input[type="text"],
input[type="file"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

input[type="text"]:focus,
input[type="file"]:focus {
  outline: none;
  border-color: #4CAF50;
}
</style>
