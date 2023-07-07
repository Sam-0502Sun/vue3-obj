<template>
  <div>
    <el-icon class="fullScreen-Btn" @click="click">
      <help-filled/>
    </el-icon>
  </div>
</template>

<script>
import screenfull from 'screenfull'
import { ref } from 'vue'

export default {
  name: 'Screenfull',
  setup () {
    const isFullscreen = ref(false)
    const click = () => {
      screenfull.toggle()
    }

    return {
      isFullscreen,
      click
    }
  }
}
</script>

<style scoped>
.fullScreen-Btn {
  display: inline-block;
  cursor: pointer;
  width: 40px;
  height: 40px;
}
.el-icon svg {
  width: 40px;
  height: 40px;
}
.el-icon :hover {
  color: blue;
}
</style>
