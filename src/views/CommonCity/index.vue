<template>
  <div>
      <!-- 头部 -->
      <div class="nav">
          <!-- 版心 -->
          <div class="container">
              <!-- 豆瓣同城 -->
              <div class="logo" :style="{background:`url(${logoImg}})`}">
                  <a href="javascript:;" title="豆瓣同城-北京">豆瓣同城</a>
              </div>
              <!-- 似下拉框 -->
              <div class="place">
                  <a href="javascript:;">北京
                      <i></i>
                  </a>
              </div>
              <!-- 选项 -->
              <ul>
                    <li>
                        <a href="javascript:;">近期活动</a>
                    </li>
                    <li>
                        <a href="javascript:;">主办方</a>
                    </li>
                    <li>
                        <a href="javascript:;">舞台剧</a>
                    </li>
              </ul>
              <!-- 右侧搜索框 -->
              <div class="search">
                <input type="text" class="search" placeholder="活动 / 舞台剧 / 地点">
                <button></button>
              </div>
          </div>




      </div>

      <!-- 主体 -->
        <body>
            <!-- 主体版心 -->
            <div class="bodyContainer">
                <!-- 左侧主体内容 -->
                <div class="content">
                    <!-- 热门活动 -->
                    <div class="hotActivity">
                        <h2>热门活动</h2>
                        <div class="control">
                            <span>1/3</span>
                            <a href="javascript:;" class="pre"> < </a>
                            <a href="javascript:;" class="next"> > </a>
                        </div>
                    </div>
                    <!-- 自动轮播图 -->
                    <div class="swiper">
                      <ul class="swiperContainer">
                          <li class="swiperItem">
                              <img src="https://img3.doubanio.com/pview/event_poster/large/public/fcf6df132e72f4e.jpg" alt="">
                              <p>话剧《丁西林戏剧三则》</p>
                          </li>
                          <li class="swiperItem">
                              <img src="https://img3.doubanio.com/pview/event_poster/large/public/fcf6df132e72f4e.jpg" alt="">
                              <p>话剧《丁西林戏剧三则》</p>
                          </li>
                          <li class="swiperItem">
                              <img src="https://img3.doubanio.com/pview/event_poster/large/public/fcf6df132e72f4e.jpg" alt="">
                              <p>话剧《丁西林戏剧三则》</p>
                          </li>
                          <li class="swiperItem">
                              <img src="https://img3.doubanio.com/pview/event_poster/large/public/fcf6df132e72f4e.jpg" alt="">
                              <p>话剧《丁西林戏剧三则》</p>
                          </li>
                          <li class="swiperItem">
                              <img src="https://img3.doubanio.com/pview/event_poster/large/public/fcf6df132e72f4e.jpg" alt="">
                              <p>话剧《丁西林戏剧三则》</p>
                          </li>
                      </ul>
                    </div>
                    <!-- 分类导航 -->
                    <div class="navContainer">
                        <ul class="nav">
                            <li class="navItem">
                                <h5>音乐>> </h5>
                                <ul>
                                    <li>小型现场</li>
                                    <li>音乐会</li>
                                    <li>演唱会</li>
                                    <li>音乐节</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <!-- 戏剧 -->
                    <!-- 展览 -->
                    <!-- 演唱会 -->
                    <!-- 音乐 -->
                    <!-- 亲子 -->
                    <!-- 电影 -->
                    <!-- 聚会 -->
                    <!-- 讲座 -->
                    <!-- 其他 -->
                </div>

                <!-- 右侧侧边栏 -->
                <aside></aside>
            </div>
        </body>
    </div>
</template>

<script>
export default {
  name: 'CommonCity',
  data() {
      return {
          logoImg: require('@/assets/imgs/logo.png')
      }
  },
}
</script>

<style scoped lang='less'>
// 头部
.nav{
    width: 100%;
    height: 66px;
    background-color: #F6F5F2;
    margin-bottom: 40px;
    // 版心
    .container{
        width: 1040px;
        margin: 0 auto;
        height: 66px;
        overflow: hidden;
        // 豆瓣同城
        .logo{
            float: left;
            padding-right:13px;
            a{
                display: block;
                width: 124px;
                height: 56px;
                line-height: 56px;
                color: #E85D16;
                font-size: 28px;
                font-weight: bold;
            }
        }
        
        //似下拉框
        .place{
            float: left;
            background-color: red;
            margin-right: 30px;
            margin-top:13px;
            a{  
                font-size: 13px;
                font-weight: bold;
                // background-color: red;
                // padding: 5px 10 6px 10px;
            }
        }
        ul{
            float: left;
            height: 24px;
            padding-right: 15px;
            li{
                float: left;
                list-style: none;
                padding: 0 15px;
                // &:hover a{
                // background-color:#643 ;
                // color: #fff;
                // }
                a{
                    color: #643;
                    font-size: 15px;
                }
            }
        }
        .search{
            width: 218px;
            float: right;
            height: 28px;
            border: 1px solid #e3e2de;

            // line-height: 66px;
            input{
                width: 92%;
                height: 28px;
                border: none;
                font-size: 13px;
            }
              
        }
    }
}
// 主体
body{
    //主体版心
    .bodyContainer{
        width: 1040px;
        margin:  0 auto;
        //左侧主体内容
        .content{
            width:675px;
            padding-right: 25px;
            .hotActivity{
                width:100%;
                border-bottom: 1px dotted #dadada;
                margin-bottom:20px ;
                overflow: hidden;
                h2{
                    float: left;
                    font:15px Arial, Helvetica, sans-serif;
                    line-height: 1.2;
                    color: #333;
                    margin-bottom: 12px;
                }
                .control{
                    float: right;
                    margin-bottom: 12px;
                    span{
                        display: inline-block;
                        margin-right: 10px;
                        font-size: 13px;
                        color: #666;
                    }
                    .pre,.next{
                        display: inline-block;
                        width: 19px;
                        height: 19px;
                        border-radius: 50%;
                        background-color: #E1E1DD;
                        text-align: center;
                        margin-right: 10px;
                    }

                }
            }
            //自动轮播图
            .swiper{
                width: 650px;
                overflow: hidden;
                .swiperContainer{
                    list-style: none;
                    width: 9999px;
                    overflow: hidden;
                    .swiperItem{
                        width: 115px;
                        float: left;
                        margin-right: 19px;
                        img{
                            display: block;
                            width: 115px;
                            height: 161px;
                            margin-bottom: 10px;
                        }
                        p{
                           color: red;
                        }
                    }
                }
            }
            .navContainer{
                width: 650px;
                background-color: red;
                height: 126px;
                padding: 9px;
                margin-bottom: 40px;
                // .nav{
                        
                // }
            }
        }
    }
}
</style>

