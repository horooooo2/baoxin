<template>
  <div class="active">
    <div class="header-back"></div>
    <div class="content-list">
      <div class="box" @click="$root.common.toPath('/activeDetail')">
        <div class="title">宝信28信誉平台</div>
        <div class="img"></div>
      </div>
    </div>
    <footer_nav></footer_nav>
  </div>
</template>

<script>
import '@/assets/css/tabs/active.less'
import footer_nav from "@/components/include/footer_nav";

export default {
  name: 'active',
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