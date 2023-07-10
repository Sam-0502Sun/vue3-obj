<template>
  <div v-transverse-slide>
    <div>我是主页</div>
    <div class="box"></div>
  </div>
</template>

<script>

export default {
  name: 'HomeIndex',
  components: {
  },
  setup () {}
}
</script>

<style lang="less" scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: #42b983;
}
</style>
