import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Movie = () => import('@/views/movie/index.vue')
const Music = () => import('@/views/music/Music.vue')
const MusicIndex = () => import('@/views/music/childRouter/Index.vue')
<<<<<<< HEAD
const MusicTopics = () => import('@/views/music/childRouter/Topics.vue')
const MusicRank = () => import('@/views/music/childRouter/Rank.vue')
const MusicItem = () => import('@/views/music/childRouter/MusicItem.vue')
const SongComment = () => import('@/views/music/childRouter/SongComment.vue')
=======
const MusicTopics= () => import('@/views/music/childRouter/Topics.vue')
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
<<<<<<< HEAD
            },
            {
                path: 'musicitem',
                component: MusicItem
=======
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

const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function(location,onResolved,onRejected){
  if(onResolved === undefined && onRejected === undefined){
    //代表没有传递处理的回调无论是成功还是失败
    return originPush.call(this,location).catch(() => {})
  }else{
    return originPush.call(this,location,onResolved,onRejected)
  }
}
VueRouter.prototype.replace = function(location,onResolved,onRejected){
  if(onResolved === undefined && onRejected === undefined){
    //代表没有传递处理的回调无论是成功还是失败
    return originReplace.call(this,location).catch(() => {})
  }else{
    return originReplace.call(this,location,onResolved,onRejected)
  }
}


const router = new VueRouter({
    routes

})
<<<<<<< HEAD

router.beforeEach((to, from, next) => {
    let userInfo = JSON.parse(localStorage.getItem('userInfo'))
    if (to.path.startsWith('/cart')) {
        if(userInfo) {
            next()
        }else {
            next('/login')
        }
    } else {
        next()
    }
})

=======
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
export default router
