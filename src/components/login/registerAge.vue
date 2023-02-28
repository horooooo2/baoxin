<template>
  <div class="login">
    <div class="public-header">代理注册<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="input-box-r">
      <div class="input">
        <div class="label"><span>*</span><span>账号：</span></div>
        <input type="text" placeholder="">
      </div>
      <div class="input">
        <div class="label"><span>*</span><span>密码：</span></div>
        <input type="text" placeholder="8-12字符">
      </div>
      <div class="input">
        <div class="label"><span>*</span><span>真实姓名：</span></div>
        <input type="text" placeholder="请输入真实姓名">
      </div>
      <div class="input">
        <div class="label"><span>*</span><span>手机号码：</span></div>
        <input type="number" placeholder="请输入手机号码">
      </div>
      <div class="input">
        <div class="label"><span></span><span>QQ号码：</span></div>
        <input type="number" placeholder="请输入QQ号码">
      </div>
    </div>
    <div class="button-box">
      <div class="login-btn"><button>提交</button></div>
    </div>
    <div class="tips">
      <div class="title">温馨提示：</div>
      <p>1、标有*号代表必须填写项目。</p>
      <p>2、注册代理成功后请联系客服进行审核。</p>
      <p>3、注册即代表您已同意各项<span>"开户协议"。</span></p>
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