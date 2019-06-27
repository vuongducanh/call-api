<template>
  <div class="home">
    <div class="el-col-4 mr-10">
      <el-button
        type="primary"
        icon="el-icon-edit"
        @click="showCreateForm"
      >
        addItem
      </el-button>
    </div>

    <el-table
      v-if="callApi.ResultList"
      v-loading="loading"
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
    <el-dialog
      :visible.sync="dialogCreateForm"
      :close-on-click-modal="false"
      title="create new"
      width="50%"
    >
      <div>aaaaa</div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      loading: false,
      dialogCreateForm: false
    }
  },

  computed: {
    callApi() {
      return this.$store.state.read.listData
    }
  },

  created() {
    this.loading = true
    this.$store.dispatch('getAdmin').then(() => {
      this.loading = false
    })
  },

  methods: {
    showCreateForm() {
      console.log('aaaa')
      this.dialogCreateForm = true
    }
  }
}
</script>
