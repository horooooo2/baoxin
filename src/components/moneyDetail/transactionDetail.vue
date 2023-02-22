<template>
  <div class="moneyDetail">
    <div class="public-header">交易明细<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="tab">
      <van-tabs v-model="tabIndex" line-width="33%" color="#fc8220" title-active-color="#fc8220">
        <van-tab title="今天"></van-tab>
        <van-tab title="近7天"></van-tab>
        <van-tab title="近15天"></van-tab>
      </van-tabs>
    </div>
    <div class="list-box">
      <div class="list">
        <p><span>资金归集</span><span>0</span></p>
        <p><span>2023-02-20 15:12:00</span><span>0.00</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/center/moneyDetail.less'
export default {
  name: "yueBaoDetail",
  data() {
    return {
      tabIndex:0,
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