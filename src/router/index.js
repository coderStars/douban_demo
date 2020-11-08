import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Movie = () => import('@/views/movie/index.vue')
const Music = () => import('@/views/music/Music.vue')
const MusicIndex = () => import('@/views/music/childRouter/Index.vue')
const MusicTopics = () => import('@/views/music/childRouter/Topics.vue')
const MusicRank = () => import('@/views/music/childRouter/Rank.vue')
const MusicItem = () => import('@/views/music/childRouter/MusicItem.vue')
const SongComment = () => import('@/views/music/childRouter/SongComment.vue')
const Books = () => import('@/views/books/index.vue')
const Doupin = () => import('@/views/doupin/index.vue')
const Login = () => import('@/views/login/Login.vue')
const CommonCity = () => import('@/views/commonCity/index.vue')
const Home = () => import('@/views/commonCity/home/index.vue')
const RecentActivity = () => import('@/views/commonCity/recentActivity/index.vue')
const ShowDetail = () => import('@/views/showDetail')
const BooksInfo = () => import('@/views/booksInfo/index.vue')
const Cart = () => import('@/views/cart/index.vue')
const AllShop = () => import('@/views/doupin/allShop/index.vue')
const Maindoupin = () => import('@/views/doupin/maindoupin/index.vue')


const routes = [{
    path: '/showdetail',
    component: ShowDetail
}, {
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
        },
        {
            path: 'musicitem',
            component: MusicItem
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
    component: CommonCity,
    children: [
        {
            path: 'home',
            component: Home
        },
        {
            path: 'recentactivity',
            component: RecentActivity
        },
        {
            path: '/commoncity',
            redirect: '/commoncity/home'
        }
    ]
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

const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, onResolved, onRejected) {
    if (onResolved === undefined && onRejected === undefined) {
        //代表没有传递处理的回调无论是成功还是失败
        return originPush.call(this, location).catch(() => { })
    } else {
        return originPush.call(this, location, onResolved, onRejected)
    }
}
VueRouter.prototype.replace = function (location, onResolved, onRejected) {
    if (onResolved === undefined && onRejected === undefined) {
        //代表没有传递处理的回调无论是成功还是失败
        return originReplace.call(this, location).catch(() => { })
    } else {
        return originReplace.call(this, location, onResolved, onRejected)
    }
}


const router = new VueRouter({
    routes

})

router.beforeEach((to, from, next) => {
    let userInfo = JSON.parse(localStorage.getItem('userInfo'))
    if (to.path.startsWith('/cart')) {
        if (userInfo) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
})

export default router
