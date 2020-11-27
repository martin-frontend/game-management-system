<template>
  <div class="page-container">
    <div class="table-container">
      <el-tag>線上公告</el-tag>
      <el-button icon="el-icon-plus" type="primary" circle style="float: right" @click="add" />
      <el-tabs v-model="activeName" style="margin-top:10px;">
        <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
          <template v-if="activeName === 'a'">
            <p>公告欄</p>
          </template>
          <template v-if="activeName === 'b'">
            <p>上架中</p>
          </template>
          <template v-if="activeName === 'c'">
            <p>未上架</p>
          </template>
          <template v-if="activeName === 'd'">
            <p>未上架</p>
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
  name: 'OnlineAnnouncement',
  components: { Dialog },
  data() {
    return {
      tabMapOptions: [
        { label: '公告欄', key: 'a' },
        { label: '上架中', key: 'b' },
        { label: '未上架', key: 'c' },
        { label: '未上架', key: 'd' }
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
