<template>
  <div>
      <!-- 右侧侧边栏 -->
                <aside>
                    <!-- 广告图1 -->
                    <img class="adv" src="https://img1.doubanio.com/view/dale-online/dale_ad/public/55d11c20710e288.jpg" alt="">

                    <!-- 发起同城活动 -->
                    <div class="commonActivity">
                        <a href="##">＋发起同城活动</a>
                    </div>

                    <!-- 购票直通车轮播图 -->
                    <div class="buyTicket">购票直通车</div>   
                    <div class="swiper-container" ref="buyTicketSwiper">
                         
                        <div class="swiper-wrapper">
                            <div class="swiper-slide stop-swiping" v-for="item in commonCityData.tickets" :key="item.id">
                                <img :src="item.imgUrl" alt="" @click="toShowDetail">
                                <div class="detail">
                                    <p class="name" @click="toShowDetail">{{item.name}}</p>
                                    <p class="date">{{item.time}}</p>
                                    <p class="price">{{item.price}}</p>
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
                        <div class="hostItem" v-for="item in commonCityData.userInfo" :key=item.id>
                            <img :src="item.imgUrl" alt="">
                            <div class="desc">
                                <p class="one">{{item.name}}</p>
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
</template>

<script>
import Swiper from "swiper";
import {mapState} from 'vuex';

export default {
  name: 'CityAside', 
    mounted() {
        //购票直通车轮播图
        this.buyTicketSwiper()
    },
    methods: {
       //购票直通车轮播图
        buyTicketSwiper(){
            var mySwiper = new Swiper (this.$refs.buyTicketSwiper, {
            direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            speed:7000,
            noSwipingClass : 'stop-swiping',
            autoplay:{
                // disableOnInteraction: false,
                // delay: 10,
            }, //自动切换   
            slidesPerView : 6, //代表每屏显示几张
            slidesPerGroup : 1,
                    
            })        
        },
        //跳转到showDetail
        toShowDetail(){
            this.$router.push('/showDetail?id=999')
        }
    },
    watch: {
        commonCityData:{
            handler(){
                var mySwiper = new Swiper (this.$refs.buyTicketSwiper, {
                direction: 'vertical', // 垂直切换选项
                loop: true, // 循环模式选项
                speed:7000,
                noSwipingClass : 'stop-swiping',
                autoplay:{
                    // disableOnInteraction: false,
                    // delay: 10,
                }, //自动切换   
                slidesPerView : 6, //代表每屏显示几张
                slidesPerGroup : 1,
                        
                })  
            }
        }
    },
    computed: {
        ...mapState({
            commonCityData:state => state.city.commonCityData
        })
    },

}
</script>

<style scoped lang='less'>
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
        .buyTicket{
                width: 300px;
                font-size: 15px;
                color: #111;
                box-sizing: content-box;
                padding-bottom: 7px;
                border-bottom: 1px dotted #ddd;
                margin-bottom: 20px;
            }
        .swiper-container{
            width:300px;
            height:700px;
            
            //轮播内容
            .swiper-wrapper{    
                height: 672px;  
                // overflow: hidden;
                .swiper-slide{
                    overflow: hidden;
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
</style>