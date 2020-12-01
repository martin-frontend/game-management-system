<template>
  <div class="search-panel">
    <el-tag>請輸入查詢條件</el-tag>
    <div style="padding: 5px 0"></div>
    <el-form ref="form" :inline="true" :model="formData" :rules="rules">
      <el-form-item prop="startDate">
        <el-date-picker
          v-model="formData.startDate"
          type="date"
          placeholder="選擇開始日期"
        />
      </el-form-item>
      <el-form-item prop="endDate">
        <el-date-picker
          v-model="formData.endDate"
          type="date"
          placeholder="選擇結束日期"
        />
      </el-form-item>
      <el-form-item>
        <el-select v-model="formData.type" placeholder="請選擇" @change="handleType">
          <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="handleSearch">查詢</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'SearchPanel',
  data() {
    return {
      formData: {},
      rules: {
        startDate: [
          { type: 'date', required: true, message: '日期錯誤', trigger: 'change' }
        ],
        endDate: [
          { type: 'date', required: true, message: '日期錯誤', trigger: 'change' }
        ]
      },
      typeOptions: [
        { value: 'all', label: 'ALL' },
        { value: 'android', label: 'Android' },
        { value: 'ios', label: 'iOS' }
      ]
    }
  },
  methods: {
    handleSearch() {
      this.$refs['form'].validate((valid, err) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleType(val) {
      this.$emit('onType', val)
    },
    checkDate(rule, value, callback) {
      console.log(rule, value)
    }
  }
}
</script>
