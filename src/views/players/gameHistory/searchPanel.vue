<template>
  <div class="search-panel">
    <el-tag>請輸入查詢條件</el-tag>
    <div style="padding: 5px 0" />
    <el-form ref="form" :inline="true" :model="formData">
      <el-form-item>
        <el-select v-model="formData.value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input v-model="formData.content" />
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
        { value: 'id', label: '角色ID' },
        { value: 'name', label: '角色名稱' },
        { value: 'status', label: '帳號狀態' },
        { value: 'fb', label: '關聯FB帳號' },
        { value: 'google', label: '關聯Google帳號' }
      ]
    }
  }
}
</script>
<style scoped lang="scss">

</style>
