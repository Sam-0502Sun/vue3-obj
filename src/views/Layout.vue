<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <div class="logo-container">Sam</div>
        <el-menu
          :default-active="address"
          router
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item @click="addTag(item)" v-for="item in menuList" :key="item.name" :index="item.url">
            <el-icon><aim /></el-icon>
            <template #title>{{item.name}}</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="header-right">
            <screenfull id="screenfull" class="right-fullscreen" />
            <Avatar class="avatar" @child = 'clickEvent' />
          </div>
        </el-header>
        <div class="main-top">
          <el-button v-if="isCollapse === false" type="primary" plain @click="changeAsideMenu">123</el-button>
          <el-button v-else type="primary" plain @click="changeAsideMenu">456</el-button>
          <div class="tag-group">
            <span class="tag-group__title">Dark</span>
            <el-tag
              v-for="item in tags"
              :key="item.name"
              :type="item.type"
              effect="dark"
              closable
              @close="closeTag(item)"
              @click="clickTag(item)"
            >
              {{ item.name }}
            </el-tag>
          </div>
        </div>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Screenfull from '@/components/screenfull/index'
import Avatar from '@/components/avatar/index'
import { reactive, ref } from 'vue'
import router from '@/router'
import { useStore } from 'vuex'

export default {
  name: 'Layout',
  components: {
    Screenfull,
    Avatar
  },
  setup () {
    const isCollapse = ref(false)
    const menuList = reactive([
      {
        name: '首页',
        type: 'primary',
        url: '/'
      },
      {
        name: '产品',
        type: 'info',
        url: '/goods'
      },
      {
        name: '会员',
        type: 'danger',
        url: '/member'
      }
    ])
    let tags = reactive([])
    const address = ref('')
    const store = useStore()
    tags = store.state.tag.tags
    address.value = router.currentRoute.value.path

    const changeAsideMenu = () => {
      isCollapse.value = !isCollapse.value
    }
    // 点击menu添加tag
    const addTag = (item) => {
      const arr = store.state.tag.tags
      // 判断是否已经打开相关tag
      if (JSON.stringify(arr).includes(item.name)) {
        console.log(true)
      } else {
        tags.push(item)
        store.commit('tag/addTage', tags)
        console.log(false)
      }
    }
    // 点击关闭tag
    const closeTag = (item) => {
      tags.splice(tags.indexOf(item), 1)
      if (tags.length > 0) {
        router.push(tags[tags.length - 1].url)
        address.value = tags[tags.length - 1].url
      } else {
        router.push('/')
        address.value = '/'
      }
      store.commit('tag/addTage', tags)
    }
    // 点击选择tag
    const clickTag = (item) => {
      router.push(item.url)
      address.value = item.url
    }

    // 子组件用户头像点击事件传值，判断是否需要激活tag
    const clickEvent = (val) => {
      addTag(val)
      address.value = val.url
    }

    return {
      isCollapse,
      changeAsideMenu,
      menuList,
      tags,
      addTag,
      closeTag,
      clickTag,
      address,
      clickEvent
    }
  }
}
</script>

<style lang="less" scoped>
.common-layout {
  width: 100%;
  height: 100vh;
  .el-container {
    width: 100%;
    height: 100vh;

    .logo-container {
      height: 60px;
    }
    .el-aside {
      width: unset;
      background-color: #304055;
      .el-menu {
        background-color: unset;
      }
      .el-menu-item {
        display: flex;
        color: #fff;
      }
      .el-menu-item:hover {
        background-color: #1e2635;
      }
      .el-menu-item.is-active {
        color: #409eff;
      }
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
      }
    }
    .el-header {
      background-color: #fff;
      border-bottom: 1px solid #333;
      display: flex;
      align-items: center;
      position: relative;
      .header-right {
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;
        .right-fullscreen {
          display: inline-block;
          margin: 0 5px;
        }
        .avatar {
          display: block;
          margin: 0 20px 0 5px;
        }
      }
    }
    .main-top {
      height: 50px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #333;
      .el-tag {
        margin: 0 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
