<template>
  <div>
    <el-dialog :title="title" :before-close="handleClose" :close-on-click-modal="false" :visible="dialogFormVisible" width="50%">
      <el-form :model="formData">
        <el-form-item
          v-for="(account, index) in formData.accountList"
          :key="index"
          :label="'帳號'"
          :label-width="formLabelWidth"
        >
          <el-input v-model="account.account" class="form-width form-margin" />
          <el-button v-if="index == 0" @click="addAccount">新增帳號</el-button>
          <!-- <el-upload
            v-if="index == 0"
            class="upload"
            action=""
            :on-change="handleUpload"
            :before-upload="beforeUpload"
            :show-file-list="false"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            :auto-upload="false"
          >
            <i class="el-icon-upload2 icon"></i>
          </el-upload> -->
          <el-button v-else @click.prevent="removeAccount(account)">删除</el-button>
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

const cloneDeep = require('lodash.clonedeep')

export default {
  name: 'AddAccounts',
  props: {
    formData: {
      type: Object,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '80px',
      title: '新增多筆帳號',
      initData: {},
      accountText: '',
      excelData: {
        header: null,
        results: null
      }
    }
  },
  watch: {
    formData: {
      handler: function(newobj, oldobj) {
        if (newobj) {
          this.accountText = newobj.account
          console.log(this.accountText)
        }
      },
      immediate: true,
      deep: true
    }

  },
  methods: {
    handleClose(done) {
      this.loading = false
      this.dialogFormVisible = false
      this.setInit()
    },
    handleOpen(title, row) {
      const accountArr = this.accountText.split(',')
      this.formData.accountList = []
      accountArr.forEach(element => {
        this.formData.accountList.push({
          account: element
        })
      })
      this.dialogFormVisible = true
    },

    // handleUpload(file) {
    //   const rawFile = file.raw
    //   return new Promise((resolve, reject) => {
    //     const reader = new FileReader()
    //     reader.onload = e => {
    //       const data = e.target.result
    //       const workbook = XLSX.read(data, { type: 'array' })
    //       const firstSheetName = workbook.SheetNames[0] // 只讀取第一個工作表
    //       const worksheet = workbook.Sheets[firstSheetName]
    //       const results = []
    //       for (var key in worksheet) {
    //         // v是讀取取单元格的原始值
    //         if (key.indexOf('A') > -1) {
    //           key[0] === '!' ? results.push({ id: worksheet[key] }) : results.push({ id: worksheet[key].v })
    //         }
    //       }
    //       // TODO 為了之後擴充留下來的程式碼 可參考upload-excel寫法
    //       // const header = this.getHeaderRow(worksheet)
    //       // const results = XLSX.utils.sheet_to_json(worksheet) //轉為json
    //       this.generateData({ results })
    //       resolve()
    //     }
    //     reader.readAsArrayBuffer(rawFile)
    //   })
    // },
    generateData({ results }) {
      this.formData.accountList = results
    },
    beforeUpload(file, data) {
      console.log(file, data)
      const isCsv = file.type === '.csv'
      const isOpenXML = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      const isMsExcel = file.type === 'application/vnd.ms-excel'
      if (!isCsv && !isOpenXML && !isMsExcel) {
        this.$message.error('格式錯誤')
        return false
      }
      return (isCsv || isOpenXML || isMsExcel)
    },
    removeAccount(item) {
      var index = this.formData.accountList.indexOf(item)
      if (index !== -1) {
        this.formData.accountList.splice(index, 1)
      }
    },
    addAccount() {
      this.formData.accountList.push({
        account: ''
      })
    },
    addAccounts() {
      const set = new Set()
      const filterArr = this.formData.accountList.filter((item, index) => item.account !== '' && !set.has(item.account) ? set.add(item.account) : false)
      if (filterArr.length > 0) {
        const mapArr = filterArr.map((item) => item.account)
        this.formData.account = mapArr.join()
      }
      console.log(this.formData.account)
      this.dialogFormVisible = false
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
