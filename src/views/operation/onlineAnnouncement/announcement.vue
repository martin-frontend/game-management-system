<template>
  <div>
    <el-table :data="tableData" border row-key="id">
      <div v-if="checkPermission(['修改線上公告'])">
        <el-table-column
          prop="
        operating"
          label="功能"
          width="240"
        >
          <template slot-scope="scope">
            <!-- <el-button type="primary" size="small">瀏覽</el-button> -->
            <el-button type="primary" size="small" @click="edit('編輯',scope.row)">編輯</el-button>
            <el-button
              v-if="scope.row.status === '1'"
              type="success"
              size="small"
              @click="lanuch('on',scope.row)"
            >立即上架</el-button>
            <el-button
              v-if="scope.row.status === '2'"
              type="warning"
              size="small"
              @click="lanuch('off',scope.row)"
            >立即下架</el-button>
            <el-button type="danger" size="small" @click="remove(scope.row.id,scope.row.status)">刪除</el-button>
          </template>
        </el-table-column>
      </div>
      <el-table-column prop="title" label="標題" width="150" />
      <el-table-column prop="category" label="類型" width="100" />
      <el-table-column prop="status" label="狀態" width="100">
        <template slot-scope="scope">
          {{ getState(scope.row.status) }}
        </template>
      </el-table-column>
      <el-table-column prop="onsaleDate" label="上架時間" width="160">
        <template slot-scope="scope">
          {{ TransformTime(scope.row.onsaleDate) }}
        </template>
      </el-table-column>
      <el-table-column prop="nosaleDate" label="下架時間" width="160">
        <template slot-scope="scope">
          {{ TransformTime(scope.row.nosaleDate) }}
        </template>
      </el-table-column>
      <el-table-column prop="creator" label="建立者" width="100" />
      <el-table-column prop="content" label="內容" />
    </el-table>
    <div class="table-pagination">
      <el-pagination
        :current-page="1"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script>
import checkPermission from '@/utils/permission'
import moment from 'moment'
import { deleteAnnounce, updateAnnounce } from '@/api/announcement'
import permission from '@/directive/permission'
import { getToken } from '@/utils/auth'

export default {
  name: 'Announcement',
  directives: { permission },
  props: {
    tableData: {
      type: Array,
      default() {
        return []
      }
    }
  },

  data() {
    return {}
  },
  methods: {
    checkPermission,
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    edit(title, row) {
      this.$emit('edit', { title, row })
    },
    remove(id, state) {
      if (state === '2') {
        this.$message.warning('此產品上架中，請先下架產品再刪除')
      } else {
        const formData = new FormData()
        formData.append('id', id)
        deleteAnnounce(formData)
          .then((response) => {
            const { data } = response
            if (data.success) {
              this.$emit('initdata')
              this.$message.success(data.msg)
            } else {
              this.$message.warning(data.msg)
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    lanuch(type, row) {
      const formData = new FormData()
      formData.append('title', row.title)
      formData.append('category', row.category)
      if (type === 'on') {
        formData.append('onsaleDate', moment().valueOf())
        formData.append('nosaleDate', row.nosaleDate)
      } else {
        formData.append('onsaleDate', row.onsaleDate)
        formData.append('nosaleDate', moment().valueOf())
      }
      formData.append('content', row.content)
      formData.append('id', row.id)
      formData.append('token', getToken())
      updateAnnounce(formData)
        .then((response) => {
          const { data } = response
          if (data.success) {
            this.$emit('initdata')
            this.$message.success(data.msg)
          } else {
            this.$message.warning(data.msg)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getState(state) {
      switch (state) {
        case '1':
          return '未上架'
        case '2':
          return '上架中'
        case '3':
          return '已下架'
      }
    },
    TransformTime(time) {
      return moment(time).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>
<style lang="scss" scoped>
.el-pagination {
  width: 100%;
  text-align: right;
}
</style>
