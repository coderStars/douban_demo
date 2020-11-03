<template>
  <div class="callOurWrapper">
    <div class="contact mod">
      <h2>
        联系我们<a href="mailto:artists@douban.com">artists@douban.com</a>
      </h2>
      <ul class="embassy-list clearfix">
        <li>
          <a class="top"></a>
          <a class="buttom">音乐人小站</a>
        </li>
        <li>
          <a class="top"></a>
          <a class="buttom">音乐人小站</a>
        </li>
        <li>
          <a class="top"></a>
          <a class="buttom">音乐人小站</a>
        </li>
        <li>
          <a class="top"></a>
          <a class="buttom">音乐人小站</a>
        </li>
        <li>
          <a class="top"></a>
          <a class="buttom">音乐人小站</a>
        </li>
        <li>
          <a class="top"></a>
          <a class="buttom">音乐人小站</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CallOur'
};
</script>

<style lang="less" scoped>
.callOurWrapper {
  .mod {
    margin: 0 0 40px;
    width: 225px;
    h2 {
      color: #222;
      border-bottom: 1px solid #e4e2e2;
      font-size: 15px;
      line-height: 25px;
      margin: 0 0 12px 0;

      a {
        font-weight: 100;
        cursor: pointer;
        color: #666;
        margin-left: 6px;
        font-size: 13px;
      }
    }

    .embassy-list {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 75px;
        height: 71px;
        text-align: center;

        .top {
          display: block;
          width: 40px;
          height: 40px;
          margin: 0 auto;
          background: url("../../../../assets/img/music/home_artist.png")
            no-repeat center;
        }
      }
    }
  }
}
</style>