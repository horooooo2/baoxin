<template>
  <div class="calculator">
    <div class="public-header">收益计算器<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="back"></div>
    <div class="main">
      <div class="box">
        <p>转入金额</p>
        <p><input type="text" placeholder="请输入金额"></p>
        <div class="date">
          <span>转出日期</span>
          <span>2023/02/17 <img src="@/assets/images/icon_riq.png" alt=""></span>
        </div>
        <div class="money">
          <div class="back-box">
            <p>收益金额</p>
            <p style="margin-top: 15px;color: #fe4040;font-size: 20px">0</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bank-button">
      <button>确定转入</button>
    </div>
  </div>
</template>

<script>
import '@/assets/css/center/yueBao.less'
export default {
  name: "calculator",
  data() {
    return {
      tabIndex:0.
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