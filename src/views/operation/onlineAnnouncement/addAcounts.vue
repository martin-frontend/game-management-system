<template>
  <div>
    <el-dialog :title="title" :before-close="handleClose" :close-on-click-modal="false" :visible="dialogFormVisible" width="50%">
      <el-form :model="formData">
        <el-form-item
          v-for="(category, index) in formData.accountList"
          :key="category.key"
          :label="index === 0?'分類名稱':''"
          :label-width="formLabelWidth"
        >
          <el-input v-model="category.label" class="form-width form-margin" />
          <el-button v-if="index == 0" @click="addAccount">新增分類</el-button>
          <el-button v-else @click.prevent="removeAccount(category)">删除</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="addAccounts">確 認</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
// import XLSX from 'xlsx'
import { updateannouncecategory } from '@/api/announcement'

const cloneDeep = require('lodash.clonedeep')

export default {
  name: 'AddAccounts',
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '80px',
      title: '編輯分類',
      initData: {},
      formData: {
        accountList: []
      }
    }
  },
  methods: {
    handleClose(done) {
      this.loading = false
      this.dialogFormVisible = false
    },
    handleOpen(title, row) {
      this.dialogFormVisible = true
      this.formData = cloneDeep(this.$parent.formData)
      this.createInit()
    },
    removeAccount(item) {
      var index = this.formData.accountList.indexOf(item)
      if (index !== -1) {
        this.formData.accountList.splice(index, 1)
      }
    },
    addAccount() {
      this.formData.accountList.push({
        label: '',
        key: Date.now()
      })
    },
    addAccounts() {
      if (this.formData.accountList.length > 0) {
        const set = new Set()
        const filterArr = this.formData.accountList.filter((item, index) => item.label !== '' && !set.has(item.label) ? set.add(item.label) : false)
        if (filterArr.length === 0) {
          this.$message.error('至少新增一個分類')
          return
        }
        this.formData.accountList = filterArr
        const mapArr = this.formData.accountList.map((item) => item.label)
        const formData = new FormData()
        formData.append('category', mapArr.toString())
        updateannouncecategory(formData)
          .then((resopnse) => {
            const { data } = resopnse
            if (data.success) {
              this.$parent.setInit(this.formData)
              this.handleClose()
            } else {
              this.setInit()
              this.$message.warning(data.msg)
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
      // this.dialogFormVisible = false
    },
    // 複製原始資料
    createInit() {
      const initData = cloneDeep(this.formData)
      this.initData = initData
    },
    // 取消後還原原始資料
    setInit() {
      const formData = cloneDeep(this.initData)
      this.$emit('setInit', formData)
    }
  }
}
</script>
<style lang="scss" scoped>
.form-margin{
  margin-right: 10px;
  margin-bottom: 10px;
}
.form-width{
  width: 220px;
}

.upload{
  display: inline-block;

  .icon{
  margin-left: 10px;
  font-size: 20px;
  vertical-align: middle;
  cursor: pointer;
  }
}
</style>
