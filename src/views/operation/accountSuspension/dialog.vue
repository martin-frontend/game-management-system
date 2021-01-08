<template>
  <div>
    <el-dialog :title="title" :before-close="handleClose" :visible.sync="dialogFormVisible" width="50%">
      <el-form :model="formData">
        <el-form-item
          :key="formData.accounts[0].key"
          :label="'帳號'"
          :prop="'accounts.0.value'"
          :label-width="formLabelWidth"
        >
          <el-input v-if="numberOfAccounts==1" v-model="formData.accounts[0].id" class="form-width form-margin" />
          <el-input v-if="numberOfAccounts>1" v-model="multiAccounts" disabled class="form-width form-margin" />
          <el-button @click="addAccounts">新增多筆帳號ID</el-button>
          <!-- <i v-if="index == 0" class="el-icon-upload2 icon"></i> -->
          <!-- <el-button v-if="index != 0" @click.prevent="removeAccount(account)">删除</el-button> -->
        </el-form-item>
        <el-form-item label="停權天數" :label-width="formLabelWidth">
          <el-input v-model="formData.days" class="form-width form-margin" :disabled="formData.checked" />
        </el-form-item>
        <el-form-item label="結束時間" :label-width="formLabelWidth">
          <el-date-picker
            v-model="formData.releaseDate"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            class="form-margin"
            disabled
          />
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
        accounts: [{
          id: ''
        }],
        releaseDate: '',
        checked: false,
        reason: ''
      },
      dialogFormVisible: false,
      formLabelWidth: '80px',
      title: '新增停權帳號'
    }
  },
  computed: {
    days() {
      return this.formData.days
    },
    numberOfAccounts() {
      return this.formData.accounts.length
    },
    multiAccounts() {
      return this.formData.accounts[0].id + ',...'
    },
    checked() {
      return this.formData.checked
    }
  },
  watch: {
    days(val) {
      if (val === '' || val === undefined) {
        this.formData.releaseDate = ''
      } else if (val !== '') {
        this.formData.releaseDate = moment().add(val, 'day').endOf('day').format(
          'yyyy-MM-DD HH:mm:ss'
        )
      }
    },
    checked(val) {
      if (val === true) {
        this.formData.releaseDate = ''
        this.formData.days = ''
      }
    }
  },
  methods: {
    handleClose(done) {
      this.loading = false
      this.dialogFormVisible = false
      this.formData = {
        releaseDate: '',
        accounts: [{
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
      const formData = new FormData()
      if (this.formData.accounts.length === 1) {
        formData.append('account', this.formData.accounts[0].id)
      } else {
        const id = this.formData.accounts.map(function(item, index, array) {
          return item.id
        })
        formData.append('account', id.join())
      }
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
    },
    initdataChild() {
      this.handleClose()
      this.$emit('initdata')
    },
    removeAccount(item) {
      var index = this.formData.accounts.indexOf(item)
      if (index !== -1) {
        this.formData.accounts.splice(index, 1)
      }
    },
    addAccount() {
      this.formData.accounts.push({
        id: '',
        key: Date.now()
      })
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
  margin-bottom: 10px;
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
