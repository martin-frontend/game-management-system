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
import { getremain } from '@/api/statistics'
export default {
  name: 'SearchPanel',
  data() {
    return {
      formData: {},
      // type:'date'會將其初始化成string类型，使得value-format="yyyy-MM-dd"會報錯
      rules: {
        startdate: [
          { required: true, message: '日期錯誤', trigger: 'change' }
        ],
        enddate: [
          { required: true, message: '日期錯誤', trigger: 'change' }
        ]
      },
      options: [
        { value: '', label: 'ALL' },
        { value: 'Android', label: 'Android' },
        { value: 'IOS', label: 'IOS' }
      ]
    }
  },
  methods: {
    handleSearch() {
      this.$refs['form'].validate((valid, err) => {
        if (valid) {
          const formData = new FormData()
          formData.append('startdate', this.formData.startdate)
          formData.append('enddate', this.formData.enddate)
          if (this.formData.type !== '') { formData.append('type', this.formData.type) }
          getremain(formData)
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
