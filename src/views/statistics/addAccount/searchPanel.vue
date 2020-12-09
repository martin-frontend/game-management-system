<template>
  <div class="search-panel">
    <el-tag>請輸入查詢條件</el-tag>
    <div style="padding: 5px 0"></div>
    <el-form ref="form" :inline="true" :model="searchform" :rules="rules">
      <el-form-item prop="startDate">
        <el-date-picker
          v-model="searchform.startDate"
          value-format="yyyy-MM-dd"
          type="date"
          placeholder="選擇開始日期"
        />
      </el-form-item>
      <el-form-item prop="endDate">
        <el-date-picker
          v-model="searchform.endDate"
          value-format="yyyy-MM-dd"
          type="date"
          placeholder="選擇結束日期"
        />
      </el-form-item>
      <el-form-item>
        <el-select v-model="searchform.type" placeholder="請選擇">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
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
      loading: false,
      searchform: {
        startDate: moment().format('YYYY-MM-DD'),
        endDate: moment().format('YYYY-MM-DD')
      },
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
  mounted() {
    this.handleSearch()
  },
  methods: {
    handleSearch() {
      this.loading = true
      this.$refs['form'].validate((valid, err) => {
        if (valid) {
          const formData = new FormData()
          formData.append('startDate', this.searchform.startDate)
          formData.append('endDate', this.searchform.endDate)
          if (this.searchform.type && this.searchform.type !== 'all') { formData.append('type', this.searchform.type) }
          this.$emit('updatedTableData', formData, this.loading)
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
