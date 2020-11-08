<template>
  <div>
         <!-- 展示内容区 -->
            <div class="show">
                <!-- 头部导航区 -->
                <div class="showHeader">
                    <div class="title">{{name}}</div>
                    <!-- 类别选项卡 -->
                    <div class="type">
                        <div class="hot" v-if="type">最热</div>
                        <div v-for="(item,index) in type" :key="index" @click="changeType">{{item}}</div>
                    </div>
                    <div class="more">
                        <a href="##" @click="toRecent">
                            更多» 
                        </a>
                        </div>
                </div>
                <!-- 内容区 -->
                <div class="showContent">
                    <!-- 单个内容的展示 -->
                    <div class="showItem" v-for="item in commonCityData.showDetail" :key="item.id">
                        <img :src="item.imgUrl" alt="" @click="toShowDetail(item.id)">
                        <!-- 描述 -->
                        <div class="desc">
                            <p class="name" >
                                <a href="##" @click="toShowDetail(item.id)">
                                    {{item.name}}
                                </a>
                               </p>
                            <p class="date">11月8日 至 11月29日</p>
                            <p class="adress">北京 西城区 西城区车公庄大街4号新华1949园区20栋 A33剧场</p>
                            <p class="num">2人关注</p>
                        </div>
                    </div> 
                    
                </div>

            </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'ShowContent',
  props:["name","type"],
  computed: {
      ...mapState({
           commonCityData: state => state.city.commonCityData
      })
  },
  methods: {
      //点击改变类型
      changeType(){
          this.$router.go(0)
      },
      //点击跳转到ShowDetail页面
      toShowDetail(id){
          this.$router.push('/showDetail?id='+id)
      },
      toRecent(){
          this.$router.push('/commoncity/recentactivity')
      }
  },
}
</script>

<style scoped lang='less'>
//内容展示区
    .show{
        margin-bottom: 14px;
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
                line-height: 14px;
                // padding: 0 4px;
                font: 13px Helvetica,Arial,sans-serif;
                justify-content:space-between;
                color: #3377aa;
                align-items: center;
                cursor: pointer;
                .hot{
                    color: #333;
                    font: Helvetica,Arial,sans-serif;
                    font-size: 13px;
                    padding: 1px 10px;
                    background-color: #e6e6e6;
                    border-radius: 4px;
                    &:hover{
                        background-color: #e6e6e6;
                    color: #333;
                    }

                }
                div{
                    padding: 0 6px;
                    border-radius: 3px;
                    &:hover{
                        background-color: #92CCEE;
                    color: #fff;
                    }
                }
                
            }
            .more{
                flex: 1;
                a{
                    color: #3377aa;
                    font-size: 13px;
                    float: right;
                    &:hover{
                        background-color: #3377AA;
                        color: #fff;
                    }
                }
            }
        }
        // 内容区
        .showContent{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            // 单个内容的展示
            .showItem{
                width:45%;
                display: flex;
                margin-bottom: 30px;
                margin-right: 25px;
                
                img{
                    display: block;
                    width: 75px;
                    height: 112px;
                    margin-right: 20px;
                    cursor: pointer;
                }      
                .desc{
                    width: 210px;
                    margin-right: 50px;
                    .name{
                        a{
                            font-size: 14px;
                            color: #37a;
                            margin-bottom: 6px;
                            &:hover{
                                background-color:#4188B9 ;
                                color: #fff;
                            }
                        }

                    }
                    .date,.adress,.num{
                        color: #666;
                        font-size: 13px;
                        height: 18px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        padding: 1px 0;
                        cursor: pointer;


                    }
                    
                }
            }
        }
    }
</style>