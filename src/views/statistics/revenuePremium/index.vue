<template>
  <div class="page-container">
    <search-panel @onType="handleType" />
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
    handleType(val) {
      this.type = val
    }
  }
}
</script>
