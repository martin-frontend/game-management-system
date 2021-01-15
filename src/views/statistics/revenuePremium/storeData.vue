<template>
  <div v-loading="group.loading">
    <el-table :data="handleData()">
      <el-table-column label="商店">
        <template slot-scope="scope">
          {{ scope.row.store }}
        </template>
      </el-table-column>
      <el-table-column label="道具編號">
        <template slot-scope="scope">
          {{ scope.row.itemnumber }}
        </template>
      </el-table-column>
      <el-table-column label="道具名">
        <template slot-scope="scope">
          {{ scope.row.itemname }}
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
      <el-table-column label="貨幣種類">
        <template slot-scope="scope">
          {{ scope.row.cointype }}
        </template>
      </el-table-column>
      <el-table-column label="總金額">
        <template slot-scope="scope">
          {{ scope.row.total }}
        </template>
      </el-table-column>
      <el-table-column label="銷售佔比">
        <template slot-scope="scope">
          {{ scope.row.saleratio }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'TableData',
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
        return this.group.tableData[0].gamestore
      } else {
        return []
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.multiple-tables {
  width: 100%;
  display: flex;
  flex-direction: row;
  color: #606266;

  .first-table {
    flex: 1;

    tr {
      padding-right: 12px;
      border: 1px solid #dfe6ec;
    }
  }

  .second-table {
    flex: 4;
    display: flex;
    width: 100%;

    .second-part-table {
      flex: 1;

      tr {
        border: 1px solid #dfe6ec;
      }

      &:last-child {
        tr {
          border-left: none;
        }
      }

      &:first-child {
        tr {
          border-width: 1px 0;
        }
      }
    }
  }

  .first-table,
  .second-part-table {
    tr {
      display: flex;
      align-items: center;
      height: 38px;
      padding-left: 10px;
    }
  }
}
</style>
