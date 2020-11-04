import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import CommonCity from '../views/CommonCity'
import showDetail from '../views/showDetail'
const router = new VueRouter({
    routes:[
        {
            path:'/commoncity',
            component:CommonCity
        },
        {
            path:'/showdetail',
            component:showDetail,
        },
        {
            path:'/',
            redirect:'/showdetail'
        }
    ]
})

export default router 