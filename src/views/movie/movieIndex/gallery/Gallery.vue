<template>
  <div class="swiper-container gallery-frames">
    <!-- 头部 -->
    <h2>
      <span class="hd-left">热门推荐</span>
      <div class="hd-right">
        <div class="pages">{{currentIndex}} / 6</div>
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
            src="../../../../assets/images/movie/index/01862e71d7c1df7.jpg"
            alt=""
        /></a>
        <div class="gallery-detail">
          <a class="gallery-hd" href="#">Netflix《王国：北方的阿信》预告</a>
          <div class="content">
            智贤主演Netflix丧尸剧《王国》外传《王国：北方的阿信》2021年上线！
          </div>
        </div>
      </li>
      <li class="swiper-slide">
        <a href="#"
          ><img
            src="../../../../assets/images/movie/index/65de9cff0a3d820.jpg"
            alt=""
        /></a>
        <div class="gallery-detail">
          <a class="gallery-hd" href="#">神剧回归！《王冠》第四季预告</a>
          <div class="content">奥利维娅·科尔曼继续饰演女王伊丽莎白二世！11月15日Netflix上线！</div>
        </div>
      </li>
      <li class="swiper-slide">
        <a href="#"
          ><img
            src="../../../../assets/images/movie/index/ba307979ef51976.jpg"
            alt=""
        /></a>
        <div class="gallery-detail">
          <a class="gallery-hd" href="#">《曼达洛人》第二季定档预告</a>
          <div class="content">尤达宝宝回归！10月30日上线Disney+！</div>
        </div>
      </li>
      <li class="swiper-slide">
        <a href="#"
          ><img
            src="../../../../assets/images/movie/index/b3d3064904f7684.jpg"
            alt=""
        /></a>
        <div class="gallery-detail">
          <a class="gallery-hd" href="#">大卫·芬奇最新力作《曼克》预告</a>
          <div class="content">加里·奥德曼、阿曼达·塞弗里德、莉莉·柯林斯等全明星主演，12月4日Netflix上线！</div>
        </div>
      </li>
      <li class="swiper-slide">
        <a href="#"
          ><img
            src="../../../../assets/images/movie/index/79562429a766ae2.jpg"
            alt=""
        /></a>
        <div class="gallery-detail">
          <a class="gallery-hd" href="#">《大佛普拉斯》导演新作预告</a>
          <div class="content">《大佛普拉斯》导演黄信尧新作《同学麦娜丝》，获选金马影展开幕片。</div>
        </div>
      </li>
      <li class="swiper-slide">
        <a href="#"
          ><img
            src="../../../../assets/images/movie/index/314b918f75f4110.jpg"
            alt=""
        /></a>
        <div class="gallery-detail">
          <a class="gallery-hd" href="#">太治愈！《流浪猫鲍勃》续集预告</a>
          <div class="content">流浪猫鲍勃大银幕遗作，11月6日英国上映！</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Gallery",
  data(){
    return{
      currentIndex:""
    }
  },
  mounted() {
    let _this = this
    var mySwiper = new Swiper(".gallery-frames", {
      direction: "horizontal", // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: true, // 自动循环

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      on:{
        slideChange:function(){
          if(this.activeIndex>6){
            _this.currentIndex = 1
          }else if(this.activeIndex<1){
            _this.currentIndex = 6
          }else{
            _this.currentIndex = this.activeIndex
          }
        }
      }
    });
  },
};
</script>

<style lang="less" scoped>
.gallery-frames {
  margin-bottom: 40px;
  // 头部
  h2 {
    font-weight: normal;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(234, 234, 234);
    margin-bottom: 18px;
    .hd-right {
      float: right;
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
          background: url("../../../../assets/images/movie/index/slide_swithc_2.png")
            0 0;
        }
        .next {
          width: 18px;
          height: 18px;
          background: url("../../../../assets/images/movie/index/slide_swithc_2.png")
            18px 0;
        }
      }
    }
  }
  // 轮播图
  .swiper-wrapper {
    .swiper-slide{
      display: flex;
      width: 675px;
      height: 240px;
      a{
        width: 50%;
      }
      .gallery-detail{
        width: 50%;
        padding: 48px 24px 24px;
        background: rgb(249, 249, 249);
        .gallery-hd{
          font-size: 18px;
          color: #111;
          line-height: 28px;
          // background: transparent;
        }
        .content{
          margin: 13px 0;
          font-size: 13px;
          color: #999;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
