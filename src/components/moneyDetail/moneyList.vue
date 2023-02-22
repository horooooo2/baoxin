<template>
  <div class="moneyDetail">
    <div class="public-header">资金明细<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="menu-list">
      <div class="list" v-for="(item, index) in menuList" :key="index" @click="$root.common.toPath(item.url)">
        <span><img :src="item.img" alt="">{{item.name}}</span>
        <span><van-icon name="arrow" /></span>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/center/moneyDetail.less'

export default {
  name: "list",
  data(){
    return{
      menuList:[
        {img:require('@/assets/images/icon_1.png'),name:'充值明细',url:'/moneyDetail/rechargeDetail'},
        {img:require('@/assets/images/icon_2.png'),name:'提现明细',url:'/moneyDetail/withdrawalDetail'},
        {img:require('@/assets/images/icon_3.png'),name:'余额宝明细',url:'/yueBao/yueBaoDetail'},
        {img:require('@/assets/images/icon_4.png'),name:'额度转换明细',url:'/moneyDetail/exchangeDetail'},
        {img:require('@/assets/images/icon_5.png'),name:'交易明细',url:'/moneyDetail/transactionDetail'},
        {img:require('@/assets/images/icon_6.png'),name:'红包明细',url:'/moneyDetail/redDetail'},
      ]
    }
  },
  created(){
  },
  mounted(){

  },
  methods:{

  },
}
</script>

<style scoped>

</style>