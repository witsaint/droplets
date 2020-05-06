<template>
    <div class="home">
      <router-link to="/async">ahosmesa</router-link>
      <TestAsyncA v-if="show"></TestAsyncA>
    </div>
</template>

<script>
const TestAsyncA = () => import('@/components/vue/async-a');
export default {
  name: "index",
  data() {
    return {
      show: false,
    };
  },
  components: {
    TestAsyncA,
  },
  mounted() {
    console.log('this is base page');
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
