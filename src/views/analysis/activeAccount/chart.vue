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
  </div>
</template>
<script>
import LineMarker from '@/components/Charts/LineMarker'

export default {
  name: 'Chart',
  inject: ['group'],
  components: { LineMarker },
  data() {
    return {
      date: 'DAU',
      dateOptions: [
        { value: 'DAU', label: 'DAU' },
        { value: 'WAU', label: 'WAU' },
        { value: 'MAU', label: 'MAU' },
        { value: 'NRU', label: 'NRU' }
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
