<template>
  <div class="home">
    <el-table
      v-if="callApi.ResultList"
      :data="callApi.ResultList"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        label="CountryName"
        min-width="100px"
        align="left"
      >
        <template slot-scope="scope">
          <span class="item-cursor content">{{ scope.row.CountryName }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="CountryName"
        min-width="100px"
        align="left"
      >
        <template slot-scope="scope">
          <span class="item-cursor content">{{ scope.row.AreaName }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="CountryName"
        min-width="100px"
        align="left"
      >
        <template slot-scope="scope">
          <span class="item-cursor content">{{ scope.row.CountryName }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Home',

  computed: {
    callApi() {
      return this.$store.state.read.listData
    }
  },

  created() {
    this.$store.dispatch('getAdmin')
  }
}
</script>
