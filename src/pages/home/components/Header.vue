<template>
  <div class="header">
    <div class="left">
      <img src="../../../assets/img/back/map.png"/>
      <router-link
        to="/navigation/home/map"
        tag="span"
        class="address"
      >{{location}}</router-link>
      <img src="../../../assets/img/back/sanjiao.png"/>
    </div>
    <div class="right">
      <img src="../../../assets/img/back/fdj.png"/>
      <span>输入商品名称</span>
    </div>
  </div>
</template>

<script>
    export default {
        data () {
          return {
            location: "请选择位置",
            value: ""
          }
        }
    }
</script>

<style lang="stylus" scoped>
  .header
    height 1.1rem
    padding 0 .20rem
    position fixed
    top 0
    display flex
    align-items center
    .left
      width 2.48rem
      height .64rem
      background black
      border-radius .32rem
      opacity: 0.6
      display flex
      justify-content space-between
      align-items center
      padding 0 .08rem
      .address
        color #FFE2B3
    .right
      width 225px
      height .64rem
      margin-left .14rem
      background #F2F2F2
      border-radius .32rem
      display flex
      align-items center
      color #999999
      padding-left 1.2rem
</style>
