<template>
  <div class="searchContainer">
    <div class="searchWrapper">
      <div
        class="nav-logo"
        :style="{ background: `url(${logoImg[logoIndex]}) no-repeat 0 12px` }"
      >
        <a href="https://book.douban.com"></a>
      </div>
      <div class="searchInpt">
        <input v-model="keyword" class="inptFirst" :placeholder="inpText" />
        <input
          type="submit"
          class="inp-btn"
          :style="{
            background: `url(${require('@/assets/img/nav_bk_bg.png')})  no-repeat 0 -40px`
          }"
        />
      </div>
    </div>
    <ul class="bottomList">
      <li v-for="(item, index) in buttomText" :key="index">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    inpText: {
      type: String,
      default: "书名、作者、ISBN"
    },
    buttomText: {
      type: Array,
      default() {
        return [
          {
            name:"购书单",
            path: "/music/buybooks"
          },
          {
            name:"电子图书",
            path: "/music/onlinebooks"
          },
          {
            name:"豆瓣书店",
            path: "/music/libray"
          },
          {
            name: "2019年度榜单",
            path: "/music/yearrank"
          },
          {
            name: "2019书影音报告",
            path: "/music/moviebanner"
          },
          {
            name: "购物车",
            path: "music/cart"
          }
        ];
      }
    }
  },
  data() {
    return {
      keyword: "",
      logoImg: [
        require("@/assets/img/lg_book_a11_1.png"),
        require("@/assets/img/lg_movie_a12_2.png"),
        require("@/assets/img/lg_music_a12_2.png")
      ],
      logoIndex: 0
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        let path = this.$route.path;
        if (path.startsWith("/books")) {
          this.logoIndex = 0;
        } else if (path.startsWith("/movie")) {
          this.logoIndex = 1;
        } else if (path.startsWith("/music")) {
          this.logoIndex = 2;
        } else {
          this.logoIndex = 0;
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.searchContainer {
  background: #f6f6f1;
  margin-bottom: 40px;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 75px;
    // border-bottom: 1px solid #e5ebe4;
    background: #e5ebe4;
    height: 1px;
    width: 100%;
  }
  input {
    outline: none;
    border: none;
    /**修改颜色*/
    outline-color: "red";
  }
  .searchWrapper {
    // border-bottom: 1px solid #e5ebe4;
    width: 1040px;
    height: 60px;
    margin: 0 auto;
    display: flex;
    padding: 10px 0 5px;
    .nav-logo {
      width: 145px;
      height: 56px;
      a {
        width: 100%;
        height: 100%;
        display: block;
        cursor: pointer;
      }
    }
    .searchInpt {
      // width: 461px;
      margin-left: 10px;
      line-height: 56px;
      input::placeholder {
        font-size: 12px;
      }
      .inptFirst {
        padding-left: 20px;
        box-sizing: border-box;
        height: 30px;
        width: 461px;
        border: none;
        border-radius: 5px;
        box-shadow: 0 1px 1px #888888;
      }
      .inp-btn {
        width: 37px;
        height: 31px;
        color: transparent;
        cursor: pointer;
        border-style: inset;
        border: none;
      }
    }
  }
  .bottomList {
    width: 1040px;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    display: flex;

    li {
      margin-left: 25px;
      a {
        color: #614e3c;
        text-decoration: none;
        font-size: 14px;
        cursor: pointer;
      }
      a:hover {
        background: #614e3c;
        color: #fff;
        text-decoration: none;
      }
    }
    li:first-child {
      margin-left: 0;
    }
  }
}
</style>