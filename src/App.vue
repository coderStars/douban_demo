<template>
  <div id="app">
    <Header />
    <!-- <Search v-show="$route.meta.isShow"/> -->
    <router-view></router-view>
<<<<<<< HEAD
    <Footer />
=======
    <Footer v-show="!$route.meta.isHide"/>
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  name: 'App'

}
=======
  name: "App",
};
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
</script>

<style lang="less" scoped>

@import 'assets/css/reset.css';
body,html {
  width: 100%;
}
<<<<<<< HEAD

=======
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
</style>
