<template>
    <div class="swipe">
      <van-swipe :autoplay="3000" :height="175">
        <van-swipe-item v-for="(item, index) in SwiperList" :key="item.meteria_id">
          <img v-lazy="item.icon_url" />
        </van-swipe-item>
      </van-swipe>
    </div>
</template>

<script>
    export default {
        props: {
          SwiperList: Array
        },
        data () {
          return {

          }
        }
    }
</script>

<style lang="stylus" scoped>
  .swipe
    padding 0 .20rem
    img
      width 100%
      height 100%
</style>
