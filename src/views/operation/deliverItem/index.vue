<template>
  <div class="page-container">
    <div class="table-container">
      <el-tag>發送物品</el-tag>
      <el-button icon="el-icon-plus" type="primary" circle style="float: right" />
      <el-tabs v-model="activeName" style="margin-top:10px;">
        <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
          <template v-if="activeName === 'a'">
            <p>信件欄</p>
          </template>
          <template v-if="activeName === 'b'">
            <p>未發送</p>
          </template>
          <template v-if="activeName === 'c'">
            <p>已發送</p>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DeliverItem',
  data() {
    return {
      tabMapOptions: [
        { label: '信件欄', key: 'a' },
        { label: '未發送', key: 'b' },
        { label: '已發送', key: 'c' }
      ],
      activeName: 'a'
    }
  },
  computed: {
  },
  created() {

  },
  methods: {
  }
}
</script>
