<template>
  <div class="transferOut">
    <div class="public-header">转出<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="info-banner"><span>DT主账户</span><span>0.00</span></div>
    <div class="operate-box">
      <div class="input-box">
        <div class="label">转出金额</div>
        <div class="input">
          <span>￥<input type="number" placeholder="请输入金额"></span>
          <span class="all">全部</span>
        </div>
      </div>
      <div class="tip">预计收益到账时间：<span>2022-02-03 15：55：56</span></div>
    </div>
    <div class="bank-button">
      <button>确定转出</button>
    </div>
  </div>
</template>

<script>
import '@/assets/css/center/yueBao.less'
export default {
  name: "transferOut",
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