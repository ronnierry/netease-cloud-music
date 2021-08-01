<template>
  <div class="playlist-comment">
    <el-input
      class="comment-input"
      type="textarea"
      v-model="textarea"
      maxlength="140"
      show-word-limit
    >
    </el-input>
    <div class="input-next">
      <div><span>@</span> <span>#</span></div>
      <el-button @click="countAdd" size="small" round>评论 ++ </el-button>
    </div>

    <div style="margin-top: 24px; font-size: 14px; font-weight: 600">
      精彩评论
    </div>
    <div
      v-for="item in hotComments"
      :key="item.commentId"
      class="comment-detail"
    >
      <div style="float: left">
        <el-avatar size="medium" :src="item.user.avatarUrl"></el-avatar>
      </div>
      <div class="comment-detail-content">
        <div>
          <a>{{ item.user.nickname }} </a>
          :
          {{ item.content }}
        </div>
        <div class="time-op">
          <div class="comment-detail-time">
            {{ item.time | dateFormat(`yyyy年MM月dd日 hh:mm`) }}
          </div>
          <div>操作</div>
        </div>
      </div>
    </div>
    <!-- 歌单评论{{ this.$route.query.id }} -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: "",
      hotComments: [],
    };
  },
  async created() {
    let { data: res } = await this.$http.get(
      `http://localhost:3000/comment/playlist?id=${this.$route.query.id}`
    );
    console.log("@", res);
    this.hotComments = res.hotComments;
  },
  methods:{
    countAdd(){
    }
  }
};
</script>

<style scoped>
.time-op {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.comment-detail {
  display: flex;
  font-weight: 300;
  border-bottom: 1px solid #dcdfe6;
  padding: 15px 0;
  font-size: 12px;
}
.comment-detail-content {
  font-weight: 400;
  margin-left: 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /* margin-bottom: 10px; */
}

.comment-detail-content-time {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin-left: 8px; */
  flex-grow: 1;
}
.comment-detail-user {
  /* display: flex; */
}

.input-next {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  color: rgba(0, 0, 0, 0.53);
}

.comment-input {
  margin-top: 20px;
}

.playlistCoverImgUrl {
  height: 60px;
  width: 60px;
}

.comment-detail-time {
  font-size: 11px;
  font-weight: 400;
  /* color: rgb(220, 223, 230); */
      color: rgb(127, 128, 130);
}
</style>



<style >
.comment-input textarea {
  height: 65px;
}

.comment-detail-content a {
  color: rgb(80, 125, 175);
}
</style>