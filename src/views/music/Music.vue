<template>
  <div class="musicWrapper">
    <div class="leftPage">
      <div class="swiper-container" ref="swiperContainer">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in bannerList"
            :key="index"
          >
            <img :src="item" alt="" />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
      </div>
      <div class="popularPerson">
        <div class="title">
          <ul class="titleList">
            <li :class="{active: imgIndex === 0}" @click="changeImgIndex(0)"><a>本周流行音乐人</a></li>
            <li :class="{active: imgIndex === 1}" @click="changeImgIndex(1)"><a>上升最快音乐人</a></li>
          </ul>
        </div>
        <div class="content">
          <MusicCover :musicItem="item"  v-for="(item, index) in (imgPopularList[imgIndex] && imgPopularList[imgIndex].imgList) " :key="item.id"/>
        </div>
      </div>
      <div class="albumRank">
        <div class="title">
          <h3>新碟榜</h3>
          <ul class="titleList">
            <li><a>最热</a></li>
            <li><a>华语</a></li>
            <li><a>欧美</a></a></li>
            <li><a>日韩</a></li>
            <li><a>单曲</a></li>
          </ul>
        </div>
        <div class="content">
          <NewAlbumCover />
        </div>
      </div>

      <!-- 热门歌曲 -->
      <div class="hotMusic">
        <div class="title">
          <h3>近期热门歌曲</h3>
          <ul class="titleList">
            <li><a>最热</a></li>
            <li><a>华语</a></li>
            <li><a>欧美</a></a></li>
            <li><a>日韩</a></li>
            <li><a>单曲</a></li>
          </ul>
        </div>
        <div class="content"></div>
      </div>
    </div>
    <div class="rightPage">
      <div class="topTitle">
        <div class="item">
          <h2><a>47549</a></h2>
          <span>音乐人</span>
        </div>
        <div class="item">
          <h2><a>2731</a></h2>
          <span>播客</span>
        </div>
        <div class="item">
          <h2><a>1240</a></h2>
          <span>厂牌</span>
        </div>
        <button class="titleBtn">我要加入</button>
      </div>

      <!-- 热门音乐分类人 -->
      <div class="hMusicPersonType">
        <div class="hotTitle">
          <span>热门音乐人分类</span>
        </div>
        <div class="typeList">
          <a>流行</a>
          <a>轻音乐</a>
          <a>摇滚</a>
          <a>电子</a>
          <a>民谣</a>
          <a>爵士</a>
          <a>世界音乐</a>
          <a>原声</a>
          <a>古典</a>
          <a>说唱</a>
        </div>
      </div>

      <div class="singleRank">
        <div class="singleTitle">
          <span>本周单曲榜</span>
          <button>播放全部</button>
        </div>
        <div class="content">
          <ul class="contentTitle">
            <li><a>最热</a></li>
            <li><a>摇滚</a></li>
            <li><a>民谣</a></li>
            <li><a>流行</a></li>
            <li><a>电子</a></li>
            <li><a>说唱</a></li>
          </ul>
          <div class="contentWrapper">
            <ul class="contentCenter">
              <li>
                <img />
                <div class="textInfo">

                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <MusicList />
      <div class="artist-wx-qrcode-wrap">
        <img src="https://img3.doubanio.com/f/music/8eecf69a2a441e6c4d282b001263a98a16713497/pics/music/home/artist_wx_qrcode.jpg" />
        <div class="artist-wx-qrcode">
          <div class="labels">
            <p class="main-title">豆瓣音乐人小程序</p>
            <p class="sub-title">发现当下最酷的独立音乐</p>
          </div>
        </div>
      </div>

      <CallOur />
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import MusicList from "./childCom/musicList/musicList.vue";
import CallOur from "./childCom/callOur/callOur.vue";
import MusicCover from "./childCom/musicCover/musicCover.vue";
import NewAlbumCover from "./childCom/newAlbumCover/newAlbumCover.vue";

import { getMusicImgList } from "@/api/music";

export default {
  name: "Music",
  components: {
    MusicList,
    CallOur,
    MusicCover,
    NewAlbumCover
  },
  data() {
    return {
      bannerList: [
        require("@/assets/img/music/banner-2874.jpg"),
        require("@/assets/img/music/banner-2912.jpg")
      ],
      imgPopularList: [],
      imgIndex: 0
    };
  },
  mounted() {
    this.getMusicImgList();
    var mySwiper = new Swiper(this.$refs.swiperContainer, {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  },
  methods: {
    async getMusicImgList() {
      let imgPopularListResult = await getMusicImgList();
      this.imgPopularList = imgPopularListResult;
    },
    changeImgIndex(index) {
      this.imgIndex = index;
    }
  }
};
</script>

<style lang="less" scoped>
.musicWrapper {
  display: flex;
  justify-content: space-between;
  .swiper-container {
    width: 100%;
    height: 300px;
    margin-bottom: 40px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .leftPage {
    width: 675px;

    .popularPerson {
      width: 100%;
      height: 480px;
      margin-bottom: 40px;

      .titleList {
        height: 30px;
        line-height: 30px;
        border-bottom: 2px solid #02a682;

        .active {
          font-size: 17px;
          a {
            color: #222;
          }
          a:hover {
            color: #222 !important;
            text-decoration: none;
          }
        }

        li {
          list-style: none;
          float: left;
          position: relative;
          margin-right: 5px;

          a {
            cursor: pointer;
          }

          a:hover {
            color: #999 !important;
            text-decoration: none;
          }
        }

        li:after {
          position: absolute;
          transform: translateY(-50%);
          right: -3px;
          top: 16px;
          content: "";
          display: block;
          width: 1px;
          height: 15px;
          background: black;
        }

        li:last-child:after {
          width: 0px;
        }
      }
      .content {
        width: 100%;
        height: 448px;
        box-sizing: border-box;
        text-align: center;
        background: #f5f7f8;
        padding: 15px 0 0 30px;
        display: flex;
        flex-wrap: wrap;
        // justify-content: space-between;
      }
    }
    .albumRank {
      width: 100%;
      height: 489px;
      .title {
        height: 30px;
        line-height: 30px;
        border-bottom: 2px solid #02a682;
        h3 {
          float: left;
          margin-right: 20px;
        }
        li {
          list-style: none;
          float: left;
          position: relative;
          margin-right: 5px;

          a {
            cursor: pointer;
          }
        }

        li:after {
          position: absolute;
          transform: translateY(-50%);
          right: -3px;
          top: 16px;
          content: "";
          display: block;
          width: 1px;
          height: 15px;
          background: black;
        }

        li:last-child:after {
          width: 0px;
        }
      }
      margin-bottom: 40px;
      .content {
        background: #f5f7f8;
      }
    }

    .hotMusic {
      width: 100%;
      height: 489px;
      .title {
        height: 30px;
        line-height: 30px;
        border-bottom: 2px solid #02a682;
        h3 {
          float: left;
          margin-right: 20px;
        }
        li {
          list-style: none;
          float: left;
          position: relative;
          margin-right: 5px;

          a {
            cursor: pointer;
          }
        }

        li:after {
          position: absolute;
          transform: translateY(-50%);
          right: -3px;
          top: 16px;
          content: "";
          display: block;
          width: 1px;
          height: 15px;
          background: black;
        }

        li:last-child:after {
          width: 0px;
        }
      }
    }
  }

  .rightPage {
    width: 300px;
    .topTitle {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 30px;
      .item {
        width: 33.33%;
        height: 57px;
        background-color: #f5f7f8;
        text-align: center;
        line-height: 150%;
        font-size: 15px;
        h2 {
          margin-top: 9px;
          font-size: 17px;
        }
      }
      .titleBtn {
        flex: 1;
        height: 40px;
        border-style: inset;
        color: #fff;
        font-size: 17px;
        border: none;
        background-color: #139d72;
      }
    }
    .hMusicPersonType {
      margin-bottom: 40px;

      .hotTitle {
        font-size: 15px;
        color: #222;
        float: left;
        height: 24px;
      }
      .typeList {
        clear: both;
        display: flex;
        flex-wrap: wrap;
        a {
          padding-left: 5px;
          font-size: 15px;
          cursor: pointer;
          width: 50%;
          height: 39px;
          line-height: 39px;
          box-sizing: border-box;
          border-top: 1px solid #f8f6f6;
          border-right: 1px solid #f8f6f6;
        }
      }
    }
    .singleRank {
      .singleTitle {
        font-size: 15px;
        color: #222;
        float: left;
        height: 24px;
        width: 100%;
        line-height: 24px;
        margin-bottom: 10px;
        border-bottom: 1px solid #e4e2e2;
        padding-bottom: 4px;

        button {
          float: right;
          color: blue;
        }
      }
      .content {
        .contentTitle {
          li {
            list-style: none;
            float: left;
            position: relative;
            margin-right: 5px;
            font-size: 13px;
            color: #999999;
            a {
              cursor: pointer;
            }
          }

          li:after {
            position: absolute;
            transform: translateY(-50%);
            right: -3px;
            top: 50%;
            content: "";
            display: block;
            width: 1px;
            height: 15px;
            background: black;
          }

          li:last-child:after {
            width: 0px;
          }
        }
        .contentWrapper {
          height: 600px;
          width: 100%;
        }
      }
    }

    .artist-wx-qrcode-wrap {
      margin-top: 10px;
      margin-bottom: 15px;
      .artist-wx-qrcode {
        height: 240px;
        border-radius: 5px;
        border: 2px solid #f1f1f1;
        padding: 10px 10px 20px 10px;
        display: flex;
        flex-flow: column;
        align-items: center;

        .labels {
          .main-title {
            font-size: 16px;
            font-weight: bold;
            line-height: 1;
            margin: 0;
            padding-top: 9px;
            text-align: center;
          }

          .sub-title {
            color: #4e4e4e;
            margin: 0;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>