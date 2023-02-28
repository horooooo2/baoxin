<template>
  <div class="about">
    <div class="public-header">{{name}}<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="content">
      {{content}}
    </div>
  </div>
</template>


<script>

export default {
  name: "list",
  data(){
    return{
      name:'',
      content:'',
    }
  },
  created(){
    this.content = this.$route.query.content
    this.name = this.$route.query.name
  },
  mounted(){

  },
  methods:{

  },
}
</script>

<style scoped>
.about{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  overflow: auto;
}
.content{
  padding: 0.2rem;
}
</style>