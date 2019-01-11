<template>
  <div id="app">
    <router-view/>
    <!-- 对  Navbar 显示问题的处理-->
    <Navbar v-show="$route.meta.showNavbar"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style scoped lang="stylus">
#app
  width 100%
  height 100%
  background #f5f5f5
  position relative
</style>
