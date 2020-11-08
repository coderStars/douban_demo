// 贾月洁写的
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 创建实例
const instance = axios.create({
    // 基础公共地址
    baseURL: '/api',
    timeout: 20000,
})
// 请求拦截器
instance.interceptors.request.use(config => {
    NProgress.start() //添加进度条功能
    return config
})

// 响应拦截器
instance.interceptors.response.use(
    response => {
        NProgress.done()
        return response.data
    },
    error => {
        console.log(error)
        return new Promise(() => {})
    }
)


export default instance;