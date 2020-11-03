<template>
  <div class="musicCoverWrapper">
    <a class="artist-photo" :style="{background: `url(${getImages(musicItem.imgUrl)}) no-repeat center`}"></a>
    <div class="bottomText">
      <a>{{musicItem.username}}</a>
      <span>{{musicItem.type}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'musicCover',
  props: ['musicItem'],
  methods: {
    getImages(_url) {
      if( _url !== undefined ){
          let _u = _url.substring( 7 );
          return 'https://images.weserv.nl/?url=' + _u;
      }
    }
  }
}
</script>

<style lang="less" scoped>
.musicCoverWrapper {
  width: 125px;
  // height: 125px;
  // border: 5px solid #FFFFFF;
  // box-shadow: 0 0 0 1px #DFDCDC;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 10px;
  margin-right: 25px;

  .artist-photo {
    width: 125px;
    height: 125px;
    border: 5px solid #FFFFFF;
    box-shadow: 0 0 0 1px #DFDCDC;
    display: block;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .bottomText {
    margin-top: 10px;
    a {
      color: #138A64;
      cursor: pointer;
      font-size: 15px;
      display: block;
    }
    span {
      margin-bottom: 18px;
      color: #999;
    }
  }
}
</style>