<template>
  <div id="app">
    <Header />
    <Search v-show="$route.meta.isShow"/>
    <div class="bodyWrapper">
      <router-view></router-view>
    </div>
    <Footer v-show="!$route.meta.isHide"/>
  </div>
</template>

<script>
export default {
  name: 'App'

}
</script>

<style lang="less" scoped>

@import 'assets/css/reset.css';
.bodyWrapper {
  width: 100%;
  margin: 0 auto;
}
body,html {
  width: 100%;
}

</style>
