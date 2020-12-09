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
          <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value" />
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
        startDate: this.getmonthstart(),
        endDate: this.getmonthend(),
        type: 'ALL'
      },
      rules: {
        startDate: [
          { required: true, message: '日期錯誤', trigger: 'change' }
        ],
        endDate: [
          { required: true, message: '日期錯誤', trigger: 'change' }
        ]
      },
      typeOptions: [
        { value: 'all', label: 'ALL' },
        { value: 'android', label: 'Android' },
        { value: 'ios', label: 'iOS' }
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
          formData.append('startdate', this.searchform.startDate)
          formData.append('enddate', this.searchform.endDate)
          if (this.searchform.typeOptions && this.searchform.typeOptions !== 'all') { formData.append('type', this.searchform.typeOptions) }
          this.$emit('updatedTableData', formData, this.loading)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getmonthstart() {
      return moment().startOf('month').format('YYYY-MM-DD')
    },
    getmonthend() {
      return moment().endOf('month').format('YYYY-MM-DD')
    }
  }
}
</script>
