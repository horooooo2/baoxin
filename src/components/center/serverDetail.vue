<template>
  <div class="recharge">
    <div class="public-header">在线客服<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="content">
      <div class="box-list" @click="$root.common.toPath('/rechargeDetail')">
        <div class="img"></div>
        <div class="name">在线客服</div>
        <div><button>立即洽谈</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/center/server.less'

export default {
  name: "recharge",
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