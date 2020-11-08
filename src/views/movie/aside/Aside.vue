<template>
  <div class="aside">
    <!-- 豆瓣电影评分八问 -->
    <div class="rating_answer">
      <a href="#">豆瓣电影评分八问</a>
    </div>

    <!-- 口碑单 -->
    <div id="billboard">
      <h2 class="billboard-hd">一周口碑榜<a href="#">更多榜单</a></h2>
      <ul class="billboard-bd">
        <li>
          <span class="order">1</span
          ><a href="#" class="title">芝加哥七君子审判</a>
        </li>
        <li>
          <span class="order">2</span><a href="#" class="title">云上情歌</a>
        </li>
        <li><span class="order">3</span><a href="#" class="title">金都</a></li>
        <li>
          <span class="order">4</span><a href="#" class="title">拖米莉斯女王</a>
        </li>
        <li><span class="order">5</span><a href="#" class="title">梦想</a></li>
        <li>
          <span class="order">6</span><a href="#" class="title">波拉特2</a>
        </li>
        <li>
          <span class="order">7</span><a href="#" class="title">十八个礼物</a>
        </li>
        <li><span class="order">8</span><a href="#" class="title">金鱼</a></li>
        <li><span class="order">9</span><a href="#" class="title">回声</a></li>
        <li>
          <span class="order">10</span
          ><a href="#" class="title">喀布尔的燕子</a>
        </li>
      </ul>
    </div>

    <!-- 豆列 -->
    <div id="doulist">
      <h2>热门豆列</h2>
      <ul>
        <li>
          <a href="#">◆◆历届威尼斯电影节金狮奖◆◆</a>
          <span class="title">22推荐</span>
        </li>
        <li>
          <a href="#">【容易忽视的好电影】</a>
          <span class="title">12719推荐</span>
        </li>
      </ul>
    </div>

    <!-- 合作联系 -->
    <div id="contact-and-cooperation">
      <h2 id="contact-and-cooperation-hd">合作联系</h2>
      <ul>
        <li>电影合作邮箱：<img src="" alt="电影合作邮箱" /></li>
        <li>电视剧合作邮箱：<img src="" alt="电视剧合作邮箱" /></li>
        <li>豆瓣影人PRO合作邮箱：<img src="" alt="豆瓣影人邮箱" /></li>
      </ul>
    </div>

    <!-- 关注我们 -->
    <div class="contact mod">
      <h2>关注我们</h2>
      <ul>
        <li>
          <a href="#"><img src="" alt="" /></a><a href="#">微博</a>
        </li>
        <li>
          <a href="#"><img src="" alt="" /></a><a href="#">微信</a>
        </li>
        <li>
          <a href="#"><img src="" alt="" /></a><a href="#">瓣嘴</a>
        </li>
        <li>
          <a href="#"><img src="" alt="" /></a><a href="#">豆瓣影人PRO</a>
        </li>
        <li>
          <a href="#"><img src="" alt="" /></a><a href="#">观影club</a>
        </li>
      </ul>
    </div>

    <!-- 广告 -->
    <div class="advertising">
      <a href="#"><img src="" alt="" /></a>
      <div class="article-info">
        <p class="title">你的音乐记忆-豆瓣FM 11岁啦</p>
        <span>豆瓣FM</span>
      </div>
    </div>
  </div>
</template>

<script>
// import moduleName from './aside/Aside.vue'
export default {
  name: "Aside",
  mounted() {
    console.log('aside------')
  },
};
</script>

<style lang="less" scoped>
// 内容区右边部分
  .aside {
    width: 300px;
    height: 500px;
    margin-left: 25px;
    background: lavenderblush;
  }
</style>
