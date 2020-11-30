<template>
  <div>
    <line-marker :chart-data="chartData" />
  </div>
</template>
<script>
import LineMarker from '@/components/Charts/LineMarker'
export default {
  name: 'Chart',
  components: { LineMarker },
  data() {
    return {
      chartData: {
        expectedData: [100, 120, 161, 134, 105, 160, 165]
      }
    }
  }
}
</script>
