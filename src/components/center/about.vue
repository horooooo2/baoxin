<template>
  <div class="moneyDetail">
    <div class="public-header">关于我们<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="menu-list">
      <div class="list" v-for="(item, index) in menuList" :key="index" @click="$root.common.toPath('/center/aboutDetail',{name:item.name,content:item.content})">
        <span>{{item.name}}</span>
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
        {name:'开户协议',content:''},
        {name:'新版说明',content:''},
        {name:'关于我们',content:''},
        {name:'联络我们',content:''},
        {name:'充值帮助',content:''},
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