<template>
  <el-dropdown :hide-on-click="false" trigger="click">
    <div class="block">
      <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
      <el-icon class="icon">
        <arrow-down/>
      </el-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <template v-for="item in dropdownMenu" :key="item.name">
          <router-link :to="item.url">
            <el-dropdown-item @click="jumpTo(item)">{{item.name}}</el-dropdown-item>
          </router-link>
        </template>
        <el-dropdown-item divided>退出账号</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  name: 'Avatar',
  setup (props, { emit }) {
    const squareUrl = ref('https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png')
    const dropdownMenu = reactive([
      {
        name: '会员',
        type: 'danger',
        url: '/member'
      },
      {
        name: '首页',
        type: 'primary',
        url: '/'
      }
    ])
    const jumpTo = (item) => {
      emit('child', item)
    }

    return {
      squareUrl,
      dropdownMenu,
      jumpTo
    }
  }
}
</script>

<style lang="less" scoped>
.el-dropdown {
  cursor: pointer;
}
</style>
