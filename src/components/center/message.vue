<template>
  <div class="message">
    <div class="public-header">公告消息<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="tab">
      <van-tabs v-model="tabIndex" line-width="50%" color="#fc8220" title-active-color="#fc8220">
        <van-tab title="公告"></van-tab>
        <van-tab title="消息"></van-tab>
      </van-tabs>
    </div>
    <div class="message-box">
      <div class="message-list" @click="$root.common.toPath('/center/messageDetail')">
        <div class="top">
          <span>建议有奖</span>
          <span>2022-02-06 15：34</span>
        </div>
        <div class="bottom">测试消息测试消息测试消息测试消息测试消息</div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/center/message.less'
export default {
  name: "message",
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