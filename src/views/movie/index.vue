<template>
  <div>
    <!-- 顶部导航 -->
    <Header></Header>
    <!-- 头部搜索区域 -->
    <Search></Search>

    <!-- 中间内容区 -->
    <div id="wapper">
      <div class="aircle">
        .
      </div>
      <div class="right">
        222
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'Movie',
    props: {

    },
    components: {

    },
    data(){
      return {
        
      }
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
.clearfix::before,
.clearfix::after{
	content: '';
	display: table;
	clear: both;
}
// 顶部导航
.heander{
  width: 100%;
  min-width: 1040px;
  height: 28px;
  background: rgb(84,86,82);
}
// 头部
.topContainer{
  width: 100%;
  min-width: 1040px;
  height: 115px;
  margin-bottom: 40px;
  background: rgb(240, 243, 245);
  .top{
    width: 1040px;
    margin: 0 auto;
    padding: 15px 0;
    // 电影logo
    .nav-logo{
      float: left;
      background: url('../../assets/images/movie/index/lg_movie@2x.png') no-repeat 0 10px;
      background-size: 80%;
      width: 145px;
      height: 56px;
      a{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .searchContainer{
      float: left;
      width: 470px;
      height: 34px;
      background: lavender;
      margin-left: 13px;
    }
  }    
}

#wapper{
  display: flex;
  width: 1040px;
  margin: 0 auto;
  .left{
    width: 715px;
    .aircle{
      width: 675px;
      margin-right: 40px;
      background-color: lavender
    }
  }
  .right{
    width: 325px;
    height: 500px;
    background: lavenderblush;
  }
}

</style>