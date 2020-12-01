<template>
  <div :style="{ height: height, width: width }"></div>
</template>

<script>
import echarts from 'echarts'
// require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '250px'
    },
    autoResize: {
      type: Boolean,
      default: true
    }
  },
  inject: ['group'],
  data() {
    return {
      chart: null
    }
  },
  watch: {
    'group.chartData': {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    },
    'group.type': {
      deep: true,
      handler(val) {
        if (val) { this.setOptions(this.group.chartData) }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.group.chartData)
    },
    setOptions({ allData, androidData, iosData } = {}) {
      const data = this.group.type === 'all' ? allData : this.group.type === 'android' ? androidData : iosData
      this.chart.setOption({
        xAxis: {
          data: [
            '2020年10月11日',
            '2020年10月12日',
            '2020年10月13日',
            '2020年10月14日',
            '2020年10月15日',
            '2020年10月16日',
            '2020年10月17日'
          ],
          boundaryGap: false,
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#20B2B0'
            },
            borderType: 'dashed'
          }
        },
        grid: {
          left: 15,
          right: 15,
          bottom: 77,
          top: 67,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              color: '#1F1F1F',
              shadowBlur: 0
            }
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#20B2B0'
            }
          },
          axisPointer: {
            show: false
          }
        },
        legend: {
          y: 'bottom',
          icon: 'circle',
          itemWidth: 9,
          itemHeight: 9,
          padding: [35, 0, 25, 0],
          data: ['新增帳戶數'],
          textStyle: {
            fontSize: 13,
            color: ['FC7127']
          }
        },
        series: [
          {
            name: '新增帳戶數',
            itemStyle: {
              normal: {
                color: '#20B2B0',
                lineStyle: {
                  color: '#20B2B0',
                  width: 4
                },
                barBorderRadius: [50, 50, 0, 0]
              },
              emphasis: {
                barBorderRadius: [50, 50]
              }
            },
            smooth: true,
            type: 'line',
            data: data,
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          }
        ]
      })
    }
  }
}
</script>
