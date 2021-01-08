<template>
  <div :style="{ height: height, width: width }"></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
import moment from 'moment'
import { deepClone } from '@/utils'
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
    'group.tableData': {
      deep: true,
      handler(val) {
        if (val) {
          this.setOptions(this.group.tableData)
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
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.group.tableData)
    },
    setOptions(chartData) {
      this.dateList = []
      this.yAxisList = []
      const newData = deepClone(chartData)
      newData.sort(function(a, b) {
        return a[0] - b[0]
      })
      // const formmat = this.group.date === 'dau'?'YYYY-MM-DD':'YYYY-MM-DD'
      newData.forEach(element => {
        this.dateList.push(moment(element[0]).format('YYYY-MM-DD'))
        this.yAxisList.push(element[1])
      })
      this.chart.setOption({
        title: {
          text: !newData.length ? '無資料' : ''
        },
        xAxis: {
          // show: chartData.length,
          data: this.dateList,
          boundaryGap: false,
          axisTick: {
            show: false
          }
          // splitLine: {
          //   show: false
          // }
        },
        grid: {
          left: 40,
          right: 40,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: ['dau', 'wau', 'mau']
        },
        // legend: {
        //   show: chartData.length,
        //   y: 'bottom',
        //   icon: 'circle',
        //   itemWidth: 9,
        //   itemHeight: 9,
        //   padding: [35, 0, 25, 0],
        //   data: ['新增帳戶數'],
        //   textStyle: {
        //     fontSize: 13,
        //     color: ['FC7127']
        //   }
        // },
        series: [
          {
            name: `${this.group.date}`,
            type: 'line',
            symbolSize: 5,
            symbol: 'circle',
            smooth: 0,
            itemStyle: {
              normal: {
                color: '#3888fa',
                lineStyle: {
                  color: '#3888fa',
                  width: 2
                },
                areaStyle: {
                  color: '#f3f8ff'
                }
              }
            },
            data: this.yAxisList,
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
          }
        ]
      })
    }
  }
}
</script>
