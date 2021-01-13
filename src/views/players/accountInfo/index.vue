<template>
  <div class="page-container">
    <searchPanel :page-data="pageData" @onSearch="onSearch" />
    <div class="table-container">
      <el-tag>帳號資訊</el-tag>
      <el-tabs v-model="activeName" style="margin-top: 10px">
        <el-tab-pane
          v-for="item in tabMapOptions"
          :key="item.key"
          :label="item.label"
          :name="item.key"
        >
          <template v-if="activeName === 'account'">
            <el-table :data="accountdata" style="width: 100%" border>
              <!-- <el-table-column prop="account" label="id" width="200">
                <template slot-scope="scope">{{ scope.row._id }}</template>
              </el-table-column> -->
              <el-table-column prop="account" label="帳號" width="200">
                <template slot-scope="scope">{{ scope.row.account }}</template>
              </el-table-column>
              <el-table-column prop="accountName" label="名稱" width="200">
                <template slot-scope="scope">{{ scope.row.accountName }}</template>
              </el-table-column>
              <el-table-column prop="createdAt" label="建立時間" sortable width="200">
                <template slot-scope="scope">{{ TransformTime(scope.row.createdAt) }}</template>
              </el-table-column>
              <el-table-column prop="updatedAt" label="最後登入時間" sortable>
                <template slot-scope="scope">{{ TransformTime(scope.row.updatedAt) }}</template>
              </el-table-column>
            </el-table>
            <div class="table-pagination">
              <el-pagination
                :current-page="1"
                :page-sizes="[25, 50, 75, 10]"
                :page-size="25"
                layout="total, sizes, prev, pager, next, jumper"
                :total="accountTotal"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </div>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <Dialog ref="dialog" />
  </div>
</template>

<script>
import searchPanel from './searchPanel'
import Dialog from './dialog'
import moment from 'moment'

export default {
  name: 'AccountInfo',
  components: { searchPanel, Dialog },

  data() {
    return {
      tabMapOptions: [
        { label: '帳號資訊', key: 'account' }
      ],
      activeName: 'account',
      totalAmount: 0,
      createdTimes: 0,
      accountdata: [],
      accountTotal: 0,
      pageData: {
        pagesize: 25,
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
    onSearch(dataobj) {
      if (dataobj) {
        if (dataobj.data.length) {
          this.accountdata = [...dataobj.data]
          this.accountTotal = dataobj.total
        } else {
          this.accountdata = []
        }
      }
    },
    TransformTime(time) {
      return moment(time).format('YYYY-MM-DD HH:mm:ss')
    },
    openLog(account, id) {
      this.$refs.dialog.handleOpen(account, id)
    }
  }
}
</script>
