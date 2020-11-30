<template>
  <div class="page-container">
    <div class="table-container">
      <el-tag>活動序號</el-tag>
      <el-button icon="el-icon-plus" type="primary" circle style="float: right" @click="add" />
      <el-tabs v-model="activeName" style="margin-top:10px;">
        <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
          <template v-if="activeName === 'a'">
            <p>序號欄</p>
          </template>
          <template v-if="activeName === 'b'">
            <p>序號欄</p>
          </template>
          <template v-if="activeName === 'c'">
            <p>未進行</p>
          </template>
          <template v-if="activeName === 'd'">
            <p>已結束</p>
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
  name: 'ActivityCode',
  components: { Dialog },
  data() {
    return {
      tabMapOptions: [
        { label: '序號欄', key: 'a' },
        { label: '序號欄', key: 'b' },
        { label: '未進行', key: 'c' },
        { label: '已結束', key: 'd' }
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
