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
      v-if="callApi.records"
      v-loading="loading"
      :data="callApi.records"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        label="name"
        min-width="100px"
        align="left"
      >
        <template slot-scope="scope">
          <span class="item-cursor content">{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="description"
        min-width="100px"
        align="left"
      >
        <template slot-scope="scope">
          <span class="item-cursor content">{{ scope.row.description }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="price"
        min-width="100px"
        align="left"
      >
        <template slot-scope="scope">
          <span class="item-cursor content">{{ scope.row.price }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :visible.sync="dialogCreateForm"
      :close-on-click-modal="false"
      title="create new"
      width="50%"
    >
    <el-form>
      <el-form-item label="name" label-width="130px">
          <el-input v-model="name" type="text"/>
      </el-form-item>

      <el-form-item label="description" label-width="130px">
          <el-input v-model="description" type="text"/>
      </el-form-item>

       <el-form-item label="price" label-width="130px">
          <el-input v-model="price" type="price"/>
      </el-form-item>

       <el-form-item label="category_id" label-width="130px">
          <el-input v-model="category_id" type="price"/>
      </el-form-item>
    </el-form>

    <div class="dialog-footer-center">
      <el-button type="danger" @click="dialogCreateForm = false">cancle</el-button>
      <el-button type="primary" @click="createItem">create</el-button>
    </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      loading: false,
      dialogCreateForm: false,
      name: '',
      description: '',
      price: '',
      category_id: ''
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
      this.dialogCreateForm = true
    },

    createItem() {
      const data = {
        name: this.name,
        description: this.description,
        price: this.price,
        category_id: this.category_id
      }

      this.$store.dispatch('createNew', data).then(() => {
        this.dialogCreateForm = false
      })
    }
  },
}
</script>
