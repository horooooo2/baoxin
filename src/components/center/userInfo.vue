<template>
  <div class="userInfo">
    <div class="public-header">修改资料<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="input-box">
      <div class="head-img">
        <span>头像：</span>
        <span><img src="@/assets/images/Head_0.png" alt=""></span>
      </div>
      <div class="input"><div class="left">用户名：</div><div class="right">horo</div></div>
      <div class="input"><div class="left">昵称：</div><div class="right">horo</div></div>
    </div>
    <div class="input-box">
      <div class="input"><div class="left">真实姓名：</div><div class="right">horo</div></div>
      <div class="input"><div class="left">手机号码：</div><div class="right">*******</div></div>
      <div class="input"><div class="left">微信：</div><div class="right"><input type="text"></div></div>
      <div class="input"><div class="left">QQ：</div><div class="right"><input type="text"></div></div>
    </div>
    <div class="bank-button">
      <button>保存</button>
    </div>
    <div class="tips">
      <div class="title">温馨提示：</div>
      <p>1.请填写正确的真实姓名、手机号码、微信、QQ。</p>
      <p>2.如果需要修改，请联系客服人员。</p>
    </div>
  </div>
</template>

<script>
import '@/assets/css/center/userInfo.less'
export default {
  name: "userInfo",
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {

  },
  methods: {

  },
}
</script>

<style scoped>

</style>