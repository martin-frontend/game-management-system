<template>
  <div class="search-panel">
    <el-tag>請輸入查詢條件</el-tag>
    <div style="padding: 5px 0"></div>
    <el-form ref="form" :inline="true" :model="formData" :rules="rules">
      <el-form-item prop="text">
        <el-input
          v-model="formData.text"
          clearable
          placeholder="請輸入角色帳號"
        />
      </el-form-item>
      <el-button type="primary" @click="handleSearch()">查詢</el-button>
    </el-form>
  </div>
</template>
<script>
import { getUserLog } from '@/api/analysis'

export default {
  name: 'SearchPanel',
  props: {
    pageData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      isStartDateError: false,
      formData: {
        type: 'user_id',
        startdate: '',
        enddate: ''
      },
      typeOptions: [
        { value: 'user_id', label: '角色ID' },
        { value: 'user_name', label: '角色名稱' }
      ],
      rules: {
        type: [
          { required: true, message: '請選擇角色', trigger: 'change' }
        ],
        text: [
          { required: true, message: '請填寫內容', trigger: 'change' }
        ]
      }
    }
  },
  watch: {
    pageData: {
      handler(newValue, oldValue) {
        if (this.$refs['form']) {
          this.handleSearch()
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    handleSearch() {
      this.$refs['form'].validate((valid, err) => {
        if (valid) {
          const formData = new FormData()
          formData.append('account', this.formData.text)
          formData.append('pageSize', this.pageData.pagesize)
          formData.append('page', this.pageData.page)
          getUserLog(formData)
            .then((response) => {
              const { data } = response
              if (data.success) {
                this.$emit('onSearch', data.content)
              } else {
                this.$message.warning(data.msg)
              }
            })
            .catch((error) => {
              console.log(error)
            })
        }
      })
    }
  }
}
</script>
