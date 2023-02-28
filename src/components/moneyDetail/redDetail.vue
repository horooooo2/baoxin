<template>
  <div class="red">
    <div class="header">红包明细<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="tab">
      <div @click="tabIndex = 0" :class="{'active':tabIndex == 0}">发红包</div>
      <div @click="tabIndex = 1" :class="{'active':tabIndex == 1}">抢红包</div>
    </div>
    <div class="info">
      <p><img src="@/assets/images/Head_0.png" alt=""></p>
      <p>horo发出的红包</p>
      <p style="font-size: 0.4rem">0</p>
      <div class="row">
        <div><span>0</span><br><span>发出红包</span></div>
        <div><span>0</span><br><span>领取人数</span></div>
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