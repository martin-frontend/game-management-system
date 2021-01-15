<template>
  <div>
    <el-dialog :title="title" :before-close="handleClose" :visible.sync="dialogFormVisible" width="50%">
      <el-form ref="ruleForm" :rules="rules" :model="formData">
        <el-form-item prop="title" label="標題" :label-width="formLabelWidth">
          <el-input v-model="formData.title" autocomplete="off" placeholder="請輸入標題" />
        </el-form-item>
        <el-form-item prop="senddate" label="日期" :label-width="formLabelWidth">
          <el-date-picker
            v-model="formData.senddate"
            type="datetime"
            placeholder="請選擇發送日期時間"
            value-format="yyyy-MM-dd HH:mm:ss"
            class="form-margin"
            :disabled="checked"
          />
          <el-checkbox v-model="checked" @change="doCheck">立即發送</el-checkbox>
        </el-form-item>
        <el-form-item prop="radio" label="對象" :label-width="formLabelWidth">
          <el-radio-group v-model="formData.radio">
            <el-radio :label="1">全部玩家</el-radio>
            <el-radio :label="2">指定玩家</el-radio>
          </el-radio-group>
          <el-button v-show="formData.radio === 2" class="add-btn" @click="addAccounts">新增多筆帳號ID</el-button>
        </el-form-item>
        <el-form-item label="道具" :label-width="formLabelWidth">
          <el-table
            :data="tableData"
            border
            style="width: 400px"
          >
            <el-table-column label="道具名稱">
              <template slot-scope="scope">
                <el-select v-model="scope.row.propValue" placeholder="请选择">
                  <el-option
                    v-for="item in scope.row.props"
                    :key="item"
                    :label="item"
                    :value="item"
                  />
                </el-select>
              </template>
            </el-table-column>
            <el-table-column label="道具數量" width="100px">
              <template slot-scope="scope">
                <el-input
                  v-model.number="scope.row.quantity"
                />
              </template>
            </el-table-column>
            <el-table-column align="center" width="60px">
              <template slot-scope="scope">
                <el-button v-if="scope.row.index === 0" icon="el-icon-plus" type="primary" circle @click="doAdd" />
                <el-button v-else icon="el-icon-minus" type="danger" circle @click="doDelete(scope.row.index)" />
              </template>
            </el-table-column>
          </el-table>
        </el-form-item>
        <el-form-item prop="content" label="內容" :label-width="formLabelWidth">
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
    <AddAcounts ref="addAcounts" :form-data="formData" @setInit="setInit" />
  </div>
</template>
<script>
import AddAcounts from './addAcounts'
import moment from 'moment'
import { createItem, updateItem } from '@/api/item'
export default {
  components: { AddAcounts },
  data() {
    return {
      index: 1,
      formData: {
        radio: 1,
        title: '',
        senddate: '',
        content: '',
        accounts: [{ id: '' }]
      },
      tableData: [
        {
          index: 0,
          propValue: '',
          props: [
            '道具1', '道具2', '道具3'
          ],
          quantity: 1
        }
      ],
      checked: false,
      dialogFormVisible: false,
      formLabelWidth: '80px',
      title: '新增物品',
      rules: {
        title: [
          { required: true, message: '請輸入標題', trigger: 'change' }
        ],
        // radio: [
        //   { required: true, message: '請輸入類型名稱', trigger: 'change' }
        // ],
        senddate: [
          { required: true, message: '請選擇發送日期時間', trigger: 'change' }
        ],
        content: [
          { required: true, message: '請輸入內容', trigger: 'change' }
        ]
      },
      property: []
    }
  },
  methods: {
    resetFormData() {
      this.formData = {
        radio: 1,
        title: '',
        senddate: '',
        content: '',
        accounts: [{ id: '' }]
      }
    },
    handleClose() {
      this.loading = false
      this.dialogFormVisible = false
      this.resetFormData()
      this.$nextTick(() => {
        this.$refs['ruleForm'].clearValidate(Object.keys(this.formData))
      })
    },
    // filterTableData() {
    //   this.tableData.forEach((item, index) => {
    //     if (item.propValue && (item.quantity > 0)) {
    //       delete item.index
    //       delete item.props
    //       this.property.push(item)
    //     }
    //   })
    // },
    handleOpen(title, row) {
      this.dialogFormVisible = true
      this.title = title + '物品'
      if (title === '編輯') {
        this.formData = Object.assign({}, row)
        this.formData.senddate = new Date(this.formData.senddate)
      }
    },
    createItem() {
      // this.filterTableData()
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          const formData = new FormData()
          formData.append('title', this.formData.title)
          formData.append('senddate', this.getdatetime(this.formData.senddate))
          formData.append('status', this.formData.status)
          formData.append('content', this.formData.content)
          createItem(formData)
            .then((response) => {
              const { data } = response
              if (data.success) {
                this.$emit('initdata')
                this.$message.success(data.msg)
              } else {
                this.$message.warning(data.msg)
              }
              this.handleClose()
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
    },
    updateItem() {
      // this.filterTableData()
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          const formData = new FormData()
          formData.append('title', this.formData.title)
          formData.append('senddate', this.getdatetime(this.formData.senddate))
          formData.append('status', this.formData.status)
          formData.append('content', this.formData.content)
          formData.append('id', this.formData.id)
          updateItem(formData)
            .then((response) => {
              const { data } = response
              if (data.success) {
                this.$emit('initdata')
                this.$message.success(data.msg)
              } else {
                this.$message.warning(data.msg)
              }
              this.dialogFormVisible = false
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
    },
    getdatetime(datetime) {
      return moment(datetime).format('YYYY-MM-DD HH:mm:ss')
    },
    doCheck(e) {
      if (e) {
        this.$set(this.formData, 'senddate', moment().format('YYYY-MM-DD HH:mm:ss'))
      } else {
        this.$set(this.formData, 'senddate', '')
      }
    },
    addAccounts() {
      this.$refs.addAcounts.handleOpen()
      this.$refs.addAcounts.createInit()
    },
    setInit(formData) {
      this.formData = formData
    },
    doAdd() {
      if (this.tableData.length >= 5) {
        this.$message.warning('最多附加5樣')
        return
      }
      const index = this.index++
      this.tableData.push({
        index,
        propValue: '',
        props: [
          '道具1', '道具2', '道具3'
        ],
        quantity: 1
      })
    },
    doDelete(i) {
      this.tableData.forEach((item, index, array) => {
        if (item.index === i) { array.splice(index, 1) }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.form-margin{
  margin-right: 10px;
  // margin-bottom: 10px;
}
.icon{
  font-size: 20px;
  vertical-align: middle;
}
.add-btn {
  margin-left: 15px;
}
</style>
