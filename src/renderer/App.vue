<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "netease-cloud-music",
};
</script>

<style>
* {
  font-family: Microsoft YaHei;
}

#app .vgt-table.bordered td,
#app .vgt-table.bordered th {
  border: none;
}

#app table.vgt-table {
  font-size: 13px;
  border: none;
  table-layout: fixed;
  margin: 0px;
  border-spacing: 0px;
  word-break: break-all;
  font-weight: 400;
}

/* #app table.vgt-table td{
   color: #909399;
} */

#app table.vgt-table td {
    color: rgb(144, 147, 153);
}




#app tbody {
  border: none;
}

.vgt-table tr:nth-child(odd) {
  background-color: rgb(249, 249, 249);
}

#app .vgt-table thead th {
  color: #909399;
  font-weight: 400;
  vertical-align: bottom;
  border-bottom: none;
  padding-right: 1.5em;
  background: none;
  background-color: rgb(255, 255, 255);
}

#app .vgt-table th.line-numbers {
  background: none;
}

#app .vgt-table .line-numbers:first {
  background-color: black;
}

#app .vgt-table tr {
      /* overflow: hidden; */
    /* white-space: nowrap; */
}

#app .vgt-table tr:hover {
    background-color: rgb(240, 240, 240)
}

a:-webkit-any-link {
    text-decoration: none;
}

thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: none;
    border-top-color: none;
    border-right-color: none;
    border-bottom-color: none;
    border-left-color: none;
}

table {
    display: table;
    border-collapse: unset;
    border-spacing: 0px;
    border-color: none;
}
</style>
