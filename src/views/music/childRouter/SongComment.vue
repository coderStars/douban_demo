<template>
  <div class="commentWrapper">
    <h1>豆瓣最新的乐评</h1>

    <ul class="navtab clearfix">
      <li><a class="default">最新</a></li>
      <li><a>流行</a></li>
      <li><a>摇滚</a></li>
      <li><a>电子</a></li>
      <li><a>古典与爵士</a></li>
    </ul>

    <div class="review-list">
      <div class="review-item">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongComment"
};
</script>

<style lang="less" scoped>
.commentWrapper {
  width: 1040px;
  margin: 0 auto;
  h1 {
    font-size: 26px;
    margin-bottom: 18px;
    color: #494949;
    font-weight: bold;
    line-height: 1.1;
  }

  .navtab {
    li {
      float: left;
      a {
        font-size: 13px;
        color: #666699;
        cursor: pointer;
      }
      a.default {
        color: #111;
        cursor: default;
      }

      a:after {
        color: #111;
        content: "/";
        padding: 0 4px;
      }
    }

    li:last-child {
      a:after {
        content: "";
      }
    }
  }

  .review-list {
    margin-top: 20px;
  }
}
</style>