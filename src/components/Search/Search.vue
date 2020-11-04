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
    <div class="bottomList">
      <a v-for="(item, index) in buttomText" :key="index">
        {{ item }}
      </a>
    </div>
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
          "购书单",
          "电子图书",
          "豆瓣书店",
          "2019年度榜单",
          "2019书影音报告",
          "购物车"
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
        console.log(path);
        if (path === "/books") {
          this.logoIndex = 0;
        } else if (path === "/movie") {
          console.log("=====");
          this.logoIndex = 1;
        } else if (path === "/music") {
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
  input {
    outline: none;
    border: none;
    /**修改颜色*/
    outline-color: "red";
  }
  .searchWrapper {
    border-bottom: 1px solid #e5ebe4;
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
    a {
      margin-left: 25px;
      color: #614e3c;
      text-decoration: none;
      font-size: 14px;
      cursor: pointer;
    }
    a:first-child {
      margin-left: 0;
    }
  }
}
</style>