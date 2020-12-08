<template>
  <div class="page-container">
    <searchPanel @onSearch="onSearch" />
    <div class="table-container">
      <el-tag>帳號資訊</el-tag>
      <p v-if="activeName === 'stored'" style="margin-top: 15px">
        累計儲值金額：3000NTD
      </p>
      <el-tabs v-model="activeName" style="margin-top: 10px">
        <el-tab-pane
          v-for="item in tabMapOptions"
          :key="item.key"
          :label="item.label"
          :name="item.key"
        >
          <template v-if="activeName === 'account'">
            <el-form
              label-position="left"
              label-width="180px"
              class="table-form"
            >
              <el-form-item label="角色ID">
                <span>{{ accountdata.user_id }}</span>
              </el-form-item>
              <el-form-item label="角色名稱">
                <span>{{ accountdata.user_name }}</span>
              </el-form-item>
              <el-form-item label="帳號狀態">
                <span>{{ accountdata.status }}</span>
              </el-form-item>
              <el-form-item label="關聯FB帳號">
                <span>{{ accountdata.fb_account }}</span>
              </el-form-item>
              <el-form-item label="關聯Google帳號">
                <span>{{ accountdata.google_account }}</span>
              </el-form-item>
              <el-form-item label="關聯beanfun!帳號">
                <span>{{ accountdata.beanfun_account }}</span>
              </el-form-item>
              <el-form-item label="關聯apple id">
                <span>{{ accountdata.apple_id }}</span>
              </el-form-item>
              <el-form-item label="帳號建立時間">
                <span>{{ accountdata.last_create_at }}</span>
              </el-form-item>
              <el-form-item label="最後登入時間">
                <span>{{ accountdata.last_login_at }}</span>
              </el-form-item>
              <el-form-item label="最後登入IP">
                <span>{{ accountdata.last_login_ip }}</span>
              </el-form-item>
              <el-form-item label="使用設備">
                <span>{{ accountdata.used_device }}</span>
              </el-form-item>
              <el-form-item label="使用遊戲版本">
                <span>{{ accountdata.game_version }}</span>
              </el-form-item>
              <el-form-item label="伺服器">
                <span>{{ accountdata.server }}</span>
              </el-form-item>
            </el-form>
          </template>
          <template v-if="activeName === 'stored'">
            <el-table :data="storedata" style="width: 100%" border>
              <el-table-column prop="name" label="訂單編號" width="180">
                <template slot-scope="scope">{{
                  scope.row.order_number
                }}</template>
              </el-table-column>
              <el-table-column prop="money" label="金額" width="180">
                <template slot-scope="scope">{{ scope.row.amount }}</template>
              </el-table-column>
              <el-table-column prop="address" label="平台">
                <template slot-scope="scope">{{ scope.row.platform }}</template>
              </el-table-column>
              <el-table-column prop="date" label="時間">
                <template slot-scope="scope">{{ scope.row.datetime }}</template>
              </el-table-column>
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
            <el-form
              label-position="left"
              label-width="180px"
              class="table-form"
            >
              <el-form-item label="商店資訊">
                <span>{{ store.store_info }}</span>
              </el-form-item>
              <el-form-item label="風格資訊">
                <span>{{ store.style_info }}</span>
              </el-form-item>
              <el-form-item label="現有資源">
                <span>{{ store.resource }}</span>
              </el-form-item>
              <el-form-item label="客人清單">
                <span>{{ store.client_list }}</span>
              </el-form-item>
              <el-form-item label="貨倉容量">
                <span>{{ store.warehouse_capacity }}</span>
              </el-form-item>
              <el-form-item label="車庫容量">
                <span>{{ store.garage_capacity }}</span>
              </el-form-item>
              <el-form-item label="停車格">
                <span>{{ store.parking_compartment }}</span>
              </el-form-item>
              <el-form-item label="進貨商品">
                <span>{{ store.purchased_goods }}</span>
              </el-form-item>
              <el-form-item label="持有店員">
                <span>{{ store.holding_clerk }}</span>
              </el-form-item>
              <el-form-item label="持有店員服裝">
                <span>{{ store.holding_cloth }}</span>
              </el-form-item>
              <el-form-item label="持有吉祥物">
                <span>{{ store.holding_mascot }}</span>
              </el-form-item>
              <el-form-item label="持有素材">
                <span>{{ store.holding_material }}</span>
              </el-form-item>
              <el-form-item label="持有商品">
                <span>{{ store.holding_goods }}</span>
              </el-form-item>
              <el-form-item label="持有裝飾品">
                <span>{{ store.holding_decoration }}</span>
              </el-form-item>
              <el-form-item label="持有貨架">
                <span>{{ store.holding_shelf }}</span>
              </el-form-item>
              <el-form-item label="持有車輛">
                <span>{{ store.holding_vehicle }}</span>
              </el-form-item>
              <el-form-item label="攬客區域等級">
                <span>{{ store.attracting_area_level }}</span>
              </el-form-item>
              <el-form-item label="客人等級">
                <span>{{ store.guest_level }}</span>
              </el-form-item>
              <el-form-item label="擴建等級">
                <span>{{ store.expansion_level }}</span>
              </el-form-item>
              <el-form-item label="劇情任務">
                <span>{{ store.story_mission }}</span>
              </el-form-item>
              <el-form-item label="經營任務">
                <span>{{ store.business_task }}</span>
              </el-form-item>
              <el-form-item label="緊急訂單">
                <span>{{ store.urgent_order }}</span>
              </el-form-item>
              <el-form-item label="好友清單">
                <span>{{ store.friend_list }}</span>
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
  name: 'AccountInfo',
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
      storedata: [
        {
          order_number: '',
          amount: '',
          platform: '',
          datetime: ''
        }
      ],
      accountdata: {
        user_id: '',
        user_name: '',
        status: '',
        fb_account: '',
        google_account: '',
        beanfun_account: '',
        apple_id: '',
        last_create_at: '',
        last_login_at: '',
        last_login_ip: '',
        used_device: '',
        game_version: '',
        server: ''
      },
      store: {
        store_info: '',
        style_info: '',
        resource: '',
        client_list: '',
        warehouse_capacity: '',
        garage_capacity: '',
        parking_compartment: '',
        purchased_goods: '',
        holding_clerk: '',
        holding_cloth: '',
        holding_mascot: '',
        holding_material: '',
        holding_goods: '',
        holding_decoration: '',
        holding_shelf: '',
        holding_vehicle: '',
        attracting_area_level: '',
        guest_level: '',
        expansion_level: '',
        story_mission: '',
        business_task: '',
        urgent_order: '',
        friend_list: ''
      }
    }
  },
  computed: {},
  created() {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    onSearch(data) {
      if (data !== '') {
        this.accountdata = Object.assign({}, data.account_info)
        this.storedata = [...data.deposit_list]
        this.store = Object.assign({}, data.store_info)
      } else {
        alert('查無資料')
      }
    }
  }
}
</script>
