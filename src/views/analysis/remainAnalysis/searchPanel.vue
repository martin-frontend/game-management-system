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
          :picker-options="pickerOptions"
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
import { getremain } from '@/api/analysis'
import moment from 'moment'
export default {
  name: 'SearchPanel',
  data() {
    return {
      isStartDateError: false,
      formData: { startdate: '', enddate: '' },
      // type:'date'會將其初始化成string类型，使得value-format="yyyy-MM-dd"會報錯
      rules: {
        startdate: [
          { required: true, trigger: 'change', validator: this.handleStartDate }
        ],
        enddate: [
          { required: true, trigger: 'change', validator: this.handleEndDate }
        ]
      },
      options: [
        { value: 'ALL', label: 'ALL' },
        { value: 'Android', label: 'Android' },
        { value: 'IOS', label: 'IOS' }
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
          return moment(time) < moment(vm.formData.startdate)
        }
      }
    }
  },
  mounted() {
    this.initData()
    this.handleSearch()
  },
  methods: {
    initData() {
      this.formData.startdate = this.getmonthstart()
      this.formData.enddate = this.getmonthend()
      this.formData.type = 'ALL'
    },
    handleSearch() {
      this.$refs['form'].validate((valid, err) => {
        if (valid) {
          const formData = new FormData()
          formData.append('startdate', this.formData.startdate)
          formData.append('enddate', this.formData.enddate)
          if (this.formData.type !== 'ALL') { formData.append('type', this.formData.type) }
          getremain(formData)
            .then((response) => {
              const { data } = response
              if (data.success) {
                this.$emit('onSearch', data.content)
              } else {
                this.$emit('onSearch', [])
                this.$message.warning(data.msg)
              }
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
    handleStartDate(rule, value, callback) {
      if (value && moment(value) > moment(this.formData.enddate)) {
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
      if (value && moment(value) < moment(this.formData.startdate)) {
        return callback(new Error('請選擇正確的結束日期'))
      } else if (!value) {
        callback(new Error('結束日期不得為空'))
      } else {
        if (this.formData.startdate) {
          this.$refs['form'].validateField(['startdate'])
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
