<template>
  <div>
    <i class="download-icon el-icon-download"></i>
    <line-marker />
  </div>
</template>
<script>
import LineMarker from '@/components/Charts/LineMarker'
export default {
  name: 'Chart',
  components: { LineMarker }
}
</script>
<style lang="scss" scoped>
.download-icon {
  width: 100%;
  text-align: right;
}
</style>
