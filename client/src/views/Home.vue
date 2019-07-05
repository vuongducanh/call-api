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
      v-if="callApi"
      v-loading="loading"
      :data="callApi"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        label="birthday"
        min-width="100px"
        align="left"
      >
        <template slot-scope="scope">
          <span class="item-cursor content">{{ scope.row.birthday }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="email"
        min-width="100px"
        align="left"
      >
        <template slot-scope="scope">
          <span class="item-cursor content">{{ scope.row.email }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="gender"
        min-width="100px"
        align="left"
      >
        <template slot-scope="scope">
          <span class="item-cursor content">{{ scope.row.gender }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="username"
        min-width="100px"
        align="left"
      >
        <template slot-scope="scope">
          <span class="item-cursor content">{{ scope.row.username }}</span>
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
        <el-form-item
          label="birthday"
          label-width="130px"
        >
          <el-input
            v-model="birthday"
            type="text"
          />
        </el-form-item>

        <el-form-item
          label="email"
          label-width="130px"
        >
          <el-input
            v-model="email"
            type="text"
          />
        </el-form-item>

        <el-form-item
          label="gender"
          label-width="130px"
        >
          <el-input
            v-model="gender"
            type="price"
          />
        </el-form-item>

        <el-form-item
          label="username"
          label-width="130px"
        >
          <el-input
            v-model="username"
            type="price"
          />
        </el-form-item>
      </el-form>

      <div class="dialog-footer-center">
        <el-button
          type="danger"
          @click="dialogCreateForm = false"
        >
          cancle
        </el-button>
        <el-button
          type="primary"
          @click="createItem"
        >
          create
        </el-button>
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
      birthday: '',
      email: '',
      gender: '',
      username: ''
    }
  },

  computed: {
    callApi() {
      return this.$store.state.user.listData
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
        birthday: this.birthday,
        email: this.email,
        gender: this.gender,
        username: this.username
      }

      this.$store.dispatch('createNew', data).then(() => {
        this.dialogCreateForm = false
      })
    }
  },
}
</script>
