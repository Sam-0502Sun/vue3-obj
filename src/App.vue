<template>
  <router-view/>
</template>

<script>
import * as echarts from 'echarts'
import { provide } from 'vue'
export default {
  setup () {
    provide('ec', echarts)
  }
}
</script>

<style lang="less">

</style>
