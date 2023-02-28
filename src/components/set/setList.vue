<template>
  <div class="moneyDetail">
    <div class="public-header">设置<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="menu-list">
      <div class="list" v-for="(item, index) in menuList" :key="index" @click="$root.common.toPath(item.url,item.query)">
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
        {img:require('@/assets/images/icon_1.png'),name:'绑定银行卡',url:'/set/bindBank'},
        {img:require('@/assets/images/icon_1.png'),name:'绑定USDT',url:'/set/bindUSDT'},
        {img:require('@/assets/images/icon_1.png'),name:'绑定GoPay',url:'/set/bindGoPay'},
        {img:require('@/assets/images/icon_2.png'),name:'更改提现密码',url:'/set/updatePassword',query:{type:1}},
        {img:require('@/assets/images/icon_3.png'),name:'更改登录密码',url:'/set/updatePassword',query:{type:2}},
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