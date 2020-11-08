<template>
  <div class="header" @click="changeInfoDisplay">
    <ul class="leftTitle">
      <li><a>豆瓣</a></li>
      <li>
        <!-- <a>读书</a> -->
        <router-link to="/books">读书</router-link>
      </li>
      <li>
        <!-- <a>电影</a> -->
        <!-- <router-link  tag="a" target="_blank" :to="{name:'movie'}">电影</router-link> -->
        <router-link to="/movie">电影</router-link>
      </li>
      <li>
        <!-- <a>音乐</a> -->
        <router-link to="/music">音乐</router-link>
      </li>
      <li>
        <!-- <a>同城</a> -->
        <router-link to="/commoncity">同城</router-link>
      </li>
      <li><a>小组</a></li>
      <li><a>阅读</a></li>
      <li><a>FM</a></li>
      <li><a>时间</a></li>
      <li>
        <!-- <a>豆品</a> -->
        <router-link to="/doupin">豆品</router-link>
      </li>
    </ul>
    <ul class="rightTitle">
      <li @mouseover="download = true" @mouseleave="download = false">
        <a>下载豆瓣客户端</a>
        <div class="downloadClient" :style="{display: download ? 'block': 'none'}">
          <div class="topImg">
            <img src="../../assets/img/nav_doubanapp_6.png" />
          </div>
          <h2>豆瓣</h2>
          <div class="bottomImg">
            <img src="../../assets/img/nav_doubanapp_6_qrcode.png" />
          </div>
        </div>
      </li>
      <!-- <li><a>登录/注册</a></li> -->
      <li>
        <!-- <a>登录/注册</a> -->
        <a data-type="user" v-if="$store.state.user.userInfo.username"
          >{{ $store.state.user.userInfo.username }}的账号</a
        >
        <router-link to="/login" v-else>登录/注册</router-link>
        <ul
          class="loginContent"
          :class="{ active: active }"
          v-if="$store.state.user.userInfo.username"
        >
          <li><a>个人主页</a></li>
          <li><a>我的订单</a></li>
          <li><a>我的钱包</a></li>
          <li><a>账号管理</a></li>
          <li @click="tologout"><a>退出</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      active: false,
      download: false
    };
  },
  methods: {
    ...mapMutations(["clearUserInfo"]),
    tologout() {
      window.localStorage.removeItem("userInfo");
      this.clearUserInfo();
      this.$router.push("/login");
    },
    changeInfoDisplay(event) {
      let { type } = event.target.dataset;
      if (type) {
        this.active = !this.active;
      } else {
        this.active = false;
      }
    }
  },
  watch: {
    $route() {
      this.active = false;
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 28px;
  display: flex;
  color: #d5d5d5;
  background-color: #545652;
  align-content: space-around;
  line-height: 26px;
  font-size: 12px;
  a {
    color: #d5d5d5;
    cursor: pointer;
  }
  a:hover {
    color: #fff !important;
    text-decoration: none;
  }
  li {
    padding: 0 12px;
  }

  .leftTitle {
    list-style: none;
    display: flex;
    flex: 1;
  }
  .rightTitle {
    list-style: none;
    display: flex;

    li:first-child {
      position: relative;

      .downloadClient {
        position: absolute;
        top: 28px;
        left: -100px;
        z-index: 20;
        width: 255px;
        height: 479px;
        background: #fff;

        .topImg,
        h2,
        .bottomImg {
          text-align: center;
        }

        .topImg {
          margin-top: 70px;
          margin-bottom: 10px;
        }

        h2 {
          font-size: 24px;
          font-weight: 400;
          color: black;
        }

        .bottomImg {
          margin-top: 48px;
        }
      }
    }

    li:last-child {
      margin-right: 8px;
      position: relative;

      .loginContent {
        width: 88px;
        position: absolute;
        z-index: 2;
        top: 28px;
        right: 0;
        padding: 10px 0;
        border: 1px solid #e6e6e6;
        background: #fff;
        white-space: nowrap;
        display: none;

        li {
          padding: 0;
          a {
            display: block;
            color: #3d3d3d;
            padding: 0 20px;
            line-height: 28px;
            width: 100%;
          }
          a:hover {
            color: black !important;
            // color: #3d3d3d;
            background-color: #f6f6f6;
          }
        }
      }

      .loginContent.active {
        display: block;
      }
    }
  }
}
</style>
