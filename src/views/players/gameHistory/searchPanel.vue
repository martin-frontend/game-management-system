<template>
  <div class="search-panel">
    <el-tag>請輸入查詢條件</el-tag>
    <div style="padding: 5px 0"></div>
    <el-form ref="form" :inline="true" :model="formData">
      <el-form-item>
        <el-select v-model="formData.role" clearable placeholder="請選擇">
          <el-option
            v-for="item in roleOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="formData.content"
          clearable
          :placeholder="formData.role ? '請輸入角色名稱' : '請輸入角色ID'"
        />
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="formData.startDate"
          type="date"
          placeholder="選擇開始日期"
        />
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="formData.endDate"
          type="date"
          placeholder="請選擇查詢項目"
        />
      </el-form-item>
      <el-form-item>
        <el-select v-model="formData.history" clearable placeholder="請選擇">
          <el-option
            v-for="item in historyOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-button type="primary">查詢</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'SearchPanel',
  data() {
    return {
      formData: {},
      roleOptions: [
        { value: 0, label: '角色ID' },
        { value: 1, label: '角色名稱' }
      ],
      historyOptions: [
        { value: 0, label: '登入LOG' },
        { value: 1, label: '商店資訊' },
        { value: 2, label: '遊戲資源' },
        { value: 3, label: '客人清單' },
        { value: 4, label: '貨倉容量' },
        { value: 5, label: '車庫容量' },
        { value: 6, label: '停車格' },
        { value: 7, label: '持有店員' },
        { value: 8, label: '持有店員服裝' },
        { value: 9, label: '持有吉祥物' },
        { value: 10, label: '持有素材' },
        { value: 11, label: '持有商品' },
        { value: 12, label: '持有裝飾品' },
        { value: 13, label: '持有貨架' },
        { value: 14, label: '持有車輛' },
        { value: 15, label: '攬客區域等級' },
        { value: 16, label: '客人等級' },
        { value: 17, label: '擴建等級' },
        { value: 18, label: '劇情任務' },
        { value: 19, label: '經營任務' },
        { value: 20, label: '緊急訂單' },
        { value: 21, label: '好友清單' }
      ],
      roleOptions2: [
        { value: 'EV8EQ7N7HNB6U11TTNSW', label: '超級管理者' },
        { value: 'LIOXNUACV7JTYO9OHVIJ', label: '客服人員' },
        { value: 'PYY7BE1Z4Q5OAP1TTOP5', label: 'william' },
        { value: 'SOYUPH4KXRMA8KAD5K5D', label: '測試專員' },
        { value: 'N2QHS8VAQDUM9IHSWCTD', label: '次級管理者' }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
</style>
