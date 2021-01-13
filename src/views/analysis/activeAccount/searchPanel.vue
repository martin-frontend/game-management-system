<template>
  <div class="search-panel">
    <el-tag>請輸入查詢條件</el-tag>
    <div style="padding: 5px 0"></div>
    <el-form ref="form" :inline="true" :model="searchform" :rules="rules">
      <template v-if="date === 'DAU' || date === 'NRU'">
        <el-form-item prop="startDate">
          <el-date-picker
            v-model="searchform.startDate"
            value-format="timestamp"
            type="date"
            placeholder="選擇開始日期"
            :picker-options="startPickerOptions"
          />
        </el-form-item>
        <el-form-item prop="endDate">
          <el-date-picker
            v-model="searchform.endDate"
            value-format="timestamp"
            type="date"
            placeholder="選擇結束日期"
            :picker-options="endPickerOptions"
          />
        </el-form-item>
      </template>
      <template v-else>
        <el-form-item prop="startDate">
          <el-date-picker
            v-model="searchform.startDate"
            value-format="timestamp"
            type="year"
            placeholder="選擇年"
            :picker-options="startPickerOptions"
          />
        </el-form-item>
      </template>
      <!-- <el-form-item>
        <el-select v-model="searchform.type" placeholder="請選擇">
          <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item> -->
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
        startDate: this.getMonthStart(),
        endDate: this.getNowMoment(),
        type: 'ALL'
      },
      rules: {
        startDate: [
          { required: true, trigger: 'change', message: '開始日期不得為空' }
        ],
        endDate: [
          { required: true, trigger: 'change', message: '結束日期不得為空' }
        ]
      },
      typeOptions: [
        { value: 'all', label: 'ALL' },
        { value: 'android', label: 'Android' },
        { value: 'ios', label: 'iOS' }
      ],
      date: 'DAU',
      startDate_DAU: this.getMonthStart(),
      endDate_DAU: this.getNowMoment(),
      startDate_WAU: this.getYearStart(),
      startDate_MAU: this.getYearStart(),
      startDate_NRU: this.getMonthStart(),
      endDate_NRU: this.getNowMoment()
    }
  },
  computed: {
    endPickerOptions() {
      const vm = this
      return {
        disabledDate(time) {
          if (vm.isStartDateError) {
            return false
          }
          return moment(time) < moment(vm.searchform.startDate) || moment(time) > moment()
        }
      }
    },
    startPickerOptions() {
      const vm = this
      return {
        disabledDate(time) {
          if (vm.isStartDateError) {
            return false
          }
          return moment(time) > moment()
        }
      }
    }
  },
  mounted() {
    this.handleSearch()
  },
  methods: {
    saveDate() {
      this[`startDate_${this.date}`] = this.searchform.startDate
      if (this.date !== 'WAU' && this.date !== 'MAU') { this[`endDate_${this.date}`] = this.searchform.endDate }
    },
    setDate() {
      this.searchform.startDate = this[`startDate_${this.date}`]
      if (this.date !== 'WAU' && this.date !== 'MAU') { this.searchform.endDate = this[`endDate_${this.date}`] }
    },
    handleSearch() {
      this.loading = true
      this.$refs['form'].validate((valid, err) => {
        if (valid) {
          const formData = new FormData()
          formData.append('startDate', this.searchform.startDate)
          if (this.date === 'DAU' || this.date === 'NRU') {
            formData.append('endDate', this.searchform.endDate)
          } else {
            formData.append('endDate', moment(this.searchform.startDate).endOf('year').valueOf())
          }
          // if (this.searchform.typeOptions && this.searchform.typeOptions !== 'all') { formData.append('type', this.searchform.typeOptions) }
          this.$emit('updatedTableData', formData, this.loading)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // handleStartDate(rule, value, callback) {
    //   if (value && moment(value) > moment(this.searchform.endDate)) {
    //     this.isStartDateError = true
    //     callback(new Error('請選擇正確的開始日期'))
    //   } else if (!value) {
    //     callback(new Error('開始日期不得為空'))
    //   } else {
    //     this.isStartDateError = false
    //     callback()
    //   }
    // },
    // handleEndDate(rule, value, callback) {
    //   if (value && moment(value) < moment(this.searchform.startDate)) {
    //     return callback(new Error('請選擇正確的結束日期'))
    //   } else if (!value) {
    //     callback(new Error('結束日期不得為空'))
    //   } else {
    //     if (this.searchform.startDate) {
    //       this.$refs['form'].validateField(['startDate'])
    //     }
    //     this.isStartDateError = false
    //     callback()
    //   }
    // },
    getMonthStart() {
      return moment().startOf('month').valueOf()
    },
    getYearStart() {
      return moment().startOf('year').valueOf()
    },
    getNowMoment() {
      return moment().format('x')
    },
    changeType(type) {
      this.saveDate()
      this.date = type
      this.setDate()
    }
  }
}
</script>
