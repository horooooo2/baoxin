<template>
  <div class="bettingRecord">
    <div class="public-header">投注记录<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="classify">
      <span>选择游戏<b>全部游戏</b></span>
      <span><van-icon name="arrow-down" /></span>
    </div>
    <div class="date">
      <div class="button">
        <button @click="tabIndex = 0" :class="{'active':tabIndex == 0}">今天</button>
        <button @click="tabIndex = 1" :class="{'active':tabIndex == 1}">近7天</button>
        <button @click="tabIndex = 2" :class="{'active':tabIndex == 2}">近15天</button>
      </div>
    </div>
    <div class="record-box">
      <div class="table">
        <div class="thead">
          <span>下注日期</span>
          <span>输赢</span>
          <span>等级</span>
          <span>有效投注</span>
        </div>
        <div class="tbody">
          <span>总计:(0)</span>
          <span>0.00</span>
          <span>0</span>
          <span>0.00</span>
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