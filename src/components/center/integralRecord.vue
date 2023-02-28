<template>
  <div class="bettingRecord">
    <div class="public-header">积分记录<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="classify">
      <span>请选择查询时间</span>
    </div>
    <div class="date">
      <div class="button">
        <button @click="tabIndex = 0" :class="{'active':tabIndex == 0}">今天</button>
        <button @click="tabIndex = 1" :class="{'active':tabIndex == 1}">近7天</button>
        <button style="border-right:  0.01rem solid #f5f5f5;" @click="tabIndex = 2" :class="{'active':tabIndex == 2}">近15天</button>
        <button @click="tabIndex = 3" :class="{'active':tabIndex == 3}">近30天</button>
      </div>
    </div>
    <div class="record-box">
      <div class="table">
        <div class="thead">
          <span>日期</span>
          <span>交易类别</span>
          <span>交易额度</span>
          <span>现有额度</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/center/bettingRecord.less'
export default {
  name: "bettingRecord",
  data() {
    return {
      inChecked:false,
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