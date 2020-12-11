<template>
  <div>
    <el-table
      :data="tableData"
      row-key="id"
      border
    >
      <el-table-column
        v-if="checkPermission(['修改發送物品'])"
        prop="operating"
        label="功能"
        width="240"
      >
        <template slot-scope="scope">
          <!-- <el-button type="primary" size="small">瀏覽</el-button> -->
          <el-button type="primary" size="small" @click="edit('編輯',scope.row)">編輯</el-button>
          <el-button v-if="scope.row.status==='未發送'" type="success" size="small" @click="send(scope.row)">立即發送</el-button>
          <el-button type="danger" size="small" @click="remove(scope.row.id)">刪除</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="id"
        label="編號"
        width="100"
        sortable
      />
      <el-table-column
        prop="title"
        label="標題"
        width="180"
      />
      <el-table-column
        prop="status"
        label="狀態"
        width="100"
      />
      <el-table-column
        label="發送時間"
        prop="senddate"
        width="160"
        sortable
      >
        <template slot-scope="scope">
          {{ scope.row.senddate }}
        </template>
      </el-table-column>
      <el-table-column
        prop="creator"
        label="建立者"
        width="100"
      />
      <el-table-column
        prop="content"
        label="內容"
      />
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
import moment from 'moment'
import { deleteItem, updateItem } from '@/api/item'
import checkPermission from '@/utils/permission'
export default {
  name: 'Item',
  props: {
    tableData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
    }
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
    remove(id) {
      const formData = new FormData()
      formData.append('id', id)
      deleteItem(formData)
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
    send(row) {
      const formData = new FormData()
      formData.append('title', row.title)
      formData.append('senddate', moment(Date.now()).format(
        'yyyy-MM-DD HH:mm:ss'
      ))
      formData.append('status', row.status)
      formData.append('content', row.content)
      formData.append('id', row.id)
      updateItem(formData)
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
  }
}
</script>
<style lang="scss" scoped>
.el-pagination{
  width: 100%;
  text-align: right;
}
</style>
