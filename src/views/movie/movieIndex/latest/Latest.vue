<template>
  <div class="LatestContainer">
    <!-- 头部 -->
    <div class="fliter-wp">
      <div class="left">
        <h2 class="active">
          {{ tagType === "mv" ? "最近热门电影" : "最近热门电视剧" }}
        </h2>
        <ul class="tag-list">
          <li
            v-for="(tagItem, index) in tag"
            :key="index"
            class="tag-item"
            :class="currentTag * 1 === index ? 'hot' : ''"
          >
            <a href="javascript:;" @click="changeTag(index)">{{ tagItem }}</a>
          </li>
        </ul>
      </div>

      <a href="javascript:;" class="more">更多»</a>
    </div>

    <div v-if="!isShow" class="loading">加载中...</div>
    <!-- 轮播图 :ref="tagType === 'mv'? mv: tv" :class="tagType === 'mv'? 'mv': 'tv'" -->
    <div v-else class="swiper-container bannerList-container" :class="tagType" >
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
        <li
          v-for="listItem in list"
          :key="listItem.id"
          class="swiper-slide bannerItem"
        >
          <!-- 电影 -->
          <a href="javascript:;">
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
      <div class="swiper-pagination"></div>

      <!-- 分页及导航 -->
      <div class="slide-ctrl">
        <div class="prev"></div>
        <div class="next"></div>
      </div>
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
    return {
      isShow: false,
    };
  },
  mounted() {},

  methods: {
    // 修改当前tag
    changeTag(index) {
      this.$emit("update:currentTag", index);
    },
  },
  computed: {},

  watch: {
    list: {
      immediate: true,
      deep: true,
      handler() {
        if (this.list) {
          this.$set(this, "isShow", true);
          // console.log(this.$refs.mv)
          // console.log(this.$refs.tv)
          // 如果还没有获取到list
          this.$nextTick(() => {
            if(this[this.tagType]){
               this[this.tagType].update()
               return;
            }
            this[this.tagType] =  new Swiper(`.${this.tagType}`, {
              direction: "horizontal", // 垂直切换选项
              loop: true, // 循环模式选项
              // 在carousel mode下定义slides的数量多少为一组。
              // slidesPerView : 10,
              slidesPerGroup : 5,
              slidesPerView: 5,
              slidesPerColumn: 2,
              slidesPerColumnFill: "row",
              paginationClickable: true,

              // grabCursor: true,
              // initialSlide: 0,
              // centeredSlides: false,

              // 如果需要分页器
              pagination: {
                el: ".swiper-pagination",
              },

              // 如果需要前进后退按钮
              navigation: {
                nextEl: ".next",
                prevEl: ".prev",
              },
            });
            // new Swiper(this.$refs.s1, {
            //   direction: "horizontal", // 垂直切换选项
            //   loop: true, // 循环模式选项
            //   // 在carousel mode下定义slides的数量多少为一组。
            //   // slidesPerView : 10,
            //   slidesPerGroup: 5,
            //   slidesPerView: 5,
            //   slidesPerColumn: 2,
            //   slidesPerColumnFill: "row",
            //   paginationClickable: true,

            //   grabCursor: true,
            //   initialSlide: 0,
            //   centeredSlides: false,

            //   // 如果需要分页器
            //   pagination: {
            //     el: ".swiper-pagination",
            //   },

            //   // 如果需要前进后退按钮
            //   navigation: {
            //     nextEl: ".next",
            //     prevEl: ".prev",
            //   },
            // });
          });
        }
      },
    },
  },
};
</script>

<style lang="less" scoped>
.LatestContainer {
  margin-bottom: 40px;
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
            height: 170px;
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
    .slide-ctrl {
      position: relative;
      width: 150px;
      height: 23px;
      margin-bottom: 13px;
      text-align: center;
      margin: 0 auto;
      .swiper-pagination {
        margin-left: 30px;
      }
      .prev,
      .next {
        width: 18px;
        height: 18px;
        margin-right: 10px;
      }
      .prev {
        position: absolute;
        left: 0;
        top: 0;
        background: url("../../../../assets/images/movie/index/slide_swithc_2.png")
          0 0;
      }
      .next {
        position: absolute;
        right: 0;
        top: 0;
        background: url("../../../../assets/images/movie/index/slide_swithc_2.png")
          18px 0;
      }
    }
  }
}
</style>
