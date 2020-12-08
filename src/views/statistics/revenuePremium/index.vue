<template>
  <div class="page-container">
    <search-panel @onSearch="onSearch" />
    <div class="table-container">
      <el-tag>營收付費</el-tag>
      <tablePanel />
    </div>
  </div>
</template>
<script>
import searchPanel from './searchPanel'
import tablePanel from './tablePanel'
export default {
  name: 'Index',
  components: { searchPanel, tablePanel },
  data() {
    return {
      type: ''
    }
  },
  methods: {
    onSearch(data) {
      console.log(data)
    }
  }
}
</script>
