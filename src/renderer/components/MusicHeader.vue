<template>
  <div class="music-head">
    <div class="music-head-letf">
      <div class="logoText">
        <i class="el-icon-video-play" />
        网易云音乐 
        {{$store.state.main}}
      </div>
      <div class="button-list">
        <div class="button-list-mini">
          <el-button size="mini" icon="el-icon-arrow-left" circle></el-button>
          <el-button size="mini" icon="el-icon-arrow-right" circle></el-button>
        </div>
        <div class="button-list-small">
          <el-input
            class="input"
            size="small"
            placeholder="搜索"
            prefix-icon="el-icon-search"
          >
          </el-input>
          <el-button
            class="microphone"
            size="small"
            icon="el-icon-microphone"
            circle
          ></el-button>
        </div>
      </div>
    </div>
    <div class="music-head-right">
      <i size="small" class="el-icon el-icon-minus"></i>
      <i size="small" class="el-icon el-icon-copy-document"></i>
      <i size="small" class="el-icon el-icon-close"></i>
    </div>
  </div>
</template>

<script>


export default {
  mounted(){
    console.log('@',this);
  }
};
</script>

<style scoped>
.music-head {
  /* margin-top: 30px; */
  width: 100%;
}
.music-head,
.music-head-letf {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logoText {
  font-size: 18px;
  /* line-height: 55px; */
  color: white;
}
.button-list-small {
  display: flex;
}

.button-list-small .microphone {
  font-size: 17px;
  margin-left: 7px;
}

.button-list {
  display: flex;
  margin-left: 87px;
  align-items: center;
  color: #ead9d9;
}
.input {
  margin-left: 14px;
}
.music-head-right {
  color: #ead9d9;
  font-size: 20px;
}
.music-head-right .el-icon{
 margin: 0 8px;
}

.music-head-right .el-icon:hover{
 color: white;
}

</style>

<style >
.button-list .el-button {
  background-color: rgb(216, 59, 59);
  border: none;
  color: white;
  font-size: 14px;
  border-radius: 4px;
  font-size: 11px;
}

.button-list .el-button + .el-button {
  margin-left: 4px;
}

.button-list .el-input__inner {
  width: 160px;
  -webkit-appearance: none;
  background-color: rgb(216, 59, 59);
  background-image: none;
  border-radius: 26px;
  border: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>