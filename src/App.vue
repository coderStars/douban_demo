<template>
  <div id="app">
    <Header />
    <Search v-show="$route.meta.isShow"/>
    <div class="bodyWrapper">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'App'

}
</script>

<style>
  @import 'assets/css/base.css';
  html,body{
    width: 100%;
  }

</style>
