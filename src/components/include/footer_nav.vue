<template>
  <div class="footer">
    <div class="nav-box">
      <div class="box" @click="$root.common.toPath('/')">
        <img src="@/assets/images/home/home1.png" alt="" v-if="$route.path == '/'">
        <img src="@/assets/images/home/home.png" alt="" v-else>
        <br>主页
      </div>
      <div class="box" @click="$root.common.toPath('/active')">
        <img src="@/assets/images/home/sale1.png" alt="" v-if="$route.path == '/active'">
        <img src="@/assets/images/home/sale.png" alt="" v-else>
        <br>优惠
      </div>
    </div>
    <div class="nav-box">
      <div class="box" @click="$root.common.toPath('/recharge')">
        <img src="@/assets/images/home/recharge1.png" alt="" v-if="$route.path == '/recharge'">
        <img src="@/assets/images/home/recharge.png" alt="" v-else>
        <br>充值
      </div>
      <div class="box" @click="$root.common.toPath('/personal')">
        <img src="@/assets/images/home/mine1.png" alt="" v-if="$route.path == '/personal'">
        <img src="@/assets/images/home/mine.png" alt="" v-else>
        <br>我的
      </div>
    </div>
    <div class="chat"><img @click="$root.common.toPath('/chat')" src="@/assets/images/home/chat.png" alt=""></div>
  </div>
</template>

<script>
import '@/assets/css/include/footer.less'

export default {
  name: "footer_nav"
}
</script>

<style scoped>

</style>