<template>
  <section class="grid-demo-view">
    <div class="grid-par">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {},
    mounted () {
    }
  }
</script>

<style lang="less">
.grid-demo-view{
  .grid-par {
    height: 180px;
    display: grid;
    grid-template-rows: 1fr 2fr 3fr;
    grid-template-columns: 2fr 1fr 2fr;
    .item{
      min-height: 30px;
      background: #2baee9;
    }
  }
}
</style>
