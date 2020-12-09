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
      <el-button type="primary" @click="handleSearch">查詢</el-button>
    </el-form>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  name: 'SearchPanel',
  data() {
    return {
      formData: {
        startDate: moment().format('YYYY-MM-DD'),
        endDate: moment().format('YYYY-MM-DD')
      }
    }
  },
  mounted() {
    this.handleSearch()
  },
  methods: {
    handleSearch() {
      this.$refs['form'].validate((valid, err) => {
        if (valid) {
          const formData = new FormData()
          formData.append('startdate', this.formData.startDate)
          formData.append('enddate', this.formData.endDate)
          this.$emit('onSearch', formData)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
</style>
