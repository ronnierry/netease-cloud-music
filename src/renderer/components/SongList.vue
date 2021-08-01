<template>
  <div class="songList">
    <div>
      <vue-good-table
        :columns="columns"
        :rows="songList"
        @on-row-click="onRowClick"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "Vuex";

export default {
  props: ["id"],
  data() {
    return {
      condition: false,
      columns: [
        {
          label: "",
          field: "index",
          width: "5px",
          sortable: false,
        },
        {
          label: "音乐标题",
          field: "name",
          sortable: false,
          tdClass: "custom-td-class",
        },
        {
          label: "歌手",
          field: "arAlias",
          width: "100px",
          sortable: false,
        },
        {
          label: "专辑",
          field: "al.name",
          sortable: false,
        },
        {
          label: "时长",
          field: "dt",
          sortable: false,
        },
      ],

      songList: [],
    };
  },
  async created() {
    const a = await this.$http.get(
      `http://localhost:3000/playlist/detail?id=${this.$route.query.id}`
    );

    let ids = a.data.playlist.trackIds.map((x) => x.id);

    let songDetailList = await this.$http.get(
      `http://localhost:3000/song/detail?ids=${ids.toString()}`
    );
    songDetailList.data.songs.forEach((element, i) => {
      element.index = i;
      element.arAlias = element.ar.map((x) => x.name).toString();
      // element.btn = `<i class="el-icon-edit"></i> <i class="el-icon-download"></i>  `;
    });
    this.songList = songDetailList.data.songs;
    this.condition = true;
  },
  methods: {
    // ...mapActions({
    //   addPlayList: "addPlayList",
    // }),
    onRowClick(params) {
      // console.log("params", params);
      // this.addPlayList(params);
       this.$store.dispatch('someAsyncTas')
       this.$store.dispatch('addPlayList',params.row)
      // params.row - row object
      // params.pageIndex - index of this row on the current page.
      // params.selected - if selection is enabled this argument
      // indicates selected or not
      // params.event - click event
    },
  },
};
</script>

<style>
/* .vgt-table {
  font-size: 11px;
} */

/* .vgt-table thead th {
  background: rgb(255, 255, 255);
} */

.vgt-table.bordered td,
.vgt-table.bordered th {
  border: none;
}

#app .songList table.vgt-table .custom-td-class {
  color: rgb(59, 58, 58);
}
</style>