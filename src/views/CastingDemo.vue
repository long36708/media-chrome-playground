<!--
 * @Author: longmo
 * @Date: 2026-03-18 23:49:12
 * @LastEditTime: 2026-03-18 23:55:06
 * @FilePath: src/views/CastingDemo.vue
 * @Description: 轻松将你的视频元素投射到大屏幕上
 -->
<script setup>
import 'castable-video'
</script>

<template>

  <h2>轻松将你的视频元素投射到大屏幕上</h2>

  <media-controller defaultsubtitles="">
    <castable-video slot="media" src="https://stream.mux.com/O6LdRc0112FEJXH00bGsN9Q31yu5EIVHTgjTKRkKtEq1k/high.mp4" poster="https://image.mux.com/O6LdRc0112FEJXH00bGsN9Q31yu5EIVHTgjTKRkKtEq1k/thumbnail.jpg?time=56" muted="" crossorigin="" playsinline="">
      <track label="thumbnails" default="" kind="metadata" src="https://image.mux.com/O6LdRc0112FEJXH00bGsN9Q31yu5EIVHTgjTKRkKtEq1k/storyboard.vtt">
      <track label="English" kind="captions" srclang="en" src="https://media-chrome.mux.dev/examples/vanilla/vtt/bbb-en-cc.vtt">
    </castable-video>
    <media-loading-indicator slot="centered-chrome" noautohide=""></media-loading-indicator>
    <media-control-bar>
      <media-play-button></media-play-button>
      <media-seek-backward-button seekoffset="15"></media-seek-backward-button>
      <media-seek-forward-button seekoffset="15"></media-seek-forward-button>
      <media-mute-button></media-mute-button>
      <media-volume-range></media-volume-range>
      <media-time-range></media-time-range>
      <media-time-display showduration="" remaining=""></media-time-display>
      <media-captions-button></media-captions-button>
      <media-playback-rate-button></media-playback-rate-button>
      <media-pip-button></media-pip-button>
      <media-airplay-button></media-airplay-button>
      <media-cast-button></media-cast-button>
      <media-fullscreen-button></media-fullscreen-button>
    </media-control-bar>
  </media-controller>
</template>

<style scoped>

</style>
