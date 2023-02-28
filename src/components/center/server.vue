<template>
  <div class="recharge">
    <div class="header"><van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="content">
      <div class="box-list" @click="$root.common.toPath('/center/serverDetail')">
        <div class="img"></div>
        <div class="name">在线客服</div>
        <div><van-icon name="arrow" size="0.2rem" color="#9b9b9b" /></div>
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