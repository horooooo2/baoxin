<template>
  <div id="app" @contextmenu.prevent="">
    <!--路由后退缓存-->
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view  v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>

</style>
