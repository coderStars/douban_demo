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
  </div>
</template>

<script>

export default {
  name: 'CityHeader',
}
</script>

<style scoped lang='less'>
@import '/src/assets/css/base.css';
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
                border: 1px solid #e3e2de;
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
</style>