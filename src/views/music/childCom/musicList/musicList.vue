<template>
  <div class="musicWrapper">
    <div class="top">
      <h2>豆瓣音乐250</h2>
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
.musicWrapper {
  .top {
    h2 {
      color: #222;
      border-bottom: 1px solid #e4e2e2;
      font-size: 15px;
      line-height: 25px;
    }
  }
}
</style>