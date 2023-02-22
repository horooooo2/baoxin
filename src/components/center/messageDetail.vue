<template>
  <div class="message">
    <div class="public-header">消息内容<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="content">
      <div class="title">建议有奖</div>
      <div class="date">2022-26-26 11:15:30</div>
      <div class="line"></div>
      <div class="font">
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/center/message.less'
export default {
  name: "messageDetail",
  data() {
    return {
      tabIndex:0,
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