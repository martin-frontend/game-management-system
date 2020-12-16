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
          :picker-options="pickerOptions"
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
      isStartDateError: false,
      formData: {
        startDate: this.getmonthstart(),
        endDate: this.getmonthend()
      },
      rules: {
        startDate: [
          { required: true, trigger: 'change', validator: this.handleStartDate }
        ],
        endDate: [
          { required: true, trigger: 'change', validator: this.handleEndDate }
        ]
      }
    }
  },
  computed: {
    pickerOptions() {
      const vm = this
      return {
        disabledDate(time) {
          if (vm.isStartDateError) {
            return false
          }
          return moment(time) < moment(vm.formData.startDate)
        }
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
    },
    handleStartDate(rule, value, callback) {
      if (value && moment(value) > moment(this.formData.endDate)) {
        this.isStartDateError = true
        callback(new Error('請選擇正確的開始日期'))
      } else if (!value) {
        callback(new Error('開始日期不得為空'))
      } else {
        this.isStartDateError = false
        callback()
      }
    },
    handleEndDate(rule, value, callback) {
      if (value && moment(value) < moment(this.formData.startDate)) {
        return callback(new Error('請選擇正確的結束日期'))
      } else if (!value) {
        callback(new Error('結束日期不得為空'))
      } else {
        if (this.formData.startDate) {
          this.$refs['form'].validateField(['startDate'])
        }
        this.isStartDateError = false
        callback()
      }
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
<style scoped lang="scss">
</style>
