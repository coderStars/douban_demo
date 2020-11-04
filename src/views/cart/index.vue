<template>
  <div>
    <div class="cart-main">
      <!-- 头部 -->
      <div class="header">
        <div class="inner">
          <div class="logo">
            <a href="##">豆瓣 | 豆品</a>
          </div>
          <div class="user">
            <div class="user-people">
              <div class="user-pic">
                <img src="./images/user.jpg" alt="" />
                <span>个人中心</span>
              </div>
              <ul class="nav-list">
                <li class="nav-item">
                  <a href="##">豆品／纸书订单</a>
                </li>
                <li class="nav-item">
                  <a href="##">我的优惠券</a>
                </li>
                <li class="nav-item">
                  <a href="##">我的会员</a>
                </li>
                <li class="nav-item">
                  <a href="##">收货地址管理</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 中间 -->
      <div class="market-wrapper">
        <div class="cart-header">
          <h2>购物车</h2>
        </div>
        <div class="cart-section">
          <div class="cart-content">
            <ul class="tag">
              <li>
                <a href="##">全部商品<span>(3)</span></a>
              </li>
              <li>
                <a href="##">豆瓣豆品<span>(0)</span></a>
              </li>
              <li>
                <a href="##">豆瓣书店<span>(3)</span></a>
              </li>
              <li>
                <a href="##">豆瓣时间<span>(0)</span></a>
              </li>
              <li>
                <a href="##">电影周边<span>(0)</span></a>
              </li>
              <li>
                <a href="##">伴宠乐园<span>(0)</span></a>
              </li>
              <li>
                <a href="##">绿盒<span>(0)</span></a>
              </li>
            </ul>
            <table class="cart-table-header">
              <tr>
                <th class="checkout"></th>
                <th class="cart-item-info">商品信息</th>
                <th class="cart-item-price">单价（元）</th>
                <th class="cart-item-picker">数量</th>
                <th class="cart-item-amount">小计（元）</th>
                <th class="cart-item-actions"></th>
              </tr>
            </table>

            <div class="shop-card-list">
              <div class="shop-card">
                <div class="shop-header">
                  <el-checkbox v-model="checked"></el-checkbox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      checked: true
    };
  }
};
</script>

<style scoped lang="less">
.cart-main {
  width: 100%;
  height: 600px;
  .header {
    height: 100px;
    position: relative;
    z-index: 2;
    box-shadow: 0 1px 2px #f9f9f9;
    .inner {
      width: 1100px;
      height: 100px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
      .logo {
        float: left;
        font-size: 28px;
        color: #44883e;
        line-height: 100px;
        a {
          color: #44883e;
        }
        a:hover {
          color: #689f64;
        }
      }
      .user {
        float: right;
        height: 100px;
        line-height: 100px;
        margin-left: 20px;
        .user-people {
          .user-pic {
            img {
              display: inline-block;
              vertical-align: middle;
              width: 24px;
              height: 24px;
              border-radius: 50%;
              margin-right: 4px;
            }
            span {
              display: inline-block;
              vertical-align: middle;
              font-size: 14px;
            }
          }
          .nav-list {
            display: none;
            width: 91px;
            height: 126px;
            position: absolute;
            top: 50%;
            margin-top: 20px;
            z-index: 2;
            background-color: #fff;
            text-align: center;
            padding: 8px 10px 12px;
            box-shadow: 0 1px 4px #d8d8d8;
            border-top: 1px solid #d8d8d8;
            li {
              height: 15.5px;
              line-height: 15.5px;
              padding: 8px 0;
              a {
                font-size: 13px;
                color: #6e6e6e;
              }
              a:hover {
                color: #8b8b8b;
              }
            }
          }
          .nav-list:after {
            content: "";
            display: block;
            height: 1px;
            position: absolute;
            top: -5px;
            left: 50px;
            z-index: 3;
            background-color: #fff;
            width: 8px;
            height: 8px;
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
            border-top: 1px solid #d8d8d8;
            border-bottom: 1px solid transparent;
            border-left: 1px solid #d8d8d8;
            border-right: 1px solid transparent;
          }
        }
        .user-people:hover .nav-list {
          display: block;
        }
      }
    }
  }
  .market-wrapper {
    width: 1100px;
    height: 482px;
    margin: 0 auto;
    margin-bottom: 130px;
    .cart-header {
      line-height: 21px;
      padding-bottom: 30px;
      padding-top: 40px;
      h2 {
        font-size: 21px;
        font-weight: 700;
      }
    }
    .cart-section {
      width: 100%;
      height: 391px;
      background-color: #bfc;
      .cart-content {
        .tag {
          display: flex;
          width: 100%;
          height: 30px;
          line-height: 30px;
          margin-bottom: 20px;
          li {
            a {
              height: 24px;
              line-height: 24px;
              font-size: 16px;
              display: inline-block;
              margin-right: 45px;
              padding-bottom: 4px;
              color: #5c5c5c;
              span {
                font-size: 14px;
                margin-left: 5px;
              }
            }
            a:hover {
              color: #44883e;
              border-bottom: 2px solid #44883e;
            }
          }
        }
        .cart-table-header {
          height: 45px;
          table-layout: fixed;
          border-spacing: 0;
          border-collapse: collapse;
          margin-bottom: 20px;
          color: #3e3a39;
          width: 100%;
          background-color: red;
          th {
            border-spacing: 0;
            border-collapse: collapse;
            font-weight: normal;
            font-size: 14px;
            color: #5c5c5c;
            background-color: #f9f9f9;
            padding: 12px 0;
            box-sizing: border-box;
          }
          .checkout {
            width: 48px;
          }
          .cart-item-info {
            width: 335px;
          }
          .cart-item-price {
            width: 296px;
          }
          .cart-item-picker {
            width: 150px;
          }
          .cart-item-amount {
            width: 155px;
          }
        }
      }
    }
  }
}
</style>
