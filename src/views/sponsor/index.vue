<template>
  <div>
    <!-- 头部 -->
    <CityHeader></CityHeader>

    <!-- 主体 -->
    <div class="wrap">
      <!-- 版心 -->
      <div class="container">
        <!-- 左侧 -->
        <div class="left">
          <h1>发现主办方</h1>
          <!-- 轮播图 -->
          <div class="swiper-container">
              <div class="header">
                  <h3>新加入主办方</h3>
                      <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>

                    <!-- 如果需要导航按钮 -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
              </div>

            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img
                  src="https://img3.doubanio.com/view/site/median/public/a0970c812598dfd.jpg"
                  alt=""
                />
                <div class="desc">
                    <a href="##">
                        X美术馆
                    </a>
                    </div>
              </div>
              <div class="swiper-slide">
                <img
                  src="https://img3.doubanio.com/view/site/median/public/a0970c812598dfd.jpg"
                  alt=""
                />
                <div class="desc">
                    <a href="##">
                        X美术馆
                    </a>
                    </div>
              </div>
               <div class="swiper-slide">
                <img
                  src="https://img3.doubanio.com/view/site/median/public/a0970c812598dfd.jpg"
                  alt=""
                />
                <div class="desc">
                    <a href="##">
                        X美术馆
                    </a>
                    </div>
              </div>
               <div class="swiper-slide">
                <img
                  src="https://img3.doubanio.com/view/site/median/public/a0970c812598dfd.jpg"
                  alt=""
                />
                <div class="desc">
                    <a href="##">
                        X美术馆
                    </a>
                    </div>
              </div>
               <div class="swiper-slide">
                <img
                  src="https://img3.doubanio.com/view/site/median/public/a0970c812598dfd.jpg"
                  alt=""
                />
                <div class="desc">
                    <a href="##">
                        X美术馆
                    </a>
                    </div>
              </div>
               <div class="swiper-slide">
                <img
                  src="https://img3.doubanio.com/view/site/median/public/a0970c812598dfd.jpg"
                  alt=""
                />
                <div class="desc">
                    <a href="##">
                        X美术馆
                    </a>
                    </div>
              </div>
               <div class="swiper-slide">
                <img
                  src="https://img3.doubanio.com/view/site/median/public/a0970c812598dfd.jpg"
                  alt=""
                />
                <div class="desc">
                    <a href="##">
                        X美术馆
                    </a>
                    </div>
              </div>
               <div class="swiper-slide">
                <img
                  src="https://img3.doubanio.com/view/site/median/public/a0970c812598dfd.jpg"
                  alt=""
                />
                <div class="desc">
                    <a href="##">
                        X美术馆
                    </a>
                    </div>
              </div>
            </div>
          

          </div>
        </div>
        <!-- 右侧 -->
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import CityHeader from "@/components/CityHeader";
import Swiper from "swiper";
export default {
  name: "Sponsor",
  components: {
    CityHeader,
  },
  mounted() {
      //主办方轮播图
      this.sponsorSwiper()

  },
  methods: {
      //主办方轮播图
      sponsorSwiper(){
         var mySwiper = new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
    
            // 如果需要前进后退按钮
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            }
 
        })        
      }
  },
};
</script>

<style scoped lang='less'>
.wrap {
  .container {
    width: 1040px;
    margin: 0 auto;
    .left {
      width: 675px;
      h1 {
        font-size: 26px;
        padding-bottom: 30px;
      }
      .swiper-container {
        position: relative;
        width: 675px;
        height: 184px;
        .swiper-slide{
            width: 110px;
            height: 128px;
            margin-right: 3px;
            text-align: center;
            img{
                display: block;
                width: 80px;
                height: 80px;
                margin-bottom: 8px;
            }
            .desc{
                width: 80px;
                font: 13px Helvetica,Arial,sans-serif;
                line-height: 1.62;
                a{
                    color: #37a;
                }
            }

        }
        .swiper-pagination{
            position: absolute;
            top: 0;
            right: 0;
        }
        .swiper-button-prev{
            position: absolute;
            left: 575px;
            top: 0;
            z-index: 999;
            width: 100px;
            height: 100px;
            // background-color: red;
            background: url('./images/next.gif') no-repeat 10px 0px; 
        }
        .swiper-button-next{
            position: absolute;
            left: 575px;
            top: 0;
            z-index: 999;
            width: 100px;
            height: 100px;
            // background-color: red;
            background: url('./images/next.gif') no-repeat 10px 0px; 
        }
      }
    }
  }
}
</style>