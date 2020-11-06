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
                  <div class="shop-name">豆瓣书店</div>
                  <a href="##" class="sobot-icon">联系客服</a>
                </div>
                <div class="shop-content-wrap">
                  <div class="shop-content">
                    <table class="mui-table">
                      <tr class="item-row" v-for="(cartItem, index) in cartInfo" :key="cartItem.id">
                        <td class="checkout">
                          <el-checkbox v-model="cartItem.isChecked"></el-checkbox>
                        </td>
                        <td class="cart-item-info">
                          <div class="cart-item">
                            <div class="item-pic">
                              <a href="##">
                                <img :src="cartItem.imgUrl" />
                              </a>
                            </div>
                            <div class="cart-item-detail">
                              <p class="item-title">
                                <a href="##">{{cartItem.skuName}}</a>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="cart-item-price">
                          <span class="item-price">¥{{cartItem.skuPrice}}</span>
                        </td>
                        <td class="cart-item-picker">
                          <div class="item-number-picker">
                            <div class="mui-number-picker">
                              <i class="prev">-</i>
                              <span class="current-number">{{cartItem.skuNum}}</span>
                              <i class="plus">+</i>
                            </div>
                          </div>
                        </td>
                        <td class="cart-item-amount">
                          <span class="item-amount">¥{{cartItem.skuPrice * cartItem.skuNum }}</span>
                        </td>
                        <td class="cart-item-actions">
                          <button type="button">×</button>
                        </td>
                      </tr>
                      <!-- <tr class="item-row">
                        <td class="checkout">
                          <el-checkbox v-model="checked"></el-checkbox>
                        </td>
                        <td class="cart-item-info">
                          <div class="cart-item">
                            <div class="item-pic">
                              <a href="##">
                                <img src="./images/p25414357.jpg" />
                              </a>
                            </div>
                            <div class="cart-item-detail">
                              <p class="item-title">
                                <a href="##">极乐鸟与蜗牛</a>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="cart-item-price">
                          <span class="item-price">¥46.4</span>
                        </td>
                        <td class="cart-item-picker">
                          <div class="item-number-picker">
                            <div class="mui-number-picker">
                              <i class="prev">-</i>
                              <span class="current-number">1</span>
                              <i class="plus" >+</i>
                            </div>
                          </div>
                        </td>
                        <td class="cart-item-amount">
                          <span class="item-amount">¥46.4</span>
                        </td>
                        <td class="cart-item-actions">
                          <button type="button">×</button>
                        </td>
                      </tr>
                      <tr class="item-row">
                        <td class="checkout">
                          <el-checkbox v-model="checked"></el-checkbox>
                        </td>
                        <td class="cart-item-info">
                          <div class="cart-item">
                            <div class="item-pic">
                              <a href="##">
                                <img src="./images/p25414357.jpg" />
                              </a>
                            </div>
                            <div class="cart-item-detail">
                              <p class="item-title">
                                <a href="##">极乐鸟与蜗牛</a>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="cart-item-price">
                          <span class="item-price">¥46.4</span>
                        </td>
                        <td class="cart-item-picker">
                          <div class="item-number-picker">
                            <div class="mui-number-picker">
                              <i class="prev">-</i>
                              <span class="current-number">1</span>
                              <i class="plus">+</i>
                            </div>
                          </div>
                        </td>
                        <td class="cart-item-amount">
                          <span class="item-amount">¥46.4</span>
                        </td>
                        <td class="cart-item-actions">
                          <button type="button">×</button>
                        </td>
                      </tr> -->
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部footer -->
      <div class="cart-footer-wrapper">
        <div class="market-wrapper">
          <div class="cart-footer">
            <div class="cart-actions">
              <div class="select-all">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="select-all-text">全选</span>
              </div>
              <div class="quantity-all">
                已选择<b>{{checkedNum}}</b>件商品
              </div>
            </div>
            <div class="cart-info">
              <div class="amount-all">
                <div class="amount">
                  <div class="freight">不含运费</div>
                  <div class="amount-text">合计：</div>
                  <div class="price">¥ {{allMoney}}</div>
                </div>
              </div>
              <button>结算</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Cart",
  data() {
    return {
      checked: true
    };
  },
  computed: {
    ...mapState({
      cartInfo : state => state.cart.cartInfo
    }),
    checkedNum() {
      return this.cartInfo.reduce((prev, cartItem) => {
        if (cartItem.isChecked) {
          prev += cartItem.skuNum;
        }
        return prev;
      }, 0);
    },
    allMoney() {
      return this.cartInfo.reduce((prev, cartItem) => {
        if (cartItem.isChecked) {
          prev += cartItem.skuNum * cartItem.skuPrice;
        }
        return prev;
      }, 0);
    },
  },
};
</script>

<style scoped lang="less">
.cart-main {
  width: 100%;
  height: 600px;
  position: relative;
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
        .shop-card-list {
          height: 650px;
          .shop-card {
            .shop-header {
              margin: 10px 0;
              height: 24px;
              line-height: 24px;
              /deep/ .el-checkbox__inner {
                width: 17px;
                height: 17px;
                margin-right: 10px;
                border-radius: 0;
                border: 1px solid #ababac;
              }
              /deep/ .el-checkbox__input.is-checked .el-checkbox__inner {
                background-color: #44883e;
                border-color: #44883e;
              }
              .shop-name {
                color: #5c5c5c;
                display: inline-block;
                padding-right: 15px;
              }
              a {
                color: #72a56e;
              }
              a:hover {
                color: #44883e;
              }
            }
            .shop-content-wrap {
              .shop-content {
                border: 1px solid #ececec;
                margin-bottom: 15px;
                .mui-table {
                  .item-row {
                    border-spacing: 0;
                    border-collapse: collapse;
                    height: 120px;
                    td {
                      height: 80px;
                      padding: 20px;
                      text-align: center;
                      vertical-align: middle;
                      box-sizing: border-box;
                    }
                    .checkout {
                      padding: 20px 10px;
                      width: 48px;
                      /deep/ .el-checkbox__inner {
                        width: 17px;
                        height: 17px;
                        margin-left: 10px;
                        border-radius: 0;
                        border: 1px solid #ababac;
                      }
                      /deep/
                        .el-checkbox__input.is-checked
                        .el-checkbox__inner {
                        background-color: #44883e;
                        border-color: #44883e;
                      }
                    }
                    .cart-item-info {
                      width: 335px;
                      .cart-item {
                        width: 295px;
                        height: 80px;
                        .item-pic {
                          float: left;
                          a {
                            img {
                              width: 80px;
                              height: 80px;
                              display: block;
                            }
                          }
                        }
                        .cart-item-detail {
                          width: 220px;
                          height: 22.5px;
                          line-height: 22.5px;
                          text-align: left;
                          margin-left: 95px;
                          a {
                            font-size: 15px;
                            color: #5c5c5c;
                            font-weight: 500;
                          }
                        }
                      }
                    }
                    .cart-item-price {
                      width: 294px;
                      span {
                        font-size: 14px;
                        color: #dd1944;
                      }
                    }
                    .cart-item-picker {
                      width: 150px;
                      .item-number-picker {
                        width: 110px;
                        height: 30px;
                        .prev {
                          color: #d8d8d8;
                          cursor: not-allowed;
                          height: 30px;
                          line-height: 30px;
                          background-color: #f9f9f9;
                          color: #ababac;
                          width: 30px;
                          font-size: 14px;
                          display: inline-block;
                        }
                        .plus {
                          height: 30px;
                          line-height: 30px;
                          background-color: #f9f9f9;
                          width: 30px;
                          cursor: pointer;
                          color: #3e3a39;
                          font-size: 14px;
                          display: inline-block;
                        }
                        span {
                          display: inline-block;
                          padding-left: 5px;
                          padding-right: 5px;
                          width: 35px;
                          color: #3e3a39;
                        }
                      }
                    }
                    .cart-item-amount {
                      width: 155px;
                      font-size: 14px;
                      color: #dd1944;
                    }
                    .cart-item-actions {
                      width: 116px;
                      button {
                        padding-top: 9px;
                        padding-bottom: 9px;
                        font-size: 20px;
                        cursor: pointer;
                        line-height: 1em;
                        padding: 5px 10px;
                        border: none;
                        outline: none;
                        background-color: #fff;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .cart-footer-wrapper {
    width: 100%;
    height: 70px;
    background-color: #f9f9f9;
    position: fixed;
    z-index: 1;
    left: 0;
    right: 0;
    bottom: 0;
    animation: 1.5s linear;
    .market-wrapper {
      width: 1100px;
      height: 100%;
      margin: 0 auto;
      font-size: 16px;
      .cart-footer {
        overflow: visible;
        min-height: 40px;
        font-size: 14px;
        line-height: 36px;
        padding: 15px 0 15px 22px;
        position: relative;
        z-index: 1;
        text-align: right;
        vertical-align: middle;
        .cart-actions {
          float: left;
          display: flex;
          /deep/ .el-checkbox__inner {
            width: 17px;
            height: 17px;
            margin-right: 10px;
            border-radius: 0;
            border: 1px solid #ababac;
          }
          /deep/ .el-checkbox__input.is-checked .el-checkbox__inner {
            background-color: #44883e;
            border-color: #44883e;
          }
          .select-all {
            .select-all-text {
              margin-left: 20px;
            }
          }
          .quantity-all {
            margin-left: 24px;
            vertical-align: middle;
            b {
              font-weight: normal;
              margin: 0 5px;
              color: #dd1944;
            }
          }
        }
        .cart-info {
          display: flex;
          float: right;
          line-height: 36px;
          height: 36px;
          .amount-all {
            margin-right: 40px;
            vertical-align: middle;
            .amount {
              display: flex;
              .freight {
                margin-right: 15px;
                color: #ababac;
                font-size: 12px;
              }
              .amount-text {
                font-size: 16px;
                color: #3e3a39;
              }
              .price {
                color: #dd1944;
                font-size: 20px;
                display: inline-block;
                height: 36px;
              }
            }
          }
          button {
            height: 37px;
            width: 95px;
            font-size: 18px;
            background-color: #dd1944;
            color: #fff;
            border: 0;
            cursor: pointer;
          }
          button:hover{
            background-color: #E34668;
          }
        }
      }
    }
  }
}
</style>
