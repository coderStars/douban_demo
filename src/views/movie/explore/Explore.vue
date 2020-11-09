<template>
<div>
  <div class="Container">
    <!-- 左边区域 -->
    <div class="article">
      <h1>{{type === 'tv'? '热门电视据':'选电影'}}</h1>
      <div class="filter">
        <ul class="tagList">
          <li
            class="tagItem"
            v-for="(tagItem, index) in tagList.tags"
            :key="index"
            @click="tagChange(tagItem)"
          >
            <a href="javascript:;" :class="currentTag === tagItem? 'active':''">{{ tagItem }}</a>
          </li>
        </ul>

        <div class="tool clearfix">
          <div class="sort">
            <label><input type="radio" name="sort" value="recommend"/> 按热度排序</label>
            <label><input type="radio" name="sort" value="time"/> 按时间排序</label>
            <label><input type="radio" name="sort" value="rank"/> 按评级排序</label>
          </div>
          <div class="check">
            <label><input type="checkbox" name="watched" /> 我没看过的</label>
            <label><input type="checkbox" name="playable" /> 可在线播放</label>
          </div>
        </div>
      </div>

      <router-view></router-view>
    </div>
    <!-- 右边区域 -->
    <div class="aside">
      <!-- 广告位 -->
      <div class="ad-wp">
        <a href="#"><img src="" alt="" /></a>
      </div>

      <!-- 豆列 -->
      <div class="doulist">
        <h2>热门豆列</h2>
        <ul>
          <li>
            <a href="#">超级热门韩剧（评价人数≥10000）</a>
            <span class="title">76推荐</span>
          </li>
          <li>
            <a href="#">你们的中学弱爆了！</a>
            <span class="title">282推荐</span>
          </li>
          <li>
            <a href="#">豆瓣高分电视剧（9分以上，含9分）</a>
            <span class="title">46推荐</span>
          </li>
          <li>
            <a href="#">100部爱情电影 经典的回味</a>
            <span class="title">3415推荐</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

    <!-- 广告 -->
    <div class="ad-wrapper">
      <a href="#"><img src="https://oimagea6.ydstatic.com/image?id=374173330785755752&product=adpublish&w=1040&h=98" alt="" /></a>
    </div>
</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Explore",
  data() {
    return {
      tagList: [],
      currentTag: '热门',
    };
  },
  mounted() {
    // 获取标签
    this.getMovieTag();
    this.getTvTag();
  },
  methods: {
    getMovieTag() {
      this.$store.dispatch("getMovieTag");
    },
    getTvTag() {
      this.$store.dispatch("getTvTag");
    },

    tagChange(tagItem){
      this.currentTag = tagItem
      this.$router.push(`/movie/explore/detail?tags=${tagItem}`)
    },

    
  },
  computed: {
    ...mapState({
      // 获取标签
      movieTag: (state) => state.movie.movieTag,
      tvTag: (state) => state.movie.tvTag,
    }),
  },

  watch: {
    tvTag: {
      immediate: true,
      handler() {
        let { type } = this.$route.query;
        if (type === "tv") {
          this.tagList = this.tvTag;
        } else {
          this.tagList = this.movieTag;
        }
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
.Container {
  display: flex;
  width: 1040px;
  padding: 0 12px;
  margin: 0 auto;
  .article {
    width: 675px;
    padding-right: 25px;
    h1 {
      margin-bottom: 15px;
      color: #494949;
      font-size: 26px;
      line-height: 1.1;
    }
    .filter {
      .tagList {
        display: flex;
        flex-wrap: wrap;
        .tagItem {
          a {
            display: inline-block;
            padding: 1px 10px;
            margin: 0 3px 5px 0;
            color: #666;
            font-size: 14px;
            border-radius: 2px;
            background: none;
            line-height: 1.62;
            &:hover{
              background: #eee;
            }
            &.active{
              background: #4b8ccb;
              color: #fff;
            }
          }
        }
        .tagItem.active{
          background: #4b8ccb;
          color: #fff;
        }
      }
      .tool {
        border-top: 1px solid #eee;
        margin-top: 15px;
        padding: 15px 0;
        font-size: 13px;
        color: #666;
        line-height: 1.62;
        label {
          font-family: Tahoma;
          vertical-align: bottom;
          margin-left: 20px;
        }
        input{
          position: relative;
          top: 2px;
        }
        .sort {
          float: left;
          padding-left: 2px;
        }
        .check {
          float: right;
        }
      }
    }

  }
  .aside {
    width: 300px;
    margin-left: 30px;
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
    // 广告位
    .ad-wp {
      width: 300px;
      height: 250px;
      margin-bottom: 20px;
      a {
      }
    }
    .doulist {
      margin-bottom: 40px;
      h2 {
        border-bottom: none;
        padding-bottom: 10px;
        border-bottom: 1px solid #eaeaea;
        font: 16px Arial, Helvetica, sans-serif;
        color: #072;
        line-height: 150%;
      }
      ul {
        li {
          font-size: 13px;
          padding: 15px 0;
          border-bottom: 1px solid #eaeaea;
          .title {
            float: right;
          }
        }
      }
    }
  }
}
  .ad-wrapper{
    width: 1040px;
    padding: 0 12px;
    margin: 0 auto;
    a{
      img{

      }
    }
  }
</style>
