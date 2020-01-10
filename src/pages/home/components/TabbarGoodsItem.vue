<template>
  <div class="tabBarItem">
    <van-tabs
      v-model="active"
      :border="false"
      color="#28BE57"
      title-active-color="#28BE57"
    >
      <van-tab :title="itemsTitle[0]">
        <produce-item />
      </van-tab>
      <van-tab :title="itemsTitle[1]">内容 2</van-tab>
      <van-tab :title="itemsTitle[2]">内容 3</van-tab>
      <van-tab :title="itemsTitle[3]">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
    import ProduceItem from "./ProduceItem";

    export default {
      data () {
        return {
          active: 0,
          itemsTitle: ['全部', '晚餐', '人气', '心选'],
        }
      },
      components: {
        ProduceItem
      }
    }
</script>

<style lang="stylus" scoped>
  .tabBarItem
    height 800px
</style>
