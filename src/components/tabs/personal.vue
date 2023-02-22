<template>
  <div class="personal">
    <div class="header">
      <van-icon name="envelop-o" class="email" @click="$root.common.toPath('/center/message')"/>
      <div class="user-box">
        <div class="left"><img src="@/assets/images/Head_0.png" alt="" @click="$root.common.toPath('/center/userInfo')"></div>
        <div class="right">
          <div class="top">
            <img src="@/assets/images/logonEx.png" alt="">
            <img src="@/assets/images/registerEx.png" alt="">
          </div>
          <div class="bottom">
            <div class="id">无 --</div>
            <div class="level">ID:------</div>
          </div>
        </div>
      </div>
    </div>
    <div class="classify">
      <div class="money-box">
        <div class="box">
          <p class="row1">总账户</p>
          <p class="row2">0.00</p>
          <p class="row3"><span>奖金 0.00</span><span>积分 0.00</span></p>
        </div>
      </div>
      <div class="finance-box">
        <div><img src="@/assets/images/icon_geren_005.png" alt=""><br>充值</div>
        <div @click="$root.common.toPath('/center/review')"><img src="@/assets/images/icon_geren_006.png" alt=""><br>提现</div>
        <div @click="$root.common.toPath('/yueBao/yueBao')"><img src="@/assets/images/icon_geren_019.png" alt=""><br>余额宝</div>
      </div>
    </div>
    <div class="menu">
      <div class="menu-list" v-for="(item, index) in menuList" :key="index" @click="$root.common.toPath(item.url)">
        <div class="left"><img :src="item.img" alt=""></div>
        <div class="right">{{item.name}}<van-icon name="arrow" /></div>
      </div>
    </div>
    <div class="out">返回登录界面</div>
    <footer_nav></footer_nav>
  </div>
</template>

<script>
import '@/assets/css/tabs/personal.less'
import footer_nav from "@/components/include/footer_nav";

export default {
  name: "personal",
  components:{
    footer_nav
  },
  data(){
    return{
      menuList:[
        {img:require('@/assets/images/icon_geren_007.png'),name:'额度转换',url:'/center/exchange'},
        {img:require('@/assets/images/icon_geren_008.png'),name:'资金明细',url:'/moneyDetail/moneyList'},
        {img:require('@/assets/images/icon_geren_009.png'),name:'投注记录',url:'/center/bettingRecord'},
        {img:require('@/assets/images/icon_geren_010.png'),name:'积分记录',url:'/center/integralRecord'},
        {img:require('@/assets/images/icon_geren_011.png'),name:'会员返水',url:'/center/userBackwater'},
        {img:require('@/assets/images/icon_geren_012.png'),name:'红包和奖金'},
        {img:require('@/assets/images/icon_geren_014.png'),name:'推广赚钱'},
        {img:require('@/assets/images/icon_geren_017.png'),name:'客服'},
        {img:require('@/assets/images/icon_geren_015.png'),name:'设置'},
        {img:require('@/assets/images/icon_geren_018.png'),name:'关于'},
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