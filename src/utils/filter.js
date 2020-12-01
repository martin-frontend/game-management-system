import Vue from 'vue'
import moment from 'moment'

Vue.filter('moment', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).isValid() ? moment(dataStr).format(pattern) : ''
})
