<template>
  <div class="page-container">
    <searchPanel />
    <div class="table-container">
      <el-tag>遊戲歷程</el-tag>
      <el-tabs v-model="activeName" style="margin-top:10px;">
        <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key" />
      </el-tabs>
    </div>
  </div>
</template>
<script>
import searchPanel from './searchPanel'
export default {
  name: 'Index',
  components: { searchPanel },
  data() {
    return {
      activeName: 'gold',
      tabMapOptions: [
        { label: '金幣', key: 'gold' },
        { label: '免費鑽', key: 'free' },
        { label: '付費鑽', key: 'paid' }
      ]

    }
  }
}
</script>
