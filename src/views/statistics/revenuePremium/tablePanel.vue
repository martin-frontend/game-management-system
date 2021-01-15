<template>
  <div>
    <i class="download-icon el-icon-download"></i>
    <el-tabs v-model="statistic">
      <el-tab-pane
        v-for="item in statisticOptions"
        :key="item.value"
        :label="item.label"
        :name="item.value"
      /></el-tabs>
    <revenueData v-if="statistic === 'revenue'" />
    <iapData v-else-if="statistic === 'iap'" />
    <storeData v-else />
  </div>
</template>
<script>
import revenueData from './revenueData'
import iapData from './iapData'
import storeData from './storeData'
export default {
  name: 'TablePanel',
  components: { revenueData, iapData, storeData },
  data() {
    return {
      statistic: 'revenue',
      statisticOptions: [
        { value: 'revenue', label: '營收' },
        { value: 'iap', label: 'IAP商品' },
        { value: 'store', label: '遊戲商店' }
      ]
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
