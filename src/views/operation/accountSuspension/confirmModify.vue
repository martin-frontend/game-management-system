<template>
  <div>
    <el-dialog :title="title" :before-close="handleClose" :close-on-click-modal="false" :visible="dialogFormVisible" width="50%">
      <el-form :model="checkDataForm">
        <el-checkbox-group v-model="checkDataForm.check">
          <el-checkbox v-for="item in checkData" :key="item.account" :label="item.account">
            <p v-html="checkboxText(item.account,item.releaseDate,item.releaseState)"></p>
          </el-checkbox>
        </el-checkbox-group>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="OnSubmit">更 新</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import moment from 'moment'
import { updateSuspension } from '@/api/suspension'

export default {
  name: 'ConfirmModify',
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '80px',
      title: '確認更新',
      initData: {},
      excelData: {
        header: null,
        results: null
      },
      oriData: null,
      checkData: [],
      checkDataForm: { check: [] }
    }
  },
  methods: {
    handleClose() {
      this.loading = false
      this.dialogFormVisible = false
    },
    handleOpen(oriData, confirmData) {
      this.checkData = confirmData
      this.oriData = oriData
      this.dialogFormVisible = true
    },
    TransformTime(time) {
      return moment(time).format('YYYY-MM-DD HH:mm:ss')
    },
    checkboxText(account, before, state) {
      const after = this.oriData.get('releaseDate')
      console.log(state)
      return account + '<br>' + '修改前:' + (state === '1' ? '永久停權' : this.TransformTime(before)) + '  修改後:' + this.TransformTime(Number(after))
    },
    OnSubmit() {
      const idArr = []
      this.checkData.forEach(element => {
        if (this.checkDataForm.check.includes(element.account)) {
          idArr.push(element._id)
        }
      })
      const formData = new FormData()
      formData.append('id', idArr.join())
      formData.append('releaseDate', this.oriData.get('releaseDate'))
      formData.append('releaseState', this.oriData.get('releaseState'))
      formData.append('reason', this.oriData.get('reason'))
      updateSuspension(formData)
        .then((resopnse) => {
          const { data } = resopnse
          if (data.success) {
            this.$message.success(data.msg)
          } else {
            this.$message.warning(data.msg)
          }
          this.$emit('initdataChild')
          this.handleClose()
        })
        .catch((err) => {
          console.log(err)
        })
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
.el-checkbox{
  display: flex;
  align-items: center;
}

</style>
