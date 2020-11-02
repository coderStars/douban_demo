import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Movie = () => import('@/views/movie/index.vue')
const Music = () => import('@/views/music/Music.vue')

const routes = [
    {
        path: '/movie',
        component: Movie
    },
    {
        path: '/music',
        component: Music
    }

]

const router = new VueRouter({
    routes
})
export default router
