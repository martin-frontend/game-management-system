<template>
  <div class="page-container">
    <div class="table-container">
      <el-tag>發送物品</el-tag>
      <el-button icon="el-icon-plus" type="primary" circle style="float: right" @click="add" />
      <el-tabs v-model="activeName" style="margin-top:10px;">
        <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
          <template v-if="activeName === 'all'">
            <Item />
          </template>
          <template v-if="activeName === 'notSend'">
            <p>未發送</p>
          </template>
          <template v-if="activeName === 'sent'">
            <p>已發送</p>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <Dialog ref="dialog" />
  </div>
</template>

<script>
import Item from './item'
import Dialog from './dialog'
export default {
  name: 'DeliverItem',
  components: { Dialog, Item },
  data() {
    return {
      tabMapOptions: [
        { label: '信件欄', key: 'all' },
        { label: '未發送', key: 'notSend' },
        { label: '已發送', key: 'sent' }
      ],
      activeName: 'all'
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
