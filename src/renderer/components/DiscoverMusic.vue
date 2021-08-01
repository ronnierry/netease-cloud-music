<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      router
    >
      <el-menu-item
        class="discoverMenuItem"
        index="/discover-music/personality-recommendations"
        >个性推荐</el-menu-item
      >
      <el-menu-item class="discoverMenuItem" index="2">专属歌单</el-menu-item>
      <el-menu-item class="discoverMenuItem" index="3">歌单</el-menu-item>
      <el-menu-item class="discoverMenuItem" index="4">排行榜</el-menu-item>
      <el-menu-item class="discoverMenuItem" index="5">最新音乐</el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/personality-recommendations",
    };
  },
};
</script>

<style scoped>
.el-menu {
  background-color: rgb(255, 255, 255);
  border-bottom: solid 0px #e6e6e6 !important;
}
.el-menu--horizontal > .el-menu-item.discoverMenuItem {
  height: 32px;
  line-height: 30px;
  font-weight: 500;
}
.el-menu-item.is-active {
  font-size: 20px !important;
  font-weight: 600 !important;
  color: #333;
  border-bottom: 2px solid #dd1919 !important;
}
</style>