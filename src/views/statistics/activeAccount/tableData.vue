<template>
  <div>
    <el-table :data="handleData()" show-summary sum-text="活躍帳戶數">
      <el-table-column property="date" label="日期" />
      <el-table-column property="amount" label="數量" />
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'TableData',
  inject: ['group'],
  props: {
    date: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleData() {
      return this.date === 'dau' ? this.group.tableData.dau : this.date === 'wau' ? this.group.tableData.wau : this.group.tableData.mau
    }
    // getSummaries(param) {
    //   const { columns, data } = param
    //   const sums = []
    //   const values = data.map(item => Number(item[column.property]))
    //   if (!values.every(value => isNaN(value))) {
    //     sums[index] = values.reduce((prev, curr) => {
    //       const value = Number(curr)
    //       if (!isNaN(value)) {
    //         return prev + curr
    //       } else {
    //         return prev
    //       }
    //     }, 0)
    //     sums[index] += ' 元'
    //   } else {
    //     sums[index] = 'N/A'
    //   }

    //   return sums
    // }
  }
}
</script>
