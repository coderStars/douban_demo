<template>
  <div class="musicWrapper">
    <div class="leftPage">
      <div class="swiper-container" ref="swiperContainer">
        <div class="swiper-wrapper">
          <div class="swiper-slide"  v-for="(item, index) in bannerList" :key="index">
            <img :src="item" alt=""/>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Music",
  data() {
    return {
      bannerList: [require('@/assets/img/music/banner-2874.jpg'),require('@/assets/img/music/banner-2912.jpg')]
    };
  },
  mounted() {
    var mySwiper = new Swiper(this.$refs.swiperContainer, {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: '.swiper-button-prev',
      }
    });
  }
};
</script>

<style lang="less" scoped>
.musicWrapper {
  display: flex;

  .swiper-container {
    width: 100%;
    height: 300px;
    img{
      width: 100%;
      height: 100%;
    }
}  

  .leftPage {
    width: 675px;
  }

  .rightPage {
    width: 300px;
  }
}
</style>