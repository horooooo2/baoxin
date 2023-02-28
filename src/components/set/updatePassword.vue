<template>
  <div class="login">
    <div class="public-header">更改{{ title }}密码<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="input-box-r">
      <div class="input">
        <div class="label"><span></span><span>原{{ title }}密码：</span></div>
        <input type="text" placeholder="请输入原密码">
      </div>
      <div class="input">
        <div class="label"><span></span><span>新{{ title }}密码：</span></div>
        <input type="text" placeholder="请输入6-12位密码">
      </div>
      <div class="input">
        <div class="label"><span></span><span>确认新密码：</span></div>
        <input type="text" placeholder="请再次输入新密码">
      </div>
    </div>
    <div class="button-box">
      <div class="login-btn"><button>确定</button></div>
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
      title:'',
    }
  },
  created() {
    if(this.$route.query.type == 1){
      this.title = '提现'
    } else {
      this.title = '登录'
    }
  },
  mounted() {

  },
  methods: {},
}
</script>

<style scoped lang="less">
.label{
  width: 0.75rem!important;
  span:nth-child(2){
    font-size: 0.12rem!important;
  }
}

input{
  font-size: 0.12rem!important;
}
</style>