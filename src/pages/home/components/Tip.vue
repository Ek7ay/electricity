<template>
  <div class="tip">
    <img src="../../../assets/img/icon/transport.png"/>
    <span>最快29分钟到达</span>
    <img src="../../../assets/img/icon/money.png"/>
    <span>0元起送 0配送费</span>
    <img src="../../../assets/img/icon/seal.png"/>
    <span>安心退</span>
  </div>
</template>

<script>
    export default {
        data () {
          return {

          }
        }
    }
</script>

<style lang="stylus" scoped>
  .tip
    padding 0 .20rem
    height .80rem
    display flex
    align-items center
    img
      width .36rem
      margin-right .10rem
    span
      font-size .24rem
      color #45c763
      margin-right .40rem
</style>
