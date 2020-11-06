<<<<<<< HEAD

=======
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
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
<<<<<<< HEAD
    NProgress.start()  //添加进度条功能
=======
    NProgress.start() //添加进度条功能
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
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
<<<<<<< HEAD
        return new Promise(()=>{})
=======
        return new Promise(() => {})
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
    }
)


export default instance;