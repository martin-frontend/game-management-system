<template>
  <div class="search-panel">
    <el-form ref="form" :inline="true" :model="formData">
      <p style="margin-bottom:10px;">請輸入查詢條件</p>
      <el-form-item>
        <el-select v-model="formData.type" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input v-model="formData.text" />
      </el-form-item>
      <el-button type="primary">查詢</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'SearchPanel',
  data() {
    return {
      formData: {},
      options: [
        { value: 'user_id', label: '角色ID' },
        { value: 'user_name', label: '角色名稱' },
        { value: 'status', label: '帳號狀態' },
        { value: 'fb_account', label: '關聯FB帳號' },
        { value: 'google_account', label: '關聯Google帳號' }
      ]
    }
  }
}
</script>
<style scoped lang="scss">

</style>
