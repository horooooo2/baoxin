<template>
  <div class="detail">
    <div class="public-header">余额宝<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="main">
      <div class="back"></div>
      <div class="box">
        <div>总余额</div>
        <p style="font-size: 0.3rem;">0.00</p>
        <div class="row">
          <span>日化利率</span>
          <span>昨日收益（元）</span>
          <span>累计收益（元）</span>
        </div>
        <div class="row">
          <span>0.2%</span>
          <span>0.00</span>
          <span>0.00</span>
        </div>
      </div>
    </div>
    <div class="tab-box">
      <div class="tab">
        <van-tabs v-model="tabIndex" line-width="25%" color="#fc8220" title-active-color="#fc8220">
          <van-tab title="全部"></van-tab>
          <van-tab title="收益"></van-tab>
          <van-tab title="转入"></van-tab>
          <van-tab title="转出"></van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/center/yueBao.less'
export default {
  name: "yueBaoDetail",
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