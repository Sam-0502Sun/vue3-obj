<template>
  <div v-transverse-slide>
    <div>Member page</div>
    <TopBox />
  </div>
</template>

<script>
import TopBox from './components/top-box'

export default {
  name: 'MemberIndex',
  components: {
    TopBox
  }
}
</script>

<style lang="less" scoped>

</style>
