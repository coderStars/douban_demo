<template>
  <div>
      <!-- 头部 -->
      <div class="nav">
          <!-- 版心 -->
          <div class="container">
              <!-- 左侧导航 -->
            <div class="navLeft">
                <div class="logo">豆瓣同城</div>
                <div class="city">
                    <a href="javascript:;">北京
                    <i></i>
                    </a>
                </div>
                <div class="activityNav">
                    <ul>
                        <li>近期活动</li>
                        <li>主办方</li>
                        <li>舞台剧</li>
                    </ul>
                </div>
            </div>
            <!-- 右侧搜索 -->
            <div class="searchRight">
                <div class="rightContainer">
                    <input  class="input" type="text" placeholder="活动 / 舞台剧 / 地点">
                    <div  class="submit iconfont iconsearch"></div>
                </div>
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
                            <div>1/3</div>
                            <a href="javascript:;" class="pre"></a>
                            <a href="javascript:;" class="next"></a>
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
import './css/index.css'
export default {
  name: 'CommonCity',
  data() {
      return {
         
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
    font: 12px Helvetica,Arial,sans-serif;
    line-height: 1.62;
    // 版心
    .container{
        width: 1040px;
        margin: 0 auto;
        height: 66px;
        display: flex;
        // 左侧导航
        .navLeft{
            height: 66px;
            flex: 1;
            display: flex;
            align-items: center;
            .logo{
                width: 124px;
                height: 56px;
                background: url('./images/logo.png') no-repeat center center;
                background-size: 112px auto;
                float: left;
                color: transparent;
                margin-right: 13px;
                // margin-top: 4px;
            }
            .city{
                margin-right: 30px;
                a{  
                    position: relative;
                    display: inline-block;
                    padding: 5px 10px 6px;
                    width: 64px;
                    font: 700 14px/1 tahoma,arial,"stheiti","黑体",sans-serif;
                    font-weight: bold;
                    background-color:#DEDEDE;
                    height: 25px;
                    border-radius: 6px;
                    i{
                    position: absolute;        
                    display:block;
                    width:0;
                    height:0;
                    border-top:5px solid black;
                    border-left:4px solid transparent;
                    border-right:4px solid transparent;
                    top: 50%;
                    right: 10px;
                    transform: translateY(-50%);   
                    }
                }
            }
            .activityNav{
                ul{
                    list-style: none;
                    li{
                        float: left;
                        color: #643;
                        margin: 0 15px;
                        font-size: 16px;
                    }   
                }
            }
        }
        //右侧搜索
        .searchRight{
            .rightContainer{
                height: 28px;
                // width: 218px;   
                border: 1px solid #e3e2de;
                // border: 1px  orange solid;
                display: flex;
                margin-top: 15px;
                align-items: center;
                .input{ 
                    width: 200px;
                    height: 26px;
                    border: none;
                    padding-left: 10px;
                }
                input::-webkit-input-placeholder {
                    color: #C8CCCC;
                    font-size: 13px;
                }
                .submit{
                    line-height: 26px;
                    width: 30px;
                    height: 26px;
                    border: none;
                    // color: transparent;
                    background-color: #fff;
                    font-size: 20px;

                }
            }
        }
    }
}
// 主体
body{
    background-color: #fff;
    //主体版心
    .bodyContainer{
        width: 1040px;
        margin:  0 auto;
        //左侧主体内容
        .content{
            width:675px;
            padding-right: 25px;
            font: 12px Arial, Helvetica, sans-seri;
            // 热门活动
            .hotActivity{
                width:100%;
                height: 30px;
                line-height: 30px;
                border-bottom: 1px dotted #dadada;
                margin-bottom:20px;
                overflow: hidden;
                h2{
                    float: left;
                    font:16px Arial, Helvetica, sans-serif, sans-serif;
                    line-height: 1.2;
                    color: #333;
                    margin-bottom: 12px;
                }
                .control{
                    float: right;
                    margin-bottom: 12px;
                    vertical-align: middle;
                    div{
                        vertical-align: top;
                        display: inline-block;
                        margin-right: 14px;
                        font-size: 13px;
                        color: #666;
                        // height: 16px;
                        line-height: 18px;
                        margin-bottom:10px;
                        
                    }
                    .pre{
                        background: url('./images/pre.png') no-repeat 1px -2px ;
                        display: inline-block;
                        width: 19px;
                        height: 19px;
                        border-radius: 50%;
                        margin-bottom: 10px;
                        margin-right: 3px;
                    }
                    .next{
                        background: url('./images/pre.png') no-repeat -21px -2px ;
                        display: inline-block;
                        width: 19px;
                        height: 19px;
                        border-radius: 50%;
                        margin-bottom: 10px;
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
                            text-align: center;
                           color: #37a;
                           text-overflow: ellipsis;
                           overflow: hidden;
                           display: -webkit-box;
                           -webkit-line-clamp: 2;
                        -webkit-box-orient:vertical;
                        }
                    }
                }
            }
            // 分类导航
            .navContainer{
                width: 650px;
                // background-color: pink;
                height: 126px;
                padding: 9px;
                margin: 40px 0 40px 0;
                // .nav{
                        
                // }
            }
        }
    }
}

</style>

