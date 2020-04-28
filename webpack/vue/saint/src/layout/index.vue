<template>
  <el-container>
    <el-header>
      <PageHeader></PageHeader>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <PageMenu></PageMenu>
      </el-aside>
      <el-main class="layout_main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import PageHeader from './page-header';
import PageMenu from './page-Menu';

export default {
  name: "index",
  components: {
    PageHeader,
    PageMenu,
  },
};

</script>

<style lang="less" scoped>
.layout_main{
}
</style>
