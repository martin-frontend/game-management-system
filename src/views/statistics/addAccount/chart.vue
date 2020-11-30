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
        allData: [52, 120, 21, 134, 105, 160, 42],
        androidData: [100, 222, 333, 44, 2434, 512, 1],
        iosData: [3, 5553, 4, 232, 244, 16560, 332]
      }
    }
  }
}
</script>
