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
import { getAccountInfo } from '@/api/players'
export default {
  name: 'SearchPanel',
  data() {
    return {
      formData: {
        type: 'user_id',
        text: ''
      },
      rules: {
        type: [
          { required: true, message: '請選擇角色', trigger: 'change' }
        ],
        text: [
          { required: true, message: '請填寫內容', trigger: 'change' }
        ]
      },
      options: [
        { value: 'user_id', label: '角色ID' },
        { value: 'user_name', label: '角色名稱' }
      ]
    }
  },
  methods: {
    handleSearch() {
      this.$refs['form'].validate((valid, err) => {
        if (valid) {
          const formData = new FormData()
          formData.append('type', this.formData.type)
          formData.append('text', this.formData.text)
          getAccountInfo(formData)
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
    handlePlaceholder() {
      if (!this.formData.type) return ''
      return this.formData.type === 'user_id' ? '請輸入角色ID' : '請輸入角色名稱'
    }
  }
}
</script>
<style scoped lang="scss">
</style>
