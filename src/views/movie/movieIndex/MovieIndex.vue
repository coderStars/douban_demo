<template>
  <!-- 中间内容区 -->
  <div id="wapper">
    <div class="aircle">
      <!-- 正在热映 -->
      <div class="swiper-container screening">
        <!-- 头部 -->
        <div class="screening-hd">
          <div class="hd-left">
            <h2 id="Hoting">正在热映</h2>
            <span id="all-Hoting"
              ><a href="javascript:;">全部正在热映»</a></span
            >
            <span id="will-show"><a href="javascript:;">即将上映»</a></span>
          </div>
          <div class="hd-right">
            <div class="pages">
              {{ movieList.currentPage }} / {{ movieList.pageTotal }}
            </div>
            <!-- 翻页导航按钮 -->
            <div class="pre-next">
              <a href="javascript:;" class="pre"><div></div></a>
              <a href="javascript:;" class="next"><div></div></a>
            </div>
          </div>
        </div>
        <!-- 轮播图 -->
        <div class="swiper-wrapper slide-content">
          <div
            class="swiper-slide slide-content-item"
            v-for="movie in movieHot.subjects"
            :key="movie.id"
          >
            <a href="javascript:;" class="hoting-movie-img"
              ><img :src="movie.cover" alt=""
            /></a>
            <div class="movie-title">
              <a href="javascript:;">{{ movie.title }}</a>
            </div>
            <!-- 星级 -->
            <div class="grade">
              <div
                v-if="movie.rate * 1 >= 10"
                class="rating-star grade-1"
              ></div>
              <div
                v-else-if="movie.rate * 1 >= 9"
                class="rating-star grade-2"
              ></div>
              <div
                v-else-if="movie.rate * 1 >= 8"
                class="rating-star grade-3"
              ></div>
              <div
                v-else-if="movie.rate * 1 >= 7"
                class="rating-star grade-4"
              ></div>
              <div
                v-else-if="movie.rate * 1 >= 6"
                class="rating-star grade-5"
              ></div>
              <div
                v-else-if="movie.rate * 1 >= 5"
                class="rating-star grade-6"
              ></div>
              <div
                v-else-if="movie.rate * 1 >= 4"
                class="rating-star grade-7"
              ></div>
              <div
                v-else-if="movie.rate * 1 >= 3"
                class="rating-star grade-8"
              ></div>
              <div
                v-else-if="movie.rate * 1 >= 2"
                class="rating-star grade-9"
              ></div>
              <div v-else class="rating-star grade-10"></div>
              <span>{{ movie.rate }}</span>
            </div>
            <el-button class="bugTicket" type="primary" size="mini"
              >选座购票</el-button
            >
          </div>
        </div>
      </div>

      <Latest
        :currentTag.sync="tagList.currentMvTag"
        :list="tagList.mvList"
        :tag="tagList.mvTagList"
        :tagType="tagList.mvType"
        ref="mv"
      ></Latest>

      <Latest
        :currentTag.sync="tagList.currentTvTag"
        :list="tagList.tvList"
        :tag="tagList.tvTagList"
        :tagType="tagList.tvType"
        ref="tv"
      ></Latest>

      <Gallery></Gallery>

      <!-- 影评 -->
      <Reviews></Reviews>
    </div>

    <!-- 左边侧边栏 -->
    <div class="aside">
      <!-- 豆瓣电影评分八问 -->
      <div id="rating_answer">
        <a href="javascript:;">豆瓣电影评分八问</a>
      </div>

      <!-- 口碑单 -->
      <div id="billboard">
        <h2 id="billboard-hd">
          一周口碑榜<a href="javascript:;">更多榜单»</a>
        </h2>
        <ul id="billboard-bd">
          <li>
            <span class="order">1</span
            ><a href="javascript:;" class="title">芝加哥七君子审判</a>
          </li>
          <li>
            <span class="order">2</span
            ><a href="javascript:;" class="title">云上情歌</a>
          </li>
          <li>
            <span class="order">3</span
            ><a href="javascript:;" class="title">金都</a>
          </li>
          <li>
            <span class="order">4</span
            ><a href="javascript:;" class="title">拖米莉斯女王</a>
          </li>
          <li>
            <span class="order">5</span
            ><a href="javascript:;" class="title">梦想</a>
          </li>
          <li>
            <span class="order">6</span
            ><a href="javascript:;" class="title">波拉特2</a>
          </li>
          <li>
            <span class="order">7</span
            ><a href="javascript:;" class="title">十八个礼物</a>
          </li>
          <li>
            <span class="order">8</span
            ><a href="javascript:;" class="title">金鱼</a>
          </li>
          <li>
            <span class="order">9</span
            ><a href="javascript:;" class="title">回声</a>
          </li>
          <li>
            <span class="order">10</span
            ><a href="javascript:;" class="title">喀布尔的燕子</a>
          </li>
        </ul>
      </div>

      <!-- 豆列 -->
      <div class="doulist">
        <h2>热门豆列</h2>
        <ul>
          <li>
            <a href="javascript:;">◆◆历届威尼斯电影节金狮奖◆◆</a>
            <span class="title">22推荐</span>
          </li>
          <li>
            <a href="javascript:;">【容易忽视的好电影】</a>
            <span class="title">12719推荐</span>
          </li>
        </ul>
      </div>

      <!-- 合作联系 -->
      <div id="contact-and-cooperation">
        <h2 id="contact-and-cooperation-hd">合作联系</h2>
        <ul>
          <li>
            电影合作邮箱：<img
              src="../../../assets/images/movie/index/email_movie.png"
              alt="电影合作邮箱"
            />
          </li>
          <li>
            电视剧合作邮箱：<img
              src="../../../assets/images/movie/index/email_tv.png"
              alt="电视剧合作邮箱"
            />
            <img
              class="new"
              src="../../../assets/images/movie/index/ic_new (1).png"
              alt="mew"
            />
          </li>
          <li>
            豆瓣影人PRO合作邮箱：<img
              src="../../../assets/images/movie/index/email_pro.png"
              alt="豆瓣影人邮箱"
            />
          </li>
        </ul>
      </div>

      <!-- 关注我们 -->
      <div id="contact">
        <h2>关注我们</h2>
        <ul>
          <li>
            <a class="logo" href="javascript:;"
              ><img
                src="../../../assets/images/movie/index/home_weibo@2x.jpg"
                alt=""
            /></a>
            <a class="title" href="javascript:;">微博</a>
          </li>
          <li>
            <a class="logo" href="javascript:;"
              ><img
                src="../../../assets/images/movie/index/home_weixin@2x.jpg"
                alt=""
            /></a>
            <a class="title" href="javascript:;">微信</a>
          </li>
          <li>
            <a class="logo" href="javascript:;"
              ><img
                src="../../../assets/images/movie/index/bite_me@2x.jpg"
                alt=""
            /></a>
            <a class="title" href="javascript:;">瓣嘴</a>
          </li>
          <li>
            <a class="logo" href="javascript:;"
              ><img
                src="../../../assets/images/movie/index/home_film_pro@2x.jpg"
                alt=""
            /></a>
            <a class="title" href="javascript:;">豆瓣影人PRO</a>
          </li>
          <li>
            <a class="logo" href="javascript:;"
              ><img
                src="../../../assets/images/movie/index/home_club@2x.jpg"
                alt=""
            /></a>
            <a class="title" href="javascript:;">观影club</a>
          </li>
        </ul>
      </div>

      <!-- 广告 -->
      <div id="advertising">
        <a id="active" href="javascript:;"
          ><img
            src="../../../assets/images/movie/index/509f463353311cd.jpg"
            alt=""
        /></a>
        <div class="article-info">
          <a class="title">你的音乐记忆-豆瓣FM 11岁啦</a>
          <span>豆瓣FM</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import { mapActions, mapState } from "vuex";

import Latest from "./latest/Latest";
import Gallery from "./gallery/Gallery";
import Reviews from "./reviews/Reviews";
export default {
  name: "MovieIndex",
  components: {
    Latest,
    Gallery,
    Reviews,
  },
  data() {
    return {
      movieList: {
        movieTotal: 0, // 总共的电影数目
        pageTotal: 5, // 总页数
        currentPage: 1, // 当前页数
        eachPage: 5, // ，每页多少个
      },

      // 标签
      tagList: {
        currentMvTag: 0, // 当前电影的标签
        currentTvTag: 0, // 当前电视的标签
        mvType: "mv",
        tvType: "tv",
        mvTagList: [], // 电影标签
        tvTagList: [], // 电视剧标签
        mvList: [], // 子路由展示的电影数据
        tvList: [], // 子路由展示的电视剧数据
      },
    };
  },

  mounted() {
    // 获取热门电影
    this.getMovieHot();
    // 获取最新电影
    this.getMovieNew();
    // 获取豆瓣高分电影
    this.getMovieHigh();
    // 获取冷门佳片电影
    this.getMovieCold();
    // 获取华语电影
    this.getMovieCh();
    // 获取欧美电影
    this.getMovieEur();
    // 获取韩国电影
    this.getMovieKor();
    // 获取日本电影
    this.getMovieJan();

    // 获取标签
    this.getTag();

    // 获取热门电视
    this.getTvHot();
    // 获取国产剧
    this.getTvCh();
    // 获取综艺
    this.getTvZh();
    // 获取美剧
    this.getTvTus();
    // 获取日剧
    this.getTvJan();
    // 获取韩剧
    this.getTvKor();
    // 获取日本动画
    this.getTvAni();
    // 获取纪录片
    this.getTvRec();
  },

  methods: {
    getMovieHot() {
      this.$store.dispatch("getMovieHot");
    },
    getMovieNew() {
      this.$store.dispatch("getMovieNew");
    },
    getMovieHigh() {
      this.$store.dispatch("getMovieHigh");
    },
    getMovieCold() {
      this.$store.dispatch("getMovieCold");
    },
    getMovieCh() {
      this.$store.dispatch("getMovieCh");
    },
    getMovieEur() {
      this.$store.dispatch("getMovieEur");
    },
    getMovieKor() {
      this.$store.dispatch("getMovieKor");
    },
    getMovieJan() {
      this.$store.dispatch("getMovieJan");
    },

    getTag() {
      this.$store.dispatch("getTag");
    },

    getTvHot() {
      this.$store.dispatch("getTvHot");
    },
    getTvCh() {
      this.$store.dispatch("getTvCh");
    },
    getTvZh() {
      this.$store.dispatch("getTvZh");
    },
    getTvTus() {
      this.$store.dispatch("getTvTus");
    },
    getTvJan() {
      this.$store.dispatch("getTvJan");
    },
    getTvKor() {
      this.$store.dispatch("getTvKor");
    },
    getTvAni() {
      this.$store.dispatch("getTvAni");
    },
    getTvRec() {
      this.$store.dispatch("getTvRec");
    },
  },
  computed: {
    ...mapState({
      // 获取热门电影
      movieHot: (state) => state.movie.movieHot,
      // 获取最新电影
      movieNew: (state) => state.movie.movieNew,
      // 获取豆瓣高分电影
      movieHigh: (state) => state.movie.movieHigh,
      // 获取冷门佳片电影
      movieCold: (state) => state.movie.movieCold,
      // 获取华语电影
      movieCh: (state) => state.movie.movieCh,
      // 获取欧美电影
      movieEur: (state) => state.movie.movieEur,
      // 获取韩国电影
      movieKor: (state) => state.movie.movieKor,
      // 获取日本电影
      movieJan: (state) => state.movie.movieJan,

      // 获取标签
      tag: (state) => state.movie.tag,

      // 电视剧
      // 热门
      tvHot: (state) => state.movie.tvHot,
      // 国产剧
      tvCh: (state) => state.movie.tvCh,
      // 综艺
      tvZh: (state) => state.movie.tvZh,
      // 美剧
      tvTus: (state) => state.movie.tvTus,
      // 日剧
      tvJan: (state) => state.movie.tvJan,
      // 韩剧
      tvKor: (state) => state.movie.tvKor,
      // 日本动画
      tvAni: (state) => state.movie.tvAni,
      // 纪录片
      tvRec: (state) => state.movie.tvRec,
    }),
  },
  // 监测数据
  watch: {
    movieHot: {
      immediate: true,
      handler() {
        let _this = this;
        this.$nextTick(() => {
          new Swiper(".screening", {
            direction: "horizontal", // 横向纵向切换选项
            loop: true, // 循环模式选项
            autoplay: true, // 自动循环
            slidesPerView: _this.movieList.eachPage, // 一屏显示几个
            // 在carousel mode下定义slides的数量多少为一组。
            slidesPerView: _this.movieList.eachPage,
            slidesPerGroup: _this.movieList.eachPage,
            speed: 500, // 切换速度
            autoplay: {
              delay: 5000, //2秒切换一次
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".next",
              prevEl: ".pre",
            },
            on: {
              // 设置当前页数
              slideChange: function () {
                if (
                  this.activeIndex >
                  _this.movieList.pageTotal * _this.movieList.eachPage
                ) {
                  _this.movieList.currentPage = 1;
                } else if (this.activeIndex < _this.movieList.eachPage) {
                  _this.movieList.currentPage = _this.movieList.pageTotal;
                } else {
                  _this.movieList.currentPage = Math.ceil(
                    this.activeIndex / _this.movieList.eachPage
                  );
                }
              },
            },
          });
          // 获取总的电影数组
          if (!this.movieHot.subjects) {
            this.movieHot.subjects = [];
            return;
          }
          // 计算电影总数
          this.movieList.movieTotal = this.movieHot.subjects.length;
          // 计算电影总页数
          this.movieList.pageTotal = Math.ceil(_this.movieList.movieTotal / 5);
        });
      },
    },

    tag: {
      deep: true,
      immediate: true,
      handler() {
        let _this = this;
        this.$nextTick(() => {
          if (_this.tag.tags) {
            _this.tagList.mvTagList = _this.tag.tags[0];
            _this.tagList.tvTagList = _this.tag.tags[1];
          }
        });
      },
    },

    tvHot: {
      immediate: true,
      deep: true,
      handler() {
        this.$nextTick(() => {
          let currentMvTag = this.tagList.currentMvTag * 1;
          let currentTvTag = this.tagList.currentTvTag * 1;
          if (this.movieHot.subjects) {
            this.$set(this.tagList, "mvList", this.movieHot.subjects);
          }
          if (this.tvHot.subjects) {
            this.$set(this.tagList, "tvList", this.tvHot.subjects);
          }
        });
      },
    },

    tagList: {
      immediate: true,
      deep: true,
      handler() {
        this.$nextTick(() => {
          let currentMvTag = this.tagList.currentMvTag * 1;
          let currentTvTag = this.tagList.currentTvTag * 1;
          if (this.movieHot.subjects) {
            switch (currentMvTag) {
              case 0:

                this.$set(this.tagList, "mvList", this.movieHot.subjects);
                break;
              case 1:
                this.$set(this.tagList, "mvList", this.movieNew.subjects);
                break;
              case 2:
                this.$set(this.tagList, "mvList", this.movieHigh.subjects);
                break;
              case 3:
                this.$set(this.tagList, "mvList", this.movieCold.subjects);
                break;
              case 4:
                this.$set(this.tagList, "mvList", this.movieCh.subjects);
                break;
              case 5:
                this.$set(this.tagList, "mvList", this.movieEur.subjects);
                break;
              case 6:
                this.$set(this.tagList, "mvList", this.movieKor.subjects);
                break;
              case 7:
                this.$set(this.tagList, "mvList", this.movieJan.subjects);
                break;
            }
          }
          if (this.tvHot.subjects) {
            switch (currentTvTag) {
              case 0:
                this.$set(this.tagList, "tvList", this.tvHot.subjects);
                break;
              case 1:
                this.$set(this.tagList, "tvList", this.tvCh.subjects);
                break;
              case 2:
                this.$set(this.tagList, "tvList", this.tvZh.subjects);
                break;
              case 3:
                this.$set(this.tagList, "tvList", this.tvTus.subjects);
                break;
              case 4:
                this.$set(this.tagList, "tvList", this.tvJan.subjects);
                break;
              case 5:
                this.$set(this.tagList, "tvList", this.tvKor.subjects);
                break;
              case 6:
                this.$set(this.tagList, "tvList", this.tvAni.subjects);
                break;
              case 7:
                this.$set(this.tagList, "tvList", this.tvRec.subjects);
                break;
            }
          }
        });
      },
    },
  },
};
</script>

<style lang="less" scoped>
.clearfix::before,
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
// 内容区外部容器
#wapper {
  display: flex;
  width: 1040px;
  padding: 0 12px;
  margin: 0 auto;
  a {
    color: #37a;
    text-decoration: none;
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
  h2 {
    font-weight: normal;
    font-size: 15px;
    color: #111;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 10px;
    margin-bottom: 15px;
  }
  // 内容区左边部分
  .aircle {
    width: 675px;
    margin-right: 40px;
    overflow: hidden;
    // 正在热映
    .screening {
      width: 698px;
      height: 324px;
      margin-bottom: 36px;
      // 正在热映头部
      .screening-hd {
        width: 675px;
        height: 25px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgb(234, 234, 234);
        margin-bottom: 18px;
        // 正在热映头部左侧
        .hd-left {
          display: flex;
          width: 270px;
          float: left;
          align-content: space-around;
          align-items: baseline;
          #Hoting {
            flex: 1;
            font-weight: normal;
            font-size: 16px;
          }
          #all-Hoting {
            flex: 1.2;
          }
          #will-show {
            flex: 1;
          }
        }
        // 正在热映头部右侧
        .hd-right {
          display: flex;
          float: right;
          .pages {
            width: 35px;
            height: 30px;
            line-height: 30px;
            color: #666;
            font-size: 12px;
          }
          // 翻页
          .pre-next {
            width: 46px;
            height: 18px;
            margin: 5px 0 0 15px;
            a {
              display: inline-block;
              margin-right: 5px;
              &:hover {
                background-color: transparent;
              }
            }
            div {
              width: 18px;
              height: 18px;
            }
            .pre div {
              background: url("../../../assets/images/movie/index/slide_swithc_2.png")
                0 0;
            }
            .next div {
              background: url("../../../assets/images/movie/index/slide_swithc_2.png")
                18px 0;
            }
          }
        }
      }
      .slide-content {
        display: flex;
        width: 675px;
        justify-content: space-between;
        .slide-content-item {
          width: 115px;
          text-align: center;
          .hoting-movie-img {
            width: 115px;
            height: 172.5px;
            display: block;
            margin-bottom: 12px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .movie-title {
            width: 115px;
            height: 22px;
            padding: 0 10px;
            line-height: 22px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            box-sizing: border-box;
            a {
              color: #333;
              font-size: 14px;
              &:hover {
                color: #222 !important;
                background-color: transparent;
              }
            }
          }
          .grade {
            width: 77px;
            height: 19px;
            // margin: 0 auto;
            margin-left: 17px;
            margin-top: 4px;
            margin-bottom: 6px;
            text-align: center;
            .rating-star {
              display: inline-block;
              width: 55px;
              height: 11px;
              margin: 3px 3px 0 0;
              background: url("../../../assets/images/movie/index/ic_rating_s@2x.png")
                no-repeat;
              background-size: 55px 122.5px;
            }
            .rating-star.grade-1 {
              background-position: 0 0px;
            }
            .rating-star.grade-2 {
              background-position: 0 -11.5px;
            }
            .rating-star.grade-3 {
              background-position: 0 -23px;
            }
            .rating-star.grade-4 {
              background-position: 0 -34.5px;
            }
            .rating-star.grade-5 {
              background-position: 0 -46px;
            }
            .rating-star.grade-6 {
              background-position: 0 -57.5px;
            }
            .rating-star.grade-7 {
              background-position: 0 -68.5px;
            }
            .rating-star.grade-8 {
              background-position: 0 -79.5px;
            }
            .rating-star.grade-9 {
              background-position: 0 -88px;
            }
            .rating-star.grade-10 {
              background-position: 0 -99px;
            }
            .rating-star.grade-11 {
              background-position: 0 -110px;
            }
          }
        }
        .bugTicket {
          margin-left: -25px;
        }
      }
    }
  }

  // 内容区右边部分
  .aside {
    width: 300px;
    margin-left: 25px;
    #rating_answer {
      padding: 12px 0 12px 18px;
      margin-bottom: 20px;
      background: #f2f7f6;
      a {
        color: #3377aa;
      }
    }
    #billboard {
      #billboard-hd {
        margin-bottom: 5px;
        font-weight: normal;
        a {
          margin-left: 12px;
        }
      }
      #billboard-bd {
        margin-bottom: 50px;
        li {
          line-height: 0.62;
          padding: 7px 0;
          .order {
            display: inline-block;
            width: 20px;
            font-size: 9px;
            text-align: center;
            padding: 7px 0;
            color: #111;
            box-sizing: border-box;
          }
        }
      }
    }
    .doulist {
      margin-bottom: 40px;
      h2 {
        margin-bottom: 0;
      }
      ul {
        li {
          padding: 15px 0;
          border-bottom: 1px solid #eaeaea;
          .title {
            float: right;
          }
        }
      }
    }

    // 合作联系
    #contact-and-cooperation {
      margin-bottom: 40px;
      ul {
        li {
          height: 24px;
          color: #111;
          line-height: 24px;
          font-family: Microsoft YaHei;
          img {
            height: 14px;
            vertical-align: middle;
            margin-top: -2px;
          }
          .new {
            width: 20px;
            height: 9px;
            margin-top: -3px;
          }
        }
      }
    }

    // 关注我们
    #contact {
      margin-bottom: 50px;
      ul {
        display: flex;
        justify-content: space-around;
        li {
          width: 60px;
          text-align: center;
          .logo {
            &:hover {
              background: transparent;
            }
            img {
              width: 40px;
              height: 40px;
              margin-bottom: 3px;
            }
          }
          .title {
            display: inline-block;
            font-size: 12px;
          }
        }
      }
    }

    // 广告
    #advertising {
      position: relative;
      width: 280px;
      height: 80px;
      padding: 10px;
      background-color: #f9f9f9;
      #active img {
        vertical-align: bottom;
        width: 96px;
      }
      .article-info {
        position: absolute;
        top: 20px;
        left: 120px;
        .title {
          color: rgb(51, 119, 170);
          font-size: 12px;
        }
        span {
          display: block;
          font-size: 12px;
          color: #999;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
