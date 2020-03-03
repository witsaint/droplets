<template>
  <main class="main-view">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </main>
</template>

<script>

  export default {
    data () {
      return {}
    },
    components: {}
  }
</script>
<style lang="less">
  .main-view {
    /*height: 100vh;*/
    /*overflow: auto;*/
    /*padding-bottom: 55px;*/
  }
</style>
