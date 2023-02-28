<template>
  <div class="login">
    <div class="public-header">绑定银行卡<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="input-box-r">
      <div class="input">
        <div class="label"><span>*</span><span>银行卡号：</span></div>
        <input type="text" placeholder="请输入银行卡号">
      </div>
      <div class="input">
        <div class="label"><span>*</span><span>开户银行：</span></div>
        <input type="text" placeholder="请选择银行">
      </div>
      <div class="input">
        <div class="label"><span>*</span><span>开户姓名：</span></div>
        <input type="text" placeholder="请输入开户姓名">
      </div>
      <div class="input">
        <div class="label"><span>*</span><span>开户地址：</span></div>
        <input type="number" placeholder="请选择开户地址">
      </div>
      <div class="input">
        <div class="label"><span></span><span>手机号码：</span></div>
        <input type="number" placeholder="请输入手机号码">
      </div>
    </div>
    <div class="button-box">
      <div class="login-btn"><button>提交</button></div>
    </div>
    <div class="tips">
      <div class="title">温馨提示：</div>
      <p>1、一个账号只能绑定三张银行卡。</p>
      <p>2、如需要修改，请联系客服人员。</p>
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