<template>
    <div class="login">{{info}}</div>
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
