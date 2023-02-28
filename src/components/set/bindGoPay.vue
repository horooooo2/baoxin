<template>
  <div class="login">
    <div class="public-header">GoPay<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="add" @click="$root.common.toPath('/set/BindGoPayDetail')">
      <div class="box"><van-icon name="plus" />添加</div>
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
.add{
  padding: 0.2rem;
  .box{
    height: 0.8rem;
    width: 100%;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 3px 6px #f3f3f3;
  }
}
</style>