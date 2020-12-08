<template>
  <div class="search-panel">
    <el-tag>請輸入查詢條件</el-tag>
    <div style="padding: 5px 0"></div>
    <el-form ref="form" :inline="true" :model="formData" :rules="rules">
      <el-form-item prop="startDate">
        <el-date-picker
          v-model="formData.startDate"
          value-format="yyyy-MM-dd"
          type="date"
          placeholder="選擇開始日期"
        />
      </el-form-item>
      <el-form-item prop="endDate">
        <el-date-picker
          v-model="formData.endDate"
          value-format="yyyy-MM-dd"
          type="date"
          placeholder="選擇結束日期"
        />
      </el-form-item>
      <el-form-item>
        <el-select v-model="formData.type" placeholder="請選擇">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="handleSearch">查詢</el-button>
    </el-form>
  </div>
</template>
<script>
import { getAddAccount } from '@/api/statistics'

export default {
  name: 'SearchPanel',
  data() {
    return {
      formData: {},
      rules: {
        startDate: [
          { required: true, message: '日期錯誤', trigger: 'change' }
        ],
        endDate: [
          { required: true, message: '日期錯誤', trigger: 'change' }
        ]
      },
      options: [
        { value: 'all', label: 'ALL' },
        { value: 'ANDROID', label: 'Android' },
        { value: 'IOS', label: 'iOS' }
      ]
    }
  },
  methods: {
    handleSearch() {
      this.$refs['form'].validate((valid, err) => {
        if (valid) {
          const formData = new FormData()
          formData.append('startdate', this.formData.startDate)
          formData.append('enddate', this.formData.endDate)
          console.log(this.formData.type)
          if (this.formData.type !== '' && this.formData.type !== 'all') { formData.append('type', this.formData.type) }
          getAddAccount(formData)
            .then((response) => {
              console.log(response)
              // this.tableData = [...response.data]
              // this.loading = false
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    checkDate(rule, value, callback) {
      console.log(rule, value)
    }
  }
}
</script>
<style scoped lang="scss">
</style>
