<template>
  <div>
      <!-- 头部 -->
      <div class="nav">
          <!-- 版心 -->
          <div class="container">
               <!-- 左侧导航 -->
              <div class="navLeft">
                <div class="logo">豆瓣同城</div>
                <div class="city" @click="chooseCity">
                    <a href="javascript:;">北京
                        <i :class="{choose:otherCity}" ></i>
                    </a>
                    <!-- 其他城市选项 -->
                    <div class="otherCity"  v-show="otherCity === true">
                        <div>北京</div>
                        <div>上海</div>
                        <div>广州</div>
                        <div>武汉</div>
                        <div>成都</div>
                        <div>深圳</div>
                        <div>杭州</div>
                        <div>西安</div>
                        <div>南京</div>
                        <div>郑州</div>
                        <div>长沙</div>
                        <div>温州</div>
                        <div class="fuzhou">福州</div>
                        <div>沈阳</div>
                        <div>更多城市</div>
                        <div></div>
                    </div>
                </div>
                <div class="activityNav">
                    <div>近期活动</div>
                    <div>主办方</div>
                    <div>舞台剧</div>   
                </div>
              </div>

              <!-- 右侧搜索 -->
              <div class="searchRight">
                   <div class="rightContainer">
                    <input  class="input" type="text" placeholder="活动 / 舞台剧 / 地点">
                    <div  class="submit iconfont iconSearch  "></div>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'CityHeader',
  data() {
      return {
          otherCity:false,
      }
  },
  methods: {
      // 点击选择切换城市
      chooseCity(){
        this.otherCity = !this.otherCity
      }
  },
  
}
</script>

<style scoped lang='less'>
@import '/src/assets/css/reset.css';
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
        display: flex;
        justify-content: space-between;
        // 左侧导航
        .navLeft{
            height: 66px;
            flex: 1;
            display: flex;
            align-items: center;
            font: 12px Helvetica,Arial,sans-serif;
            line-height: 1.62;
            .logo{
                width: 124px;
                height: 56px;
                background: url('./images/logo.png') no-repeat 0 17px;
                background-size: 90% ; 
                float: left;
                color: transparent;
                margin-right:13px;
                cursor: pointer;
            }
            .city{
                position: relative;
                width: 64px;
                height: 25px;
                margin:6px 30px 0 0;
                a{  
                    position: relative;
                    display: inline-block;
                    width: 44px;
                    height: 14px;
                    padding: 5px 10px 6px  10px;
                    font: 700 14px/1 tahoma,arial,"stheiti","黑体",sans-serif;
                    color: black;
                    background-color: #dedede;
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
                        right: 12px;
                        transform: translateY(-50%);   
                    }
                    .choose{
                        transform: rotate(180deg) translateY(2px);
                        // transform: ;

                    }
                }
                //其他城市选项
                .otherCity{
                    position: absolute;
                    top: 31px;
                    left: 0px;
                    z-index: 2;
                    width: 208px;
                    height: 107px;
                    padding: 12px 20px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    background-color: #fff;
                    border: 1px solid #ddd;
                    // visibility: hidden;
                    div{
                        width: 25%;
                        color: #37a;
                        cursor: pointer;
                    }
                }
            }
            .activityNav{
                width: 240px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin-top: 6px;
                div{
                    height: 16px;
                    line-height: 16px;
                    font-size: 15px;
                    color: #664433;
                    cursor: pointer;
                    &:hover{
                        background: #664433;
                        color: #fff;
                    }
                }
            }
        }
        //右侧搜索
        .searchRight{
            .rightContainer{
                width: 218px;
                height: 28px;
                border: 1px solid #e3e2de;
                text-align: center;
                display: flex;
                margin-top: 20px;
                align-items: center;
                .input{ 
                    width: 200px;
                    height: 26px;
                    border: none;
                    padding-left:10px;
                    outline: none;
                }
                input::-webkit-input-placeholder {
                    vertical-align: middle;
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
</style>