<template>
  <div class="login">
    <div class="header">
      <span>登录</span>
      <van-icon name="arrow-left" @click="$router.back()"/>
      <img class="server" src="@/assets/images/icon_kef.png" alt="">
    </div>
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="">
    </div>
    <div class="input-box">
      <div class="input">
        <div class="label"><van-icon name="user-o" /></div>
        <input type="text" placeholder="请输入用户名">
      </div>
      <div class="input">
        <div class="label"><van-icon name="bag-o" /></div>
        <input type="password" placeholder="请输入密码">
      </div>
      <div class="input">
        <div class="label"><van-icon name="shield-o" /></div>
        <input type="text" placeholder="请输入验证码">
      </div>
    </div>
    <div class="help">
      <van-checkbox v-model="rememberPass" shape="square" checked-color="#fc9d51">记住账号密码</van-checkbox>
      <span class="noPass">忘记密码？</span>
    </div>
    <div class="button-box">
      <div class="login-btn"><button>登录</button></div>
      <div class="register-btn"><button>试玩</button></div>
    </div>
    <div class="tip">没有账号？<span @click="$root.common.toPath('/register')">立即注册</span></div>
  </div>
</template>

<script>
import '@/assets/css/login.less'

export default {
  name: 'login',
  data() {
    return {
      rememberPass:false,
    }
  },
  created() {
  },
  mounted() {

  },
  methods: {},
}
</script>

<style scoped>

</style>