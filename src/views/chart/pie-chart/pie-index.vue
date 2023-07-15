<template>
  <div v-transverse-slide>
    <div>饼图</div>
    <div class="bin" v-wave="{
      color: 'rebeccapurple',
      initialOpacity: 0.5,
      duration: 0.5,
      easing: 'ease-in'
    }"></div>
  </div>
</template>

<script>
export default {
  name: 'PieIndex'
}
</script>

<style lang="less" scoped>
.bin {
  height: 200px;
  width: 200px;
  border: 1px solid #333333;
}
</style>
