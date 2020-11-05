<template>
    <!-- 版心 -->
  <div class="container">
    <!-- 分类区 -->
    <div class="nav-warp">
      <a href="/doupin" alt="豆瓣豆品">
        <div class="logoPic">
          <img src="./images/ia_100000018051.png" alt="">
        </div>
      </a>
    
      <ul class="cateGory">
        <li>
          <a href="##">全部商品</a>
        </li>
        <li>
          <a href="##">豆瓣经典</a>
        </li>
        <li>
          <a href="##">家具生活</a>
        </li>
        <li>
          <a href="##">外出旅行</a>
        </li>
        <li>
          <a href="##">文具小物</a>
        </li>
      </ul>
      <div class="user">
        <img src="./images/ia_200000000.jpg" alt="" class="user-pic">
        <span class="user-center">个人中心</span>
        <!-- <img src="./images/ia" alt="登录显示购物车图标" class="user-pic"> -->
      </div>
    </div>
    
    <!-- 全部商品展示区 -->
    <div class="allShop">
      <div class="title">
        全部商品
      </div>
      <div class="shopShow">
        <ul>
          <li class="shopItem">
            <img src="./images/ia_200000001.jpg" alt="">
            <h4>电影香薰</h4>
            <p>迷人气息 致敬经典</p>
            <div class="price">
              <span class="price1">¥99</span>
              <span class="price3">立减20元</span>
            </div>
          </li>
          <li class="shopItem">
            <img src="./images/ia_200000002.jpg" alt="">
            <h4>豆瓣逆向手表-多色款</h4>
            <p>风格不受限 白色也出彩</p>
            <div class="price">
              <span class="price1">¥289</span>
              <span class="price2">¥329</span>
              <span class="price3">最高减40元</span>
            </div>
          </li>
          <li class="shopItem">
            <img src="./images/ia_200000003.jpg" alt="">
            <h4>豆猫卫衣</h4>
            <p>厚毛圈面料,柔软舒适</p>
            <div class="price">
              <span class="price1">¥168</span>
              <span class="price2">¥198</span>
              <span class="price3">立减30元</span>
              <span class="price4">满150减30</span>
            </div>
          </li>
          <li class="shopItem">
            <img src="./images/ia_200000004.jpg" alt="">
            <h4>豆瓣读书周历2021</h4>
            <p>用书籍标记时光</p>
            <div class="price">
              <span class="price1">¥71</span>
              <span class="price2">¥88</span>
              <span class="price3">立减17元</span>
              <span class="price4">满150减10</span>
            </div>
          </li>
          <li class="shopItem">
            <img src="./images/ia_200000005.jpg" alt="">
            <h4>豆瓣电影日历</h4>
            <p>时间是电影的核心角色</p>
            <div class="price">
              <span class="price1">¥80</span>
              <span class="price2">¥99</span>
              <span class="price3">最高减26元</span>
              <span class="price4">满150减10</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'allShop',
  
}
</script>

<style lang="less" scoped>
  // 版心
.container{
  margin: 0 auto;
  width: 1100px;
  //分类区
  .nav-warp {
    width: 1100px;
    height: 100px;
    line-height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .logoPic {
      img {
        width: 123.02px;
        height: 27.78px;
      }
    }

    .cateGory {
      display: flex;
      justify-content: space-between;

      li {
        a {
          margin: 0 12px;
          color: #6e6e6e;
          font-size: 18px;
          font-weight: 300;
        }
      }
    }

    .user {
      .user-pic {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        vertical-align: middle;
      }

      .user-center {
        font-size: 14px;
        color: #808B91;
        vertical-align: middle;
      }
    }
  }

  // 全部商品展示区
  .allShop{
    
    .title{
      margin-bottom: 60px;
      font-size: 27px;
      text-align: center;
      font-weight: 600;
    }
    .shopShow{
      ul{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        .shopItem {
          img {
            width: 260px;
            height: 260px;
          }

          h4 {
            color: #3e3a39;
            font-size: 16px;
            font-weight: 500;
          }

          P {
            color: #ababac;
            font-size: 14px;
          }

          .price {
            .price1 {
              color: #dd1944;
              font-size: 16px;
            }

            .price2 {
              margin-left: 3px;
              color: #ababac;
              font-size: 13px;
              text-decoration: line-through;
            }

            .price3 {
              padding: 1px 4px;
              margin-right: 3px;
              color: #dd1944;
              font-size: 12px;
              background-color: #fbe8ec;
            }

            .price4 {
              padding: 1px 4px;
              margin-right: 3px;
              color: #dd1944;
              font-size: 12px;
              background-color: #fbe8ec;
            }
          }
        }
      }
      
    }
  }
}
</style>


