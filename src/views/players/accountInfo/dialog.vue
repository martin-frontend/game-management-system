<template>
  <div>
    <el-dialog :title="title" :before-close="handleClose" :visible.sync="dialogFormVisible" width="50%">
      <h5 class="logtitle">登入時間</h5>
      <ol class="logbox">
        <li v-for="item in logData" :key="item.id" class="log">{{ TransformTime(item.createdAt) }}</li>
      </ol>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import moment from 'moment'
import { getUserLog } from '@/api/analysis'

export default {
  components: {},
  data() {
    return {
      title: '',
      dialogFormVisible: false,
      logData: []
    }
  },
  methods: {
    handleClose() {
      this.dialogFormVisible = false
    },
    handleOpen(accout, id) {
      this.dialogFormVisible = true
      this.title = '登入紀錄 - ' + accout
      this.OnSearch(id)
    },
    OnSearch(id) {
      const formData = new FormData()
      formData.append('id', id)
      getUserLog(formData)
        .then((response) => {
          const { data } = response

          if (data.success) {
            this.logData = [...data.content]
          } else {
            this.$message.warning(data.msg)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    TransformTime(time) {
      return moment(time).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>
<style lang="scss" scoped>
.logtitle{
  margin-bottom: 10px;
}
.logbox{
  height: 200px;
  max-height: 400px;
  overflow-y: scroll;
  .log{
    margin-bottom: 5px;
  }
}
</style>
