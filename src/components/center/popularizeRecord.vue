<template>
  <div class="bettingRecord">
    <div class="public-header">推广红利<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="tab">
      <van-tabs v-model="tabIndex" line-width="50%" color="#fc8220" title-active-color="#fc8220">
        <van-tab title="推广红利"></van-tab>
        <van-tab title="推广会员"></van-tab>
      </van-tabs>
    </div>
    <div class="record-box" v-if="tabIndex == 0">
      <div class="table">
        <div class="thead">
          <span>日期</span>
          <span>线下用户</span>
          <span>下限存款</span>
          <span>赚得红利</span>
        </div>
        <div class="tbody">
          <span>0</span>
          <span>0.00</span>
          <span>0</span>
          <span>0.00</span>
        </div>
        <div class="no-data">暂无推广红利</div>
      </div>
    </div>
    <div class="record-box" v-if="tabIndex == 1">
      <div class="table">
        <div class="thead">
          <span>用户名</span>
          <span>ID</span>
          <span>昵称</span>
        </div>
        <div class="tbody">
          <span>horo</span>
          <span>2313132</span>
          <span>horo</span>
        </div>
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