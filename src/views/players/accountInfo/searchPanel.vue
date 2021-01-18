<template>
  <div class="search-panel">
    <el-form ref="form" :inline="true" :model="formData" :rules="rules">
      <el-tag>請輸入查詢條件</el-tag>
      <div style="padding: 5px 0px"></div>
      <el-form-item prop="type">
        <el-select v-model="formData.type" placeholder="請選擇" clearable>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item prop="text">
        <el-input v-model="formData.text" :placeholder="handlePlaceholder()" clearable />
      </el-form-item>
      <el-button type="primary" @click="handleSearch">查詢</el-button>
    </el-form>
  </div>
</template>
<script>
import { getUser } from '@/api/analysis'
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
      formData: {
        type: 'account',
        text: ''
      },
      rules: {
        type: [
          { required: true, message: '請選擇角色', trigger: 'change' }
        ],
        text: [
          { message: '請填寫內容', trigger: 'change' }
        ]
      },
      options: [
        { value: 'account', label: '角色帳號' },
        { value: 'accountName', label: '角色名稱' }
      ]
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
  mounted() {
    this.handleSearch()
  },
  methods: {
    handleSearch() {
      this.$refs['form'].validate((valid, err) => {
        if (valid) {
          const formData = {}
          switch (this.formData.type) {
            case 'account':
              formData.account = this.formData.text
              break
            case 'accountName':
              formData.accountName = this.formData.text
              break
          }
          formData.pageSize = this.pageData.pagesize
          formData.page = this.pageData.page
          getUser(formData)
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
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handlePlaceholder() {
      if (!this.formData.type) return ''
      return this.formData.type === 'user_id' ? '請輸入角色ID' : '請輸入角色名稱'
    }
  }
}
</script>
<style scoped lang="scss">
</style>
