<template>
  <div class="rechargeDetail">
    <div class="public-header">银行卡入款<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="bank-box">
      <div class="box">
        <div class="bkTitle">收款账户</div>
        <div class="title">充值账户 卡号咨询客服</div>
        <div class="info">天津华明村镇银行 <button class="copy">复制</button></div>
        <div class="info">天津华明村镇银行 <button class="copy">复制</button></div>
        <div class="info">天津华明村镇银行 <button class="copy">复制</button></div>
        <div class="info">天津华明村镇银行 <button class="copy">复制</button></div>
        <div class="tip">注：请转账成功后再提交入款申请</div>
      </div>
    </div>
    <div class="bank-input">
      <div class="title"><img src="@/assets/images/icon_accountInfo.png" alt="">汇款账户</div>
      <div class="row">
        <div class="label">汇款方式</div>
        <div class="text">银行ATM</div>
      </div>
      <div class="row">
        <div class="label">汇款方式</div>
        <div class="text">银行ATM</div>
      </div>
      <div class="row">
        <div class="label">汇款方式</div>
        <div class="text">银行ATM</div>
      </div>
      <div class="row">
        <div class="label">汇款方式</div>
        <div class="text">银行ATM</div>
      </div>
    </div>
    <div class="bank-button">
      <button>已完成转账，提交入款申请</button>
    </div>
    <div class="operate">
      <div><img src="@/assets/images/icon_record.png" alt="">充值记录</div>
      <div><img src="@/assets/images/icon_convert.png" alt="">额度转换</div>
    </div>
    <div class="tips">
      <div class="title">温馨提示：</div>
      <p>1.我公司不定时更换银行账号，请每次转账前先查看银行账号。</p>
      <p>2.点击复制我公司的银行信息‘银行卡’，‘姓名’</p>
      <p>3.登入您的网银或登入您的手机银行，进行转账操作。</p>
      <p>4.完成转账后，填写您的银行名称，汇款姓名，汇款金额，汇款方式，填写完成后点击‘已完成转账，提交入款申请’。</p>
      <p>5.请转账完成后，再提交入款申请，避免额度延迟到账。</p>
      <p>6.请勿重复提交入款申请，如遇见任何问题请立即联系客服。</p>
    </div>
  </div>
</template>

<script>
import '@/assets/css/rechargeDetail.less'

export default {
  name: 'rechargeBank',
  data(){
    return{

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