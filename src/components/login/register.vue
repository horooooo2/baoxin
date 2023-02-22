<template>
  <div class="login">
    <div class="header">
      <span>注册</span>
      <van-icon name="arrow-left" @click="$router.back()"/>
      <img class="server" src="@/assets/images/icon_kef.png" alt="">
    </div>
    <div class="logo-r">
      <div><img src="@/assets/images/logo.png" alt=""></div>
      <div>
        <p>您好！尊敬的用户</p>
        <p>欢迎加入宝信28!</p>
      </div>
    </div>
    <div class="input-box-r">
      <div class="input">
        <div class="label"><span>*</span><span>用户名：</span></div>
        <input type="text" placeholder="请输入用户名">
      </div>
      <div class="input">
        <div class="label"><span>*</span><span>密码：</span></div>
        <input type="text" placeholder="请输入密码">
      </div>
      <div class="input">
        <div class="label"><span>*</span><span>确认密码：</span></div>
        <input type="text" placeholder="请确认密码">
      </div>
    </div>
    <div class="button-box">
      <div class="login-btn"><button>注册</button></div>
    </div>
    <div class="tip">已有账号？<span>去登陆</span></div>
    <div class="tips">
      <div class="title">温馨提示：</div>
      <p>1、标有*号代表必须填写项目</p>
      <p>2、注册即代表您已同意各项<span>"开户协议"</span></p>
    </div>
  </div>
</template>

<script>
import '@/assets/css/login.less'

export default {
  name: 'register',
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