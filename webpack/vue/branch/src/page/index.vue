<template>
    <div class="home">
      <div class="base">{{data}}</div>
      <TestAsyncA></TestAsyncA>
    </div>
</template>

<script>
const TestAsyncA = window.globalComponents['./vue/async-a.vue'].default;
export default {
  name: "index",
  data() {
    return {
      show: false,
      data: '这里是子项目1的代码async',
    };
  },
  components: {
    TestAsyncA,
  },
  mounted() {
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
