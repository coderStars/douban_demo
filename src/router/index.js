import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Movie = () => import('@/views/movie/index.vue')
const Music = () => import('@/views/music/Music.vue')
const Books = () => import('@/views/books/index.vue')
const Doupin = () => import('@/views/doupin/index.vue')
const CommonCity = () => import('@/views/CommonCity/index.vue')
const Login = () => import('@/views/login/Login.vue')

const AllShop = () => import('@/views/doupin/allShop/index.vue')
const ChildRouter = () => import('@/views/doupin/childrouter/index.vue')

const routes = [
    // {
    //     path:'/',
    //     redirect: 
    // },
    {
        path: '/movie',
        component: Movie,
        name: 'movie',
        meta: {
            isShow: true
        },
    },
    {
        path: '/music',
        component: Music,
        meta: {
            isShow: true
        },
    },
    {
        path: '/books',
        component: Books,
        meta: {
            isShow: true
        }
    },
    {
        path: '/commoncity',
        component: CommonCity
    },
    {
        path: '/booksinfo',
        component: Books
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/doupin',
        component: Doupin,
        children: [{
                path: 'allshop',
                component: AllShop,
            },
            {
                path: 'childRouter',
                component: ChildRouter,
            },
            {
                path: '/',
                redirect: '/doupin/allshop '
            }
        ]
        // meta: {
        //     isShow: false
        // }
    }
]

const router = new VueRouter({
    routes
})
export default router