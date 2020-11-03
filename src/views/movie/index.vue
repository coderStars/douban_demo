<template>
  <div>
    <!-- 中间内容区 -->
    <div id="wapper">
      <div class="aircle">
        <!-- 正在热映 -->
        <div class="screening">
          <!-- 头部 -->
          <div class="screening-hd">
            <div class="hd-left">
              <h2 id="Hoting">正在热映</h2>
              <span id="all-Hoting"><a href="#">全部正在热映»</a></span>
              <span id="will-show"><a href="#">即将上映»</a></span>
            </div>
            <div class="hd-right">
              <div class="pages">1 / 5</div>
              <!-- 翻页 -->
              <div class="pre-next">
                <a href="#" class="pre"><div></div></a>
                <a href="#" class="next"><div></div></a>
              </div>
            </div>
          </div>
          <ul class="slide-content">
            <li class="slide-content-item">
              <a href="#" class="hoting-movie-img"><img src="../../assets/images/movie/index/p2623955494.webp" alt=""></a>
              <div class="movie-title"><a href="#">数码宝贝：最后的进化 デジモンアドベンチャー LAST EVOLUTION 絆</a></div>
              <div class="grade"><div class="rating-star"></div><span>7.6</span></div>
              <button>选座购票</button>
            </li>
            <li class="slide-content-item">
              <a href="#" class="hoting-movie-img"><img src="../../assets/images/movie/index/p2623955494.webp" alt=""></a>
              <div class="movie-title"><a href="#">一点就到家</a></div>
              <div class="grade"><div class="rating-star"></div><span>7.6</span></div>
              <button>选座购票</button>
            </li>
            <li class="slide-content-item">
              <a href="#" class="hoting-movie-img"><img src="../../assets/images/movie/index/p2623955494.webp" alt=""></a>
              <div class="movie-title"><a href="#">姜子牙</a></div>
              <div class="grade"><div class="rating-star"></div><span>7.6</span></div>
              <button>选座购票</button>
            </li>
            <li class="slide-content-item">
              <a href="#" class="hoting-movie-img"><img src="../../assets/images/movie/index/p2623955494.webp" alt=""></a>
              <div class="movie-title"><a href="#">数码宝贝：最后的进化 デジモンアドベンチャー LAST EVOLUTION 絆</a></div>
              <div class="grade"><div class="rating-star"></div><span>7.6</span></div>
              <button>选座购票</button>
            </li>
            <li class="slide-content-item">
              <a href="#" class="hoting-movie-img"><img src="../../assets/images/movie/index/p2623955494.webp" alt=""></a>
              <div class="movie-title"><a href="#">一点就到家</a></div>
              <div class="grade"><div class="rating-star"></div><span>7.6</span></div>
              <button>选座购票</button>
            </li>
          </ul>
        </div>

        <Latest></Latest>

        <Latest></Latest>
      </div>
      <div class="aside">222</div>
    </div>
  </div>
</template>

<script>
import Latest from '../../components/Latest/Latest'
export default {
  name: "Movie",
  props: {},
  components: {},
  data() {
    return {};
  },
  components:{
    Latest,
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.clearfix::before,
.clearfix::after{
	content: '';
	display: table;
	clear: both;
}
// 内容区外部容器
#wapper {
  display: flex;
  width: 1040px;
  margin: 0 auto;
  // 内容区左边部分
  .aircle {
    width: 675px;
    margin-right: 40px;
    // 正在热映
    .screening {
      width: 675px;
      height: 324px;
      margin-bottom: 36px;
      // 正在热映头部
      .screening-hd{
        width: 100%;
        height: 25px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgb(234, 234, 234);
        margin-bottom: 18px;
        // 正在热映头部左侧
        .hd-left{
          display: flex;
          width: 270px;
          float: left;
          font-size: 13px;
          align-content: space-around;
          align-items: baseline;
          #Hoting{
            flex: 1;
            font-weight: normal;
            font-size: 16px;
          }
          span{
            a:link {
              color: #37a;
              text-decoration: none;
            }
            a:visited {
              color: #666699;
              text-decoration: none;
            }
            a:hover{
              color: #FFFFFF !important;
              background: rgb(51,119,170);
            }
            a:active{
              color: #FFFFFF;
              background: rgb(255,153,51);
            }
          }
          #all-Hoting{
            flex: 1.2;
          }
          #will-show{
            flex: 1;
          }
        }
        // 正在热映头部右侧
        .hd-right{
          display: flex;
          float: right;
          .pages{
            width: 28px;
            height: 30px;
            line-height: 30px;
            color: #666;
            font-size: 12px;
          }
          // 翻页
          .pre-next{
            width: 46px;
            height: 18px;
            margin: 5px 0 0 15px;
            a{
              display: inline-block;
              margin-right: 5px;
            }
            div{
              width: 18px;
              height: 18px;
            }
            .pre div{
              background: url('../../assets/images/movie/index/slide_swithc_2.png') 0 0 ;
            }
            .next div{
              background: url('../../assets/images/movie/index/slide_swithc_2.png') 18px 0;
            }
          }
        }
      }
      .slide-content{
        display: flex;
        width: 100%;
        justify-content: space-between;
        .slide-content-item{
          width: 115px;
          height: 250px;
          text-align: center;
          .hoting-movie-img{
            width: 115px;
            height: 172.5px;
            display: block;
            margin-bottom: 12px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .movie-title{
            width: 115px;
            height: 22px;
            padding: 0 10px;
            line-height: 22px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            box-sizing: border-box;
            a{
              color: #333;
              font-size: 14px;
            }
          }
          .grade{
            width: 77px;
            height: 19px;
            // margin: 4px 0 2px 0;
            margin: 0 auto;
            margin-top: 4px;
            margin-bottom: 2px;
            text-align: center;
            .rating-star{
              display: inline-block;
              width: 55px;
              height: 11px;
              margin: 3px 3px 0 0;
              background: url('../../assets/images/movie/index/ic_rating_s@2x.png') no-repeat;
              background-size: 55px 122.5px;
              background-origin: 0 0;
            }
            span{

            }
          }
        }
      }
    }


  }
  // 内容区右边部分
  .aside {
    width: 300px;
    height: 500px;
    margin-left: 25px;
    background: lavenderblush;
  }
}
</style>