<template>
  <div class="title">
    <span>{{info}}</span>
  </div>
</template>

<script>
    export default {
      props: {
        info: String
      },
      data () {
        return {

        }
      }
    }
</script>

<style lang="stylus" scoped>
  .title
    font-size .36rem
    span:before
      content ""
      display inline-block
      width .08rem
      height .36rem
      background #3cb963
      margin-right .10rem
      position relative
      top .04rem
</style>
