<template>
  <div class="yueBao">
    <div class="public-header">余额宝<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="main">
      <div class="back"></div>
      <div class="box">
        <div>DT主账户：0.00</div>
        <p style="margin-top: 0.2rem">总余额（元）</p>
        <p style="font-size: 0.3rem;">0.00</p>
        <div class="profit">
          昨日收益：<span>+0.00</span>
        </div>
        <div class="row"><span>累计收益（元）</span><span>日化利率（%）<img src="@/assets/images/icon_yw.png" alt="" @click="profitPopup = true"></span></div>
        <div class="row"><span class="money">+0.00</span><span>0.2%</span></div>
        <div class="row"><button style="background: #ffdfb9;" @click="$root.common.toPath('/yueBao/transferOut')">转出</button><button @click="$root.common.toPath('/yueBao/transferIn')">转入</button></div>
      </div>
    </div>
    <div class="common">
      <div class="box">
        <div @click="$root.common.toPath('/yueBao/yueBaoDetail')"><img src="@/assets/images/icon_mx.png" alt=""><br>资金明细</div>
        <div @click="$root.common.toPath('/yueBao/calculator')"><img src="@/assets/images/icon_shouy.png" alt=""><br>收益计算器</div>
      </div>
    </div>
    <div class="tips">
      <div class="title">温馨提示：</div>
      <p>1.结算周期每天一次，结算时间为每天4点。</p>
      <p>2.结算利率以每次结算时会员当前等级对应的结算利率为准。</p>
      <p>3.本公司有权关闭余额宝功能或限制部分会员使用余额宝功能。</p>
      <p>4.余额宝最终解释权归本公司所有。</p>
    </div>
    <van-popup v-model="profitPopup" :style="{ width: '80%',borderRadius: '0.01rem' }">
      <div class="profitPopup">
        <div class="title">结算利率</div>
        <div class="table">
          <div class="td"><span>账号等级</span><span>日利率</span></div>
          <div class="td" v-for="(item,index) in profitList" :key="index"><span>{{item.name}}</span><span>{{item.profit}}</span></div>
        </div>
        <div class="button" @click="profitPopup = false">确定</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import '@/assets/css/center/yueBao.less'
export default {
  name: "yueBao",
  data() {
    return {
      profitPopup:false,
      profitList:[
        {name:'士兵',profit:'0.2%'},
        {name:'班长',profit:'0.2%'},
        {name:'排长',profit:'0.2%'},
        {name:'连长',profit:'0.2%'},
        {name:'营长',profit:'0.2%'},
        {name:'团长',profit:'0.2%'},
        {name:'旅长',profit:'0.2%'},
        {name:'师长',profit:'0.2%'},
        {name:'军长',profit:'0.2%'},
        {name:'司令',profit:'0.2%'},
        {name:'元帅',profit:'0.2%'},
        {name:'主席',profit:'0.2%'},
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