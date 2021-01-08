<template>
  <div>
    <el-dialog v-if="dialogFormVisible" :title="title" :before-close="handleClose" :visible.sync="dialogFormVisible" width="50%">
      <el-form ref="form" :model="formData" :rules="rules">
        <el-form-item
          :label="'帳號'"
          :prop="'account'"
          :label-width="formLabelWidth"
        >
          <el-input v-model="formData.account" class="form-width form-margin" />
          <el-button @click="addAccounts">新增多筆帳號</el-button>
          <!-- <i v-if="index == 0" class="el-icon-upload2 icon"></i> -->
          <!-- <el-button v-if="index != 0" @click.prevent="removeAccount(account)">删除</el-button> -->
        </el-form-item>
        <el-form-item v-if="!checked" label="停權天數" prop="days" :label-width="formLabelWidth">
          <el-input v-model="formData.days" class="form-width form-margin" :disabled="formData.checked" />
        </el-form-item>
        <el-form-item label="結束時間" :label-width="formLabelWidth" :disabled="formData.checked">
          <el-date-picker
            v-if="!checked"
            v-model="formData.releaseDate"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            class="form-margin"
            disabled
          />
          <el-input v-if="checked" value="永久停權" class="form-width form-margin" disabled />
          <el-checkbox v-model="formData.checked">永久停權</el-checkbox>
        </el-form-item>
        <el-form-item label="事由" :label-width="formLabelWidth">
          <el-input
            v-model="formData.reason"
            type="textarea"
            :rows="6"
            placeholder="請輸入停權事由"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="createSuspension">建 立</el-button>
      </div>
    </el-dialog>
    <AddAcounts ref="addAcounts" :form-data="formData" @setInit="setInit" />
    <ConfirmModify ref="confirmModify" @initdataChild="initdataChild" />
  </div>
</template>
<script>
import AddAcounts from './addAcounts'
import ConfirmModify from './confirmModify'
import moment from 'moment'
import { createSuspension } from '@/api/suspension'
export default {
  components: { AddAcounts, ConfirmModify },
  data() {
    return {
      formData: {
        account: '',
        accountList: [{
          account: ''
        }],
        releaseDate: '',
        checked: false,
        reason: ''
      },
      dialogFormVisible: false,
      formLabelWidth: '80px',
      title: '新增停權帳號',
      rules: {
        account: [
          { required: true, message: '請輸入帳號', trigger: 'change' }
        ],
        days: [
          { required: true, message: '請輸入停權天數', trigger: 'change' },
          { pattern: /^[0-9]*$/, message: '請輸入數字', trigger: 'change' }
        ]
      }
    }
  },
  computed: {
    days() {
      return this.formData.days
    },
    checked() {
      return this.formData.checked
    }
  },
  watch: {
    days(val) {
      if (val && parseInt(val)) {
        this.formData.releaseDate = moment().add(val, 'day').endOf('day').format(
          'yyyy-MM-DD HH:mm:ss'
        )
      } else {
        this.formData.releaseDate = ''
      }
    }
  },
  methods: {
    handleClose(done) {
      this.loading = false
      this.dialogFormVisible = false
      this.formData = {
        releaseDate: '',
        accountList: [{
          id: ''
        }],
        checked: false
      }
      // this.$refs['formData'].resetFields()
    },
    handleOpen(title, row) {
      this.dialogFormVisible = true
      // this.title = title
      //   this.form = {}
    },
    createSuspension() {
      this.$refs.form.validate(valid => {
        if (valid) {
          const formData = new FormData()
          formData.append('account', this.formData.account)
          if (this.formData.checked) {
            formData.append('releaseState', '1')
            formData.append('releaseDate', '')
          } else {
            formData.append('releaseDate', moment(this.formData.releaseDate).valueOf())
            formData.append('releaseState', '0')
          }
          formData.append('reason', this.formData.reason)
          createSuspension(formData)
            .then((resopnse) => {
              const { data } = resopnse
              if (data.success) {
                this.$emit('initdata')
                this.$message.success(data.msg)
              } else {
                this.$message.warning(data.msg)
              }
              if (data.content) { this.confirmModify(formData, data.content) } else { this.handleClose() }
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
    },
    initdataChild() {
      this.handleClose()
      this.$emit('initdata')
    },
    removeAccount(item) {
      var index = this.formData.account.indexOf(item)
      if (index !== -1) {
        this.formData.account.splice(index, 1)
      }
    },
    addAccounts() {
      this.$refs.addAcounts.handleOpen()
      this.$refs.addAcounts.createInit()
    },
    confirmModify(oriData, confirmData) {
      this.$refs.confirmModify.handleOpen(oriData, confirmData)
    },
    setInit(formData) {
      this.formData = formData
    }
  }
}
</script>
<style lang="scss" scoped>
.form-margin{
  margin-right: 10px;
}
.form-width{
  width: 220px;
}
.icon{
  margin-left: 10px;
  font-size: 20px;
  vertical-align: middle;
}
</style>
