<template>
  <div class="header">
    <ul class="leftTitle">
      <li><a>豆瓣</a></li>
      <li>
        <!-- <a>读书</a> -->
        <router-link to="/books">读书</router-link>
      </li>
      <li>
        <!-- <a>电影</a> -->
        <router-link  tag="a" target="_blank" :to="{name:'movie'}">电影</router-link>
      </li>
      <li>
        <!-- <a>音乐</a> -->
        <router-link to="/music">音乐</router-link>
      </li>
      <li><a>同城</a></li>
      <li><a>小组</a></li>
      <li><a>阅读</a></li>
      <li><a>FM</a></li>
      <li><a>时间</a></li>
      <li><a>豆品</a></li>
    </ul>
    <ul class="rightTitle">
      <li><a>下载豆瓣客户端</a></li>
      <li><a>登录/注册</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header"
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

    li:last-child {
      margin-right: 8px;
    }
  }
}
</style>