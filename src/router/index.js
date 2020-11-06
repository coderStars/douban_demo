import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Movie = () => import('@/views/movie/index.vue')
const Music = () => import('@/views/music/Music.vue')
const MusicIndex = () => import('@/views/music/childRouter/Index.vue')
const MusicTopics= () => import('@/views/music/childRouter/Topics.vue')
<<<<<<< HEAD
=======
const MusicRank= () => import('@/views/music/childRouter/Rank.vue')
const SongComment= () => import('@/views/music/childRouter/SongComment.vue')
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
const Books = () => import('@/views/books/index.vue')
const Doupin = () => import('@/views/doupin/index.vue')
const CommonCity = () => import('@/views/CommonCity/index.vue')
const Login = () => import('@/views/login/Login.vue')
const showDetail = () => import('@/views/showDetail')
const BooksInfo = () => import('@/views/booksInfo/index.vue')
const Cart = () => import('@/views/cart/index.vue')
<<<<<<< HEAD

const routes = [
    {
=======
const AllShop = () => import('@/views/doupin/allShop/index.vue')
const Maindoupin = () => import('@/views/doupin/maindoupin/index.vue')

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
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
        path: '/',
        component: Books,
        meta: { isShow: true }
    },
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
        children: [
            {
                path: '/',
                component: MusicIndex
            },
            {
                path: 'topic',
                component: MusicTopics
<<<<<<< HEAD
=======
            },
            {
                path: 'rank',
                component: MusicRank
            },
            {
                path: 'songComment',
                component: SongComment
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
            }
        ]
    },
    {
        path: '/books',
        component: Books,
        meta: {
            isShow: true
        },
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
<<<<<<< HEAD
        component: Doupin
=======
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
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
    }
]


const router = new VueRouter({
    routes

})
<<<<<<< HEAD
export default router
=======
export default router
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
