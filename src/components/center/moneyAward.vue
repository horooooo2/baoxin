<template>
  <div class="bettingRecord">
    <div class="public-header">奖金<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="tab">
      <van-tabs v-model="tabIndex" line-width="33%" color="#fc8220" title-active-color="#fc8220">
        <van-tab title="未领取"></van-tab>
        <van-tab title="已领取"></van-tab>
        <van-tab title="已失效"></van-tab>
      </van-tabs>
    </div>
    <div class="record-box">
      <div class="table">
        <div class="thead">
          <span>奖金金额</span>
          <span>需打码量</span>
          <span>有效期</span>
          <span>状态</span>
        </div>
        <div class="tbody">
          <span>0</span>
          <span>0.00</span>
          <span>0</span>
          <span>0.00</span>
        </div>
        <div class="no-data">暂无数据</div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/center/bettingRecord.less'
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