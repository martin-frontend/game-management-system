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
import { getrevenue } from '@/api/statistics'
import searchPanel from './searchPanel'
import tablePanel from './tablePanel'
export default {
  name: 'Index',
  components: { searchPanel, tablePanel },
  provide() {
    return {
      group: this
    }
  },
  data() {
    return {
      loading: false,
      tableData: []
    }
  },
  methods: {
    onSearch(formData) {
      this.loading = true
      getrevenue(formData)
        .then((response) => {
          if (response.data === 'no data') {
            this.tableData = []
          } else {
            this.tableData = [...response.data]
          }
          this.loading = false
        })
        .catch((error) => {
          this.loading = false
          console.log(error)
        })
    }
  }
}
</script>
