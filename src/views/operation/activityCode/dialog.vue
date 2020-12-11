<template>
  <div>
    <el-dialog :title="title" :before-close="handleClose" :visible.sync="dialogFormVisible" width="630px">
      <el-form ref="ruleForm" :rules="rules" :model="formData">
        <el-form-item prop="title" label="標題" :label-width="formLabelWidth">
          <el-input v-model="formData.title" autocomplete="off" placeholder="請輸入標題" />
        </el-form-item>
        <el-form-item prop="type" label="類型" :label-width="formLabelWidth">
          <el-select v-model="formData.type" placeholder="請選擇類型" class="form-margin form-width">
            <el-option label="活動獎品型（單次單人使用）" value="活動獎品型" />
            <el-option label="社群媒體型（單次多人使用）" value="社群媒體型" />
          </el-select>
          <el-input v-model="formData.amount" class="form-width" autocomplete="off" placeholder="請輸入序號數量" />
        </el-form-item>
        <el-form-item prop="startdate" label="日期" :label-width="formLabelWidth">
          <el-date-picker
            v-model="formData.startdate"
            type="datetime"
            placeholder="請選擇開始日期時間"
            value-format="yyyy-MM-dd HH:mm:ss"
          />
        </el-form-item>
        <el-form-item prop="enddate" :label-width="formLabelWidth">
          <el-date-picker
            v-model="formData.enddate"
            type="datetime"
            placeholder="請選擇下架日期時間"
            value-format="yyyy-MM-dd HH:mm:ss"
            :picker-options="pickerOptions"
          />
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
            placeholder="請輸入信件內容"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="createCode">建 立</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { createCode } from '@/api/code'
import moment from 'moment'

export default {
  data() {
    return {
      formData: {
        title: '',
        type: '',
        startdate: '',
        enddate: '',
        content: ''
      },
      dialogFormVisible: false,
      formLabelWidth: '80px',
      title: '新增序號',
      index: 1,
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
      rules: {
        title: [
          { required: true, message: '請輸入標題', trigger: 'change' }
        ],
        type: [
          { required: true, message: '請選擇類型', trigger: 'change' }
        ],
        startdate: [
          { required: true, message: '請選擇開始日期時間', trigger: 'change' }
        ],
        enddate: [
          { required: true, message: '請選擇下架日期時間', trigger: 'change' }
        ],
        content: [
          { required: true, message: '請輸入內容', trigger: 'change' }
        ]
      }
    }
  },
  computed: {
    pickerOptions() {
      const vm = this
      return {
        disabledDate(time) {
          return moment(time) < moment(vm.formData.startdate)
        }
      }
    }
  },
  methods: {
    resetFormData() {
      this.formData = {
        title: '',
        type: '',
        startdate: '',
        enddate: '',
        content: ''
      }
    },
    handleClose(done) {
      this.loading = false
      this.dialogFormVisible = false
      this.resetFormData()
      this.$nextTick(() => {
        this.$refs['ruleForm'].clearValidate(Object.keys(this.formData))
      })
    },
    handleOpen(title, row) {
      this.dialogFormVisible = true
      this.title = title + '序號'
      //   this.form = {}
      if (title === '編輯') {
        this.formData = Object.assign({}, row)
      }
    },
    createCode() {
      // this.filterTableData()
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          const formData = new FormData()
          formData.append('title', this.formData.title)
          formData.append('type', this.formData.type)
          formData.append('amount', this.formData.amount)
          formData.append('startdate', this.formData.startdate)
          formData.append('enddate', this.formData.enddate)
          formData.append('content', this.formData.content)
          createCode(formData)
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
    doAdd() {
      if (this.tableData.length >= 5) {
        this.$message.error('最多附加5樣')
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
}
.form-width{
  width: 250px;
}
</style>
