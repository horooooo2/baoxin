<template>
  <div class="login">
    <div class="public-header">绑定USDT<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="usdt-box">
      <div class="box">
        <div class="label">USDT-TRC20(SUDT-TRON)</div>
        <div class="input">钱包地址：<input type="text" placeholder="请输入钱包地址"></div>
      </div>
      <div class="box">
        <div class="label">USDT-ERC20</div>
        <div class="input">钱包地址：<input type="text" placeholder="请输入钱包地址"></div>
      </div>
      <div class="box">
        <div class="label">USDT-Omini</div>
        <div class="input">钱包地址：<input type="text" placeholder="请输入钱包地址"></div>
      </div>
    </div>
    <div class="button-box">
      <div class="login-btn"><button>提交</button></div>
    </div>
    <div class="tips">
      <div class="title">温馨提示：</div>
      <p>1、具体操作步骤可以查看下方。</p>
      <p>2、请根据提款需要，绑定所需协议。</p>
      <p>3、USDT-TRC20协议也称作USDT-TRON。</p>
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

<style scoped lang="less">
.usdt-box{
  .box{
    background: #ffffff;
    width: 100%;
    height: 0.75rem;
    padding: 0.15rem 0.2rem;
    margin-top: 0.1rem;
    .input{
      font-size: 0.12rem;
      display: flex;
      align-items: center;
      margin-top: 0.15rem;
      input{
        border: none;
      }
    }
  }
}
</style>