<template>
    <div class="nav">
        <van-grid :column-num="5" :border="true">
          <van-grid-item
            v-for="item in NavList"
            :key="item.name"
            :icon="item.icon_url"
            :text="item.name"
          />
        </van-grid>
    </div>
</template>

<script>
    export default {
      props: {
        NavList: Array
      },
      data () {
        return {

        }
      },
      mounted () {

      },
      methods: {

      }
    }
</script>

<style lang="stylus" scoped>

</style>
