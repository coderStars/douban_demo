<template>
  <div class="musicItemWrapper">
    <h1>搜索 {{ this.$route.query.q }}</h1>
    <div class="itemContainer">
      <div class="itemLeft">
        <div
          class="itemCover"
          v-for="(item, index) in musicInfoList"
          :key="item.id"
        >
          <a><img :alt="item.alt" :src="item.image"/></a>
          <div class="itemRightInfo">
            <div class="title">
              <a>{{ item.title }}</a>
            </div>
            <div class="center">
              <span class="one" :style="{background: `url(${imgAddr}) 0 ${-(10-cacularStar(item.rating.average))*11}px`}"></span>
              <span class="two">{{ item.rating.average }}</span>
              <span class="three">(162人评价)</span>
            </div>
            <div class="bottom">
              <span
                ><i v-for="(authoer, index) in item.author" :key="index">{{
                  authoer.name + (item.author.length === 1 ? '' : ',')
                }}</i>
                / {{ (item.attrs.pubdate && item.attrs.pubdate[0]) || "" }} /
                {{ (item.attrs.version && item.attrs.version[0]) || "" }} /
                {{ (item.attrs.media && item.attrs.media[0]) || "无" }} /
                流行</span
              >
            </div>
          </div>
        </div>

        <el-pagination
          v-if="musicInfoList.length > 0"
          small
          :total="total"
          style="text-align:center"
          :page-size="15"
          :current-page="start"
          layout="prev, pager, next"
          @current-change="changePage"
        ></el-pagination>
        <div v-else>
          <p>没有找到关于 “烟花易冷” 的唱片，换个搜索词试试吧。</p>
          <p>或者，亲自来帮豆瓣添加：</p>
        </div>
      </div>
      <div class="itemRight">
        <ul class="rightOne">
          <li>添加豆瓣没有的音乐· · · · · ·</li>
          <li>
            <a>> 添加唱片 {{ this.$route.query.q }}</a>
          </li>
          <li>
            <a>> 添加艺术家 {{ this.$route.query.q }}</a>
          </li>
        </ul>
        <ul class="rightTwo">
          <li>相关搜索· · · · · ·</li>
          <li>
            <a>> 搜索"{{ this.$route.query.q }}"的图书</a>
          </li>
          <li>
            <a>> 搜索"{{ this.$route.query.q }}"的电影</a>
          </li>
          <li>
            <a>> 搜索"{{ this.$route.query.q }}"的舞台剧</a>
          </li>
        </ul>
        <p class="rightThree"><a>> 对搜索不满意？给我们反馈</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import { getMusicSearchInfo } from "@/api/musicSearch";
import cacularStar from '@/utils/starCacular'
export default {
  name: "MusicItem",
  data() {
    return {
      musicData: {},
      start: 1,
      count: 15,
      total: 0,
      imgAddr: require('../../../assets/img/music/ic_rating_s.png')
    };
  },
  mounted() {
    this.getMusicInfo();
  },
  computed: {
    musicInfoList() {
      return this.musicData.musics || [];
    }
  },
  methods: {
    async getMusicInfo() {
      let { q } = this.$route.query;
      let { start, count } = this;
      let resultData = await getMusicSearchInfo({ q, start, count });
      this.musicData = resultData;
      this.total = resultData.total;
    },
    changePage(index) {
      this.start = index;
      this.getMusicInfo();
    },
    cacularStar
  },
  watch: {
    $route: {
      handler() {
        this.getMusicInfo();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.musicItemWrapper {
  width: 1040px;
  margin: 0 auto;
  h1 {
    font-size: 26px;
    margin-bottom: 18px;
    color: #494949;
    font-weight: bold;
    line-height: 1.1;
  }
  .itemContainer {
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    margin-top: 35px;
    .itemLeft {
      width: 675px;

      .itemCover {
        display: flex;
        margin-bottom: 30px;
        a {
          display: inline-block;
          margin-right: 15px;
          color: #666699;
          cursor: pointer;
          img {
            width: 60px;
            height: 69px;
          }
        }

        .itemRightInfo {
          .title {
            a {
              font-size: 14px;
            }

            a:hover {
              color: #ffffff;
              text-decoration: none;
              background: #37a;
            }
          }

          .center {
            span {
              display: inline-block;
            }
            .one {
              width: 55px;
              height: 11px;
              margin: 0 3px 0 0;
            }
            .two {
              color: #e09015;
              font-size: 12px;
              padding: 0 3px;
              margin: 10px 0;
            }
            .three {
              color: #666666;
            }
          }

          .bottom {
            display: inline-block;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-top: -3px;
            color: #999;
            font-size: 12px;
            line-height: 1.5;
          }
        }
      }
    }

    .itemRight {
      width: 300px;
      .rightOne,
      .rightTwo {
        li {
          text-align: left;
          color: #007722;
          margin-bottom: 11px;
          a {
            cursor: pointer;
            color: #666699;
            text-decoration: none;
          }
          a:hover {
            color: #ffffff;
            text-decoration: none;
            background: #37a;
          }
        }
        li:nth-child(1) {
          font-size: 14px;
          text-align: left;
          color: #007722;
          margin-bottom: 14px;
        }
      }

      .rightThree {
        font-size: 14px;
        color: #666699;
        a {
          cursor: pointer;
          color: #666699;
          text-decoration: none;
        }
        a:hover {
          color: #ffffff;
          text-decoration: none;
          background: #37a;
        }
      }
    }
  }
}
</style>