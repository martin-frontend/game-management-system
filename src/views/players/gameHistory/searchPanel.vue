<template>
  <div class="search-panel">
    <el-tag>請輸入查詢條件</el-tag>
    <div style="padding: 5px 0"></div>
    <el-form ref="form" :inline="true" :model="formData" :rules="rules">
      <el-form-item prop="type">
        <el-select v-model="formData.type" clearable placeholder="請選擇">
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item prop="text">
        <el-input
          v-model="formData.text"
          clearable
          :placeholder="handlePlaceholder()"
        />
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="formData.startdate"
          value-format="yyyy-MM-dd HH:mm:ss"
          type="datetime"
          placeholder="選擇開始日期"
        />
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="formData.enddate"
          value-format="yyyy-MM-dd HH:mm:ss"
          type="datetime"
          placeholder="選擇結束日期"
        />
      </el-form-item>
      <el-form-item>
        <el-select v-model="formData.category" clearable placeholder="請選擇">
          <el-option
            v-for="item in categoryOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="handleSearch()">查詢</el-button>
    </el-form>
  </div>
</template>
<script>
import { getGameHistory } from '@/api/players'
export default {
  name: 'SearchPanel',
  data() {
    return {
      formData: {
        type: 'user_id'
      },
      typeOptions: [
        { value: 'user_id', label: '角色ID' },
        { value: 'user_name', label: '角色名稱' }
      ],
      categoryOptions: [
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
      rules: {
        type: [
          { required: true, message: '請選擇角色', trigger: 'change' }
        ],
        text: [
          { required: true, message: '請填寫內容', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    handleSearch() {
      this.$refs['form'].validate((valid, err) => {
        if (valid) {
          const formData = new FormData()
          if (this.formData.type && this.formData.text) {
            formData.append('type', this.formData.type)
            formData.append('text', this.formData.text)
          }
          if (this.formData.startdate) {
            formData.append('startdate', this.formData.startdate)
          }
          if (this.formData.enddate) {
            formData.append('enddate', this.formData.enddate)
          }
          if (this.formData.category !== undefined) {
            formData.append('category', this.formData.category)
          }
          getGameHistory(formData)
            .then((response) => {
              this.$emit('onSearch', response.data)
            })
            .catch((error) => {
              console.log(error)
            })
        }
      })
    },
    handlePlaceholder() {
      if (!this.formData.type) return ''
      return this.formData.type === 'user_id' ? '請輸入角色ID' : '請輸入角色名稱'
    }
  }
}
</script>
<style scoped lang="scss">
</style>
