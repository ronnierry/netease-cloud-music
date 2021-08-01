<template>
  <div class="footer-music">
    <el-row class="footer-music-row">
      <el-col class="footer-music-row-col" :span="4">
        <div class="block" fix="scale-down">
          <el-image
            style="width: 100px; height: 100px"
            :src="imageSrc"
          ></el-image>
        </div>
      </el-col>
      <el-col class="footer-music-row-col" :span="4">
        {{ $store.state.currPalyList.name }}
      </el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple-light footer-music-row-col">
          <audio :src="currentSrc" :autoplay="false" controls=""></audio></div
      ></el-col>
      <el-col :span="8"> </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSrc: "",
      name: "",
      imageSrc: "",
    };
  },
  mounted() {},
  watch: {
    "$store.state.currPalyList"(paly) {
      this.$http
        .get(`http://localhost:3000/song/detail?ids=${paly.id}`)
        .then((res) => {
          console.log("@", res.data.songs[0].al);
          this.name = res.data.songs[0].al.name;
          this.imageSrc = res.data.songs[0].al.picUrl;
        });

      this.$http
        .get(`http://localhost:3000/song/url?id=${paly.id}`)
        .then((res) => {
          this.currentSrc = res.data.data[0].url;
        });
    },
  },
};
</script>

<style>
.footer-music,
.footer-music-row,
.footer-music-row-col {
  height: 100%;
}
</style>