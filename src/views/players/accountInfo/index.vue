<template>
  <div class="page-container">
    <searchPanel />
    <div class="table-container">
      <el-tag>帳號資訊</el-tag>
      <p v-if="activeName === 'stored'" style="margin-top:15px">累計儲值金額：3000NTD</p>
      <el-tabs v-model="activeName" style="margin-top:10px;">
        <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
          <template v-if="activeName === 'account'">
            <el-form label-position="left" label-width="180px" class="table-form">
              <el-form-item label="角色ID">
                <span>{{ account.a1 }}</span>
              </el-form-item>
              <el-form-item label="角色名稱">
                <span>{{ account.a2 }}</span>
              </el-form-item>
              <el-form-item label="帳號狀態">
                <span>{{ account.a3 }}</span>
              </el-form-item>
              <el-form-item label="關聯FB帳號">
                <span>{{ account.a4 }}</span>
              </el-form-item>
              <el-form-item label="關聯Google帳號">
                <span>{{ account.a5 }}</span>
              </el-form-item>
              <el-form-item label="關聯beanfun!帳號">
                <span>{{ account.a6 }}</span>
              </el-form-item>
              <el-form-item label="關聯apple id">
                <span>{{ account.a7 }}</span>
              </el-form-item>
              <el-form-item label="帳號建立時間">
                <span>{{ account.a8 }}</span>
              </el-form-item>
              <el-form-item label="最後登入時間">
                <span>{{ account.a9 }}</span>
              </el-form-item>
              <el-form-item label="最後登入IP">
                <span>{{ account.a10 }}</span>
              </el-form-item>
              <el-form-item label="使用設備">
                <span>{{ account.a11 }}</span>
              </el-form-item>
              <el-form-item label="使用遊戲版本">
                <span>{{ account.a12 }}</span>
              </el-form-item>
              <el-form-item label="伺服器">
                <span>{{ account.a13 }}</span>
              </el-form-item>
            </el-form>
          </template>
          <template v-if="activeName === 'stored'">
            <el-table
              :data="tableData"
              style="width: 100%"
              border
            >
              <el-table-column
                prop="name"
                label="訂單編號"
                width="180"
              />
              <el-table-column
                prop="money"
                label="金額"
                width="180"
              />
              <el-table-column
                prop="address"
                label="平台"
              />
              <el-table-column
                prop="date"
                label="時間"
              />
            </el-table>
            <div class="table-pagination">
              <el-pagination
                :current-page="1"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </div>
          </template>
          <template v-if="activeName === 'store'">
            <el-form label-position="left" label-width="180px" class="table-form">
              <el-form-item label="商店資訊">
                <span>{{ store.a1 }}</span>
              </el-form-item>
              <el-form-item label="風格資訊">
                <span>{{ store.a2 }}</span>
              </el-form-item>
              <el-form-item label="現有資源">
                <span>{{ store.a3 }}</span>
              </el-form-item>
              <el-form-item label="客人清單">
                <span>{{ store.a4 }}</span>
              </el-form-item>
              <el-form-item label="貨倉容量">
                <span>{{ store.a5 }}</span>
              </el-form-item>
              <el-form-item label="車庫容量">
                <span>{{ store.a6 }}</span>
              </el-form-item>
              <el-form-item label="停車格">
                <span>{{ store.a7 }}</span>
              </el-form-item>
              <el-form-item label="進貨商品">
                <span>{{ store.a8 }}</span>
              </el-form-item>
              <el-form-item label="持有店員">
                <span>{{ store.a9 }}</span>
              </el-form-item>
              <el-form-item label="持有店員服裝">
                <span>{{ store.a10 }}</span>
              </el-form-item>
              <el-form-item label="持有吉祥物">
                <span>{{ store.a11 }}</span>
              </el-form-item>
              <el-form-item label="持有素材">
                <span>{{ store.a12 }}</span>
              </el-form-item>
              <el-form-item label="持有商品">
                <span>{{ store.a13 }}</span>
              </el-form-item>
              <el-form-item label="持有裝飾品">
                <span>{{ store.a14 }}</span>
              </el-form-item>
              <el-form-item label="持有貨架">
                <span>{{ store.a15 }}</span>
              </el-form-item>
              <el-form-item label="持有車輛">
                <span>{{ store.a16 }}</span>
              </el-form-item>
              <el-form-item label="攬客區域等級">
                <span>{{ store.a17 }}</span>
              </el-form-item>
              <el-form-item label="客人等級">
                <span>{{ store.a18 }}</span>
              </el-form-item>
              <el-form-item label="擴建等級">
                <span>{{ store.a19 }}</span>
              </el-form-item>
              <el-form-item label="劇情任務">
                <span>{{ store.a20 }}</span>
              </el-form-item>
              <el-form-item label="經營任務">
                <span>{{ store.a21 }}</span>
              </el-form-item>
              <el-form-item label="緊急訂單">
                <span>{{ store.a22 }}</span>
              </el-form-item>
              <el-form-item label="好友清單">
                <span>{{ store.a23 }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import searchPanel from './searchPanel'

export default {
  name: 'Eeeeeeeeee',
  components: { searchPanel },
  data() {
    return {
      tabMapOptions: [
        { label: '帳號資訊', key: 'account' },
        { label: '儲值記錄', key: 'stored' },
        { label: '商店資訊', key: 'store' }
      ],
      activeName: 'account',
      createdTimes: 0,
      tableData: [
        {
          date: '2016-05-02',
          name: 'ML05TF63VA',
          money: '3000 NTD',
          address: 'Apple Store'
        }
      ],
      account: {
        a1: '角色ID',
        a2: '角色名稱',
        a3: '帳號狀態',
        a4: '關聯FB帳號',
        a5: '關聯Google帳號',
        a6: '關聯beanfun!帳號',
        a7: '關聯apple id',
        a8: '帳號建立時間',
        a9: '最後登入時間',
        a10: '最後登入IP',
        a11: '使用設備',
        a12: '使用遊戲版本',
        a13: '伺服器'
      },
      store: {
        a1: '商店資訊',
        a2: '風格資訊',
        a3: '現有資源',
        a4: '客人清單',
        a5: '貨倉容量',
        a6: '車庫容量',
        a7: '停車格',
        a8: '進貨商品',
        a9: '持有店員',
        a10: '持有店員服裝',
        a11: '持有吉祥物',
        a12: '持有素材',
        a13: '持有商品',
        a14: '持有裝飾品',
        a15: '持有貨架',
        a16: '持有車輛',
        a17: '攬客區域等級',
        a18: '客人等級',
        a19: '擴建等級',
        a20: '劇情任務',
        a21: '經營任務',
        a22: '緊急訂單',
        a23: '好友清單'
      }
    }
  },
  computed: {
  },
  created() {

  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
