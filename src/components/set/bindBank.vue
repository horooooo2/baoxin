<template>
  <div class="login">
    <div class="public-header">银行卡<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="bank-num">我的银行卡（已绑定0张，最多绑定三张）</div>
    <div class="add" @click="$root.common.toPath('/set/BindGoPayDetail')">
      <div class="box">
        <p><van-icon name="plus" /></p>
        <p>绑定银行卡</p>
        <p style="color: #7d7d7d">（最多可添加3张）</p>
      </div>
    </div>
    <div class="tips">
      <div class="title">温馨提示：</div>
      <p>1、银行账户持有人姓名必须于注册时输入的姓名一致，否则无法申请提款。</p>
      <p>2、每个用户最多可绑定三张银行卡。</p>
      <p>3、一经绑定不能擅自修改，如需修改请联系客服。</p>
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
.bank-num{
  height: 0.43rem;
  padding-left: 0.2rem;
  line-height: 0.43rem;
  color: #8a91a1;
  font-size: 0.12rem;
}
.add{
  padding: 0.2rem 0.4rem;
  .box{
    height: 1.4rem;
    width: 100%;
    background: #ffffff;
    text-align: center;
    box-shadow: 2px 3px 6px #f3f3f3;
    padding-top: 0.3rem;
    i{
      font-size: 0.2rem;
    }
    p{
      font-size: 0.12rem;
      margin-top: 0.05rem;
    }
  }
}
</style>