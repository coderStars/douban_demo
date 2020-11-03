<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />

  </div>
</template>

<script>
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  @import 'assets/css/normalize.css';
  html,body{
    width: 100%;
  }

</style>
