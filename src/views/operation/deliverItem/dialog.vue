<template>
  <div>
    <el-dialog :title="title" :before-close="handleClose" :visible.sync="dialogFormVisible" width="50%">
      <el-form :model="formData">
        <el-form-item label="標題" :label-width="formLabelWidth">
          <el-input v-model="formData.title" autocomplete="off" placeholder="請輸入標題" />
        </el-form-item>
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-date-picker
            v-model="formData.senddate"
            type="datetime"
            placeholder="請選擇發送日期時間"
            value-format="yyyy-MM-dd HH:mm:ss"
            class="form-margin"
          />
          <el-checkbox v-model="formData.checked">立即發送</el-checkbox>
        </el-form-item>
        <el-form-item label="對象" :label-width="formLabelWidth">
          <el-radio v-model="formData.radio" label="1">全部玩家</el-radio>
          <el-radio v-model="formData.radio" label="2">指定玩家</el-radio>
          <i class="el-icon-upload2 icon"></i>
        </el-form-item>
        <el-form-item label="道具" :label-width="formLabelWidth" />
        <el-form-item label="內容" :label-width="formLabelWidth">
          <el-input
            v-model="formData.content"
            type="textarea"
            :rows="6"
            placeholder="請輸入內容"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button v-if="title===`新增物品`" type="primary" @click="createItem">建 立</el-button>
        <el-button v-if="title===`編輯物品`" type="primary" @click="updateItem">更 新</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import moment from 'moment'
import { createItem, updateItem } from '@/api/item'
export default {
  data() {
    return {
      formData: {
        checked: false,
        radio: ''
      },
      dialogFormVisible: false,
      formLabelWidth: '80px',
      title: '新增物品'
    }
  },
  methods: {
    handleClose(done) {
      this.loading = false
      this.dialogFormVisible = false
      this.formData = {}
    },
    handleOpen(title, row) {
      this.dialogFormVisible = true
      this.title = title + '物品'
      //   this.form = {}
      if (title === '編輯') {
        this.formData = Object.assign({}, row)
        this.formData.senddate = new Date(this.formData.senddate)
      }
    },
    createItem() {
      const formData = new FormData()
      formData.append('title', this.formData.title)
      formData.append('senddate', this.getdatetime(this.formData.senddate))
      formData.append('status', this.formData.status)
      formData.append('content', this.formData.content)
      createItem(formData)
        .then((resopnse) => {
          this.$emit('initdata')
          this.handleClose()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    updateItem() {
      const formData = new FormData()
      formData.append('title', this.formData.title)
      formData.append('senddate', this.getdatetime(this.formData.senddate))
      formData.append('status', this.formData.status)
      formData.append('content', this.formData.content)
      formData.append('id', this.formData.id)
      updateItem(formData)
        .then((resopnse) => {
          this.$emit('initdata')
          this.dialogFormVisible = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getdatetime(datetime) {
      return moment(datetime).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>
<style lang="scss" scoped>
.form-margin{
  margin-right: 10px;
  margin-bottom: 10px;
}
.icon{
  font-size: 20px;
  vertical-align: middle;
}
</style>
