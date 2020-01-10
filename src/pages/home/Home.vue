<template>
  <div class="home">
    <div class="head">
      <Header></Header>
      <swiper :SwiperList="SwiperList"></swiper>
      <Tip></Tip>
    </div>
    <Banner />
    <!--导航-->
    <Nav :NavList="nav_list" />
    <!-- 跳转到会员界面 -->
    <vip-tip />
    <!-- 限时抢购 -->
    <FlashBuy :info="flash_sale_product_list" />
    <!--特色专区-->
    <special-zone :info="specialZone" />
    <!--TabbarItem 商品 -->
    <tabbar-goods-item />
  </div>
</template>

<script>
    import Header from "./components/Header";
    import Swiper from "./components/Swiper";
    import { getHomeData } from '../../serve/index.js';
    import Tip from "./components/Tip";
    import Banner from "./components/Banner";
    import Nav from "./components/Nav";
    import VipTip from "./components/VipTip";
    import FlashBuy from "./components/FlashBuy";
    import SpecialZone from "./components/SpecialZone";
    import TabbarGoodsItem from "./components/TabbarGoodsItem";


    export default {
        data () {
            return {
              SwiperList: [],      //轮播图图片
              nav_list: [],        //导航列表
              flash_sale_product_list: [],   // 限时抢购
              specialZone: {},    //特色专区
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
          Nav,
          VipTip,
          FlashBuy,
          SpecialZone,
          TabbarGoodsItem
        },
        methods: {
          _initData () {
            getHomeData().then(res => {
              if (res.success) {
                this.SwiperList = res.data.list[0].icon_list;
                this.nav_list = res.data.list[2].icon_list;
                this.flash_sale_product_list = res.data.list[3].product_list;
                this.specialZone = res.data.special_zone;
              }
            })
          }
        }
    }
</script>

<style lang="stylus" scoped>
  .home
    padding-bottom 1rem
    .head
      width 7.5rem
      height 5.4rem
      padding-top 1.1rem
      background url("../../assets/img/back/title.png") no-repeat
      background-size cover
</style>
