<template>
  <div id="app">
    <Header />
    <Search v-show="$route.meta.isShow" />
    <div class="bodyWrapper">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less" scoped>
@import "assets/css/reset.css";
.bodyWrapper {
  // width: 1040px;
  // margin: 0 auto;
}
body,
html {
  width: 100%;
}
</style>
