<template>
  <div class="bettingRecord">
    <div class="public-header">会员返水<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="date">
      <div class="button">
        <button @click="tabIndex = 0" :class="{'active':tabIndex == 0}">今天</button>
        <button @click="tabIndex = 1" :class="{'active':tabIndex == 1}">近7天</button>
        <button style="border-right:  1px solid #f5f5f5;" @click="tabIndex = 2" :class="{'active':tabIndex == 2}">近15天</button>
        <button @click="tabIndex = 3" :class="{'active':tabIndex == 3}">近30天</button>
      </div>
    </div>
    <div class="backwater-box">
      <div class="record-box">
        <div class="title"><div>负盈利回水</div><span>回水说明</span></div>
        <div class="table">
          <div class="thead">
            <span>游戏类型</span>
            <span>有效投注</span>
            <span>输赢</span>
            <span>回水</span>
          </div>
          <div class="tbody">
            <span>PC28投注</span>
            <span>0.00</span>
            <span>0.00</span>
            <span>0.00</span>
          </div>
        </div>
        <div class="amount">
          <span>小计</span>
          <span style="color: #f44336">0.00</span>
        </div>
      </div>
    </div>
    <div class="backwater-box">
      <div class="record-box">
        <div class="title"><div>按投注量返水</div></div>
        <div class="table">
          <div class="thead">
            <span>游戏类型</span>
            <span>有效投注</span>
            <span>输赢</span>
            <span>回水</span>
          </div>
          <div class="tbody">
            <span>PC28投注</span>
            <span>0.00</span>
            <span>0.00</span>
            <span>0.00</span>
          </div>
        </div>
        <div class="amount">
          <span>小计</span>
          <span style="color: #f44336">0.00</span>
        </div>
      </div>
    </div>
    <div class="amount-box">
      <span>总计：</span>
      <span style="color: #f44336">0.00</span>
    </div>
    <div class="amount-box">
      <span>今日投注组合占比率：</span>
      <span style="color: #f44336">0.00%</span>
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