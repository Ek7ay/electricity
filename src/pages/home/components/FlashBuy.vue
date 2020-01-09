<template>
  <div class="flashBuy">
    <div class="top">
      <Title class="title" :info="title"/>
      <van-count-down :time="time" class="time">
        <template v-slot="timeData">
          <span class="item">{{ timeData.hours }}</span>
          <span class="item">{{ timeData.minutes }}</span>
          <span class="item">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <span class="more">更多</span>
    </div>
    <flash-food :info="info"/>
  </div>
</template>

<script>
    import Title from "../../../components/Title";
    import FlashFood from "./FlashFood";
    export default {
        props: {
          info: Array
        },
        data () {
          return {
            title: "限时抢购",
            time: 30 * 60 * 60 * 1000
          }
        },
        components: {
          Title,
          FlashFood
        },
        mounted() {

        }
    }
</script>

<style lang="stylus" scoped>
.flashBuy
  height 4.4rem
  .top
    height .76rem
    line-height 0.76rem
    padding 0 .20rem
    .title
      float left
    .time
      margin-left .40rem
      float left
      position relative
      top 8px
      .item
        display inline-block
        width .44rem
        margin-right .10rem
        color #fff
        font-size .24rem
        text-align center
        background-color #000000
    .more
      color #3cb963
      float right
</style>
