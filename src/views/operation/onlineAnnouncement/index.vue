<template>
  <div class="page-container">
    <div class="table-container">
      <el-tag>線上公告</el-tag>
      <el-button icon="el-icon-plus" type="primary" circle style="float: right" @click="add" />
      <el-tabs v-model="activeName" style="margin-top:10px;">
        <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
          <template v-if="activeName === 'announcement'">
            <announcement />
          </template>
          <template v-if="activeName === 'launched'">
            <p>上架中</p>
          </template>
          <template v-if="activeName === 'notLaunched'">
            <p>未上架</p>
          </template>
          <template v-if="activeName === 'removed'">
            <p>已下架</p>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <Dialog ref="dialog" />
  </div>
</template>

<script>
import announcement from './announcement'
import Dialog from './dialog'
export default {
  name: 'OnlineAnnouncement',
  components: { Dialog, announcement },
  data() {
    return {
      tabMapOptions: [
        { label: '公告欄', key: 'announcement' },
        { label: '上架中', key: 'launched' },
        { label: '未上架', key: 'notLaunched' },
        { label: '已下架', key: 'removed' }
      ],
      activeName: 'announcement'
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
