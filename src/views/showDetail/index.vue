<template>
  <div>
    <!-- 头部 -->
    <CityHeader></CityHeader>
    <!-- 主体 -->
    <div class="wrap">
      <!-- 版心 -->
      <div class="container">
        <!-- 左侧区域 -->
        <div class="left">
          <!-- 演出信息 -->
          <div class="showInfo">
            <!-- 左侧图片 -->
            <img :src="imgInfo.small" alt="">
            <!-- 右侧详情 -->
            <div class="showDetail">
              <h1>{{showDetail.title}}</h1>
              <div class="date">
                <span>时间: &nbsp;&nbsp;</span>
                 {{showDetail.data}}</div>
              <div class="tip">活动结束时间以实际活动为准</div>
              <div class="adress">
                <span>地点: &nbsp;&nbsp;</span>
                 {{showDetail.address}}</div>
              <div class="price">
                <span>费用: &nbsp;&nbsp;</span>
                <span>{{showDetail.money}}</span>
              </div>
              <div class="type">
                <span>类型: &nbsp;&nbsp;</span>
                 
                <a href="##">{{showDetail.type}}</a>
              </div>
              <div class="info">
                <span>信息提供者:&nbsp;&nbsp; </span>
                <a href="##">{{showDetail.infoOrigin}}</a>
              </div>
              <div class="num">
                <span>1</span>
                 人感兴趣   <span>0</span> 人要参加  </div>
              <div class="add">
                <div class="one">添到日历</div>
                &nbsp;
                <div class="two">下载日历</div>
              </div>
              <div class="share">
                <div class="interest">
                   <div>感兴趣</div>
                  <div>要参加</div>
                </div>
                <div class="recommend">
                    <div class="one">
                      <a href="javascript:;">
                      分享到
                      </a>
                      </div>
                    <div class="two">推荐</div>
                </div>
              </div>


            </div>
          </div>  
          <!-- 前往购票 -->
          <div class="buy">
            <div class="buyContainer">
              <div class="car">购票直通车</div>
              <div class="gobuy">
                <a href="javascript:;">
                  前往购票
                </a>
              </div>
            </div>
          </div>
          <!-- 详情页 -->
          <div class="acticityDetail">
            <h2>{{exerciseDetail.title}}</h2>
            <div class="desc">
              购买须知：限购说明：每单限购6张 座位类型：请按门票对应座位，有序对号入座 儿童入场提示 ：1.2米以上凭票入场，1.2米以下谢绝入场 
              <br>
              禁止携带物品：食品、饮料、相机、充电宝、打火机等 电子票 ：本项目支持凭电子票入场。 
              <br>
              -请至少提前一天购买，用户下单后24小时内，票牛会发送取票短信，请按短信提示内容取票。  剧目介绍  
              <br>
              &nbsp;
              <br>
              <div class="middle">
                <img :src="imgInfo.longImg" alt="">
              </div>
            </div>
          </div>
          <!-- 活动相关小站 -->
          <div class="station">
            <h2>活动相关小站</h2>
            <div class="subject">
              <img src="https://img1.doubanio.com/view/site/median/public/d5e76ad0d5624e7.jpg" alt="">
              <div class="detail">
                  <h3>
                    <a href="##">票牛</a>
                    <span>主办方</span>
                  </h3>
                  <div>活动类型：其他 音乐 戏剧</div>
                  <div>城市：岳阳 常德 张家界 郴州 济源</div>
                  <div>...</div>
              </div>
            </div>
          </div>
          <!-- 附近热门活动 -->
          <div class="other">
            <h2>附近热门活动（距离本活动3公里范围内）</h2>
            <div class="content">
            <div class="otherItem" v-for="item in showDetail.nearEImgListDetail" :key="item.id">
              <img :src="item.imgUrl" alt="">
              <div class="text">
                {{item.name}}
              </div>
            </div>
            <!-- ======= -->
          </div>
          </div>

          <!-- 广告1 -->
          <div class="adv">
            <img src="./images/adv.jpg" alt=""
            title="硅谷祝你成功">
          </div>

        </div>

        <!-- 右侧区域 -->
        <div class="aside">
          <!-- 温馨提示 -->
          <div class="hint">
            <h2>温馨提示</h2>   
本活动信息由发起人自行发布，仅代表其个人意志，与豆瓣网无关，且活动的后续事项由发起人独立安排及负责。豆瓣网仅提供信息展示空间。不能保证活动的真实性、有效性、安全性，请在参加活动前与发起人具体确认核实相关情况，注意人身安全与财产安全。
          </div>

          <!-- 广告2 -->
          <div class="adv2">
            <img src="https://tpc.googlesyndication.com/simgad/1182434949692079971?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qnYKJsN76CNFZ-CCGYr_eeO0TSaTQ" alt="">
          </div>

          <!-- 地图 -->
          <div class="map">
            <h2>活动地图 
              <span>
                (
              <a href="##">
              查看大图 
              </a>
                )
              </span>
            </h2>
            <img src="./images/atguigu.jpg" alt="">
          </div>

          <!--  活动成员 -->
          <div class="avtivityPerson">
            <h2>
            活动成员
              <span>
                (
                  <a href="##">0人参加 · 1人感兴趣</a>
                )
              </span>
            </h2>  
            <div>
              <img src="https://img1.doubanio.com/icon/u90553806-7.jpg" alt="">
            </div>
          </div>

          <!-- jojo的奇妙冒险 -->
            <div class="jojoContainer">
              <img src="https://img9.doubanio.com/view/dale-online/dale_ad/public/4159218dd77bcf4.jpg" alt="">
              <div class="jojo">
                <a href="##">《乔乔的奇妙冒险》：荒木飞吕彦热血漫画代表作</a>
                <div>豆瓣书店</div>
              </div>
            </div>

            <!-- 广告3 -->
            <div class="adv3">
              <img src="https://tpc.googlesyndication.com/simgad/1182434949692079971?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qnYKJsN76CNFZ-CCGYr_eeO0TSaTQ" alt="">
            </div>

            

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import CityHeader from '@/components/CityHeader'
import './css/reset.css'
import {getCommonCityShowDetail} from '@/api/commonCity'
export default {
  name: 'showDetail',
  components:{
    CityHeader,

  },
  data() {
    return {
      showDetail:{}
    }
  },
  mounted(){
    //画布地图
    // this.map()
    //获取演出数据
    this.getShowDetail()
  },
  methods:{
    //画布地图
    map(){
      
    },
    //获取演出数据
    async getShowDetail(){
      let result = await getCommonCityShowDetail(1)
      this.showDetail = result
    },
  },
  computed: {
    exerciseDetail(){
      return this.showDetail.exerciseDetail || {}
    },
    imgInfo(){
      return this.exerciseDetail.imgInfo || {}
    },
        // avtiveRules(){
        //   return this.exerciseDetail.name.split("：")
        // },
        // rowOne(){
        //   return this.avtiveRules.slice(0,5)
        // },
        // rowTwo(){
        //   return this.avtiveRules.slice(5,6)
        // },
        // rowThree(){
        //   return this.avtiveRules.slice(6,7)
        // },
  },

}
</script>

<style scoped lang='less'>
// 主体
.wrap{
  height: 100%;
  width: 100%;
  // 版心
  .container{
    width: 1040px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    // 左侧区域
    .left{
      width: 675px;
      // 演出信息
      .showInfo{
        font: 12px Helvetica,Arial,sans-serif;
        line-height: 1.62;
        width: 675px;
        height: 266px;
        margin-bottom: 15px;
        box-sizing: content-box;
        display: flex;
        //左侧图片
        img{
          display: block;
          width: 175px;
          height: 260px;
          margin-right: 15px;
        }
        //右侧详情
        .showDetail{
          width: 480px;
          h1{
            color: #494949;
            font-size:22px ;
            line-height: 1.4;
            padding-bottom: 15px;
            margin: 0;
          }
          .date,.adress,.price,.type,.info{
            font: 13px Helvetica,Arial,sans-serif;
            line-height: 1.66;
            color: #111;
            // line-height: 1.6;
            margin-bottom: 3px;
            span{
              color: #666;
              font-size: 13px;
            }
            a{
              color: #37a;
            }
          }
          .tip{
            font-size: 13px;
            color: red;
            margin-top: -5px;
          }   
             
          .num{
            margin-top: 15px;
            font-size: 13px;
            color: #666;
            span{
              color: #000;
            }
          }
          .add{
            display: flex;
            justify-content: flex-end;
            color: #aaa;
            cursor: pointer;
            margin-bottom: 2px;
            .two{
                padding-left: 2px;
            }  

          }
          .share{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .interest{
              display: flex;
              div{
                border:1px #FF9494 solid;
                padding: 2px 8px;
                background-color: #FFDDDD;
                border-radius: 6px;
                color: #FF8F8F;
                margin-right: 8px;
              }
            }
            .recommend{
              display: flex;
              .one{
                // padding: 2px 4px;
                width: 50px;
                background: url('./images/dircetion.png') no-repeat;
                background-position: 39px -15px;
                a{
                  color:#37a;
                  
                }
              }
              .two{
                border-color: #e3f1ed;
                background-color: #f2f8f2;
                color: #4f946e;
                height: 19px;
                padding: 0 8px;
                border-radius: 4px;
                margin-left: 6px;
              }
            }
          }
        }

      }
      // 前往购票
      .buy{
        margin: 25px 0 40px 0;
        .buyContainer{
          width: 625px;
          height: 32px;
          padding: 19px;
          border: 6px solid #f6f5f2;
          display:flex;
          justify-content: space-between;
          align-items: center;
          .car{
            color: #494949;
            font-size: 13px;
            font-weight: bold;
            margin: 10px;
          }
          .gobuy{
            a{
              display: block;
              color: #fff;
              padding: 10px 20px;
              background: #4db4be;
            }

          }
        }
      }
      // 详情页
      .acticityDetail{
           width: 675px;
           h2{
             margin: 26px 0 8px 0;
             color: #072;
             font-size: 16px;
             font-weight: normal;
           }
           .desc{
                 font: 13px Helvetica,Arial,sans-serif;
                line-height: 1.62;
                .middle{
                  display: block;
                  width: 288px;
                  height: 3000px;
                  margin: 0 auto;
                  margin-bottom: 6px;
                }
           }
      }
      //活动小站
      .station{
        width: 675px;
        height: 154px;
        margin-top: 30px;
        margin-bottom: 30px;
        h2{
          margin-bottom: 8px;
          line-height: 1.2;
          color: #072;
          font-size: 16px;
          font-weight: normal;
        }
        .subject{
          width: 270px;
          height: 97px;
          margin: 5px 0 25px 20px;
          display: flex;
          img{
            display: block;
            width: 64px;
            height: 64px;
            margin-right: 15px;
          }
          .detail{
            h3{
              font-weight: normal;
              line-height: 1.8;
              margin-bottom: 8px;
              a{
                display: inline-block;
                font-size: 15px;
                color: #37a;
                margin-right: 6px;
              }
              span{
                color: #9A9A9A;
                background-color: #F1F1F1;
                font-size: 12px;
                line-height: 14px;
                padding: 1px 5px;
                padding-top: 2px\9;
                border-radius: 2px;
                display: inline-block
              }
            }
            div{
              width: 201px;
              color: #999;
              line-height: 150%;
              font-size: 13px;
            }
          }
        }
      }
      //活动相关小站
      .other{
          width: 675px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          h2{
            margin-bottom: 23px;
            line-height: 1.2;
            font-size: 16px;
            color: #072;
            font-weight: normal;
          }
          .content{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .otherItem{
              width: 115px;
              margin-bottom: 20px;
              img{
                width: 115px;
                height: 172.5px;  
                display: block;
                margin-bottom: 10px;
              }
              .text{
                text-align: center;
                font-size: 13px;
                color: #37a;
              }
            }
          }
      }
      //广告1
      .adv{
        margin-top: 30px;
        img{
          display: block; 
          width: 1040px;
          height: 98px;
        }
      }
    }
    // 右侧区域
    .aside{
      width: 300px;
      height: 100px;
      flex: 1;
      margin-left: 65px;
      
      // background-color: pink;
      // 温馨提示
      .hint{
        width: 300px;
        margin-bottom: 20px;
        color: gray;
        font-size: 13px;
        line-height: 1.62;
        h2{
          color: #072;
          margin: 0 0 12px 0;
          font: 15px Arial, Helvetica, sans-serif;
          line-height: 150%

        }
      }
      // 广告2
      .adv2{
        img{
          display: block;
          width: 300px;
          height: 250px;
        }
      }
      // 地图
      .map{
        margin: 24px 0px;
        
        h2{
          margin-bottom: 24px;
          font-size: 16px;
          color: #072;
          line-height: 1.2;
          font-weight: normal;
          a{
            color: #37a;
            font-size: 13px;  
          }
        }
        canvas{
          width: 308px;
          height: 200px;
          background-color: pink;
          // cursor: url("https://webapi.amap.com/theme/v1.3/openhand.cur"), default;
        }
      }
      // 活动成员
      .avtivityPerson{
        margin-bottom: 40px;
        h2{
          font-size: 16px;
          font-weight: normal;
          line-height: 1.2;
          color: #072;
          margin-bottom: 24px;
          a{
            background-color: #fff;
            color: #37a;
            font-size: 13px;
          }
        }
        div{
          img{
            width: 35px;
            height: 35px;
          }
        }

      }
      // jojo的奇妙冒险
      .jojoContainer{
        width: 280px;
        height: 80px;
        padding: 10px;
        display: flex;
        background-color: #f9f9f9;
        justify-content: space-between;
        img{
          width: 96px;
          height: 80px;
          margin-right: 10px;
        }
        .jojo{
          font-size: 12px;
          line-height: 1;
          color: #999;
          a{
            display: inline-block;
            color: #37a;
            font-size: 12px;
            line-height: 18px;
            margin-bottom: 10px;
          }
        }
      }
      // 广告3
      .adv3{
        margin-top: 20px;
        img{
          width: 300px;
          height: 250px;
        }
      }

    }
  }
}
</style>