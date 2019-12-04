<template>
  <div class="home">
    <div class="head">
      <Header></Header>
    </div>
  </div>
</template>

<script>
    import Header from "./components/Header";
    export default {
        data () {
            return {

            }
        },
        components: {
          Header
        }
    }
</script>

<style lang="stylus" scoped>
  .home
    .head
      width 7.5rem
      height 5.4rem
      background url("../../assets/img/back/title.png") no-repeat
      background-size cover
</style>
