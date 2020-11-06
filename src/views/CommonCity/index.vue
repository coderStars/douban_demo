<template>
  <div>
      <!-- 头部 -->
        <!-- <CityHeader></CityHeader> -->

      <!-- 主体 -->
        <body>
            <!-- 主体版心 -->
            <div class="bodyContainer">
                <!-- 左侧主体内容 -->
                <div class="content">
                  
                    <!-- 自动轮播图 -->
                    <div class="swiper-container" ref="activitySwiper">

                          <!-- 热门活动 -->
                    <div class="hotActivity">
                        <h2>热门活动</h2>
                        <div class="control">
                            <div class="swiper-pagination"></div>
                            <div href="##" class="pre"></div>
                            <div href="##" class="next"></div>
                        </div>
                    </div>

                         <div class="swiper-wrapper">
                            <div class="swiper-slide stop-swiping">
                                <img src="https://img3.doubanio.com/pview/event_poster/large/public/fcf6df132e72f4e.jpg" alt="">
                                <div class="name">话剧《丁西林戏剧三则》</div>
                            </div>
                            <div class="swiper-slide stop-swiping">
                                <img src="https://img3.doubanio.com/pview/event_poster/large/public/fcf6df132e72f4e.jpg" alt="">
                                <div class="name">话剧《丁西林戏剧三则》</div>
                            </div>
                            <div class="swiper-slide stop-swiping">
                                <img src="https://img3.doubanio.com/pview/event_poster/large/public/fcf6df132e72f4e.jpg" alt="">
                                <div class="name">话剧《丁西林戏剧三则》</div>
                            </div>
                            <div class="swiper-slide stop-swiping">
                                <img src="https://img3.doubanio.com/pview/event_poster/large/public/fcf6df132e72f4e.jpg" alt="">
                                <div class="name">话剧《丁西林戏剧三则》</div>
                            </div>
                            <div class="swiper-slide stop-swiping">
                                <img src="https://img3.doubanio.com/pview/event_poster/large/public/fcf6df132e72f4e.jpg" alt="">
                                <div class="name">话剧《丁西林戏剧三则》</div>
                            </div>
                            <div class="swiper-slide stop-swiping">
                                <img src="https://img3.doubanio.com/pview/event_poster/large/public/fcf6df132e72f4e.jpg" alt="">
                                <div class="name">话剧《丁西林戏剧三则》</div>
                            </div>
                            <div class="swiper-slide">
                                <img src="https://img3.doubanio.com/pview/event_poster/large/public/fcf6df132e72f4e.jpg" alt="">
                                <div class="name">话剧《丁西林戏剧三则》</div>
                            </div>
                            <div class="swiper-slide stop-swiping">
                                <img src="https://img3.doubanio.com/pview/event_poster/large/public/fcf6df132e72f4e.jpg" alt="">
                                <div class="name">话剧《丁西林戏剧三则》</div>
                            </div>
                            <div class="swiper-slide stop-swiping">
                                <img src="https://img3.doubanio.com/pview/event_poster/large/public/fcf6df132e72f4e.jpg" alt="">
                                <div class="name">话剧《丁西林戏剧三则》</div>
                            </div>
                            <div class="swiper-slide stop-swiping">
                                <img src="https://img3.doubanio.com/pview/event_poster/large/public/fcf6df132e72f4e.jpg" alt="">
                                <div class="name">话剧《丁西林戏剧三则》</div>
                            </div>
                            <div class="swiper-slide stop-swiping">
                                <img src="https://img3.doubanio.com/pview/event_poster/large/public/fcf6df132e72f4e.jpg" alt="">
                                <div class="name">话剧《丁西林戏剧三则》</div>
                            </div>
                            <div class="swiper-slide stop-swiping">
                                <img src="https://img3.doubanio.com/pview/event_poster/large/public/fcf6df132e72f4e.jpg" alt="">
                                <div class="name">话剧《丁西林戏剧三则》</div>
                            </div>
                            <div class="swiper-slide stop-swiping">
                                <img src="https://img3.doubanio.com/pview/event_poster/large/public/fcf6df132e72f4e.jpg" alt="">
                                <div class="name">话剧《丁西林戏剧三则》</div>
                            </div>
                            <div class="swiper-slide stop-swiping">
                                <img src="https://img3.doubanio.com/pview/event_poster/large/public/fcf6df132e72f4e.jpg" alt="">
                                <div class="name">话剧《丁西林戏剧三则》</div>
                            </div>
                            <div class="swiper-slide stop-swiping">
                                <img src="https://img3.doubanio.com/pview/event_poster/large/public/fcf6df132e72f4e.jpg" alt="">
                                <div class="name">话剧《丁西林戏剧三则》</div>
                            </div>
                        </div> 

                       
                       
                      
                    </div>

                    <!-- 分类导航 -->
                    <div class="navContainer">
                        <!-- 音乐» -->
                         <div class="navItem">
                            <h5>音乐»  </h5>
                            <div class="info">
                                <div class="row1">
                                    <span>小型现场</span>
                                    <span>音乐会</span>
                                </div>
                                <div class="row2">
                                    <span>演唱会</span>
                                    <span>音乐节</span>
                                </div>
                            </div>
                        </div>   
                        <!-- 戏剧 -->
                       <div class="navItem">
                            <h5>戏剧» </h5>
                            <div class="info">
                                <div class="row1">
                                    <span>话剧</span>
                                    <span>音乐剧</span>
                                    <span>舞剧</span>
                                </div>
                                <div class="row2">
                                    <span>歌剧</span>
                                    <span>戏曲</span>
                                    <span>其他</span>
                                </div>
                            </div>
                      </div>
                        <!-- 聚会» -->
                       <div class="navItem">
                            <h5>聚会» </h5>
                            <div class="info">
                                <div class="row1">
                                    <span>生活</span>
                                    <span>集市</span>
                                    <span>摄影</span>
                                </div>
                                <div class="row2">
                                    <span>外语</span>
                                    <span>桌游</span>
                                    <span>交友</span>
                                </div>
                                <div class="row3">
                                    <span>美食</span>
                                    <span>派对</span>
                                </div>
                            </div>
                        </div>
                        <!-- 电影» -->
                         <div class="navItem">
                            <h5>电影» </h5>
                            <div class="info">
                                <div class="row1">
                                    <span>主题放映</span>
                                    <span>影展</span>
                                </div>
                                <div class="row2">
                                    <span>影院活动</span>
                                </div>
                            </div>
                        </div>                  
                        <!--其他»  -->
                        <div class="navItem">
                            <h5>其他» </h5>
                            <div class="info">
                                <div class="row1">
                                    <span>讲座</span>
                                    <span>展览</span>
                                    <span>运动</span>
                                </div>
                                <div class="row2">
                                    <span>旅行</span>
                                    <span>公益</span>
                                    <span>赛事</span>
                                </div>
                                <div class="row3">
                                    <span>课程</span>
                                    <span>亲子</span>
                                </div>
                            </div>
                        </div>      

                    </div>
                    <!-- 展示内容区 -->
                    <ShowContent></ShowContent>
                    <ShowContent></ShowContent>
                    <ShowContent></ShowContent>
                    <ShowContent></ShowContent>
                    <ShowContent></ShowContent>
                    <ShowContent></ShowContent>
                    <ShowContent></ShowContent>
                    <ShowContent></ShowContent>
                    <ShowContent></ShowContent>

                </div>

                <!-- 右侧侧边栏 -->
                <aside>
                    <!-- 广告图1 -->
                    <img class="adv" src="https://img9.doubanio.com/view/dale-online/dale_ad/public/f98459bcad0aed4.jpg" alt="">

                    <!-- 发起同城活动 -->
                    <div class="commonActivity">
                        <a href="##">＋发起同城活动</a>
                    </div>

                    <!-- 购票直通车轮播图 -->
<div class="swiper-container" ref="buyTicketSwiper">
    <div class="buyTicket">购票直通车</div>    
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="https://img1.doubanio.com/pview/event_poster/small/public/e4c7a0c2816b5f9.jpg" alt="">
            <div class="detail">
                <p class="name">孟京辉戏剧作品《我爱xxx》</p>
                <p class="date">11月25日 19:30 ~ 11月29日 17:00</p>
                <p class="price">¥ 104</p>
            </div>
        </div>
        <div class="swiper-slide">
            <img src="https://img1.doubanio.com/pview/event_poster/small/public/e4c7a0c2816b5f9.jpg" alt="">
            <div class="detail">
                <p class="name">孟京辉戏剧作品《我爱xxx》</p>
                <p class="date">11月25日 19:30 ~ 11月29日 17:00</p>
                <p class="price">¥ 104</p>
            </div>
        </div>
        <div class="swiper-slide">
            <img src="https://img1.doubanio.com/pview/event_poster/small/public/e4c7a0c2816b5f9.jpg" alt="">
            <div class="detail">
                <p class="name">孟京辉戏剧作品《我爱xxx》</p>
                <p class="date">11月25日 19:30 ~ 11月29日 17:00</p>
                <p class="price">¥ 104</p>
            </div>
        </div>
        <div class="swiper-slide">
            <img src="https://img1.doubanio.com/pview/event_poster/small/public/e4c7a0c2816b5f9.jpg" alt="">
            <div class="detail">
                <p class="name">孟京辉戏剧作品《我爱xxx》</p>
                <p class="date">11月25日 19:30 ~ 11月29日 17:00</p>
                <p class="price">¥ 104</p>
            </div>
        </div>
        <div class="swiper-slide">
            <img src="https://img1.doubanio.com/pview/event_poster/small/public/e4c7a0c2816b5f9.jpg" alt="">
            <div class="detail">
                <p class="name">孟京辉戏剧作品《我爱xxx》</p>
                <p class="date">11月25日 19:30 ~ 11月29日 17:00</p>
                <p class="price">¥ 104</p>
            </div>
        </div>
        <div class="swiper-slide">
            <img src="https://img1.doubanio.com/pview/event_poster/small/public/e4c7a0c2816b5f9.jpg" alt="">
            <div class="detail">
                <p class="name">孟京辉戏剧作品《我爱xxx》</p>
                <p class="date">11月25日 19:30 ~ 11月29日 17:00</p>
                <p class="price">¥ 104</p>
            </div>
        </div>
        <div class="swiper-slide">
            <img src="https://img1.doubanio.com/pview/event_poster/small/public/e4c7a0c2816b5f9.jpg" alt="">
            <div class="detail">
                <p class="name">孟京辉戏剧作品《我爱xxx》</p>
                <p class="date">11月25日 19:30 ~ 11月29日 17:00</p>
                <p class="price">¥ 104</p>
            </div>
        </div>
    </div>
</div>

                    
                    <!-- 北京主办方 -->
                    <div class="hostInfo">
                        <div class="hostHeader">
                            <div>北京活跃的主办方</div>
                            <div class="more">更多»</div>
                        </div>
                        <!-- 主体 -->
                        <div class="hostItem">
                            <img src="https://img1.doubanio.com/view/site/small/public/557878537613947.jpg" alt="">
                            <div class="desc">
                                <p class="one">KPRendezvous</p>
                                <p class="two">有2个活动正在进行</p>
                                <p class="three">[讲座] 李洱×苗炜：作为“局外人”的加缪</p>
                                <p class="four">[展览] 西安SKP文苑·展览 | 探寻民间...</p>
                            </div>
                        </div>
                        <!-- ----- -->
                         <div class="hostItem">
                            <img src="https://img1.doubanio.com/view/site/small/public/557878537613947.jpg" alt="">
                            <div class="desc">
                                <p class="one">KPRendezvous</p>
                                <p class="two">有2个活动正在进行</p>
                                <p class="three">[讲座] 李洱×苗炜：作为“局外人”的加缪</p>
                                <p class="four">[展览] 西安SKP文苑·展览 | 探寻民间...</p>
                            </div>
                        </div>
                        <!-- ----- -->
                         <div class="hostItem">
                            <img src="https://img1.doubanio.com/view/site/small/public/557878537613947.jpg" alt="">
                            <div class="desc">
                                <p class="one">KPRendezvous</p>
                                <p class="two">有2个活动正在进行</p>
                                <p class="three">[讲座] 李洱×苗炜：作为“局外人”的加缪</p>
                                <p class="four">[展览] 西安SKP文苑·展览 | 探寻民间...</p>
                            </div>
                        </div>
                        <!-- ----- -->
                         <div class="hostItem">
                            <img src="https://img1.doubanio.com/view/site/small/public/557878537613947.jpg" alt="">
                            <div class="desc">
                                <p class="one">KPRendezvous</p>
                                <p class="two">有2个活动正在进行</p>
                                <p class="three">[讲座] 李洱×苗炜：作为“局外人”的加缪</p>
                                <p class="four">[展览] 西安SKP文苑·展览 | 探寻民间...</p>
                            </div>
                        </div>
                        <!-- ----- -->
                         <div class="hostItem">
                            <img src="https://img1.doubanio.com/view/site/small/public/557878537613947.jpg" alt="">
                            <div class="desc">
                                <p class="one">KPRendezvous</p>
                                <p class="two">有2个活动正在进行</p>
                                <p class="three">[讲座] 李洱×苗炜：作为“局外人”的加缪</p>
                                <p class="four">[展览] 西安SKP文苑·展览 | 探寻民间...</p>
                            </div>
                        </div>

                    </div>

                    <!-- 广告2 -->
                    <div class="adv2">
                        <img src="./images/adv.jpg" alt="">
                    </div>
                    

                    <!-- 联系我们 -->
                    <div class="connection">
                        <h2>
                            联系我们
                            <a href="##">
                                 atguigu.com
                            </a>
                           
                        </h2>
                        <div class="itemContainer">
                             <div class="iconItem">
                            <img src="./images/douban.jpg" alt="">
                            <div class="text">
                                <a href="##">
                                    豆瓣小站
                                </a>
                                </div>
                        </div>
                        <div class="iconItem">
                            <img src="./images/weibo.jpg" alt="">
                            <div class="text">
                                <a href="##">
                                    微博
                                </a>
                                </div>
                        </div>
                        <div class="iconItem">
                            <img src="./images/weixin.png" alt="">
                            <div class="text">
                                <a href="##">
                                    微信
                                </a>
                                </div>
                        </div>
                        </div>
                       
                    </div>

                </aside>

            </div>
        </body>
    </div>
</template>

<script>
import './css/index.css'
import Swiper from "swiper";
// import CityHeader from '../../components/CityHeader'
import ShowContent from '../../components/ShowContent'
export default {
  name: 'CommonCity',
  components:{
    //   CityHeader,
      ShowContent,
  },
  data() {
      return {
      
      }
  },
  mounted() {
      //热门活动轮播
      this.activitySwiper()
      this.buyTicketSwiper()
  },
  methods: {
    //热门活动轮播
    activitySwiper(){
           var mySwiper = new Swiper (this.$refs.activitySwiper, {
                loop: true, // 循环模式选项
                
                // 如果需要前进后退按钮
                navigation: {
                nextEl: '.next',
                prevEl: '.pre',
                },
                slidesPerView : 5, //代表每屏显示几张
                slidesPerGroup : 5, //没滑动一次滑动多少张
                noSwiping : true,
                noSwipingClass : 'stop-swiping',
                autoplay:true, //自动切换
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction', //分页器样式类型
                },
                
            })        
    },
    //购票直通车轮播图
    buyTicketSwiper(){
        var mySwiper = new Swiper (this.$refs.buyTicketSwiper, {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay:true, //自动切换   
        slidesPerView : 6, //代表每屏显示几张
         slidesPerGroup : 1,
                   
        })        
    },
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
        //左侧主体内容
        .content{
            // float: left;
            width:675px;
            padding-right: 25px;
            font: 12px Arial, Helvetica, sans-seri;
            //自动轮播图
            .swiper-container{
                // 热门活动
            .hotActivity{
                position: relative;
                width:100%;
                height: 30px;
                line-height: 30px;
                border-bottom: 1px dotted #dadada;
                margin-bottom:20px;
                overflow: hidden;
                line-height: 1.2;
                h2{
                    float: left;
                    font:16px Arial, Helvetica, sans-serif, sans-serif;
                    color: #333;
                    margin-bottom: 12px;
                }
                .control{
                    float: right;
                    margin-bottom: 12px;
                    vertical-align: middle;
                    display: flex;
                    div{
                        // position: absolute;
                        // top: 0;
                        // left: 0;
                        width: 100px;
                        vertical-align: top;
                        display: inline-block;   
                        margin-left: 552px;
                        font-size: 13px;
                        color: #666;
                        line-height: 18px;
                        
                    }
                    .pre{
                        background: url('./images/pre.png') no-repeat 1px -2px ;
                        display: inline-block;
                        width: 19px;
                        height: 19px;
                        border-radius: 50%;
                        margin:0 0 0 10px;
                        cursor: pointer;
                    }
                    .next{
                        background: url('./images/pre.png') no-repeat -21px -2px ;
                        display: inline-block;
                        width: 19px;
                        height: 19px;
                        border-radius: 50%;
                        margin: 0 0 0 4px;
                        cursor: pointer;
                    }
                }
            }
                //下方轮播内容
                .swiper-wrapper{
                    width: 675px;
                    display: flex;
                    // justify-content: space-between;
                    .swiper-slide{
                        width: 140px;
                        img{
                            display: block;
                            width: 115px;
                            height: 161px;
                            margin-bottom: 10px;
                            cursor: pointer;
                        }
                        .name{
                            width: 115px;
                            cursor: pointer;
                            color: #37a;
                            text-align: center;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;  //2行
                            -webkit-box-orient: vertical;
                        }
                    }
                }
            }
            // 分类导航
            .navContainer{
                width: 675px;
                height: 126px;
                background-color: #F6F5F2;
                padding: 9px;
                margin: 40px 0;
                display: flex;
                justify-content: space-between;
                .navItem{   
                    width: 20%;
                    padding: 0 7px;
                    h5{
                        width: 36px;
                        height: 26px;
                        line-height: 26px;
                        font-size: 14px;
                        color: #111;
                        font-weight: normal;
                        margin: 5px 0px 9px 0px;
                        cursor: pointer;
                        &:hover{
                            background-color: #EEEEEE;
                        }
                    }
                    .info{
                        // text-align: center;
                        font-size: 13px;
                        .row1,.row2,.row3{
                            color: #37a;
                            margin-bottom: 10px;
                            span{
                                margin-right:6px;
                                cursor: pointer;
                                &:hover{
                                    color: #fff;
                                    background-color: #3377AA;
                                }
                            }
                        }
                       
                    }
                }
            }
            
        }
        // 右侧侧边栏
        aside{
            width:300px;
            // 广告图1
            .adv{
                display: block;
                width: 300px;
                height: 250px;
                margin-bottom: 20px;   
                cursor: pointer; 
            }
            // 发起同城活动
            .commonActivity{
                width: 300px;
                height: 28px;
                margin-bottom: 40px;
                a{  
                    display: block;
                    box-sizing: content-box;
                    width: 91px;
                    height: 28px;
                    padding: 0 13px;
                    background: #a88360;  
                    color: #fff; 
                    font-size: 13px;
                    line-height: 27px;
                }   
            }
            // 购票直通车轮播图
            .swiper-container{
                width:300px;
                height:700px;
                .buyTicket{
                    width: 300px;
                    font-size: 15px;
                    color: #111;
                    box-sizing: content-box;
                    padding-bottom: 7px;
                    border-bottom: 1px dotted #ddd;
                    margin-bottom: 20px;
                }
                //轮播内容
                .swiper-wrapper{    
                    height: 672px;  
                    .swiper-slide{
                        width:300px;
                        display: flex;
                        // background-color: red;
                        // flex-direction: column;
                        img{
                            display: block;
                            width: 48px;
                            height: 62px;
                            margin-right: 10px;
                            cursor: pointer;
                        }
                        .detail{
                            .name{
                                color: #37a;
                                font-size: 14px;
                                margin-bottom: 8px;
                                margin-top: 4px;
                                cursor: pointer;
                            }
                            .date{
                                color:#666;
                                font-size: 13px; 
                                margin-bottom: 5px;
                            }
                            .price{
                                color: #FF8263;
                                font-size: 13px;
                            }
                        }
                    }
                }
            }
            //北京主办方
            .hostInfo{
                width: 300px;
                margin-top: 40px;
                //头部
                .hostHeader{
                    font-size: 15px;
                    color: #111;
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px dotted #ddd;
                    padding: 4px;
                    margin-bottom: 12px;
                    .more{
                        color: #37a;
                        font-size: 13px;
                    }
                }
                //主体
                .hostItem{
                    display: flex;
                    margin-bottom: 25px;
                    img{
                        display:block;
                        width:48px;
                        height:48px;
                        margin-right: 10px;
                    }
                    .desc{
                        font: 12px Helvetica,Arial,sans-serif;
                        .one{
                            color: #37a;
                            font-size:14px;
                             margin-bottom: 4px;
                        }
                        .two{
                            color: #666;
                            font-size: 13px;
                             margin-bottom: 9px;
                        }
                        .three,.four{
                            color: #666;
                            font-size: 13px;
                            margin-bottom: 4px;
                        }
                        
                    }
                }
            }
            // 广告2
            .adv2{
                margin-top: 15px;
                img{
                    display: block;
                    width: 300px;
                    height: 250px;
                }
            }
            //联系我们
            .connection{
                margin-top: 40px;
                h2{
                    height: 26px;
                    border-bottom: 1px solid #E4E2E2;
                    color: #222;
                    font-size: 16px;
                    font-weight: normal;
                    margin-bottom: 11.2px;
                    a{
                        margin-left: 6px;
                        font-size: 13px;
                        color: #666;
                    }
                }
                .itemContainer{
                    display: flex;
                    .iconItem{
                        text-align: center;
                        margin: 0 10px;
                        img{
                            width: 40px;
                            display: block;
                            width: 40px;
                            height: 40px;
                            cursor: pointer;
                        }
                        .text{
                            margin-top: 8px;
                            font-size: 13px;
                            line-height: 13px;
                            cursor: pointer;
                        }
                    }
                }
            }
            
        }
    }
}
</style>
