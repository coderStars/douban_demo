<template>
  <div class="musicContainer">
    <Search
      inpText="唱片名、表演者、条码、ISRC"
      :buttomText="buttomTextList"
    ></Search>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Music",
  data() {
    return {
      buttomTextList: [
        {
          name: "音乐人",
          path: "/music/producer"
        },
        {
          name: "专题",
          path: "/music/topic"
        },
        {
          name: "排行榜",
          path: "/music/rank"
        },
        {
          name: "分类浏览",
          path: "/music/views"
        },
        {
          name: "乐评",
          path: "/music/songComment"
        },
        {
          name: "豆瓣FM",
          path: "/music/comments"
        },
        {
          name: "歌单",
          path: "/music/songsheet"
        },
        {
          name: "2019年度榜单",
          path: "/music/yearrank"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
</style>