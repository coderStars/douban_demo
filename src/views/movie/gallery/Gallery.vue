<template>
  <div class="swiper-container gallery-frames">
    <!-- 头部 -->
    <h2>
      <div class="hd-left">
        <h2 id="Hoting">热门推荐</h2>
      </div>
      <div class="hd-right">
        <div class="pages">4 / 6</div>
        <!-- 翻页导航按钮 -->
        <div class="pre-next">
          <!-- 如果需要导航按钮 -->
          <a href="#"><div class="prev"></div></a>
          <a href="#"><div class="next"></div></a>
        </div>
      </div>
    </h2>

    <!-- 轮播图 -->
    <ul class="swiper-wrapper">
      <li class="swiper-slide">
        <a href="#"
          ><img
            src="../../../assets/images/movie/index/ba307979ef51976.jpg"
            alt=""
        /></a>
        <div class="gallery-detail">
          <a href="#">《曼达洛人》第二季定档预告</a>
          <p>尤达宝宝回归！10月30日上线Disney+！</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Gallery",
  mounted() {
    var mySwiper = new Swiper(".gallery-frames", {
      direction: "horizontal", // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
    });
  },
};
</script>

<style lang="less" scoped>
.gallery-frames {
  margin-bottom: 40px;
  h2 {
    font-weight: normal;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(234, 234, 234);
    margin-bottom: 18px;
    .hd-left {
    }
    .hd-right {
      display: flex;
      float: right;
      .pages {
        width: 28px;
        height: 30px;
        line-height: 30px;
        color: #666;
        font-size: 12px;
        font-weight: normal;
      }
      .pre-next {
        width: 46px;
        height: 18px;
        margin: 5px 0 0 15px;
        a {
          display: inline-block;
          margin-right: 5px;
          &:hover {
            background-color: transparent;
          }
        }
        .prev {
          width: 18px;
          height: 18px;
          background: url("../../../assets/images/movie/index/slide_swithc_2.png")
            0 0;
        }
        .next {
          width: 18px;
          height: 18px;
          background: url("../../../assets/images/movie/index/slide_swithc_2.png")
            18px 0;
        }
      }
    }
  }

  .swiper-wrapper {
  }
}
</style>
