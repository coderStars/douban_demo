import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Movie = () => import('@/views/movie/index.vue')
const Music = () => import('@/views/music/Music.vue')
const Books = () => import('@/views/books/index.vue')
const Doupin = () => import('@/views/doupin/index.vue')

const routes = [{
        path: '/movie',
        component: Movie,
        name: 'movie'
    },
    {
        path: '/music',
        component: Music
    },
    {
        path: '/books',
        component: Books
    },
    {
        path: '/doupin',
        component: Doupin
    }

]

const router = new VueRouter({
    routes
})
export default router