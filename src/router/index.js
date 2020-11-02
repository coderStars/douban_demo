import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Music = () => import('@/views/music/Music.vue')

const routes = [
  {
    path: '/music',
    component: Music
  }
]


const router = new VueRouter({
    routes
})
export default router
