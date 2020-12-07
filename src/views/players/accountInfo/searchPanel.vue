<template>
  <div class="search-panel">
    <el-form ref="form" :inline="true" :model="formData">
      <el-tag>請輸入查詢條件</el-tag>
      <div style="padding: 5px 0px"></div>
      <el-form-item>
        <el-select v-model="formData.type" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input v-model="formData.text" />
      </el-form-item>
      <el-button type="primary" @click="searchClick">查詢</el-button>
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
        type: '',
        text: ''
      },
      options: [
        { value: 'user_id', label: '角色ID' },
        { value: 'user_name', label: '角色名稱' }
      ]
    }
  },
  methods: {
    searchClick() {
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
    }
  }
}
</script>
<style scoped lang="scss">
</style>
