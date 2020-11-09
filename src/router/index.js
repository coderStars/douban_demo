import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Movie = () => import('@/views/movie/index.vue')
const MovieIndex = () => import('@/views/movie/movieIndex/MovieIndex.vue')
const List = () => import('@/views/movie/explore/list/List.vue')
const Explore = () => import('@/views/movie/explore/Explore.vue')
const Music = () => import('@/views/music/Music.vue')
const MusicIndex = () => import('@/views/music/childRouter/Index.vue')
const MusicTopics= () => import('@/views/music/childRouter/Topics.vue')
const MusicRank= () => import('@/views/music/childRouter/Rank.vue')
const SongComment= () => import('@/views/music/childRouter/SongComment.vue')
const Books = () => import('@/views/books/index.vue')
const Doupin = () => import('@/views/doupin/index.vue')
const CommonCity = () => import('@/views/CommonCity/index.vue')
const Login = () => import('@/views/login/Login.vue')
const showDetail = () => import('@/views/showDetail')
const BooksInfo = () => import('@/views/booksInfo/index.vue')
const Cart = () => import('@/views/cart/index.vue')
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
        children: [
            {
                path: '/',
                component: MovieIndex
            },
            {
                // path: '/movie/explore',
                path: 'explore',
                component: Explore,
                name: 'explore',
                children: [
                    {
                        path: 'detail',
                        component: List,
                        props:(route)=> ({name:route.query.tags})
                    },
                    {
                        path:'/movie/explore',
                        redirect:'/movie/explore/detail'
                    }

                ]
            },

            /**
             * 二级路由
             * 1. index 不写前面的'/' 会自动添加父级的路由
             * 2. 如果加 / 只能是/，而不能在后面再加其他东西, 再加其他东西就匹配不到路由了，就只会匹配二级的路由
             * 3. 加/ 连同父类的path也得写上才可以匹配到
             */
        ]
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


const router = new VueRouter({
    routes

})
export default router
