<template>
  <div>
    <div class="wrapper">
      <h1>第111天：人质手记</h1>
      <!-- 内容区 -->
      <div class="content">
        <!-- 左侧 -->
        <div class="article">
          <div class="subject">
            <div class="mainpic">
              <a href="##">
                <img src="./images/bk_img.jpg" alt="点击查看大图" />
              </a>
            </div>
            <div class="info">
              <span>作者: <a href="##">[澳大利亚]格里高利·大卫·罗伯兹</a> </span
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
          <div class="interest_sectl">

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
          line-height: 150%;
        }
      }
    }
    .interest_sectl{
      width: 155px;
      height: 157px;
      padding-left: 15px;
      border-left: 1px solid #000;
      margin-top: 2px;
    }
  }
  .aside {
    width: 300px;
    height: 3000px;
    background-color: pink;
  }
}
</style>
