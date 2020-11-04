<template>
  <div class="footerContainer">
    <span class="icp">© 2005－2020 douban.com, all rights reserved 北京豆网科技有限公司</span>
    <div class="fright">
      <a>关于豆瓣</a>
      <a>在豆瓣工作</a>
      <a>联系我们</a>
      <a>法律声明</a>
      <a>帮助中心</a>
      <a>图书馆合作</a>
      <a>移动应用</a>
      <a>豆瓣广告</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="less" scoped>
  .footerContainer {
    width: 1040px;
    margin: 0 auto;
    margin-top: 40px;
    border-top: 1px #ddd dotted;
    display: flex;
    justify-content: space-between;
    color: #999;
    font-size: 13px;
    padding-top: 6px;
    
    a{
      text-decoration: none;
      color: #3377aa;
      cursor: pointer;
    }
    .icp {
      font-size: 13px;
    }
    .fright {
      width: 522px;
      display: flex;
      justify-content: space-between;
      
    }
  }
</style>