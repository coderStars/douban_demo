import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Movie = () => import('@/views/movie/index.vue')
const Music = () => import('@/views/music/Music.vue')
const Books = () => import('@/views/books/index.vue')
const CommonCity = () => import('@/views/commonCity/index.vue')
const Home = () => import('@/views/commonCity/home/index.vue')
const RecentActivity = () => import('@/views/commonCity/recentActivity/index.vue')
const showDetail = () => import('@/views/showDetail')

const routes = [{
    path: '/movie',
    component: Movie,
    name: 'movie',
    meta: { isShow: true },
},
{
    path: '/music',
    component: Music,
    meta: { isShow: true },
},
{
    path: '/books',
    component: Books,
    meta: { isShow: true },
},
{
    path: '/showdetail',
    component: showDetail,
},
{
    path: '/commoncity',
    component: CommonCity,
    children:[
       {
           path:'home',
           component:Home
       },
       {
            path:'recentactivity',
            component:RecentActivity
       },
       {
            path:'/commoncity',
            redirect:'/commoncity/home'
       }
    ]
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
