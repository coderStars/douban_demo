<template>
  <div class="list-wp">
    <ul class="list">
      <li v-for="item in currentList" :key="item.id" class="item">
        <a href="javascript:;">
          <img :src="item.cover" alt="封面" />
          <div class="title-wp">
            <span :class="item.is_new && 'new'"></span> {{ item.title }}
            <span class="grade">{{ item.rate }}</span>
          </div>
        </a>
      </li>
      <a href="javascript:;" class="more" @click="addList">加载更多</a>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "List",
  props:['name'],
  data(){
    return{
      currentList: [],
      allList: [],
      newList: [],
    }
  },
  mounted() {
    // 获取热门电影
    this.getMovieHot();
    // 获取最新电影
    this.getMovieNew();
    // 获取豆瓣高分电影
    this.getMovieHigh();
    // 获取冷门佳片电影
    this.getMovieCold();
    // 获取华语电影
    this.getMovieCh();
    // 获取欧美电影
    this.getMovieEur();
    // 获取韩国电影
    this.getMovieKor();
    // 获取日本电影
    this.getMovieJan();

    // 获取热门电视
    this.getTvHot();
    // 获取国产剧
    this.getTvCh();
    // 获取综艺
    this.getTvZh();
    // 获取美剧
    this.getTvTus();
    // 获取日剧
    this.getTvJan();
    // 获取韩剧
    this.getTvKor();
    // 获取日本动画
    this.getTvAni();
    // 获取纪录片
    this.getTvRec();
  },
  methods: {
    getMovieHot() {
      this.$store.dispatch("getMovieHot");
    },
    getMovieNew() {
      this.$store.dispatch("getMovieNew");
    },
    getMovieHigh() {
      this.$store.dispatch("getMovieHigh");
    },
    getMovieCold() {
      this.$store.dispatch("getMovieCold");
    },
    getMovieCh() {
      this.$store.dispatch("getMovieCh");
    },
    getMovieEur() {
      this.$store.dispatch("getMovieEur");
    },
    getMovieKor() {
      this.$store.dispatch("getMovieKor");
    },
    getMovieJan() {
      this.$store.dispatch("getMovieJan");
    },


    getTvHot() {
      this.$store.dispatch("getTvHot");
    },
    getTvCh() {
      this.$store.dispatch("getTvCh");
    },
    getTvZh() {
      this.$store.dispatch("getTvZh");
    },
    getTvTus() {
      this.$store.dispatch("getTvTus");
    },
    getTvJan() {
      this.$store.dispatch("getTvJan");
    },
    getTvKor() {
      this.$store.dispatch("getTvKor");
    },
    getTvAni() {
      this.$store.dispatch("getTvAni");
    },
    getTvRec() {
      this.$store.dispatch("getTvRec");
    },

    // 添加更多数据
    addList(){
      this.newList = this.allList.slice(20, 40)
    }
  },
  computed: {
    ...mapState({
      // 获取热门电影
      movieHot: (state) => state.movie.movieHot,
      // 获取最新电影
      movieNew: (state) => state.movie.movieNew,
      // 获取豆瓣高分电影
      movieHigh: (state) => state.movie.movieHigh,
      // 获取冷门佳片电影
      movieCold: (state) => state.movie.movieCold,
      // 获取华语电影
      movieCh: (state) => state.movie.movieCh,
      // 获取欧美电影
      movieEur: (state) => state.movie.movieEur,
      // 获取韩国电影
      movieKor: (state) => state.movie.movieKor,
      // 获取日本电影
      movieJan: (state) => state.movie.movieJan,

      // 电视剧
      // 热门
      tvHot: (state) => state.movie.tvHot,
      // 国产剧
      tvCh: (state) => state.movie.tvCh,
      // 综艺
      tvZh: (state) => state.movie.tvZh,
      // 美剧
      tvTus: (state) => state.movie.tvTus,
      // 日剧
      tvJan: (state) => state.movie.tvJan,
      // 韩剧
      tvKor: (state) => state.movie.tvKor,
      // 日本动画
      tvAni: (state) => state.movie.tvAni,
      // 纪录片
      tvRec: (state) => state.movie.tvRec,
    }),
  },
  // 监测数据
  watch: {
    tvRec: {
      immediate: true,
      handler(){
        this.$nextTick(() => {
          let { type } = this.$route.query;
          if(type === 'tv'){
            switch (this.$props.name) {
              case "热门":
                this.$set(this, "allList", this.tvHot.subjects);
                break;
              case "国产剧":
                this.$set(this, "allList", this.tvCh.subjects);
                break;
              case "综艺":
                this.$set(this, "allList", this.tvZh.subjects);
                break;
              case "美剧":
                this.$set(this, "allList", this.tvTus.subjects);
                break;
              case "日剧":
                this.$set(this, "allList", this.tvJan.subjects);
                break;
              case "韩剧":
                this.$set(this, "allList", this.tvKor.subjects);
                break;
              case "日本动画":
                this.$set(this, "allList", this.tvAni.subjects);
                break;
              case "纪录片":
                this.$set(this, "allList", this.tvRec.subjects);
                break;
            }
            if(this.allList)
              this.currentList = this.allList.slice(0,20)
          }else{
            switch (this.$props.name) {
              case "热门":
                this.$set(this, "allList", this.movieHot.subjects);
                break;
              case "最新":
                this.$set(this, "allList", this.movieNew.subjects);
                break;
              case "豆瓣高分":
                this.$set(this, "allList", this.movieHigh.subjects);
                break;
              case "冷门佳片":
                this.$set(this, "allList", this.movieCold.subjects);
                break;
              case "华语":
                this.$set(this, "allList", this.movieCh.subjects);
                break;
              case "欧美":
                this.$set(this, "allList", this.movieEur.subjects);
                break;
              case "韩国":
                this.$set(this, "allList", this.movieKor.subjects);
                break;
              case "日本":
                this.$set(this, "allList", this.movieJan.subjects);
                break;
              default:
                this.$set(this, "allList", this.movieHot.subjects);
            }
            if(this.allList)
              this.currentList = this.allList.slice(0,20)
          }
        })
      }
    },
    name: {
      immediate: true,
      handler(){
        this.$nextTick(() => {
          let { type } = this.$route.query;
          if(type === 'tv'){
            switch (this.$props.name) {
              case "热门":
                this.$set(this, "currentList", this.tvHot.subjects);
                break;
              case "国产剧":
                this.$set(this, "currentList", this.tvCh.subjects);
                break;
              case "综艺":
                this.$set(this, "currentList", this.tvZh.subjects);
                break;
              case "美剧":
                this.$set(this, "currentList", this.tvTus.subjects);
                break;
              case "日剧":
                this.$set(this, "currentList", this.tvJan.subjects);
                break;
              case "韩剧":
                this.$set(this, "currentList", this.tvKor.subjects);
                break;
              case "日本动画":
                this.$set(this, "currentList", this.tvAni.subjects);
                break;
              case "纪录片":
                this.$set(this, "currentList", this.tvRec.subjects);
                break;
              if(this.allList)
                this.currentList = this.allList.slice(0,20)
            }
          }else{
            switch (this.$props.name) {
              case "热门":
                this.$set(this, "currentList", this.movieHot.subjects);
                break;
              case "最新":
                this.$set(this, "currentList", this.movieNew.subjects);
                break;
              case "豆瓣高分":
                this.$set(this, "currentList", this.movieHigh.subjects);
                break;
              case "冷门佳片":
                this.$set(this, "currentList", this.movieCold.subjects);
                break;
              case "华语":
                this.$set(this, "currentList", this.movieCh.subjects);
                break;
              case "欧美":
                this.$set(this, "currentList", this.movieEur.subjects);
                break;
              case "韩国":
                this.$set(this, "currentList", this.movieKor.subjects);
                break;
              case "日本":
                this.$set(this, "currentList", this.movieJan.subjects);
                break;
              default:
                this.$set(this, "currentList", this.movieHot.subjects);
              if(this.allList)
                this.currentList = this.allList.slice(0,20)
            }
          }
        })
      }
    },
    type:{
      immediate: true,
      handler(){
        this.$nextTick(() => {
          let { type } = this.$route.query;
          if(type === 'tv'){
            switch (this.$props.name) {
              case "热门":
                this.$set(this, "currentList", this.tvHot.subjects);
                break;
              case "国产剧":
                this.$set(this, "currentList", this.tvCh.subjects);
                break;
              case "综艺":
                this.$set(this, "currentList", this.tvZh.subjects);
                break;
              case "美剧":
                this.$set(this, "currentList", this.tvTus.subjects);
                break;
              case "日剧":
                this.$set(this, "currentList", this.tvJan.subjects);
                break;
              case "韩剧":
                this.$set(this, "currentList", this.tvKor.subjects);
                break;
              case "日本动画":
                this.$set(this, "currentList", this.tvAni.subjects);
                break;
              case "纪录片":
                this.$set(this, "currentList", this.tvRec.subjects);
                break;
              if(this.allList)
                this.currentList = this.allList.slice(0,20)
            }
          }else{
            switch (this.$props.name) {
              case "热门":
                this.$set(this, "currentList", this.movieHot.subjects);
                break;
              case "最新":
                this.$set(this, "currentList", this.movieNew.subjects);
                break;
              case "豆瓣高分":
                this.$set(this, "currentList", this.movieHigh.subjects);
                break;
              case "冷门佳片":
                this.$set(this, "currentList", this.movieCold.subjects);
                break;
              case "华语":
                this.$set(this, "currentList", this.movieCh.subjects);
                break;
              case "欧美":
                this.$set(this, "currentList", this.movieEur.subjects);
                break;
              case "韩国":
                this.$set(this, "currentList", this.movieKor.subjects);
                break;
              case "日本":
                this.$set(this, "currentList", this.movieJan.subjects);
                break;
              default:
                this.$set(this, "currentList", this.movieHot.subjects);
              if(this.allList)
                this.currentList = this.allList.slice(0,20)
            }
          }
        })
      }
    }
  }

};
</script>

<style lang="less" scoped>
.list-wp {
  width: 700px;
  font-size: 13px;
  line-height: 1.62;
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      width: 20%;
      margin-bottom: 20px;
      a {
        width: 115px;
        color: #37a;
        img {
          width: 115px;
          height: 170px;
          margin-bottom: 1px;
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
    .more{
      margin-top: 10px;
      margin-bottom: 50px;
      display: block;
      width: 100%;
      height: 34px;
      line-height: 34px;
      text-align: center;
      font-size: 14px;
      background: #f7f7f7;
      color: #37a;
      &:hover{
        background: #eee;
      }
    }
  }
}
</style>
