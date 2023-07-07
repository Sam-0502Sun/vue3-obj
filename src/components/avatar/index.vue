<template>
  <div class="block">
    <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
  </div>
  <el-dropdown :hide-on-click="false">
    <div class="drop-icon">
      <el-icon class="icon">
        <arrow-down/>
      </el-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Avatar',
  setup () {
    const squareUrl = ref('https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png')

    return {
      squareUrl
    }
  }
}
</script>

<style lang="less" scoped>
.el-dropdown {
  .drop-icon {
    background-color: azure;
    .icon {
    }
  }
}
</style>
