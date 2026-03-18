<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => {
  router.push('/')
}

const goToBasic = () => {
  router.push('/basic')
}

const goToAdvanced = () => {
  router.push('/advanced')
}

const goToCasting = () => {
  router.push('/casting')
}
</script>

<template>
  <div class="app">
    <nav class="nav">
      <button :class="{ active: $route.path === '/' }" @click="goToHome">基础播放器</button>
      <button :class="{ active: $route.path === '/basic' }" @click="goToBasic">基础演示</button>
      <button :class="{ active: $route.path === '/advanced' }" @click="goToAdvanced">高级演示</button>
      <button :class="{ active: $route.path === '/casting' }" @click="goToCasting">投屏演示</button>
    </nav>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.nav {
  padding: 1rem 2rem;
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  gap: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav button {
  padding: 0.5rem 1.5rem;
  border: none;
  background: #f5f5f5;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  transition: all 0.2s;
}

.nav button:hover {
  background: #e0e0e0;
}

.nav button.active {
  background: #007bff;
  color: white;
}

.content {
  flex: 1;
  padding: 2rem;
}
</style>
