<template>
  <div class="home">
    <el-header class="theInformationBar"><music-header/></el-header>
    <el-container>
      <el-aside width="190px">
        <el-col :span="12">
          <el-menu class="aside-menu" router default-active="1">
            <el-menu-item class="active-menu homeMenu" index="/discover-music">
              <span slot="title">发现音乐</span>
            </el-menu-item>
            <el-menu-item class="homeMenu" index="2">
              <span slot="title">博客(未开发)</span>
            </el-menu-item>
            <el-menu-item class="homeMenu" index="3">
              <span slot="title">视频(未开发)</span>
            </el-menu-item>
            <el-menu-item class="homeMenu" index="4">
              <span slot="title">朋友(未开发)</span>
            </el-menu-item>
            <el-menu-item class="homeMenu" index="5">
              <span slot="title">直播(未开发)</span>
            </el-menu-item>
            <el-menu-item class="homeMenu" index="6">
              <span slot="title">私人FM(未开发)</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main style="max-height: 624px;    min-height: 624px;">
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer class="home-footer" style="height 100px">
      <footer-music />
    </el-footer>
  </div>
</template>

<script>
import FooterMusic from "./FooterMusic.vue";
import MusicHeader from './MusicHeader.vue';
export default {
  components: { FooterMusic, MusicHeader },
};
</script>

<style scoped>
.el-aside > .el-col-12 {
  height: 100%;
}

.aside-menu {
  height: 100%;
}

.el-menu-item.is-active {
  font-size: 20px !important;
  font-weight: 600;
  color: #333;
}

.homeMenu {
  height: 38px;
  line-height: 38px;
  font-size: 16px;
  font-weight: 300;
}

.theInformationBar {
  display: flex;
  align-items: center;
  background-color: rgb(236, 65, 65);
}
.home>.home-footer {
  height: 100px !important;
  background-color: rgb(255, 255, 255);
  line-height: 60px;
  border-top: solid 1px rgb(230, 230, 230);
}

.el-aside {
  padding-top: 10px;
  background-color: rgb(255, 255, 255);
}

.el-main {
  background-color: rgb(255, 255, 255);
  min-height: 535px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-col-12 {
  width: 100%;
}
</style>