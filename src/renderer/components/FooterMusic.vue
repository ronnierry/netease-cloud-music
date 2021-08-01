<template>
  <div class="footer-music">
    <el-image style="width: 100px; height: 100px" :src="imageSrc"> </el-image>
    <span class="songName">{{ songName }}</span>

    <aplayer
      ref="audioPlayer"
      :audio-list="audioList.map((elm) => elm.url)"
      theme-color="#ff2929"
    />
  </div>
</template>

<script>
import AudioPlayer from "@liripeng/vue-audio-player";
import "@liripeng/vue-audio-player/lib/vue-audio-player.css";
export default {
  components: { aplayer: AudioPlayer },
  data() {
    return {
      currentAudioName: "",
      audioList: [],
      currentSrc: "",
      songName: "",
      imageSrc: "",
    };
  },
  mounted() {},
  watch: {
    async "$store.state.currPalyList"(paly) {
      console.log(paly);
      this.songName = paly.name;
      let name = "";
      let url = "";
      let res1 = await this.$http.get(
        `http://localhost:3000/song/detail?ids=${paly.id}`
      );
      console.log("@", res1.data.songs[0].al);
      name = res1.data.songs[0].al.name;
      this.imageSrc = res1.data.songs[0].al.picUrl;

      let res2 = await this.$http.get(
        `http://localhost:3000/song/url?id=${paly.id}`
      );
      url = res2.data.data[0].url;
      this.audioList = [{ name, url }];
      console.log(this.audioList);
      setTimeout(() => {
        this.$refs.audioPlayer.play();
      }, 1000);
    },
  },
};
</script>

<style>
.songName{
  padding-left: 5px;
  font-size: 12px;
}

.footer-music,
.footer-music-row,
.footer-music-row-col {
  height: 100%;
}

.footer-music {
  display: flex;
}

.footer-music .el-image,
.audio-player， {
  float: left;
}

.audio-player {
  width: 1000px;
  padding-top: 10px;
  margin-left: 44px;
}
</style>