<template>
  <div>
    <el-table
      :data="tableData"
      border
    >
      <el-table-column
        v-if="checkPermission(['修改帳號停權'])"
        prop="operating"
        label="功能"
        width="120"
      >
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="recovery(scope.row)">復權</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="account"
        label="帳號"
        width="180"
      />
      <el-table-column
        label="復權時間"
      >
        <template slot-scope="scope">
          {{ TransformTime(scope.row.releaseState,scope.row.releaseDate) }}
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
        :page-sizes="[25, 50, 75, 100]"
        :page-size="25"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageTotal"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script>
import checkPermission from '@/utils/permission'
import { updateSuspension } from '@/api/suspension'
import moment from 'moment'

export default {
  name: 'Item',
  props: {
    tableData: {
      type: Array,
      default() {
        return []
      }
    },
    pageTotal: {
      type: Number,
      default() {
        return 0
      }
    }

  },
  data() {
    return {
      pageData: {
        pagesize: 25,
        page: 1
      }
    }
  },
  methods: {
    checkPermission,
    handleSizeChange(val) {
      this.pageData.pagesize = val
      this.$emit('pageChange', this.pageData)
      this.$emit('initdata')
    },
    handleCurrentChange(val) {
      this.pageData.page = val
      this.$emit('pageChange', this.pageData)
      this.$emit('initdata', this.pageData)
    },
    recovery(row) {
      const formData = new FormData()
      formData.append('id', row.id)
      formData.append('releaseState', '0')
      formData.append('releaseDate', moment().valueOf())
      formData.append('reason', '')
      updateSuspension(formData)
        .then((resopnse) => {
          const { data } = resopnse
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
    TransformTime(state, time) {
      console.log(state)
      if (state === '1') {
        return '永久停權'
      } else {
        return moment(time).format('YYYY-MM-DD HH:mm:ss')
      }
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
