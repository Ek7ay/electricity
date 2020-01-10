<template>
  <div class="special">
    <Title class="title" :info="title"/>
    <div class="box">
      <!-- 新品尝鲜 -->
      <div
        class="item"
        v-for="(item, index) in info.newItemList"
        :key="item.id"
      >
        <p>{{item.title}}</p>
        <p>{{item.subtitle}}</p>
        <img v-lazy="item.imageOne"/>
        <img v-lazy="item.imageTwo"/>
      </div>
      <!--十月爆款-->
      <div
        class="item"
        v-for="(item, index) in info.hotItemList"
        :key="item.id"
      >
        <p>{{item.title}}</p>
        <p>{{item.subtitle}}</p>
        <img v-lazy="item.imageOne"/>
        <img v-lazy="item.imageTwo"/>
      </div>
      <!--vip专享-->
      <div
        class="item"
        v-for="(item, index) in info.vipItemList"
      >
        <p>{{item.title}}</p>
        <p>{{item.subtitle}}</p>
        <img v-lazy="item.imageOne"/>
        <img v-lazy="item.imageTwo"/>
      </div>
      <!--吃什么，平价菜场-->
      <div class="item">
        <div
          class="itemSp"
          v-for="(item, index) in info.otherItemList"
          :key="item.id"
        >
          <p>{{item.title}}</p>
          <p>{{item.subtitle}}</p>
          <img src="../../../assets/img/shili/peanut.jpeg"/>
        </div>
        <div
          class="itemSp"
          v-for="(item, index) in info.lowPriceItemList"
          :key="item.id"
        >
          <p>{{item.title}}</p>
          <p>{{item.subtitle}}</p>
          <img v-lazy="item.image"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Title from "../../../components/Title";
    export default {
        props :{
          info: {}
        },
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
    height 4.4rem
    .title
      padding-left .20rem
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
