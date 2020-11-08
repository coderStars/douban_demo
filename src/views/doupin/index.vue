<template>
  <div id="market-main">
    <!-- 分类区 -->
    <div class="nav-warp">
      <a href="/doupin" alt="豆瓣豆品">
        <div class="logoPic">
          <img src="./img/ia_100000018051.png" alt="" />
        </div>
      </a>

      <ul class="cateGory">
        <li>
          <router-link to="/doupin/allshop">全部商品</router-link>
          <!-- <a href="##">全部商品</a> -->
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
        <img src="./img/ia_200000000.jpg" alt="" class="user-pic" />
        <span class="user-center">个人中心</span>
        <!-- <img src="./images/ia" alt="登录显示购物车图标" class="user-pic"> -->
      </div>
    </div>

    <router-view> </router-view>

    <!-- 底部区域 -->
    <div id="footer">
      <div class="footer-wrapper">
        <div class="footer-left">
          <img src="./img/ia_100000018051.png" alt="" />
          <div class="info">
            <p>
              © 2020 market.douban.com, all rights reserved 北京豆瓣豆品文化有限公司
            </p>
            <p>
              <a
                href="https://img9.doubanio.com/view/treasury_image/raw/public/101d12178e528c6.jpg"
                target="_blank"
              >
                营业执照
              </a>
              |
              <a href="https://img3.doubanio.com/img/files/file-1597657012-0.jpg" target="_blank">
                食品经营许可证: JY11105111524423
              </a>
            </p>
            <p>
              <a href="https://img3.doubanio.com/img/files/file-1565582243-0.jpg" target="_blank">
                出版物经营许可证：新出发京批字第直170330号
              </a>
            </p>
          </div>
        </div>
        <div class="footer-right">
          <div class="footer-kits">
            <a class="item" id="openMarketInfo">
              <img class="shopping" src="./img/icon1.jpg" alt="" />
              <span>购物说明</span>
            </a>
            <a
              class="item"
              target="_blank"
              href="https://www.douban.com/doumail/write?to=119347429"
            >
              <img class="yijian" src="./img/icon2.jpg" alt="" />
              <span>意见反馈</span>
            </a>
            <a class="item" href="https://bizpage.douban.com/business/">
              <img class="shangwu" src="./img/icon3.jpg" alt="" />
              <span>商务合作</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Doupin",
};
</script>

<style lang="less" scoped>
// 头部导航
.headerNav {
  width: 100%;
  height: 28px;
  background-color: rgb(103, 111, 116);
}

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
      color: #808b91;
      vertical-align: middle;
    }
  }
}

// 底部文字部分
#footer {
  width: 100%;
  height: 191.67px;
  background-color: #f9f9f9;
  border-top: 1px solid #f9f9f9;
  padding-top: 50px 0 45px;
  margin-top: 60px;
  color: #ababac;
  font-size: 12px;
  .footer-wrapper {
    width: 1100px;
    margin-left: auto;
    margin-right: auto;
    color: #ababac;
    display: flex;
    justify-content: space-between;
    .footer-left {
      img {
        width: 114.24px;
        height: 26.67px;
        margin-bottom: 10px;
      }
      .info {
        font-size: 12px;
        line-height: 21px;
        text-align: left;
        p{
          a{
            color: #D1CABF;
          }
        }
      }
    }
    .footer-right {
      margin-top: 20px;
      display: flex;
      width: 424.58px;
      height: 27px;
      // justify-content: end;
      
      .item {
        img {
          width: 20px;
          vertical-align: middle;
          padding-left: 50px;
        }
        span {
          font-size: 14px;
          vertical-align: middle;
          height: 18px;
          line-height: 18px;
          color: #D1CABF;
          

        }
      }
    }
  }
}
</style>
