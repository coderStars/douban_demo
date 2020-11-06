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
<<<<<<< HEAD

=======
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
export default {
  name: "Music",
  data() {
    return {
      buttomTextList: [
        {
<<<<<<< HEAD
          name: "我听",
          path: "/music/listner"
        },
        {
=======
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
          name: "音乐人",
          path: "/music/producer"
        },
        {
          name: "专题",
<<<<<<< HEAD
          path: "/music/title"
=======
          path: "/music/topic"
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
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
<<<<<<< HEAD
=======
          name: "乐评",
          path: "/music/songComment"
        },
        {
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
          name: "豆瓣FM",
          path: "/music/comments"
        },
        {
<<<<<<< HEAD
name: "歌单",
=======
          name: "歌单",
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
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
<<<<<<< HEAD
.musicWrapper {
  width: 1040px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
=======

>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
</style>