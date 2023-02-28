<template>
  <div class="home">
    <div class="header">
      <div><img src="@/assets/images/home/top_logo.png" alt=""></div>
      <div>
        <img src="@/assets/images/home/icon_kefEx.png" alt="">
        <van-icon name="bars" />
      </div>
    </div>
    <div class="swipe">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <div class="notice">
      <van-notice-bar left-icon="volume" background="#ffffff" color="ffb057" text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"/>
    </div>
    <div class="banner">
      <div class="login-box">
        <div class="login-btn"></div>
        <div class="register-btn"></div>
      </div>
      <div class="label-box">
        <div class="box">
          <img src="@/assets/images/home/iconKaiJiang.png" alt="">
          <br>开奖走势
        </div>
        <div class="box">
          <img src="@/assets/images/home/iconQianDao.png" alt="">
          <br>签到有奖
        </div>
        <div class="box">
          <img src="@/assets/images/home/iconYaoJiang.png" alt="">
          <br>积分摇奖
        </div>
        <div class="box">
          <img src="@/assets/images/home/iconDownLoad.png" alt="">
          <br>APP下载
        </div>
      </div>
    </div>
    <div class="game-box">
      <div class="left">
        <div class="classify active">
          <img src="@/assets/images/home/typeIcon_0_0.png" alt=""><br><span>PC28</span>
        </div>
        <div class="classify">
          <img src="@/assets/images/home/typeIcon_1.png" alt=""><br><span>经典彩</span>
        </div>
      </div>
      <div class="right">
        <div class="classify">
          <span class="label">比特币1分28</span>
          <span class="date">00:01:24</span>
        </div>
      </div>
    </div>
    <footer_nav></footer_nav>
  </div>
</template>

<script>
import '@/assets/css/tabs/home.less'
import footer_nav from '@/components/include/footer_nav'

export default {
  name: 'home',
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

<style lang="less">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 0.02rem;
  line-height: 1.5rem;
  text-align: center;
  background-color: #39a9ed;
}
</style>
