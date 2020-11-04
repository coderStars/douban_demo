<template>
  <div id="app">
    <Header />
<<<<<<< HEAD
    <!-- <Search v-show="$route.meta.isShow"/> -->
    <router-view></router-view>
    <Footer />
=======
    <Search v-show="$route.meta.isShow"/>
    <div class="bodyWrapper">
      <router-view></router-view>
    </div>
    <Footer v-show="!$route.meta.isHide"/>
>>>>>>> liuyue
  </div>
</template>

<script>
export default {
  name: 'App'

}
</script>

<style lang="less" scoped>

@import 'assets/css/reset.css';
<<<<<<< HEAD
=======
.bodyWrapper {
  width: 100%;
  margin: 0 auto;
}
>>>>>>> liuyue
body,html {
  width: 100%;
}

</style>
