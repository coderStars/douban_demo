<template>
  <div>
    <!-- 头部 -->
    <cityHeader></cityHeader>
    <!-- 主体 -->
    <div class="wrap">
      <!-- 版心 -->
      <div class="container">
        <!-- 左侧区域 -->
        <body>
          <!-- 演出信息 -->
          <div class="showInfo">
            <img src="https://img9.doubanio.com/pview/event_poster/plarge/public/99b3ba40e7c1515.jpg" alt="">
            <div class="showDetail">
              <h1>开心麻花爆笑舞台剧《谈判专家》 第9轮</h1>
              <div>时间: 11月05日 周四 19:30 ~ 11月15日 周日 21:30</div>
            </div>
          </div>  
          <!-- 前往购票 -->
          <div class="buy"></div>
          <!-- 详情页 -->
          <div></div>

        </body>

        <!-- 右侧区域 -->
        <aside></aside>

      </div>
    </div>
  </div>
</template>

<script>
import cityHeader from '../../components/cityHeader'
export default {
  name: 'showDetail',
  components:{
    cityHeader
  }
}
</script>

<style scoped lang='less'>

</style>