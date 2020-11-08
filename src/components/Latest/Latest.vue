<template>
  <div class="LatestContainer">
    <!-- 头部 -->
    <div class="fliter-wp">
      <div class="left">
        <h2 class="active">最近热门电影</h2>
        <ul class="tag-list">
          <li
            v-for="(tagItem, index) in tag"
            :key="index"
            class="tag-item"
            :class="currentTag * 1 === index ? 'hot' : ''"
          >
            <a href="#" @click="changeTag(index)">{{ tagItem }}</a>
          </li>
        </ul>
      </div>

      <a href="#" class="more">更多»</a>
    </div>

    <!-- 轮播图 -->
    <div class="swiper-container bannerList-container">
      <ul class="swiper-wrapper bannerList">
        <li
          v-for="listItem in list"
          :key="listItem.id"
          class="swiper-slide bannerItem"
        >
          <!-- 电影 -->
          <a href="#">
            <img :src="listItem.cover" alt="封面" />
            <div class="title-wp">
              <span :class="listItem.is_new && 'new'"></span>
              {{ listItem.title }}
              <span class="grade">{{ listItem.rate }}</span>
            </div>
          </a>
          <!-- 描述 -->
        </li>
      </ul>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import { mapActions, mapState } from "vuex";
export default {
  name: "Latest",
  props: ["currentTag", "tag", "tagType", "list"],
  data() {
    return {};
  },
  mounted() {},

  methods: {
    // 修改当前tag
    changeTag(index) {
      this.$emit("update:currentTag", index);
    },
  },
  computed: {},

  // watch: {
  //   list: {
  //     immediate: true,
  //     handler() {
  //       let _this = this;
  //       this.$nextTick(() => {
  //         new Swiper(".bannerList-container", {
  //           direction: "horizontal", // 垂直切换选项
  //           loop: true, // 循环模式选项
  //           // 在carousel mode下定义slides的数量多少为一组
  //           // slidesPerView : 10,
  //           // slidesPerGroup : 10,
  //           // 在slide之间设置距离（单位px）。
  //           // spaceBetween : 40,
  //           slidesPerView: 5, //一行显示3个
  //           slidesPerColumn: 2, //显示2行
  //           // 如果需要分页器
  //           pagination: {
  //             el: ".swiper-pagination",
  //           },

  //           // 如果需要前进后退按钮
  //           navigation: {
  //             nextEl: ".swiper-button-next",
  //             prevEl: ".swiper-button-prev",
  //           },
  //         });
  //       });
  //     },
  //   },
  // },
};
</script>

<style lang="less" scoped>
// 头部
.fliter-wp {
  display: flex;
  width: 675px;
  height: 21.5px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(234, 234, 234);
  margin-bottom: 18px;
  justify-content: space-between;

  .left {
    display: flex;
    align-items: baseline;
    .active {
      color: #111;
      font-size: 16px;
      font-weight: normal;
    }

    .tag-list {
      display: flex;
      width: 450px;
      .tag-item {
        margin-left: 12px;
        a {
          font-size: 13px;
          color: #9b9b9b;
          text-decoration: none;
          &:hover {
            color: #ffffff !important;
            background: rgb(51, 119, 170);
          }
          &:active {
            color: #ffffff;
            background: rgb(255, 153, 51);
          }
        }
      }
      .tag-item.hot {
        margin-left: 12px;
        a {
          font-size: 13px;
          color: #111;
          &:hover {
            background: transparent;
            color: #111 !important;
          }
        }
      }
    }
  }
  .more {
    display: block;
    font-size: 13px;
    color: #3377aa;
    // line-height: 20px;
    vertical-align: top;
    text-decoration: none;
    &:hover {
      color: #ffffff !important;
      background: rgb(51, 119, 170);
    }
    &:active {
      color: #ffffff;
      background: rgb(255, 153, 51);
    }
  }
}

// 轮播图
.bannerList-container {
  .bannerList {
    .bannerItem {
      a {
        width: 115px;
        color: #37a;
        img {
          width: 115px;
        }
        .title-wp {
          width: 115px;
          text-align: center;
          .new {
            position: relative;
            top: 3px;
            display: inline-block;
            width: 16px;
            height: 16px;
            background-image: url("https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png");
            background-size: 16px 16px;
          }
          .grade {
            color: #e09015;
          }
        }
      }
    }
  }
}
</style>
