<template>
  <div>
      <!-- 头部 -->
        <CityHeader></CityHeader>

      <!-- 主体 -->
        <body>
            <!-- 主体版心 -->
            <div class="bodyContainer">
                <!-- 左侧主体内容 -->
                <router-view></router-view>

                <!-- 右侧侧边栏 -->
                <CityAside></CityAside>

            </div>
        </body>
    </div>
</template>

<script>
import './css/index.css'
import Swiper from "swiper";

import CityHeader from '@/components/CityHeader'
import CityAside from '@/components/CityAside'
export default {
  name: 'CommonCity',
  components:{
      CityHeader,
      CityAside,
  },
  data() {
      return {
      
      }
  },
  mounted() {

  },
  methods: {
      
   },
}
</script>

<style lang='less' scoped>
@import '/src/assets/css/base.css';
// 主体
body{
    background-color: #fff;
    //主体版心
    .bodyContainer{
        width: 1040px;
        margin:  0 auto;
        display: flex;
        justify-content: space-between;
       
       
    }
}
</style>
