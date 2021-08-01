<template>
  <div class="personalityRecommendations">
    <el-row>
      <el-col :span="24" class="tuijian"> <a>推荐歌单 ></a> </el-col>
      <el-row :gutter="20">
        <el-col :span="4" v-for="x in playlists" :key="x.id">
          <el-card
            style="border: none"
            shadow="never"
            :body-style="{ padding: '0px' }"
          >
            <img
              @click="toSongListDetails(x)"
              :src="x.coverImgUrl"
              class="image"
            />
            <span class="playName">{{ x.name }}</span>
          </el-card>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "PersonalityRecommendations",
  data() {
    return {
      playlists: [],
    };
  },
  mounted() {
    this.$http
      .get("http://localhost:3000/top/playlist/highquality?limit=10")
      .then((res) => {
        this.playlists = res.data.playlists;
      });
  },
  methods: {
    toSongListDetails(row) {
      this.$router.push({
        name: "songList-details",
        params: { playlist: row },
      });
    },
  },
};
</script>

<style scoped>
.el-col {
  margin: 5px 10px;
}

.el-card {
  width: 140px;
  height: 192px;
}

.image {
  width: 100%;
  display: block;
}

.playName {
  font-size: 14px;
  line-height: 12px;
  font-weight: 400;
}

/* .personalityRecommendations {
  text-align: left;
  line-height: 40px;
  font-size: 20px;
  font-weight: bold;
} */

.tuijian {
  text-align: left;
  line-height: 40px;
  font-size: 20px;
  font-weight: bold;
}


</style>