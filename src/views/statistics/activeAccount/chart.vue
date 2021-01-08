<template>
  <div>
    <!-- <i class="download-icon el-icon-download"></i> -->
    <el-tabs v-model="date" @tab-click="handleClick">
      <el-tab-pane
        v-for="item in dateOptions"
        :key="item.value"
        :label="item.label"
        :name="item.value"
      />
    </el-tabs>
    <line-marker v-if="!$parent.loading" :type="date" />
    <tableData :date="date" />
  </div>
</template>
<script>
import LineMarker from '@/components/Charts/LineMarker'
import tableData from './tableData'

export default {
  name: 'Chart',
  inject: ['group'],
  components: { LineMarker, tableData },
  data() {
    return {
      date: 'dau',
      dateOptions: [
        { value: 'dau', label: 'DAU' },
        { value: 'wau', label: 'WAU' },
        { value: 'mau', label: 'MAU' }
      ]
    }
  },
  methods: {
    handleClick() {
      this.$parent.changeType(this.date)
    }
  }
}
</script>
<style lang="scss" scoped>
.download-icon{
  width: 100%;
  text-align: right;
}
</style>
