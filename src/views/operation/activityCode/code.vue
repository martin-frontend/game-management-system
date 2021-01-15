<template>
  <div>
    <el-table
      :data="tableData"
      border
    >
      <el-table-column
        v-if="checkPermission(['修改活動序號'])"
        prop="operating"
        label="功能"
        width="250"
      >
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="edit('編輯',scope.row)">瀏覽</el-button>
          <el-button type="primary" size="small">查看序號</el-button>
          <el-button type="danger" size="small" @click="remove(scope.row.id)">刪除</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="id"
        label="編號"
        width="100"
      />
      <el-table-column
        prop="title"
        label="標題"
        width="180"
      />
      <el-table-column
        prop="type"
        label="類型"
        width="140"
      />
      <el-table-column
        prop="amount"
        label="數量"
        width="100"
      />
      <el-table-column
        prop="status"
        label="狀態"
        width="100"
      />
      <el-table-column
        prop="startdate"
        label="開始時間"
        width="160"
      >
        <template slot-scope="scope">
          {{ scope.row.startdate | moment }}
        </template>
      </el-table-column>
      <el-table-column
        prop="enddate"
        label="結束時間"
        width="160"
      >
        <template slot-scope="scope">
          {{ scope.row.enddate | moment }}
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
import { deleteCode } from '@/api/code'
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
      deleteCode(formData)
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
