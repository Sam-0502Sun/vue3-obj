<template>
  <div v-transverse-slide>
    <div>123</div>
    <div v-for="item in FormData" :key="item.name">
      <div>{{item.name}}</div>
      <div>{{item.phone}}</div>
      <div>{{item.age}}</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { findForm } from '@/api/chartAPI'

export default {
  name: 'ChartTestIndex',
  setup () {
    const FormData = ref([])
    findForm().then(data => {
      FormData.value = data
      console.log(data)
    })

    return {
      FormData
    }
  }
}
</script>

<style lang="less" scoped>

</style>
