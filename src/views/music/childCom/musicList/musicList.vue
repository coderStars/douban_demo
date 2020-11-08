<template>
  <div class="musicListWrapper">
    <div class="top clearfix">
      <h2>豆瓣音乐250</h2>
      <span class="more"><a>更多</a></span>
    </div>
    <div class="content" v-for="(item, index) in musicList" :key="item">
      <img src="xx" />
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicList",
  props: {
    musicList: {
      type: Array,
      default(){
        return []
      }
    }
  }
};
</script>

<style lang="less" scoped>
.musicListWrapper {
  .top {
    border-bottom: 1px solid #e4e2e2;
    width: 100%;
    h2 {
      float: left;
      color: #222;
      font-size: 15px;
      line-height: 25px;
      font-weight: normal;
    }

    .more {
      float: right;
      font-size: 13px;
      color: #999;
      vertical-align: bottom;

    }
  }
}
</style>