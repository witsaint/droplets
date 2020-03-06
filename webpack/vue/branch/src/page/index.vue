<template>
    <div class="home">
      <div class="base">这是abcdff</div>
<!--      <TestAsyncA></TestAsyncA>-->
    </div>
</template>

<script>
// const TestAsyncA = window.globalComponents['./vue/async-a.vue'].default;
export default {
  name: "index",
  data() {
    return {
      show: false,
    };
  },
  components: {
    // TestAsyncA,
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 5000);
  },
};

</script>

<style lang="less" scoped>
.home{
  .loading{
    width: 40px;
    height: 40px;
    background: url("../assets/image/loading/main-loading@2x.png") no-repeat ;
  }
  .base{
    height: 300px;
    margin-bottom: 100px;
    background: #F8F9FA;
  }
}
</style>
