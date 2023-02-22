<template>
  <div class="moneyDetail">
    <div class="public-header">充值明细<van-icon name="arrow-left" @click="$router.back()" /></div>
    <van-dropdown-menu active-color="#f3862d">
      <van-dropdown-item v-model="tabIndex1" :options="option1" />
      <van-dropdown-item v-model="tabIndex2" :options="option2" />
      <van-dropdown-item v-model="tabIndex3" :options="option3" />
    </van-dropdown-menu>
  </div>
</template>

<script>
import '@/assets/css/center/moneyDetail.less'
export default {
  name: "yueBaoDetail",
  data() {
    return {
      tabIndex1: 0,
      tabIndex2: 'a',
      tabIndex3: 'b',
      option1: [
        { text: '全部方式', value: 0 },
        { text: 'USDT', value: 1 },
        { text: '银行卡转账', value: 2 },
        { text: '微信', value: 2 },
        { text: '支付宝', value: 2 },
        { text: 'Go', value: 2 },
        { text: 'QQ', value: 2 },
        { text: '淘宝', value: 2 },
        { text: '云闪付', value: 2 },
      ],
      option2: [
        { text: '全部状态', value: 'a' },
        { text: '已完成', value: 'b' },
        { text: '已取消', value: 'c' },
        { text: '处理中', value: 'c' },
      ],
      option3: [
        { text: '交易日期', value: 'a' },
        { text: '今天', value: 'b' },
        { text: '昨天', value: 'c' },
        { text: '近七天', value: 'c' },
        { text: '近一个月', value: 'c' },
      ],
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