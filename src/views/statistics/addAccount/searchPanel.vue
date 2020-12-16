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
          :picker-options="pickerOptions"
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
      isStartDateError: false,
      searchform: {
        startDate: this.getmonthstart(),
        endDate: this.getmonthend(),
        type: 'ALL'
      },
      rules: {
        startDate: [
          { required: true, trigger: 'change', validator: this.handleStartDate }
        ],
        endDate: [
          { required: true, trigger: 'change', validator: this.handleEndDate }
        ]
      },
      options: [
        { value: 'ALL', label: 'ALL' },
        { value: 'ANDROID', label: 'Android' },
        { value: 'IOS', label: 'iOS' }
      ]
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
          return moment(time) < moment(vm.searchform.startDate)
        }
      }
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
          if (this.searchform.type !== 'ALL') { formData.append('type', this.searchform.type) }
          this.$emit('updatedTableData', formData, this.loading)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleStartDate(rule, value, callback) {
      if (value && moment(value) > moment(this.searchform.endDate)) {
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
      if (value && moment(value) < moment(this.searchform.startDate)) {
        return callback(new Error('請選擇正確的結束日期'))
      } else if (!value) {
        callback(new Error('結束日期不得為空'))
      } else {
        if (this.searchform.startDate) {
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
