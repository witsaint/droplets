<template>
    <div class="home">
      <div class="base">{{data}}</div>
<!--      <TestAsyncA></TestAsyncA>-->
      <el-card shadow="never">
        从不显示
      </el-card>
    </div>
</template>

<script>
// const TestAsyncA = window.globalComponents['./vue/async-a.vue'].default;
export default {
  name: "index",
  data() {
    return {
      show: false,
      data: '子项目可以热更新，这是另一个页面other',
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
  .base{
    height: 300px;
    margin-bottom: 100px;
    background: #F8F9FA;
  }
}
</style>
