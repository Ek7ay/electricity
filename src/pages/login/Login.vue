<template>
    <div class="login">{{info}}
        <van-button type="warning">警告按钮</van-button>
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data () {
            return {
              info: "hello world"
            }
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .login
    font-size .40rem
    color $bgColor
</style>
