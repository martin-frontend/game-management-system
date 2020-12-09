<template>
  <div v-loading="group.loading">
    <el-table :data="handleData()">
      <el-table-column label="平台">
        <template slot-scope="scope">
          {{ scope.row.platform }}
        </template>
      </el-table-column>
      <el-table-column label="編號">
        <template slot-scope="scope">
          {{ scope.row.numbering }}
        </template>
      </el-table-column>
      <el-table-column label="商品名">
        <template slot-scope="scope">
          {{ scope.row.productname }}
        </template>
      </el-table-column>
      <el-table-column label="銷售數量">
        <template slot-scope="scope">
          {{ scope.row.saleamount }}
        </template>
      </el-table-column>
      <el-table-column label="單價">
        <template slot-scope="scope">
          {{ scope.row.price }}
        </template>
      </el-table-column>
      <el-table-column label="總金額">
        <template slot-scope="scope">
          {{ scope.row.total }}
        </template>
      </el-table-column>
      <el-table-column label="營收占比">
        <template slot-scope="scope">
          {{ scope.row.ratio }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'IapData',
  props: {
    statistic: {
      type: String,
      default: ''
    }
  },
  inject: ['group'],
  methods: {
    handleData() {
      if (this.group.tableData.length) {
        return this.group.tableData[0].iap
      } else {
        return []
      }
    }
  }
}
</script>
