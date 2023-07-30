<template>
  <div>图表页</div>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="线形图" name="first">
      <LineIndex />
    </el-tab-pane>
    <el-tab-pane label="饼图" name="second">
      <PieIndex />
    </el-tab-pane>
    <el-tab-pane label="Role" name="third">
      <ChartTestIndex />
    </el-tab-pane>
    <el-tab-pane label="Task" name="fourth">
      <TaskChart />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import LineIndex from './line-chart/line-index'
import PieIndex from './pie-chart/pie-index'
import ChartTestIndex from './chart-test/chart-test-index'
import TaskChart from './task-chart/task-chart'
import { onBeforeMount, ref } from 'vue'
import { TabsPaneContext } from 'element-plus'

export default {
  name: 'ChartIndex',
  components: {
    LineIndex,
    PieIndex,
    ChartTestIndex,
    TaskChart
  },
  setup () {
    const activeName = ref('first')

    // 把打开图表的具体页面写入sessionStorage加以记录
    const handleClick = (tab = TabsPaneContext, event = Event) => {
      sessionStorage.setItem('currentTab', tab.paneName)
    }
    // 挂载完成前判断sessionStorage里面是否存在'currentTab'，存在的话就打开之前的页面，不存在就打开默认页面
    onBeforeMount(() => {
      if (sessionStorage.getItem('currentTab')) {
        activeName.value = sessionStorage.getItem('currentTab')
      } else {
      }
    })

    return {
      activeName,
      handleClick
    }
  }
}
</script>

<style lang="less" scoped>

</style>
