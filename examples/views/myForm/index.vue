<template>
  <div>
    <k-form-design title="我的表单设计器" ref='kfd' :toolbarsTop="toolbarsTop" @save="handleSave">
      <!-- 左侧操作区域插槽 start -->
      <template slot="left-action">
        <a-tooltip title="getFieldSchema">
          <a>
            <a-icon type="experiment" @click="getFieldSchema"/>
            <!-- <span>测试左侧插槽（showToolbarsText属性为true时需要）</span> -->
          </a>
        </a-tooltip>
      </template>
      <!-- 左侧操作区域插槽 end -->
      <!-- 右侧操作区域插槽 start -->
      <template slot="right-action">
        <a-tooltip title="快速导入">
          <a>
            <a-icon type="experiment"  @click="importData"/>
            <!-- <span>测试右侧插槽（showToolbarsText属性为true时需要）</span> -->
          </a>
        </a-tooltip>
      </template>
      <!-- 右侧操作区域插槽 end -->
    </k-form-design>
  </div>
</template>

<script>
import data from './data.js'
export default {
  data() {
    return {
      toolbarsTop: false, // 菜单栏位置
    }
  },
  methods: {
    // 导入json
    importData () {
      this.$refs.kfd.handleSetData(data)
    },
    // 保存，点击事件
    handleSave(values) {
      alert("触发保存方法");
      console.log(values);
    },
    getFieldSchema() {
      const data = this.$refs.kfd.getFieldSchema();
      console.log(data);
    },
  },
  mounted() {},
}
</script>

<style lang="less" scoped>
</style>
