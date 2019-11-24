<template>
    <div class="login">
      <div class="login-box">
        <van-icon class="closeIcon" name="close" />
        <van-tabs v-model="active">
          <van-tab title="登录">
            <van-cell-group>
              <van-field
                v-model="phone"
                required
                clearable
                label="手机号"
                placeholder="请输入手机号"
              />
              <van-field
                v-model="sms"
                required
                center
                clearable
                label="短信验证码"
                placeholder="验证码"
              >
                <van-button slot="button" size="small" type="primary">发送验证码</van-button>
              </van-field>
            </van-cell-group>
            <van-button class="btn-login" type="info" size="large">登录</van-button>
          </van-tab>

          <van-tab title="注册">
            <van-cell-group>
              <van-field
                v-model="phone"
                required
                clearable
                label="手机号"
                placeholder="请输入手机号"
              />
              <van-field
                v-model="sms"
                required
                clearable
                label="密码"
                placeholder="请输入密码（不少于6位）"
              />
            </van-cell-group>
            <van-button class="btn-login" type="info" size="large">注册</van-button>
          </van-tab>
        </van-tabs>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data () {
            return {
              active: 2,
              phone: "",
              sms: ""
            }
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .login
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background url("../../assets/img/login/back2.jpg") no-repeat
    background-size cover
    background-attachment fixed
    display flex
    justify-content center
    align-items center
    .login-box
      position relative
      width 90%
      background $bgColor
      padding .70rem
      .closeIcon
        position absolute
        top .14rem
        right .30rem
        font-size .40rem
      .btn-login
        margin-top .40rem
</style>
