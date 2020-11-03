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
            <li><a>本周流行音乐人</a></li>
            <li><a>上升最快音乐人</a></li>
          </ul>
        </div>
        <div class="content"></div>
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
        <div class="content"></div>
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
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Music",
  data() {
    return {
      bannerList: [
        require("@/assets/img/music/banner-2874.jpg"),
        require("@/assets/img/music/banner-2912.jpg")
      ]
    };
  },
  mounted() {
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
      .content {
        width: 100%;
        height: 448px;
        box-sizing: border-box;
        text-align: center;
        background: #f5f7f8;
        padding: 15px 0 0 30px;
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
          border-top: 1px solid #F8F6F6;
          border-right: 1px solid #F8F6F6;
          
        }
        
      }
    }
  }
}
</style>