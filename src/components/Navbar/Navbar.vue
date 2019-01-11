<template>
    <div class="footer">
      <!-- 方式一 router-link to -->
     <!-- <footer class="footer_guide">
        <router-link to="/MSite" class="guide_item">
            <span class="item_icon">
              <i class="iconfont icon-waimai"></i>
            </span>
            <span>外卖</span>
        </router-link>
        <router-link to="/Search"  class="guide_item">
            <span class="item_icon">
              <i class="iconfont icon-search"></i>
            </span>
            <span>搜索</span>
        </router-link>
        <router-link to="/Order"  class="guide_item">
            <span class="item_icon">
              <i class="iconfont icon-dingdan"></i>
            </span>
            <span>订单</span>
        </router-link>
        <router-link to="/Profile"  class="guide_item">
            <span class="item_icon">
              <i class="iconfont icon-geren"></i>
            </span>
            <span>我的</span>
        </router-link>
      </footer>-->
      <!-- 方式二 编程是开发 -->
      <footer class="footer_guide ">
        <a href="javascript:;" class="guide_item" :class="{on: '/MSite' === $route.path}" @click="cli('/MSite')">
            <span class="item_icon">
              <i class="iconfont icon-waimai"></i>
            </span>
          <span>外卖</span>
        </a>
        <a href="javascript:;" class="guide_item" :class="{on: '/Search' === $route.path}" @click="cli('/Search')">
            <span class="item_icon">
              <i class="iconfont icon-search"></i>
            </span>
          <span>搜索</span>
        </a>
        <a href="javascript:;" class="guide_item" :class="{on: '/Order' === $route.path}" @click="cli('/Order')">
            <span class="item_icon">
              <i class="iconfont icon-dingdan"></i>
            </span>
          <span>订单</span>
        </a>
        <a href="javascript:;" class="guide_item" :class="{on: '/Profile' === $route.path}" @click="cli('/Profile')">
            <span class="item_icon">
              <i class="iconfont icon-geren"></i>
            </span>
          <span>我的</span>
        </a>
      </footer>
    </div>
</template>

<script>

export default {
  name: 'Navbar',
  methods: {
    cli (path) {
      this.$router.replace(path)
    }
  },
  components: {}
}
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixins.styl'
.footer_guide  //footer
  top-border-1px(#e4e4e4) // stylus 的变量的用法
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 50px
  display flex
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #999999
    &.on
      color #02a774
    span
      font-size 12px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 22px
.router-link-active
  color #02a774 !important
</style>
