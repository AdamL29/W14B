import Vue from 'vue'
import VueRouter from 'vue-router'
import GamePage from '@/views/GamePage'
import HomePage from '@/views/HomePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/game',
    name: 'Game',
    component: GamePage
  },
  {
    path: '/',
    name: 'Home',
    component: HomePage
  }
]

const router = new VueRouter({
  routes
})

export default router
