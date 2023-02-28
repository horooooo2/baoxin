<template>
  <div class="login">
    <div class="public-header">绑定GoPay<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="input-box-r">
      <div class="input">
        <div class="label"><span></span><span>真实姓名：</span></div>
        <input type="text" placeholder="请输入真实姓名">
      </div>
      <div class="input">
        <div class="label"><span></span><span>手机号码：</span></div>
        <input type="text" placeholder="请输入手机号码">
      </div>
      <div class="input">
        <div class="label"><span></span><span>钱包地址：</span></div>
        <input type="text" placeholder="请输入钱包地址">
      </div>
      <div class="input">
        <div class="label"><span></span><span>提现密码：</span></div>
        <input type="password" placeholder="请输入提现密码">
      </div>
    </div>
    <div class="button-box">
      <div class="login-btn"><button>提交</button></div>
    </div>
    <div class="tips">
      <div class="title">温馨提示：</div>
      <p>1、请填写正确的真实姓名、手机号码、钱包地址、提现密码。</p>
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
.label{
  width: 0.75rem!important;
}
</style>