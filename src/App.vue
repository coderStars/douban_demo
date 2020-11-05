<template>
  <div id="app">
    <Header />
    <!-- <Search v-show="$route.meta.isShow"/> -->
    <router-view></router-view>
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
body,html {
  width: 100%;
}

</style>
