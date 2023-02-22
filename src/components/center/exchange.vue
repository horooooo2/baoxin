<template>
  <div class="exchange">
    <div class="public-header">额度转换<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="header">
      <div class="row"><span>主账户余额</span><span>￥0</span></div>
      <div class="row"><span>余额宝</span><span>0.00</span></div>
    </div>
    <div class="money-type">
      <div class="row"><span>免钱包转入</span><span><van-switch v-model="inChecked" size="14px" active-color="#fc913a" inactive-color="#dcdee0"  /></span></div>
      <div class="type-box"><span>主账户</span><span>0</span></div>
      <div class="type-box"><span>KY</span><span>0</span></div>
      <div class="type-box"><span>AG</span><span>0</span></div>
      <div class="type-box"><span>OB棋牌</span><span>0</span></div>
      <div class="type-box"><span>OB视讯</span><span>0</span></div>
      <div class="type-box"><span>OB体育</span><span>0</span></div>
      <div class="type-box"><span>OB电竞</span><span>0</span></div>
    </div>
    <div class="select">
      <div class="row"><span>主账户</span><span style="color: #fc8220;"> —— </span><span>KY</span></div>
      <div class="row"><span><input type="number" placeholder="输入转换金额"></span><span class="all">全部</span></div>
    </div>
    <div class="bank-button">
      <button>开始转换</button>
    </div>
    <div class="all-box">
      <button>一键归集</button>
      <button>充值</button>
    </div>
  </div>
</template>

<script>
import '@/assets/css/center/exchange.less'
export default {
  name: "exchange",
  data() {
    return {
      inChecked:false,
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