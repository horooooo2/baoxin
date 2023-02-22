<template>
  <div class="review">
    <div class="public-header">稽核<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="user">
      <span>用户:horo</span>
      <span>账户：0.00</span>
    </div>
    <div class="info">
      <div class="row">请确认稽核信息</div>
      <div class="row">自提现后第一次存款之后总有效投注：<span>0</span></div>
      <div class="row">优惠稽核：通过优惠稽核，不需要扣除存款优惠！</div>
      <div class="row">常态性稽核：通过常态稽核，不需要收取行政费用！</div>
      <div class="row">多次提现手续费：24小时内3次提现，免收手续费！</div>
      <div class="row">优惠稽核+常态性稽核+手续费，共需扣除<span>0</span></div>
      <div class="row">此次提现稽核时间：2023-02-16 16:56:33</div>
    </div>
    <div class="bank-button">
      <button>继续提现</button>
    </div>
    <div class="tips">
      <div class="title">温馨提示：</div>
      <p>1.提现时需完善银行信息，请前往【我的-设置-绑定银行卡】完善银行信息，并设置提现密码。</p>
      <p>2.如有任何问题，请联系客服人员。</p>
    </div>
  </div>
</template>

<script>
import '@/assets/css/center/review.less'
export default {
  name: "review",
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