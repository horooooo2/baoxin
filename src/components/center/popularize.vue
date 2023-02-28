<template>
  <div class="popularize">
    <div class="public-header">推广赚钱<van-icon name="arrow-left" @click="$router.back()" /></div>
    <div class="label">
      <span>介绍人信息</span>
    </div>
    <div class="user-info">
      <div class="row"><span>介绍人代码：5101496</span><span><img src="@/assets/images/copy-icon.jpg" alt=""></span></div>
      <div class="row"><span>介绍人链接：https://www.baidu.com</span><span><img src="@/assets/images/copy-icon.jpg" alt=""></span></div>
    </div>
    <div class="label">
      <span>推广二维码</span>
    </div>
    <div class="user-code">
      <div>
        <div class="img"><img src="" alt=""></div>
      </div>
      <div>
        <div class="button"><button>保存图片</button></div>
        <div class="button"><button>复制链接</button></div>
      </div>
    </div>
    <div class="bank-button" @click="$root.common.toPath('/center/popularizeRecord')">
      <button>查看推广记录</button>
    </div>
  </div>
</template>

<script>
import '@/assets/css/center/center.less'
export default {
  name: "bettingRecord",
  data() {
    return {
      inChecked:false,
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