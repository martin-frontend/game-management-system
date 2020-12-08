<template>
  <div class="search-panel">
    <el-tag>請輸入查詢條件</el-tag>
    <div style="padding: 5px 0"></div>
    <el-form ref="form" :inline="true" :model="formData" :rules="rules">
      <el-form-item prop="startdate">
        <el-date-picker
          v-model="formData.startdate"
          value-format="yyyy-MM-dd"
          type="date"
          placeholder="選擇開始日期"
        />
      </el-form-item>
      <el-form-item prop="enddate">
        <el-date-picker
          v-model="formData.enddate"
          value-format="yyyy-MM-dd"
          type="date"
          placeholder="選擇結束日期"
        />
      </el-form-item>
      <el-button type="primary" @click="handleSearch">查詢</el-button>
    </el-form>
  </div>
</template>
<script>
import { getrevenue } from '@/api/statistics'
export default {
  name: 'SearchPanel',
  data() {
    return {
      formData: {},
      rules: {
        startdate: [
          { required: true, message: '日期錯誤', trigger: 'change' }
        ],
        enddate: [
          { required: true, message: '日期錯誤', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    handleSearch() {
      this.$refs['form'].validate((valid, err) => {
        if (valid) {
          const formData = new FormData()
          formData.append('startdate', this.formData.startdate)
          formData.append('enddate', this.formData.enddate)
          getrevenue(formData)
            .then((response) => {
              this.$emit('onSearch', response.data)
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
