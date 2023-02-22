<template>
  <div class="recharge">
    <div class="header"></div>
    <div class="content">
      <div class="box-list" @click="$root.common.toPath('/rechargeDetail')">
        <div class="img"></div>
        <div class="name">银行卡入款</div>
        <div><van-icon name="arrow" size="20px" color="#9b9b9b" /></div>
      </div>
    </div>
    <footer_nav></footer_nav>
  </div>
</template>

<script>
import '@/assets/css/tabs/recharge.less'
import footer_nav from "@/components/include/footer_nav";

export default {
name: "recharge",
  components:{
    footer_nav
  },
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