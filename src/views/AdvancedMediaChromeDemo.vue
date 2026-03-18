<!--
 * @Author: longmo
 * @Date: 2026-03-18 23:09:17
 * @LastEditTime: 2026-03-18 23:45:25
 * @FilePath: src/views/AdvancedMediaChromeDemo.vue
 * @Description:  HLS (m3u8) 流媒体视频播放演示
-->
<script setup>
import { ref, onMounted } from 'vue'
import 'media-chrome'
import 'hls-video-element';

const videoUrl = ref('https://stream.mux.com/Sc89iWAyNkhJ3P1rQ02nrEdCFTnfT01CZ2KmaEcxXfB008.m3u8')
const currentSrc = ref('')
const videoRef = ref(null)
const fileInput = ref(null)
const isHLS = ref(false)

const loadUrl = () => {
  if (videoUrl.value) {
    currentSrc.value = videoUrl.value
    isHLS.value = videoUrl.value.endsWith('.m3u8')
    if (videoRef.value) {
      videoRef.value.src = videoUrl.value
    }
  }
}

const loadFile = (event) => {
  const file = event.target.files[0]
  if (file) {
    currentSrc.value = URL.createObjectURL(file)
    isHLS.value = false
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
    <h2>Media Chrome - Advanced Video Usage Example</h2>

    <div class="controls">
      <div class="url-input">
        <label>视频URL:</label>
        <input v-model="videoUrl" type="text" placeholder="输入视频URL" />
        <button @click="loadUrl">加载URL</button>
      </div>

      <div class="file-input">
        <label>选择本地文件:</label>
        <input ref="fileInput" type="file" accept="video/*" @change="loadFile" />
      </div>
    </div>

    <media-controller id="mc" defaultsubtitles="" keyboardforwardseekoffset="15" keyboardbackwardseekoffset="5">
      <hls-video v-if="isHLS" ref="videoRef" id="video" slot="media" :src="currentSrc" stream-type="on-demand" preload="metadata" playsinline="" crossorigin="">
        <track default="" kind="metadata" label="thumbnails" src="https://image.mux.com/Sc89iWAyNkhJ3P1rQ02nrEdCFTnfT01CZ2KmaEcxXfB008/storyboard.vtt">
        <track default="" kind="chapters" src="https://media-chrome.mux.dev/examples/vanilla/vtt/elephantsdream/chapters.vtt">
      </hls-video>
      <video v-else ref="videoRef" slot="media" :src="currentSrc" playsinline="" preload="metadata"></video>
      <img slot="poster" srcset="
        https://image.mux.com/Sc89iWAyNkhJ3P1rQ02nrEdCFTnfT01CZ2KmaEcxXfB008/thumbnail.webp?time=13&amp;width=640 640w,
        https://image.mux.com/Sc89iWAyNkhJ3P1rQ02nrEdCFTnfT01CZ2KmaEcxXfB008/thumbnail.webp?time=13&amp;width=960 960w,
        https://image.mux.com/Sc89iWAyNkhJ3P1rQ02nrEdCFTnfT01CZ2KmaEcxXfB008/thumbnail.webp?time=13&amp;width=1280 1280w,
        https://image.mux.com/Sc89iWAyNkhJ3P1rQ02nrEdCFTnfT01CZ2KmaEcxXfB008/thumbnail.webp?time=13 1920w
      " alt="Elephants Dream" decoding="async">
      <media-loading-indicator slot="centered-chrome" noautohide=""></media-loading-indicator>
      <media-error-dialog slot="dialog"></media-error-dialog>
      <media-settings-menu anchor="auto" hidden="">
        <media-settings-menu-item>
          Speed
          <media-playback-rate-menu slot="submenu" hidden="">
            <div slot="title">Speed</div>
          </media-playback-rate-menu>
        </media-settings-menu-item>
        <media-settings-menu-item>
          Quality
          <media-rendition-menu slot="submenu" hidden="">
            <div slot="title">Quality</div>
          </media-rendition-menu>
        </media-settings-menu-item>
        <media-settings-menu-item>
          Captions
          <media-captions-menu slot="submenu" hidden="">
            <div slot="title">Captions</div>
          </media-captions-menu>
        </media-settings-menu-item>
        <media-settings-menu-item>
          Audio
          <media-audio-track-menu slot="submenu" hidden="">
            <div slot="title">Audio</div>
          </media-audio-track-menu>
        </media-settings-menu-item>
      </media-settings-menu>
      <media-control-bar>
        <media-play-button></media-play-button>
        <media-seek-backward-button seekoffset="5"></media-seek-backward-button>
        <media-seek-forward-button seekoffset="15"></media-seek-forward-button>
        <media-mute-button></media-mute-button>
        <media-time-display></media-time-display>
        <media-time-range></media-time-range>
        <media-duration-display></media-duration-display>
        <media-settings-menu-button></media-settings-menu-button>
        <media-pip-button></media-pip-button>
        <media-cast-button></media-cast-button>
        <media-airplay-button></media-airplay-button>
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

<style scoped>

</style>
