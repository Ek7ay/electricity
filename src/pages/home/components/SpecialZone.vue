<template>
  <div class="special">
    <Title class="title" :info="title"/>
    <div class="box">
      <div class="item">
        <p>新品尝鲜</p>
        <p>不时不食, 又闻棱角香~</p>
        <img src="../../../assets/img/shili/4513b9fc5935f1548406258985.jpg"/>
        <img src="../../../assets/img/shili/4513b9fc5935f1548406258985.jpg"/>
      </div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item">
        <div class="itemSp">
          <p>新品尝鲜</p>
          <p>不时不食, 又闻棱角香~</p>
          <img src="../../../assets/img/shili/4513b9fc5935f1548406258985.jpg"/>
        </div>
        <div class="itemSp">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Title from "../../../components/Title";
    export default {
        data () {
          return {
            title: "特色专区",
          }
        },
        components: {
          Title
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .special
    height 5.06rem
    .box
      width 100%
      margin-top .3rem
      padding 0 .2rem
      .item
        width 50%
        height 1.76rem
        float left
        border .02rem solid #dddbc0
        margin -0.02rem -0.02rem 0 0
        p
          font-size .24rem
          padding .17rem 0 0 .18rem
          ellipsis()
        p:first-child
          margin-top -0.08rem
        img
          width 1.46rem
          height .98rem
          padding .10rem .18rem 0 .24rem
        .itemSp
          height 100%
          width 50%
          float left
        .itemSp:first-child
          border-right .02rem solid #dddbc0

</style>
