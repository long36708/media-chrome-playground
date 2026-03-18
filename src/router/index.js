import { createRouter, createWebHistory } from 'vue-router'
import MediaPlayer from '../components/MediaPlayer.vue'
import BasicVideoDemo from '../views/BasicVideoDemo.vue'
import AdvancedMediaChromeDemo from '../views/AdvancedMediaChromeDemo.vue'
import CastingDemo from '../views/CastingDemo.vue'

const router = createRouter({
  history: createWebHistory('/media-chrome-playground/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MediaPlayer
    },
    {
      path: '/basic',
      name: 'basic',
      component: BasicVideoDemo
    },
    {
      path: '/advanced',
      name: 'advanced',
      component: AdvancedMediaChromeDemo
    },
    {
      path: '/casting',
      name: 'casting',
      component: CastingDemo
    }
  ]
})

export default router
