<template>
  <div class="rankWrapper">
    <h1>音乐排行榜</h1>
    <div class="rankContent">
      <div class="leftPage">
        <div class="leftTop">
          <span>本周音乐人最热单曲榜</span>
          <span class="span-player-btn">
            <i class="iconfont icon-yousanjiaoxing"></i>
          </span>
        </div>
        <ul class="articleList">
          <li
            v-for="(item, index) in musicRankList[0] &&
              musicRankList[0].imgInfoList"
            :key="index"
          >
            <span class="leftNumber">{{ index + 1 }}</span>
            <img v-if="index < 10" :src="item.imgUrl" />
            <div class="rightContent" v-if="index < 10">
              <p class="name">
                <a class="leftTitle">{{ item.title }}</a>
                <i class="rightNumber"><i></i>{{ item.dataTime }}</i>
              </p>
              <p class="bottomTitle">{{ item.name }}</p>
            </div>
            <div class="rightContent else" v-else>
              <p class="name">
                <a class="leftTitle else"
                  >{{ item.title }} <span>{{ item.name }}</span></a
                >
                <i class="rightNumber"><i></i>{{ item.dataTime }}</i>
              </p>
              <!-- <p class="bottomTitle">{{item.name}}</p> -->
            </div>
          </li>
        </ul>
      </div>
      <div class="rightPage">
        <div class="rightTop">
          <h2>豆瓣新碟榜 · · · · · ·</h2>
        </div>
        <ul class="newRank">
          <li
            v-for="(item, index) in musicRankList[1] && musicRankList[1].info"
            :key="index"
          >
            <span>{{ index + 1 }}</span>
            <p class="centerContent">
              <a>{{ item.name }}</a> / {{ item.title }}
            </p>
            <i class="rightTag">{{ item.time }}</i>
          </li>
        </ul>
        <div class="ad">
          <a>
            <img
              src="https://tpc.googlesyndication.com//simgad/1620203542868223/2076313506083323656"
            />
          </a>
        </div>
        <div class="currentWeekPerson">
          <h2>本周流行音乐人 · · · · · ·</h2>
          <ul class="itemInfo">
            <li
              v-for="(item, index) in musicRankList[2] &&
                musicRankList[2].imgInfoList"
              :key="index"
            >
              <span class="orderNumber">{{ index + 1 }}</span>
              <img :src="item.imgUrl" />
              <div class="info">
                <a class="name">{{ item.title }}</a>
                <p class="type">{{ item.type }}</p>
                <p class="number">{{ item.view }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <a
      ><img
        src="https://oimagea6.ydstatic.com/image?id=374173330785755752&product=adpublish&w=1040&h=98"
    /></a>
  </div>
</template>

<script>
import { getmusicRank } from "@/api/music";
export default {
  name: "Rank",
  data() {
    return {
      musicRankList: []
    };
  },
  mounted() {
    this.getMusicRank();
  },
  methods: {
    async getMusicRank() {
      let result = await getmusicRank();
      this.musicRankList = result;
    }
  }
};
</script>

<style lang="less" scoped>
.rankWrapper {
  width: 1040px;
  margin: 0 auto;
  h1 {
    font-size: 26px;
    margin-bottom: 15px;
    color: #494949;
    font-weight: bold;
    line-height: 1.1;
  }
  .rankContent {
    display: flex;
    justify-content: space-between;
    .leftPage {
      width: 675px;
      .leftTop {
        font: 16px Arial, Helvetica, sans-serif;
        color: #072;
        margin: 0 0 12px 0;
        line-height: 150%;

        .span-player-btn {
          display: inline-block;
          width: 50px;
          height: 23px;
          background: #53cbaa;
          border-radius: 2px;
          cursor: pointer;
          opacity: 0.85;
          margin-left: 20px;
          vertical-align: top;
          margin-top: 2px;
          text-align: center;
          font-size: 15px;
          color: #fff;
          line-height: 22px;
        }
      }

      .articleList {
        width: 100%;
        height: 50px;
        li {
          display: flex;
          padding: 10px 0 8px;
          border-bottom: 1px solid #ddd;

          & > .leftNumber {
            width: 15px;
            height: 15px;
            font-size: 13px;
            text-align: center;
            color: green;
            margin-right: 10px;
            background: url("https://img3.doubanio.com/f/shire/488c1a1e8562bc1c1baf7cf33074f094a97bb983//pics/chart_top.gif")
              no-repeat;
          }

          .rightContent.else {
            margin-left: 0;
          }

          .rightContent {
            margin-left: 20px;
            width: 100%;
            line-height: 1.8;
            .name {
              padding-left: 20px;
              background: url("https://img3.doubanio.com/f/shire/b8d0a75490599fb542136854b874918446ef98c1//pics/playicon.png")
                no-repeat -20px -3px;
              a:hover {
                color: #ffffff;
                text-decoration: none;
                background: #37a;
              }
              .leftTitle {
                color: #666699;
                text-decoration: none;
                font-size: 15px;
                cursor: pointer;
              }

              .else.leftTitle {
                font-size: 13px;
                span {
                  color: #666666;
                }
              }
              .rightNumber {
                float: right;
                font-size: 13px;
                color: #999;
                text-align: right;
                width: 64px;
              }
            }
            .bottomTitle {
              font-size: 13px;
              color: #666666;
              cursor: pointer;
            }
          }
        }
      }
    }
    .rightPage {
      width: 300px;
      margin: 0 0 40px;
      .rightTop {
        h2 {
          font-size: 16px;
          font-weight: normal;
          color: #072;
          margin-bottom: 12px;
        }
      }

      .newRank {
        display: inline-block;
        margin-bottom: 40px;
        li {
          width: 100%;
          padding: 3px 0;
          border-bottom: 1px dashed #ddd;
          position: relative;
          float: left;
          .rightTag {
            position: absolute;
            right: 0;
            top: 10px;
            font-size: 13px;
            color: #999999;
          }

          span {
            float: left;
            width: 16px;
            padding: 0 5px;
          }
          .centerContent {
            color: #666;
            float: left;
            width: 71%;
            font-size: 13px;
            line-height: 1.62;
            a {
              color: #666699;
              cursor: pointer;
            }
            a:hover {
              color: #ffffff;
              text-decoration: none;
              background: #37a;
            }
          }
        }
      }

      .ad {
        width: 100%;
        height: 250px;
        a {
          display: block;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .currentWeekPerson {
        margin-top: 20px;
        h2 {
          color: #072;
          margin: 0 0 12px 0;
          line-height: 150%;
          font-size: 16px;
          font-weight: normal;
        }

        li {
          padding: 10px 0 5px;
          border-bottom: 1px dashed #ddd;

          &::after {
            content: "";
            display: block;
            clear: both;
          }

          .orderNumber {
            float: left;
            margin-right: 10px;
            font-size: 13px;
            color: green;
            width: 15px;
            height: 15px;
            line-height: 15px;
            text-align: center;
            background: url("https://img3.doubanio.com/f/shire//488c1a1e8562bc1c1baf7cf33074f094a97bb983/pics/chart_top.gif")
              no-repeat;
          }
          img {
            float: left;
            margin-right: 10px;
          }

          .info {
            float: left;
            color: #666;
            line-height: 1.62;

            a {
              font-size: 15px;
              cursor: pointer;
              color: #666699;
            }

            p {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
}
</style>