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
    },
    type: {
      type: String,
      default: ''
    }
  },
  inject: ['group'],
  data() {
    return {
      chart: null,
      dateList: [],
      yAxisList: []
    }
  },
  watch: {
    type: {
      deep: true,
      handler(val) {
        if (val) {
          this.setOptions(this.group.tableData)
        }
      }
    },
    'group.tableData': {
      deep: true,
      handler(val) {
        if (val) {
          this.initChart()
        }
      }
    }
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
      this.chart = echarts.init(this.$el)
      this.setOptions(this.group.tableData)
    },
    setOptions(chartData) {
      this.dateList = []
      this.yAxisList = []
      chartData.forEach(element => {
        this.dateList.push(element.date)
        this.yAxisList.push(element.amount)
      })
      this.chart.setOption({
        title: {
          text: !chartData.length ? '無資料' : ''
        },
        xAxis: {
          show: chartData.length,
          data: this.dateList,
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
          show: chartData.length,
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
            data: this.yAxisList,
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          }
        ]
      })
    }
  }
}
</script>
