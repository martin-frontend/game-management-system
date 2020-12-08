<template>
  <div>
    <el-table
      :data="tableData"
      border
    >
      <el-table-column
        prop="operating"
        label="功能"
        width="80"
      >
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="recovery(scope.row)">復權</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="id"
        label="編號"
        width="180"
      />
      <el-table-column
        prop="suspendid"
        label="角色ID"
        width="180"
      />
      <el-table-column
        prop="playerName"
        label="角色名稱"
        width="180"
      />
      <!-- <el-table-column
        prop="suspensionDays"
        label="停權天數"
        width="180"
      /> -->
      <el-table-column
        label="復權時間"
      >
        <template slot-scope="scope">
          {{ scope.row.recoverytime | moment }}
        </template>
      </el-table-column>
      <el-table-column
        prop="reason"
        label="原因"
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
import { updateSuspension } from '@/api/suspension'
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
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    recovery(row) {
      const formData = new FormData()
      formData.append('suspendid', row.id)
      formData.append('recoverytime', '')
      formData.append('suspendstate', 0)
      formData.append('reason', '')
      updateSuspension(formData)
        .then((resopnse) => {
          this.$emit('initdata')
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
