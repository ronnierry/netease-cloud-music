<template>
  <div>
    <!-- 歌单头部 -->
    <div>
      <div class="playlistDetailHeard">
        <el-image
          class="playlistCoverImgUrl"
          :src="playlistInDate.coverImgUrl"
        ></el-image>
        <div class="playlistDetailHeard2">
          <div class="heardTitle">
            <span class="boutiquePlaylist">精品歌单</span
            ><span class="playlistName"> {{ playlistInDate.name }}</span>
          </div>
          <div class="creatorInfo">
            <el-avatar
              size="small"
              src="http://p1.music.126.net/TLnxxaByFoSAAkRPGTlCbg==/109951165816748434.jpg"
            ></el-avatar>
            <span class="nickname">{{ playlistInDate.creator.nickname }}</span>
            <span class="createTime"
              >{{ playlistInDate.createTime | dateFormat }}创建</span
            >
          </div>
          <div class="buttonList">
            <el-button
              icon="el-icon-video-play"
              id="playAll"
              size="mini"
              round
              type="danger"
              >播放全部</el-button
            >
            <el-button icon="el-icon-folder-add" size="mini" round
              >收藏({{ playlistInDate.subscribedCount | numFormat }})</el-button
            >
            <el-button icon="el-icon-download" size="mini" round
              >下载全部</el-button
            >
          </div>
          <div class="otherInfo">
            <div class="tags">
              <span>标签 : </span>
              <el-breadcrumb class="tagList" separator="/">
                <el-breadcrumb-item
                  :key="tag"
                  v-for="tag in playlistInDate.tags"
                >
                  <span class="tag-item"> {{ tag }}</span>
                </el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div>
              <span
                >歌曲 :
                <span class="variable-content">
                  {{ playlistInDate.trackCount }}</span
                >
              </span>
              <span
                >播放 :
                <span class="variable-content">{{
                  playlistInDate.playCount | numFormat
                }}</span></span
              >
            </div>
            <div class="playlistDescription">
              <p :class="descriptionClass">
                简介 :
                <span style="white-space: pre-wrap" class="variable-content">{{
                  playlistInDate.description
                }}</span>
              </p>
              <i @click="changPlaylistDescriptionClass" :class="iconClass"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-menu id="menu-for" class="el-menu-demo" mode="horizontal" router>
      <!-- <el-menu-item  index="/songList-details/song-list"> 歌曲列表</el-menu-item> -->
      <el-menu-item
        :route="{path:`/songList-details/song-list`,query:{id:playlistInDate.id}}"
        index="/songList-details/song-list"
      >
        歌曲列表</el-menu-item
      >
      <el-menu-item 
       :route="{path:`/songList-details/playlist-comment`,query:{id:playlistInDate.id}}"
        index="/songList-details/playlist-comment"
      >评论(711)</el-menu-item>
      <!-- <el-menu-item index="3">收藏者</el-menu-item> -->
    </el-menu>
    <router-view></router-view>
    <!-- <pre> {{ playlistInDate }}</pre> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      playlistInDate: this.playlist,
      descriptionClass: "description",
      iconClass: "el-icon-caret-bottom",
    };
  },
  props: ["playlist"],
  methods: {
    changPlaylistDescriptionClass() {
      this.iconClass =
        this.iconClass === "el-icon-caret-bottom"
          ? "el-icon-caret-top"
          : "el-icon-caret-bottom";
      this.descriptionClass =
        this.iconClass === "el-icon-caret-bottom" ? "description" : "";
    },
  },
};
</script>

<style scoped>
.el-menu--horizontal>.el-menu-item {
    height: 47px;
    line-height: 60px;
    color: #333031
}

.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 4px solid rgb(236, 65, 65);
    font-weight: 700;
    color: #333031;
}
.el-menu.el-menu--horizontal {
    border-bottom:none;
}

.el-icon-arrow-down {
  margin-left: 25px;
}

.heardTitle {
  display: flex;
  align-items: center;
}

.playlistCoverImgUrl {
  height: 200px;
  width: 200px;
  display: block;
  float: left;
}

.playlistDetailHeard2 {
  /* width: 400px; */
  flex: 1;
  margin-left: 20px;
}

.playlistDetailHeard {
  /* height: 200px; */
  /* overflow: hidden; */
  display: flex;
}
.boutiquePlaylist {
  font-size: 13px;
  padding: 1px 4px;
  border-radius: 3px;
  color: red;
  border: rgb(263, 65, 65) solid 1px;
}

.playlistName {
  font-size: 20px;
  font-weight: 900;
  margin-left: 9px;
}

#playAll {
  background-color: rgb(236, 65, 65);
  color: rgb(255, 255, 255);
}

.playlistDescription {
  display: flex;
}

p {
  margin: 0;
}
.creatorInfo {
  font-size: 13px;
  margin-top: 11px;
  display: flex;
  align-items: center;
}

.creatorInfo .nickname {
  color: rgb(80, 125, 175);
  margin: 0 5px;
}

.creatorInfo .createTime {
  color: #606266;
}

.playlistDetailHeard2 .otherInfo {
  margin-top: 18px;
  font-size: 13px;
  line-height: 24px;
}

.buttonList .el-button {
  font-size: 16px;
  margin-top: 14px;
  color: black;
}

.tags {
  display: flex;
  align-items: center;
}

.tagList {
  margin-left: 4px;
}

.otherInfo .variable-content {
  color: #606266;
  font-size: 13px;
  line-height: 1;
}

p.description {
  height: 20px;
  overflow: hidden;
}

.tag-item {
  color: rgb(80, 125, 175);
}
</style>
<style >
.otherInfo .el-breadcrumb__separator {
  margin: 0 2px;
  font-size: 11px;
  font-weight: 400;
  color: #000;
}

.otherInfo .el-breadcrumb {
  font-size: 12px;
}
</style>