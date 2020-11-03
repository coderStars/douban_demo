<template>
  <div id="app">
    <Header />
    <Search />
    <div class="bodyWrapper">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/Header'
import Search from '@/components/Search/Search'
import Footer from '@/components/Footer/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Search,
    Footer
  }

}
</script>

<style lang="less" scoped>

@import 'assets/css/reset.css';
.bodyWrapper {
  width: 1040px;
  margin: 0 auto;
}
body,html {
  width: 100%;
}
</style>
