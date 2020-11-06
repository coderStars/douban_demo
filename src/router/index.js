import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Movie = () => import('@/views/movie/index.vue')
const Music = () => import('@/views/music/Music.vue')
const MusicIndex = () => import('@/views/music/childRouter/Index.vue')
const MusicTopics= () => import('@/views/music/childRouter/Topics.vue')
const MusicRank= () => import('@/views/music/childRouter/Rank.vue')
const SongComment= () => import('@/views/music/childRouter/SongComment.vue')
const Books = () => import('@/views/books/index.vue')
<<<<<<< HEAD
const Doupin = () => import('@/views/Doupin/index.vue')
=======
const Doupin = () => import('@/views/doupin/index.vue')
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
const CommonCity = () => import('@/views/CommonCity/index.vue')
const Login = () => import('@/views/login/Login.vue')
const showDetail = () => import('@/views/showDetail')
const BooksInfo = () => import('@/views/booksInfo/index.vue')
const Cart = () => import('@/views/cart/index.vue')
const AllShop = () => import('@/views/doupin/allShop/index.vue')
const Maindoupin = () => import('@/views/doupin/maindoupin/index.vue')

<<<<<<< HEAD
const AllShop = () => import('@/views/Doupin/allshop/index.vue')
const Maindoupin = () => import('@/views/Doupin/maindoupin/index.vue')

const routes = [
    // {
    //     path:'/',
    //     redirect: 
    // },
=======
const routes = [
    {
        path: '/booksinfo',
        component: BooksInfo
    },
    {
        path: '/cart',
        component: Cart,
        meta: { isHide: true }
    },
    {
        path: '/',
        component: Books,
        meta: { isShow: true }
    },
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
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
<<<<<<< HEAD
=======
        children: [
            {
                path: '/',
                component: MusicIndex
            },
            {
                path: 'topic',
                component: MusicTopics
            },
            {
                path: 'rank',
                component: MusicRank
            },
            {
                path: 'songComment',
                component: SongComment
            }
        ]
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
    },
    {
        path: '/books',
        component: Books,
        meta: {
            isShow: true
<<<<<<< HEAD
        }
=======
        },
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
    },
    {
        path: '/commoncity',
        component: CommonCity
    },
    {
<<<<<<< HEAD
        path: '/booksinfo',
        component: Books
    },
    {
=======
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
        path: '/login',
        component: Login
    },
    {
        path: '/doupin',
        component: Doupin,
        children: [
            {
                path: 'allshop',
                component: AllShop,
            },
            {
                path: 'maindoupin',
                component: Maindoupin,
            },
            {
                path: '/',
                redirect: '/doupin/maindoupin'
            }
        ],
        meta: {
            isShow: false
        }
    }
]
<<<<<<< HEAD
=======

>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1

const router = new VueRouter({
    routes

})
<<<<<<< HEAD
export default router
=======
export default router
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
