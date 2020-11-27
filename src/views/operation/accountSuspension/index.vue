<template>
  <div class="page-container">
    <div class="table-container">
      <el-tag>帳號停權</el-tag>
      <el-button icon="el-icon-plus" type="primary" circle style="float: right" />
      <el-tabs v-model="activeName" style="margin-top:10px;">
        <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
          <template v-if="activeName === 'a'">
            <p>停權名單</p>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AccountSuspension',
  data() {
    return {
      tabMapOptions: [
        { label: '停權名單', key: 'a' }
      ],
      activeName: 'a'
    }
  },
  computed: {
  },
  created() {

  },
  methods: {
  }
}
</script>
