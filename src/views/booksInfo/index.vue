<template>
  <div>
    <div class="wrapper">
      <h1>第111天：人质手记</h1>
      <!-- 内容区 -->
      <div class="content">
        <!-- 左侧 -->
        <div class="article">
          <div class="indent">
            <div class="subjectwrap">
              <div class="subject">
                <!-- 封面 -->
                <div class="mainpic">
                  <a href="##">
                    <img src="./images/bk_img.jpg" title="点击查看大图" />
                  </a>
                </div>
                <!-- 书籍基本信息 -->
                <div class="info">
                  <span
                    >作者:
                    <a href="##">[澳大利亚]格里高利·大卫·罗伯兹</a> </span
                  ><br />
                  <span>出版社: 北京联合出版公司</span><br />
                  <span>出品方: <a href="##">磨铁图书</a></span
                  ><br />
                  <span>副标题: 项塔兰全三册2</span><br />
                  <span>原作名: Shantaram</span><br />
                  <span>译者: <a href="##">黄中宪</a></span
                  ><br />
                  <span>出版年: 2020-9</span><br />
                  <span>页数: 328</span><br />
                  <span>定价: 48.00元</span><br />
                  <span>装帧: 平装</span><br />
                  <span>丛书: <a href="##">项塔兰套装</a></span
                  ><br />
                  <span>ISBN: 9787559643292</span>
                </div>
              </div>
              <!-- 评分 -->
              <div class="interest_sectl">
                <div class="rating_wrap">
                  <div class="rating_logo">豆瓣评分</div>
                  <div class="rating_self">
                    <span>9.3</span>
                    <div class="rating_right">
                      <div class="star"></div>
                      <div class="rating_sum">
                        <a href="##">42人评论</a>
                      </div>
                    </div>
                  </div>
                  <span class="starstop">5星</span>
                  <div class="power" style="width:60px"></div>
                  <span>57.1%</span><br />
                  <span class="starstop">4星</span>
                  <div class="power" style="width:40px"></div>
                  <span>35.7%</span><br />
                  <span class="starstop">3星</span>
                  <div class="power" style="width:8px"></div>
                  <span>7.1%</span><br />
                  <span class="starstop">2星</span>
                  <div class="power"></div>
                  <span>0.0%</span><br />
                  <span class="starstop">1星</span>
                  <div class="power"></div>
                  <span>0.0%</span><br />
                </div>
              </div>
            </div>
            <div class="interest">
              <div class="btn">
                <a href="##">想 读</a>
              </div>
              <div class="btn">
                <a href="##">在 读</a>
              </div>
              <div class="btn">
                <a href="##">读 过</a>
              </div>
              <div class="evaluate">
                评价：
                <span class="rating">
                  <a href="##">
                    <img class="star" src="./images/star_hollow_hover@2x.png" />
                  </a>
                  <a href="##">
                    <img class="star" src="./images/star_hollow_hover@2x.png" />
                  </a>
                  <a href="##">
                    <img class="star" src="./images/star_hollow_hover@2x.png" />
                  </a>
                  <a href="##">
                    <img class="star" src="./images/star_hollow_hover@2x.png" />
                  </a>
                  <a href="##">
                    <img class="star" src="./images/star_hollow_hover@2x.png" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- 右侧 -->
        <div class="aside"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BooksInfo"
};
</script>

<style scoped lang="less">
h1 {
  font-size: 26px;
  padding-bottom: 15px;
}
.content {
  height: 3000px;
  display: flex;
  .article {
    width: 715px;
    padding-right: 40px;
    display: flex;
    .indent {
      width: 675px;
      height: 337px;
      .subjectwrap {
        width: 100%;
        height: 252px;
        display: flex;
        margin-bottom: 15px;
        .subject {
          display: flex;
          width: 500px;
          .mainpic {
            width: 135px;
            margin: 3px 12px 0 0;
            img {
              height: 185px;
              margin-bottom: 10px;
            }
          }
          .info {
            font-size: 13px;
            span {
              line-height: 160%;
              color: #666;
              a {
                color: #3377aa;
              }
              a:hover {
                background-color: #5081b9;
                color: #fff;
              }
            }
          }
        }
      }
      .interest {
        width: 100%;
        height: 24px;
        padding: 20px 0 3px 0;
        background-color: #bfc;
        display: flex;
        .btn {
          width: 51px;
          height: 24px;
          line-height: 24px;
          font-size: 13px;
          background-color: #ffeada;
          text-align: center;
          margin-right: 10px;
          box-sizing: border-box;
          border: 1px solid #e9d2c2;
          border-radius: 4px;
        }
        .evaluate {
          height: 24px;
          line-height: 24px;
          display: flex;
          .rating {
            height: 19px;
            img {
              width: 16px;
              height: 16px;
              margin-top: 4px;
            }
          }
        }
      }
    }
    .interest_sectl {
      width: 155px;
      height: 157px;
      padding-left: 15px;
      border-left: 1px solid #f4f4f4;
      margin-top: 2px;
      .rating_wrap {
        width: 155px;
        height: 142px;
        padding-bottom: 15px;
        color: #9b9b9b;
        font: 12px Helvetica, Arial, sans-serif;
        font-size: 12px;
        .rating_logo {
          font-size: 12px;
        }
        .rating_self {
          width: 155px;
          height: 60px;
          span {
            display: inline-block;
            font: 12px Helvetica, Arial, sans-serif;
            float: left;
            font-size: 28px;
            color: #494949;
            width: 46.5px;
            height: 56px;
            line-height: 56px;
          }
          .rating_right {
            float: left;
            width: 75px;
            height: 40px;
            padding: 10px 0 10px 6px;
            .star {
              width: 75px;
              height: 15px;
              margin-top: 1px;
              background: url(./images/star.png) no-repeat 0 -15px;
            }
            .rating_sum {
              width: 100%;
              height: 24px;
              line-height: 24px;
              a {
                font-size: 12px;
                color: #5081b9;
              }
              a:hover {
                background-color: #5081b9;
                color: #fff;
              }
            }
          }
        }
        .starstop {
          margin-right: 5px;
        }
        .power {
          display: inline-block;
          height: 10px;
          margin: 1px 4px;
          background-color: #ffd596;
        }
      }
    }
  }
  .aside {
    width: 300px;
    height: 3000px;
    background-color: pink;
  }
}
</style>
