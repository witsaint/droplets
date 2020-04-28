<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>模拟菜单</span>
      </template>
      <el-menu-item-group>
        <el-menu-item-group title="基站">
          <el-menu-item index="1-3"  @click="to('/')">首页</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="子项目一">
          <el-menu-item index="1-1" @click="to('/async')">页面1[async]</el-menu-item>
          <el-menu-item index="1-2"  @click="to('/other')">页面2[other]</el-menu-item>
        </el-menu-item-group>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "page-menu",
  data() {
    return {};
  },
  methods: {
    handleClose() {},
    handleOpen() {},
    to(url) {
      this.$router.push(url);
    },
  },
};

</script>

<style scoped>

</style>
