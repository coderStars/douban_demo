<template>
  <div>

      
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
                            <div class="swiper-slide stop-swiping" v-for="item in commonCityData.hotActivities" :key="item.id" @click="toShowDetail(item.id)">
                                <img :src="item.imgUrl" alt="" data-name="img" >
                                <div class="name">
                                    <a href="##" data-name='a'>
                                        {{item.text}}
                                    </a>
                                </div>
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
                    <ShowContent :name="'戏剧'" :type="dramaTypes"></ShowContent>
                    <ShowContent :name="'展览'"></ShowContent>
                    <ShowContent :name="'演唱会'"></ShowContent>
                    <ShowContent :name="'音乐'" :type="musicTypes"></ShowContent>
                    <ShowContent :name="'亲子'"></ShowContent>
                    <ShowContent :name="'电影'" :type="movieTypes"></ShowContent>
                    <ShowContent :name="'聚会'" :type="meetingTypes"></ShowContent>
                    <ShowContent :name="'讲座'" :type="LectureTypes"></ShowContent>
                    <ShowContent :name="'其他'" :type="otherTypes"></ShowContent>

                </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import {getCommonCityData} from '@/api/commonCity'
import ShowContent from '@/components/CityShowContent'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components:{
      ShowContent,
  },
  data() {
      return {
        dramaTypes:['最热' ,'话剧','音乐剧' ,'舞剧', '歌剧', '戏曲','其他'],
        musicTypes:['小型现场', '音乐会' ,'音乐节','','',''],
        movieTypes:['主题放映','影展','影院活动','','','',''],
        meetingTypes:['生活' ,'集市',' 摄影',' 外语 ','桌游 ','夜店',' 交友',' 美食'],
        LectureTypes:[' 发布会',' 见面会',' 分享会 ','沙龙','','',''],
        otherTypes:['赛事',' 课程',' 旅行 ','公益',' 运动','','','' ]
      }
  },
  mounted() {
        // 热门活动轮播
      this.activitySwiper()
      //获取home的初始化数据
      this.getCommonCityData()
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
    //获取home初始化数据
    async getCommonCityData(){
        this.$store.dispatch('getCommonCityData')
        
    },
    //点击跳转到ShowDetail详情页
    toShowDetail(id,$event){
            let goal = event.target.dataset
            if(goal.name === 'img' || goal.name === 'a'){
                this.$router.push('/showdetail?id='+id)
            }
    },
  },
  computed: {
      ...mapState({
          commonCityData: state => state.city.commonCityData
      }),
      hotActivities(){
          return this.commonCityData.hotActivities
      }
  },
  watch: {
      commonCityData:{
          handler(){
              this.$nextTick(()=>{
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
              })
          }
      }
  },
}
</script>

<style scoped lang='less'>
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
                    background: url('./images/pre.png') no-repeat 1px -21px ;
                    display: inline-block;
                    width: 19px;
                    height: 19px;
                    border-radius: 50%;
                    margin:0 0 0 10px;
                    cursor: pointer!important;
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
                        
                        a{
                        width: 115px;
                        cursor: pointer;
                        color: #37a;
                        font-size: 14px;
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
</style>