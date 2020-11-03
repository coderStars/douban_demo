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
                    <div class="show">
                        <!-- 头部导航区 -->
                        <div class="showHeader">
                            <div class="title">戏剧</div>
                            <!-- 类别选项卡 -->
                            <div class="type">
                                <div class="hot">最热</div>
                                <div>话剧</div>
                                <div>音乐剧</div>
                                <div>舞剧</div>
                                <div>歌剧</div>
                                <div>戏曲</div>
                                <div>其他</div>
                            </div>
                            <div class="more">更多» </div>
                        </div>
                        <!-- 内容区 -->
                        <div class="showContent">
                            <!-- 单个内容的展示 -->
                            <div class="showItem">
                                <img src="https://img1.doubanio.com/pview/event_poster/median/public/d80c5169eeeca69.jpg" alt="">
                                <!-- 描述 -->
                                <div class="desc">
                                    <p class="name">脱口秀开心大会巡演《笑喷了，精品专场》单口| 周日精品专场</p>
                                    <p class="date">11月8日 至 11月29日</p>
                                    <p class="adress">北京 西城区 西城区车公庄大街4号新华1949园区20栋 A33剧场</p>
                                    <p class="num">2人关注</p>
                                </div>
                            </div> 
                          
                            <!-- ----2  ---- -->
                            <div class="showItem">
                                <img src="https://img9.doubanio.com/pview/event_poster/median/public/8999b599513d6c5.jpg" alt="">
                                <!-- 描述 -->
                                <div class="desc">
                                    <p class="name">脱口秀开心大会巡演《笑喷了，精品专场》单口| 周日精品专场</p>
                                    <p class="date">11月8日 至 11月29日</p>
                                    <p class="adress">北京 西城区 西城区车公庄大街4号新华1949园区20栋 A33剧场</p>
                                    <p class="num">2人关注</p>
                                </div>
                            </div> 
                            <!-- ------3---- -->
                            <div class="showItem">
                                <img src="https://img9.doubanio.com/pview/event_poster/median/public/8999b599513d6c5.jpg" alt="">
                                <div class="desc">
                                    <p class="name">脱口秀开心大会巡演《笑喷了，精品专场》单口| 周日精品专场</p>
                                    <p class="date">11月8日 至 11月29日</p>
                                    <p class="adress">北京 西城区 西城区车公庄大街4号新华1949园区20栋 A33剧场</p>
                                    <p class="num">2人关注</p>
                                </div>
                            </div> 
                            <!-- ------4------ -->
                            <div class="showItem">
                                <img src="https://img9.doubanio.com/pview/event_poster/median/public/8999b599513d6c5.jpg" alt="">
                                <div class="desc">
                                    <p class="name">脱口秀开心大会巡演《笑喷了，精品专场》单口| 周日精品专场</p>
                                    <p class="date">11月8日 至 11月29日</p>
                                    <p class="adress">北京 西城区 西城区车公庄大街4号新华1949园区20栋 A33剧场</p>
                                    <p class="num">2人关注</p>
                                </div>
                            </div> 
                            <!-------5-----  -->
                            <div class="showItem">
                                <img src="https://img9.doubanio.com/pview/event_poster/median/public/8999b599513d6c5.jpg" alt="">
                                <div class="desc">
                                    <p class="name">脱口秀开心大会巡演《笑喷了，精品专场》单口| 周日精品专场</p>
                                    <p class="date">11月8日 至 11月29日</p>
                                    <p class="adress">北京 西城区 西城区车公庄大街4号新华1949园区20栋 A33剧场</p>
                                    <p class="num">2人关注</p>
                                </div>
                            </div> 
                            <!-- ----6---- -->
                            <div class="showItem">
                                <img src="https://img9.doubanio.com/pview/event_poster/median/public/8999b599513d6c5.jpg" alt="">
                                <div class="desc">
                                    <p class="name">脱口秀开心大会巡演《笑喷了，精品专场》单口| 周日精品专场</p>
                                    <p class="date">11月8日 至 11月29日</p>
                                    <p class="adress">北京 西城区 西城区车公庄大街4号新华1949园区20栋 A33剧场</p>
                                    <p class="num">2人关注</p>
                                </div>
                            </div> 
                            <!-- -------- -->
                        </div>

                    </div>

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
            

                <!-- 右侧侧边栏 -->
                <aside>
                    <!-- 广告图 -->
                    <img class="adv" src="https://img3.doubanio.com/view/dale-online/dale_ad/public/b605e5ac498ede2.jpg" alt="">
                    <!-- 发起同城活动 -->
                    <div class="button">
                        <a href="javascript:;">＋发起同城活动</a>
                    </div>

                    <!-- 轮播图 -->
                    <div class="swiper">
                        <!-- 头部 -->
                        <div class="header"></div>
                        <!-- 轮播内容 -->
                        <div>

                        </div>
                    </div>

                    <!-- 北京主办方 -->
                    <div class="hostInfo">
                        <div class="hostItem">
                            <img src="" alt="">
                            <div class="desc">
                                <p>KPRendezvous</p>
                                <p>有2个活动正在进行</p>
                                <p>[讲座] 李洱×苗炜：作为“局外人”的加缪</p>
                                <p>[展览] 西安SKP文苑·展览 | 探寻民间...</p>
                            </div>
                        </div>
                    </div>

                    <!-- 广告 -->
                    <img src="./images/adv.jpg" alt="">

                    <!--  -->

                </aside>

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
@import './css/index.css';
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
                    outline: none;
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
                background-color: #F6F5F2;
                height: 126px;
                padding: 9px;
                margin: 40px 0 40px 0;
                display: flex;
                justify-content: space-between;
                padding: 9px;
                .navItem{
                    width: 118px;
                    padding: 0 7px;
                    h5{
                        font-size: 14px;
                        color: #111;
                        margin-bottom: 9px;
                        font-weight: normal;
                        margin-top: 5px;
                    }
                    .info{
                        font-size: 12px;
                        .row1{
                            color: #37a;
                            margin-bottom: 10px;
                            span{
                                padding-right:6px;
                            }
                        }
                        .row2{
                            // width: 154px;
                            color: #37a;
                            margin-bottom: 10px;
                              span{
                                padding-right:6px;
                            }
                        }
                        .row3{
                            color: #37a;
                             margin-bottom: 6px;
                              span{
                                padding-right:8px;
                            }
                        }
                    }
                }
            }
            //内容展示区
            .show{
                // 头部导航区
                .showHeader{
                    display: flex;
                    padding-bottom: 6px;
                    margin-bottom: 20px;
                      border-bottom: 1px dotted #DEDEDE;
                    .title{
                        color: #111;
                        font-size: 16px;
                        margin-right: 48px;
                    }
                    .type{
                        display: flex;
                        width: 391px;
                        justify-content:space-between;
                        color: #3377aa;
                        align-items: center;
                        .hot{
                            color: #333;
                            font: Helvetica,Arial,sans-serif;
                            font-size: 13px;
                            padding: 1px 10px;
                            background-color: #e6e6e6;
                        }
                        // line-height: 16px;

                    }
                    .more{
                        flex: 1;
                        color: #3377aa;
                        font-size: 13px;
                    }
                }
                // 内容区
                .showContent{
                    display: flex;
                    flex-wrap: wrap;
                    // 单个内容的展示
                    .showItem{
                        width:325px !important;
                        display: flex;
                        margin-bottom: 30px;
                        img{
                            display: block;
                            width: 75px;
                            height: 112px;
                            margin-right: 20px;
                        }      
                        .desc{
                            width: 210px;
                            .name{
                                font-size: 14px;
                                color: #37a;
                                margin-bottom: 6px;
                            }
                            .date,.adress,.num{
                                color: #666;
                                font-size: 13px;
                                height: 18px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;

                            }
                            
                        }
                    }
                }
            }
        }
    }
}

</style>

