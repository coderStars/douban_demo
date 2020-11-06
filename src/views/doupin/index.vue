<template>
<<<<<<< HEAD
    <body>
    <!-- 头部导航 -->
    
    
    </body>
=======
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
          <img src="./img/ia_500000009.jpg" alt="" />
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
              <img class="shopping" src="./img/ia_500000009.jpg" alt="" />
              <span>购物说明</span>
            </a>
            <a
              class="item"
              target="_blank"
              href="https://www.douban.com/doumail/write?to=119347429"
            >
              <img class="yijian" src="./img/ia_500000009.jpg" alt="" />
              <span>意见反馈</span>
            </a>
            <a class="item" href="https://bizpage.douban.com/business/">
              <img class="shangwu" src="./img/ia_500000009.jpg" alt="" />
              <span>商务合作</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
</template>

<script>
export default {
<<<<<<< HEAD
    name: 'Doupin',
=======
  name: "Doupin",
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
};
</script>

<style lang="less" scoped>
<<<<<<< HEAD
    // 头部导航
.headerNav {
    width: 100%;
    height: 28px;
    background-color: rgb(103, 111, 116);
}

//轮播上导航
#market-main{
    width: 100%;
    height: 100px;
    .market-global-header{
        .header-inner {
            margin: 0 auto;
            width: 1100px;
            height: 100px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .logo {
                margin-top: 7px;
                text-align: center;
                line-height: 100px;

                img {

                    width: 126px;
                    height: 26px;
                }
            }

            .market-nav {
                line-height: 100px;

                a:hover {
                    color: #4FB247 !important;
                }

                a {
                    margin: 0 12px;
                    color: #6e6e6e;
                    font-size: 18px;
                    font-weight: 300;
                }

            }

            .market-user {
                width: 88px;
                height: 102px;

                .user-pic {
                    line-height: 100px;
                    text-align: center;

                    img {
                        vertical-align: middle;
                        font-size: 0;
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                    }

                    span {
                        width: 56px;
                        height: 100px;
                    }
                }

            }

        }
    }
}

//轮播部分 
.homepage-wrap{
    .swiper-container {
        .swiper-wrapper {
            width: 100%;

            .swiper-slide img {
                width: 100%;
                height: 420px;
            }
        }
    }
}

//新品首发
.product-wrap{
    .product-list-title {
        margin: 50px auto 20px;
        color: #3e3a39;
        font-size: 20px;
        font-weight: 600;
    }
    .product-list-content{
        display: flex;
        width: 1120px;
        height: 345px;
        margin: 0 auto;
        justify-content: space-around;
        .product-card{
            width: 353.33px;
            height: 344.31px;
            
            .product-card-cover {
                img {
                    width: 353.33px;
                    height: 265.31px;
                }
            }
            
            .product-card-info{
                text-align: left;
                .product-card-title {
                    color: #3e3a39;
                    font-size: 16px;
                    font-weight: 500;
                }

                .product-card-desc {
                    color: #ababac;
                    font-size: 14px;
                }

                .product-card-price {
                    display: inline;

                    .product-card-promote {
                        color: #E4476A;
                        font-size: 16px;
                    }

                    .product-card-del {
                        color: #D1CABF;
                        text-decoration-color: initial;
                        margin-left: 3px;
                        font-size: 13px;
                        text-decoration: line-through;
                    }
                }
                .product-card-tags {
                    padding: 1px 4px;
                    margin-right: 3px;
                    color: #dd1944;
                    font-size: 12px;
                    background-color: #fbe8ec;
                    display: inline;
                }
                
            }
        }
        
    }
}

// 会员中心
.product-wrap{
    margin-top: 50px;
    width: 100%;
    text-align: center;
    img {
        width: 1100px;
        height: 200px;
    }
    
}

// 限时抢购
.product-list-sale{
    .product-list-title{
        padding: 30px 0;
        color: #3e3a39;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        .product-list-time{
            margin-top: 5px;
            font-size: 12px;
            font-weight: 400;
        }
    }
    .product-list-content{
        display: flex;
        flex: 1;
        justify-content: flex-start;
        margin: 0 auto;
        width: 1100px;
        height: 360px;
        .product-card-large{
            .product-cover-pic {
                width: 825.36px;
                height: 360px;
            }
        }
        .product-card-main {
            margin-left: 32px;
            width: 260px;
            height: 360px;
            padding: 15px;
            background: #FFF;
            .product-card-cover{
                .product-cover-pic{
                    width: 230px;
                    height: 230px;
                }
            }
            .product-card-info{
                text-align: left;
                .product-card-title{
                    color: #3e3a39;
                    font-size: 16px;
                    font-weight: 500;
                    margin-top: 5px;
                }
                .product-card-desc{
                    color: #ababac;
                    font-size: 14px;
                    margin-top: 8px;
                }
                .product-card-tags{
                    margin-top: 8px;
                    .product-card-tag{
                        padding: 1px 4px;
                        margin-right: 3px;
                        color: #dd1944;
                        font-size: 12px;
                        background-color: #fbe8ec;
                    }
                }
                .product-card-price{
                    display: inline-block;
                    margin-top: 8px;
                    .product-card-promote{
                        color: #dd1944;
                        font-size: 16px;
                    }
                    .product-card-del{
                        margin-left: 3px;
                        color: #ababac;
                        font-size: 13px;
                        text-decoration: line-through;
                    }
                }
                .product-card-action{
                    margin-top: 8px;
                    float: right;
                    .product-card-btn{
                        padding: 4px 8px;
                        -webkit-border-radius: 40px;
                        border-radius: 40px;
                        color: #fff;
                        font-size: 13px;
                        background: #dd1944;
                        vertical-align: middle;
                    }
                }

            }
        }
    }
}

//人气单品
.product-list-hot{
    .product-list-title{
        padding: 30px 0;
        color: #3e3a39;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
    }
    .product-list-content{
        width: 1120px;
        height: 339px;
        display: flex;
        justify-content: space-between;
        .product-list-item{
            width: 280px;
            height: 339px;
            padding: 0 10px;
            .product-cover-pic {
                width: 260px;
                height: 260px;
            }
                
            .product-card-info{
                width: 260px;
                text-align: left;
                .product-card-title{
                    color: #3e3a39;
                    font-size: 16px;
                    font-weight: 500;
                }
                .product-card-desc{
                    color: #ababac;
                    font-size: 14px;
                }
                .product-card-price{
                    color: #dd1944;
                    font-size: 16px;
                }
            }
        }
    }
}

//中间轮播
.product-list-specials{
    width: 1100px;
    height: 470px;
    position: relative;
    margin: 0 auto;
    .product-list-title {
        .more {
            color: #3e3a39;
            font-size: 16px;
            font-weight: 600;
            position: absolute;
            top: -50px;
            right: 0px;
            z-index: 10;
        }
    }
    
    
}


.categorys-wrap {
    //豆瓣经典 文具小物
    .category{
        .product-list-category {
            .product-list-title {
                width: 1100px;
                height: 100px;
                line-height: 100px;
                display: flex;
                align-items: center;
                .tex {
                    padding: 30px 0;
                    color: #3e3a39;
                    font-size: 20px;
                    font-weight: 600;
                    text-align: center;
                }

                .product-list-desc {
                    margin-left: 16px;
                    color: #ababac;
                    font-size: 16px;
                    font-weight: 400;
                }

                .product-list-more {
                    margin-left: auto;
                    color: #6e6e6e;
                    font-size: 14px;
                    font-weight: 300;
                }
            }

            .product-list-content {
                width: 1120px;
                height: 336.67px;
                display: flex;
                justify-content: space-between;
                .product-list-item{
                    width: 260px;
                    height: 336.67px;
                    .product-cover-pic{
                        width: 260px;
                        height: 260px;
                    }
                    .product-card-info{
                        text-align: left;
                        .product-card-title{
                            color: #3e3a39;
                            font-size: 16px;
                            font-weight: 500;
                        }
                        .product-card-desc{
                            color: #ababac;
                            font-size: 14px;
                        }
                        .product-card-price {
                            .product-card-promote{
                                color: #dd1944;
                                font-size: 16px;
                            }
                        }
                    }
                }

            }
        }
    }

    //家具生活  外出旅行
    .category{
        .product-card-price {
            .product-card-promote {
                color: #dd1944;
                font-size: 16px;
            }

            .product-card-del {
                margin-left: 3px;
                color: #ababac;
                font-size: 13px;
                text-decoration: line-through;
            }

            .product-card-tag {
                padding: 1px 4px;
                margin-right: 3px;
                color: #dd1944;
                font-size: 12px;
                background-color: #fbe8ec;
            }
        }
    }
}

//用户测评
.product-list-evaluation{
    width: 1100px;
    height: 1236.51px;
    margin: 0 auto;
    .product-list-title{
        padding: 30px 0;
        color: #3e3a39;
        font-size: 20px;
        font-weight: 600;
        text-align: left;
    }
    .product-list-content{
        display: flex;
        height: 1151.5px;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
        .product-list-item{
            width: 260px;
            margin-bottom: 20px;
            text-align: left;
            .product-card-main {
                margin-bottom: 20px;
                .product-cover-pic {
                    width: 260px;
                }
                .product-card-title {
                    margin: 10px 0 20px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: clip;
                    white-space: normal;
                    font-weight: 400;
                    font-size: 16px;

                }

            }

            .product-card-user {
                .product-card-avatar {
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    margin-right: 7px;
                    vertical-align: middle;
                }
                .product-card-username {
                    display: inline-block;
                    color: #6e6e6e;
                    font-size: 12px;
                    line-height: 20px;
                    vertical-align: middle;
                }
            }
            
        }
    }
    .evaluation-more{
        display: block;
        margin: 0 auto 50px;
        height: 44px;
        width: 1100px;
        color: #6e6e6e;
        font-size: 16px;
        font-weight: 300;
        line-height: 44px;
        text-align: center;
        background-color: #f9f9f9;
    }
}
.product-list-evaluation{
    #product-cover-pic-one {
        width: 260px;
        height: 194.97px;
    }
    #product-cover-pic-two {
        width: 260px;
        height: 462.08px;
    }
    #product-cover-pic-three {
        width: 260px;
        height: 390px;
    }
    #product-cover-pic-four {
        width: 260px;
        height: 229.83px;
    }
    #product-cover-pic-five {
        width: 260px;
        height: 173.25px;
    }
    #product-cover-pic-six {
        width: 260px;
        height: 173.33px;
    }
    #product-cover-pic-senve {
        width: 260px;
        height: 173.39px;
    }
    #product-cover-pic-eight {
        width: 260px;
        height: 390px;
    }
}

// 官方小组
.group-wrap{
    width: 1100px;
    height: 407.92px;
    margin: 0 auto 150px;
    .group-hd{
        height: 90px;
        padding: 30px 0;
        margin: 30px 0 0;
        line-height: 90px;
        .more{
            float: right;
            color: #6e6e6e;
            font-size: 14px;
            font-weight: 300;
        }
        h4{
            float: left;
            font-size: 20px;
            font-weight: 600;
            color: #3e3a39;
        }
    }
    .group-topics{
        width: 1100px;
        height: 277.92px;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-around;
        .group-topic-item{
            display: flex;
            align-items: flex-start;
            .topic-comment-amount{
                text-align: center;
                width: 25px;
                img{
                    height: 12px;
                    width: 14px;
                }
                div{
                    font-size: 12px;
                }
            }
            .topic-update-time{
                margin-left: auto;
                font-size: 16px;
                color: #3e3a39;
            }
            .topic-title{
                margin-left: 20px;
                font-size: 16px;
                color: #3e3a39;
            }
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
    .footer-wrapper{
        width: 1100px;
        margin-left: auto;
        margin-right: auto;
        color: #ababac;
        display: flex;
        justify-content: space-between;
        .footer-left{
            img{
                width: 114.24px;
                height: 26.67px;
                margin-bottom: 10px;
            }
            .info{
                font-size: 12px;
                line-height: 21px;
                text-align: left;
            }
        }
        .footer-right{
            margin-top: 20px;
            margin-right: 30px;
            .item{
                img{
                    width: 20px;
                    vertical-align: middle;
                }
                span{
                    font-size: 20px;
                    vertical-align: middle;
                }
            }

        }
    }
}


=======
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
      }
    }
    .footer-right {
      margin-top: 20px;
      margin-right: 30px;
      .item {
        img {
          width: 20px;
          vertical-align: middle;
        }
        span {
          font-size: 20px;
          vertical-align: middle;
        }
      }
    }
  }
}
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
</style>
