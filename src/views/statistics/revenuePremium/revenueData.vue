<template>
  <div>
    <el-row type="flex">
      <div class="multiple-tables" style="display: flex">
        <div class="first-table">
          <table width="100%" rules="all" cellpadding="5">
            <tr>
              <td>
                <span></span>
              </td>
            </tr>
            <tr>
              <td>
                <span>營收</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>平台拆帳比</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>實際收入</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Pay Rate</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>付費人數</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>活躍用戶數</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>總用戶數</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>ARPPU</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>ARPU</span>
              </td>
            </tr>
          </table>
        </div>
        <div class="second-table">
          <div
            v-for="(item, index) in tableData"
            :key="index"
            class="second-part-table"
          >
            <table width="100%" rules="all" cellpadding="5">
              <tr>
                <td>
                  <span>{{ item.name }}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="td_content">
                    <div>{{ item.revenue }}</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="td_content">
                    <div>{{ item.splitBill }}</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="td_content">
                    <div>{{ item.income }}</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="td_content">
                    <div>{{ item.payRate }}</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="td_content">
                    <div>{{ item.paidNumbers }}</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="td_content">
                    <div>{{ item.activeNumbers }}</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="td_content">
                    <div>{{ item.totalNumbers }}</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="td_content">
                    <div>{{ item.arppu }}</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="td_content">
                    <div>{{ item.arpu }}</div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'RevenueData',
  data() {
    return {
      tableData: [
        {
          name: 'ALL',
          revenue: 33321,
          splitBill: 2233,
          income: 44443,
          payRate: '22%',
          paidNumbers: 31321,
          activeNumbers: 443213,
          totalNumbers: 321,
          arppu: 'arppu',
          arpu: 'arpu'
        },
        {
          name: 'Android',
          revenue: 33321,
          splitBill: 2233,
          income: 44443,
          payRate: '22%',
          paidNumbers: 31321,
          activeNumbers: 443213,
          totalNumbers: 321,
          arppu: 'arppu',
          arpu: 'arpu'
        },
        {
          name: 'iOS',
          revenue: 33321,
          splitBill: 2233,
          income: 44443,
          payRate: '22%',
          paidNumbers: 31321,
          activeNumbers: 443213,
          totalNumbers: 321,
          arppu: 'arppu',
          arpu: 'arpu'
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
