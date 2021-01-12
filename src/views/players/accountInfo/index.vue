<template>
  <div class="page-container">
    <searchPanel :page-data="pageData" @onSearch="onSearch" />
    <div class="table-container">
      <el-tag>帳號資訊</el-tag>
      <p v-if="activeName === 'stored' && totalAmount" style="margin-top: 15px">
        累計儲值金額：{{ totalAmount }}NTD
      </p>
      <el-tabs v-model="activeName" style="margin-top: 10px">
        <el-tab-pane
          v-for="item in tabMapOptions"
          :key="item.key"
          :label="item.label"
          :name="item.key"
        >
          <template v-if="activeName === 'account'">
            <el-table :data="storedata" style="width: 100%" border>

              <el-table-column prop="account" label="帳號" width="200">
                <template slot-scope="scope">{{ scope.row.amount }}</template>
              </el-table-column>
              <el-table-column prop="accountName" label="名稱" width="200">
                <template slot-scope="scope">{{ scope.row.accountName }}</template>
              </el-table-column>
              <el-table-column prop="log" label="登入紀錄" width="200">
                <template></template>
              </el-table-column>
              <el-table-column prop="createdAt" label="建立時間" sortable>
                <template slot-scope="scope">{{ scope.row.createdAt }}</template>
              </el-table-column>
            </el-table>
            <div class="table-pagination">
              <el-pagination
                :current-page="1"
                :page-sizes="[5, 10, 15, 20]"
                :page-size="5"
                layout="total, sizes, prev, pager, next, jumper"
                :total="storeListTotal"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </div>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import searchPanel from './searchPanel'

export default {
  name: 'AccountInfo',
  components: { searchPanel },
  data() {
    return {
      tabMapOptions: [
        { label: '帳號資訊', key: 'account' }
      ],
      activeName: 'account',
      totalAmount: 0,
      createdTimes: 0,
      storedata: [],
      storeListTotal: 0,
      accountdata: {},
      store: {},
      pageData: {
        pagesize: 5,
        page: 1
      }
    }
  },
  computed: {},
  created() {},
  methods: {
    handleSizeChange(val) {
      this.pageData.pagesize = val
    },
    handleCurrentChange(val) {
      this.pageData.page = val
    },
    onSearch(data) {
      if (data !== '') {
        this.accountdata = Object.assign({}, data.account_info)
        this.storedata = [...data.deposit_list.data]
        this.storeListTotal = Number(data.deposit_list.total)
        this.store = Object.assign({}, data.store_info)
      } else {
        this.accountdata = {}
        this.storedata = []
        this.store = {}
      }
    }
  }
}
</script>
