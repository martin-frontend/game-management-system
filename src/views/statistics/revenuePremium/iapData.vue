<template>
  <div>
    <el-table :data="tableData">
      <el-table-column label="平台">
        <template slot-scope="scope">
          {{ scope.row.platform }}
        </template>
      </el-table-column>
      <el-table-column label="編號">
        <template slot-scope="scope">
          {{ scope.row.number }}
        </template>
      </el-table-column>
      <el-table-column label="商品名">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="銷售數量">
        <template slot-scope="scope">
          {{ scope.row.amount }}
        </template>
      </el-table-column>
      <el-table-column label="單價">
        <template slot-scope="scope">
          {{ scope.row.price }}
        </template>
      </el-table-column>
      <el-table-column label="總金額">
        <template slot-scope="scope">
          {{ scope.row.totalPrice }}
        </template>
      </el-table-column>
      <el-table-column label="營收占比">
        <template slot-scope="scope">
          {{ scope.row.percentage }}
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
  data() {
    return {
      tableData: [
        {
          platform: '大平台',
          number: 33321,
          name: '大平台',
          amount: 44443,
          price: 123456,
          totalPrice: 31321,
          percentage: '55%'
        },
        {
          platform: '大坪林',
          number: 33321,
          name: '大平台',
          amount: 44443,
          price: 123456,
          totalPrice: 31321,
          percentage: '33%'
        },
        {
          platform: '滿滿的大平台',
          number: 33321,
          name: '滿滿的大平台',
          amount: 44443,
          price: 123456,
          totalPrice: 31321,
          percentage: '22%'
        }
      ],
      revenueData: {
        name: 'ALL',
        revenue: 33321,
        splitBill: 2233,
        income: 44443,
        payRate: '22%',
        paidNumbers: 31321,
        activeNumbers: 443213,
        totalNumbers: 321,
        arppu: '',
        arpu: ''
      }
    }
  },
  methods: {
    handleData() {
      return this.statistic === 'value'
        ? this.group.tableData.value
        : this.group.tableData.percent
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
