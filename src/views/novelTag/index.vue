<template>
  <div>
    <Search
      inpText="书名、作者、ISBN"
      :buttomTextList="buttomTextList"
    ></Search>
    <div class="typeArea">
      <div class="container">
        <!-- 标题头部 -->
        <h1 class="title">豆瓣图书标签：{{ bookList.labelName }}</h1>
        <!-- 小说内容 -->
        <div class="content">
          <!-- 左边布局 -->
          <div class="leftContainer">
            <div class="booksTextContainer">
              <!-- 右上角排序 -->
              <div class="rightSort">
                <span
                  >综合排序 / <a href="">按出版日期排序</a> /
                  <a href="">按评价排序</a></span
                >
              </div>
              <!-- 书信息  （动态数据已渲染完成）-->
              <div class="booksText">
                <div
                  class="booksInfo"
                  v-for="item in bookList.booksInfo"
                  :key="item.novelId"
                >
                  <div class="booksImg">
                    <a href="">
                      <img :src="item.imgUrl" alt="" />
                    </a>
                  </div>
                  <div class="booksIntroduce">
                    <h2>
                      <a href="">{{ item.booksTitle }}</a>
                    </h2>
                    <div class="author">
                      {{ item.author }}
                    </div>
                    <div class="PF">
                      <span class="span1">{{ item.pentagram }}</span>
                      <span class="span2">{{ item.PF }}</span>
                      <span class="span3">{{ item.EvaluationNumber }}</span>
                    </div>
                    <p>
                      {{ item.booksContent }}
                    </p>
                    <div class="buyBooks">
                      <div class="like">
                        <span
                          ><a href="">{{ item.wantRead }}</a></span
                        >
                        <span
                          ><a href="">{{ item.reading }}</a></span
                        >
                        <span
                          ><a href="">{{ item.readed }}</a></span
                        >
                      </div>
                      <div class="buy">
                        <span
                          ><a href="">{{ item.doubanPurchase }} </a></span
                        >
                        <span>
                          <a href="">
                            <span>{{ item.addBookCart }}</span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 分页器 -->
                <div class="paginationContainer">
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :page-size="21"
                    :pager-count="11"
                    layout="prev, pager, next"
                    :total="7980"
                    prev-text="<前页"
                    next-text="后页>"
                  >
                  </el-pagination>
                </div>
              </div>
            </div>
          </div>
          <!-- 右边布局 -->
          <div class="rightContainer">
            <!-- 广告 -->
            <div class="advertising">
              <a href="">
                <img
                  src="https://img1.doubanio.com/view/dale-online/dale_ad/public/55d11c20710e288.jpg"
                  alt=""
                />
              </a>
            </div>
            <div class="h2Label">
              <h2>
                <span>相关的标签</span
                >&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
              </h2>
            </div>
            <div class="tags-list">
              <a href="/tag/外国文学">外国文学</a>
              <a href="/tag/言情">言情</a>
              <a href="/tag/美国">美国</a>
              <a href="/tag/文学">文学</a>
              <a href="/tag/爱情">爱情</a>
              <a href="/tag/中国">中国</a>
              <a href="/tag/中国文学">中国文学</a>
              <a href="/tag/英国">英国</a>
            </div>
            <!-- input输入框 -->
            <form action="/tag/" method="GET" class="formInput">
              <input
                class="search_text"
                type="text"
                size="24"
                maxlength="36"
                title="去其他标签"
                value=""
              />
              <input class="butt" type="submit" value="进入" />
            </form>
            <br />
            <br />
            <p>
              >
              <a href="https://book.douban.com/tag/">浏览全部图书标签</a>
            </p>
            <!-- 最受关注的小说 -->
            <div class="focusBooks">
              <h2>最受关注的书-小说</h2>
              <div class="booksImgContainer">
                <div class="booksImg">
                  <a href="">
                    <img
                      src="https://img9.doubanio.com/view/subject/s/public/s2364685.jpg"
                      alt=""
                    />
                  </a>
                  <a href="">
                    <span>故事新编</span>
                  </a>
                </div>
                <div class="booksImg">
                  <a href="">
                    <img
                      src="https://img9.doubanio.com/view/subject/s/public/s33500305.jpg"
                      alt=""
                    />
                  </a>
                  <a href="">
                    <span>彷徨</span>
                  </a>
                </div>
                <div class="booksImg">
                  <a href="">
                    <img
                      src="https://img2.doubanio.com/view/subject/s/public/s4696893.jpg"
                      alt=""
                    />
                  </a>
                  <a href="">
                    <span>呐喊</span>
                  </a>
                </div>
                <div class="booksImg">
                  <a href="">
                    <img
                      src="https://img3.doubanio.com/view/subject/s/public/s33718940.jpg"
                      alt=""
                    />
                  </a>
                  <a href="">
                    <span>夜晚的潜水艇</span>
                  </a>
                </div>
                <div class="booksImg">
                  <a href="">
                    <img
                      src="https://img9.doubanio.com/view/subject/s/public/s9069944.jpg"
                      alt=""
                    />
                  </a>
                  <a href="">
                    <span>中国小说史略</span>
                  </a>
                </div>
                <div class="booksImg">
                  <a href="">
                    <img
                      src="https://img1.doubanio.com/view/subject/s/public/s5813979.jpg"
                      alt=""
                    />
                  </a>
                  <a href="">
                    <span>喜宝</span>
                  </a>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getBookHotList,
  getNewsBooksList,
  getBooksClassification,
} from "@/api/books.js";

import { mapState } from "vuex";
export default {
  name: "NovelTag",
  mounted() {
    this.getBooksClassification();
  },
  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
    },
    async getBooksClassification() {
      let { labelId, labelName } = this.$route.query;
      console.log(labelId, labelName);
      let result = await getBooksClassification();
      this.bookList = result.find((item) => {
        return item.labelId == labelId;
      });
      // console.log(result.find(item => item.labelId == labelId));
      // this.bookList = result
      console.log(this.bookList);
    },
  },
  data() {
    return {
      bookList: [],
      buttomTextList: [
        "购书单",
        "电子图书",
        "豆瓣书店",
        "2019年度榜单",
        "2019书影音报告",
        "购物车",
      ],
    };
  },

  computed: {
    ...mapState({
      booksClassification: (state) => state.books.booksClassification,
    }),
  },
};
</script>

<style  lang="less"  scoped>
.typeArea {
  width: 1040px;
  margin: 0 auto;
  // height: 9999px;
  //   background: yellowgreen;
  .container {
    width: 100%;
    // 标题头部
    .title {
      height: 28px;
      font-size: 26px;
      padding-bottom: 15px;
    }
    // 内容
    .content {
      //   height: 999px;
      //   background: violet;
      display: flex;
      justify-content: space-between;
      // 左边布局
      .leftContainer {
        width: 675px;
        height: 100%;
        padding-right: 40px;
        // background: turquoise;
        .booksTextContainer {
          width: 675px;
          //   height: 100%;
          .rightSort {
            height: 21px;
            position: relative;
            span {
              position: absolute;
              right: 0px;
              top: 0px;
              font-size: 13px;
              color: #cccccc;
              a {
                color: #3377aa;
              }
              a:hover {
                background-color: #3377aa;
                color: white;
              }
            }
          }
          .booksText {
            width: 100%;
            // height: 100%;
            margin-top: 5px;
            // background: saddlebrown;
            .booksInfo {
              height: 196px;
              padding: 20px 0 10px;
              border-top: 1px #dadada dashed;
              display: flex;
              //   justify-content: space-between;
              .booksImg {
                width: 90px;
                height: 133px;
                margin-right: 20px;
                a {
                  img {
                    width: 90px;
                    height: 133px;
                  }
                }
              }
              .booksIntroduce {
                width: 565px;
                height: 195px;
                h2 {
                  width: 565px;
                  height: 20px;
                  margin-bottom: 6px;
                  a {
                    font-size: 14px;
                    color: #3377aa;
                  }
                }
                .author {
                  height: 20px;
                  width: 565px;
                  margin: 6px 0 8px;
                  font-size: 13px;
                  color: #666666;
                }
                .PF {
                  width: 565px;
                  height: 20px;
                  span {
                    margin-right: 5px;
                  }
                  .span1 {
                    width: 55px;
                    height: 11px;
                    font-size: 12px;
                    color: #e09015;
                  }
                  .san2 {
                    color: #e09015;
                    font-size: 12px;
                  }
                  .span3 {
                    font-size: 13px;
                    color: #666666;
                  }
                }
                p {
                  width: 565px;
                  height: 42px;
                  margin: 13px 0;
                  color: #666666;
                  font-size: 13px;
                }
                .buyBooks {
                  width: 565px;
                  height: 51px;
                  margin-top: 10px;
                  .like {
                    height: 21px;
                    width: 565px;
                    span {
                      a {
                        margin-right: 10px;
                        font-size: 13px;
                        color: #bbbbbb;
                      }
                    }
                  }
                  .buy {
                    width: 565px;
                    height: 21px;
                    margin-top: 10px;
                    a {
                      font-size: 13px;
                      color: #3377aa;
                    }
                    a:hover {
                      background-color: #3377aa;
                      color: white;
                    }
                  }
                }
              }
            }
          }
        }
      }
      // 右边布局
      .rightContainer {
        width: 300px;
        // height: 9999px;
        // background: saddlebrown;
        // 广告
        .advertising {
          height: 256px;
          // background: #3377aa;
          margin-bottom: 20px;
        }
        .h2Label {
          h2 {
            width: 300px;
            height: 24px;
            margin-bottom: 12px;
            color: #111;
            font-size: 16px;
            font-weight: normal;
          }
        }
        .tags-list {
          width: 300px;
          height: 45px;
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 20px;
          a {
            height: 22.4px;
            margin-right: 20px;
            font-size: 13px;
            color: #3377aa;
          }
        }
        // input输入框
        .formInput {
          input {
            border: 2px #878787 solid;
            margin-right: 3px;
            box-sizing: border-box;
            border-radius: 3px;
          }
        }
        p {
          margin-top: 14px;
          margin-bottom: 30px;
          a {
            font-size: 14px;
            color: #3377aa;
          }
        }
        // 最受关注的书
        .focusBooks {
          height: 378px;
          margin-bottom: 20px;
          h2 {
            height: 24px;
            margin-bottom: 12px;
            font-size: 16px;
            color: #111;
            line-height: 150%;
            font-weight: normal;
          }
          .booksImgContainer {
            height: 342px;
            width: 350px;
            display: flex;
            flex-wrap: wrap;
            .booksImg {
              width: 85px;
              height: 150px;
              margin-right: 22px;
              margin-bottom: 10px;
              a {
                color: #3377aa;
                font-size: 13px;
                text-align: center;
                img {
                  width: 85px;
                  height: 132px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
