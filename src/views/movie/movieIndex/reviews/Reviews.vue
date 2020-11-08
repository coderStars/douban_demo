<template>
  <div id="reviews">
    <!-- 头部 -->
    <h2 class="reviews-hd">
      <div class="hd-left">
        <p>最受欢迎的影评</p>
        <a href="#">更多热门影评»</a>
        <a href="#">新片影评»</a>
      </div>
    </h2>
    <div class="reviews-bd">
      <div class="review-item">
        <a href="#"
          ><img
            src="https://img9.doubanio.com//view//photo//s_ratio_poster//public//p2623955494.webp"
            alt="电影"
            class="lazy"
        /></a>
        <div class="review-content">
          <a href="#" class="title"
            >我们的童年[数码宝贝大冒险]是个怎样的故事？</a
          >
          <div class="review-meta">
            <a href="#">ryo</a> 评论
            <a href="#">《数码宝贝：最后的进化》</a>
            <span class="star"></span>
          </div>
          <div class="details">
            1，西园悟是01的系构，他在bd里说到:
            【想通过这部作品给孩子们传达什么事？ 西园
            基本是勇气和友情的故事。还有，不管是什么作品都总是想说「自己思考自己行动吧」。就为了这个把孩子们丢到不得了的世界去（笑）...
            <a href="#">(全文)</a>
          </div>
        </div>
      </div>
      <div class="review-item">
        <a href="#"
          ><img
            src="https://img3.doubanio.com//view//photo//s_ratio_poster//public//p2620161520.webp"
            alt="电影"
            class="lazy"
        /></a>
        <div class="review-content">
          <a href="#" class="title"
            >《芝加哥七君子审判》：这段历史究竟告诉了我们什么？</a
          >
          <div class="review-meta">
            <a href="#">Maggie_in_LA</a> 评论
            <a href="#">《芝加哥七君子审判》</a>
            <span class="star"></span>
          </div>
          <div class="details">
                本片我看了两遍，一次在家，一次在汽车影院，因为人物众多、台词又多又快而且很精彩，第一次看的时候真的有点跟不上，后来做了一些背景研究感觉好多了。本片的目的主要是还原整个事件曲折又荒谬的过程，以及一次...
            <a href="#">(全文)</a>
          </div>
        </div>
      </div>
      <div class="review-item">
        <a href="#"
          ><img
            src="https://img1.doubanio.com//view//photo//s_ratio_poster//public//p2611785578.webp"
            alt="电影"
            class="lazy"
        /></a>
        <div class="review-content">
          <a href="#" class="title"
            >一套迷人的梦影像系统——评《荒野咖啡馆》</a
          >
          <div class="review-meta">
            <a href="#">我杀了约翰列侬</a> 评论
            <a href="#">《荒野咖啡馆》</a>
            <span class="star"></span>
          </div>
          <div class="details">
                我特别喜欢应亮导演的一句话“电影而已”。 是的，“电影而已”。我们喜欢和热爱电影，但也别把电影太较真儿。 电影应该是多种多样的，电影应该是造梦的，电影应该是有余味儿的。不是所有电影都需要讲故事，至少...
            <a href="#">(全文)</a>
          </div>
        </div>
      </div>
      <div class="review-item">
        <a href="#"
          ><img
            src="https://img9.doubanio.com//view//photo//s_ratio_poster//public//p2622904695.webp"
            alt="电影"
            class="lazy"
        /></a>
        <div class="review-content">
          <a href="#" class="title"
            >怎样把世界末日玩出新花样？</a
          >
          <div class="review-meta">
            <a href="#">楚yoyo</a> 评论
            <a href="#">《爱与怪物》</a>
            <span class="star"></span>
          </div>
          <div class="details">
                一提到世界末日，大家就想到丧尸，最近几年也是各类丧尸电影争相斗艳。编剧没编腻，我们观众反正是快看吐了。 本片非常新颖，用了另外一个题材。 事情发生在不久的未来，一颗小行星马上要撞上地球，人类为了阻止...
              <a href="#">(全文)</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reviews",
};
</script>

<style lang="less" scoped>
  a {
    color: #37a;
    text-decoration: none;
    font-size: 13px;
  }
  a:visited {
    color: #666699;
    text-decoration: none;
  }
  a:hover {
    color: #ffffff !important;
    background: rgb(51, 119, 170);
  }
  a:active {
    color: #ffffff;
    background: rgb(255, 153, 51);
  }
#reviews {
  margin-bottom: 36px;
  // 头部
  .reviews-hd {
    padding-bottom: 10px;
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 18px;
    color: #111;
    font-weight: normal;
    .hd-left{
      display: flex;
      width: 280px;
      justify-content: space-between;
      align-items: baseline;
    }
  }

  // 内容区
  .reviews-bd{
    .review-item{
      display: flex;
      margin-bottom: 24px;
      padding-bottom: 24px;
      border-bottom: 1px solid #eaeaea;
      a{
        width: 68px;
        .lazy{
          width: 68px;
          vertical-align: bottom;
        }
      }
      .review-content{
        padding-left: 18px;
        padding-top: 5px;
        .title{
          font-size: 15px;
        }
        .review-meta{
          color: #666;
          padding: 10px 0;
          .star{
            display: inline-block;
            width: 55px;
            height: 11px; 
            margin-left: 5px;
            background: url('http://img3.doubanio.com//f//shire//b8f4c3672ef81106701071831e22422a745d3b74//pics//tating_icons//ic_rating_s.png');
            background-size: 55px 122.5px;
            background-origin: 0 0;
          }
        }
      }
    }
  }
}
</style>
