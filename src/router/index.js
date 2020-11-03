import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import CommonCity from '../views/CommonCity'
const router = new VueRouter({
    routes:[
        {
            path:'/commoncity',
            component:CommonCity
        },
        {
            path:'/',
            redirect:'/commoncity'
        }
    ]
})

export default router 