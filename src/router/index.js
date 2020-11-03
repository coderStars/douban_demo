import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Movie = () => import('@/views/movie/index.vue')
const Music = () => import('@/views/music/Music.vue')
const Books = () => import('@/views/books/index.vue')
const CommonCity = () => import('@/views/CommonCity/index.vue')

const routes = [{
    path: '/movie',
    component: Movie,
    name: 'movie',
    meta: { isShow: true },
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
    path: '/commoncity',
    component: CommonCity
},
{
    path: '/',
    redirect: '/commoncity'
},
{
    path: '/booksinfo',
    component: Books
}

]

const router = new VueRouter({
    routes
})

export default router 
