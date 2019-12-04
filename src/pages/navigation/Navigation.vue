<template>
  <div class="navigation">
    <!--加载界面-->
    <router-view/>
    <!--导航-->
    <van-tabbar
      v-model="active"
      :safe-area-inset-bottom=true
      class="active_tab"
      active-color="#75a342"
    >
      <!-- 给购物车的Tabbar加个ID 方便做加入购物车的小球动画 -->
      <van-tabbar-item
          v-for="(item, index) in tabbars"
          :key="index"
          :id="index==3?'buycar':''"
          @click="tab(index, item.name)"
      >
        <span :class="currIndex == index ? active:''">{{item.title}}</span>
        <template
          slot="icon"
          slot-scope="props"
        >
          <img :src="props.active ? item.active : item.normal">
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
    export default {
        name: "navigation",
        data () {
          return {
            currIndex: 0,
            active: 0,
            tabbars: [
              {
                name: "home",
                title: "首页",
                normal: require("@/assets/img/navigation/home_default.png"),
                active: require("@/assets/img/navigation/home_selected.png")
              },
              {
                name: "category",
                title: "分类",
                normal: require("@/assets/img/navigation/category_default.png"),
                active: require("@/assets/img/navigation/category_selected.png")
              },
              {
                name: "eat",
                title: "吃什么",
                normal: require("@/assets/img/navigation/eat_default.png"),
                active: require("@/assets/img/navigation/eat_selected.png"),
              },
              {
                name: "cart",
                title: "购物车",
                normal: require("@/assets/img/navigation/shoppingcart_default.png"),
                active: require("@/assets/img/navigation/shoppingcart_selected.png"),
                num: 5
              },
              {
                name: "mine",
                title: "我的",
                normal: require("@/assets/img/navigation/mine_default.png"),
                active: require("@/assets/img/navigation/mine_selected.png")
              }
            ]
          }
        },
        methods: {
          tab (index, val) {
            this.currIndex = index;
            this.$router.push({
              path: "/navigation/" + val
            });
          }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
