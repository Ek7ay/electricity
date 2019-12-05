<template>
  <div class="home">
    <div class="head">
      <Header></Header>
      <swiper :SwiperList="SwiperList"></swiper>
      <Tip></Tip>
    </div>
    <Banner></Banner>
    <!--导航-->
    <Nav></Nav>
  </div>
</template>

<script>
    import Header from "./components/Header";
    import Swiper from "./components/Swiper";
    import { getHomeData } from '../../serve/index.js';
    import Tip from "./components/Tip";
    import Banner from "./components/Banner";
    import Nav from "./components/Nav";

    export default {
        data () {
            return {
              SwiperList: []      //轮播图图片
            }
        },
        mounted() {
          this._initData();
        },
        components: {
          Header,
          Swiper,
          Tip,
          Banner,
          Nav
        },
        methods: {
          _initData () {
            getHomeData().then(res => {
              if (res.success) {
                this.SwiperList = res.data.list[0].icon_list;
              }
            })
          }
        }
    }
</script>

<style lang="stylus" scoped>
  .home
    .head
      width 7.5rem
      height 5.4rem
      padding-top 1.1rem
      background url("../../assets/img/back/title.png") no-repeat
      background-size cover
</style>
