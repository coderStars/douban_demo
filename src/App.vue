<template>
  <div id="app" >
    <Header ref="header" v-if="$route.path != '/login'"/>
    <!-- <Search v-show="$route.meta.isShow"/> -->
    <router-view @click.native="closeInfo"></router-view>
    <Footer v-show="!$route.meta.isHide"/>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    closeInfo() {
      if(this.$refs.header) {

        this.$refs.header.active = false
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "assets/css/reset.css";
body,
html {
  width: 100%;
  #app {
    width: 100%;
    overflow: hidden;
  }
}
</style>
