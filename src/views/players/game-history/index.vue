<template>
  <div class="page-container">
    <searchPanel @onSearch="onSearch" />
    <div class="table-container">
      <el-tag>遊戲歷程</el-tag>
      <el-tabs v-model="activeName" style="margin-top:10px;">
        <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
          <template v-if="activeName === 'coin'">
            <goldPanel :table-data="coindata" />
          </template>
          <template v-else-if="activeName === 'free'">
            <freePanel :table-data="freedata" />
          </template>
          <template v-else>
            <paidPanel :table-data="paiddata" />
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import searchPanel from './search-panel'
import goldPanel from './gold-panel'
import freePanel from './free-panel'
import paidPanel from './paid-panel'
export default {
  name: 'Index',
  components: { searchPanel, goldPanel, freePanel, paidPanel },
  data() {
    return {
      activeName: 'coin',
      tabMapOptions: [
        { label: '金幣', key: 'coin' },
        { label: '免費鑽', key: 'free' },
        { label: '付費鑽', key: 'paid' }
      ],
      coindata: [],
      freedata: [],
      paiddata: []

    }
  },
  methods: {
    onSearch(data) {
      this.coindata = [...data.coin]
      this.freedata = [...data.freedimand]
      this.paiddata = [...data.paydimand]
    }
  }
}
</script>
