<template>
  <div class="page-container">
    <div class="table-container">
      <el-tag>後台帳號</el-tag>
      <el-button icon="el-icon-plus" type="primary" circle style="float: right" @click="add" />
      <el-tabs v-model="activeName" style="margin-top:10px;">
        <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
          <template v-if="activeName === 'a'">
            <p>後台帳號</p>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <Dialog ref="dialog" />
  </div>
</template>

<script>
import Dialog from './dialog'
export default {
  name: 'ManageAccount',
  components: { Dialog },
  data() {
    return {
      tabMapOptions: [
        { label: '後台帳號', key: 'a' }
      ],
      activeName: 'a'
    }
  },
  computed: {
  },
  created() {

  },
  methods: {
    add() {
      this.$refs.dialog.handleOpen()
    }
  }
}
</script>
