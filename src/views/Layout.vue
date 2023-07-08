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
          <template v-for="item in menuList" :key="item.name">
            <el-menu-item v-if="item.children === undefined" @click="addTag(item)" :index="item.url">
              <el-icon><aim /></el-icon>
              <template #title>{{item.name}}</template>
            </el-menu-item>
            <el-sub-menu v-else>
              <template #title>{{item.name}}</template>
              <el-menu-item v-for="i in item.children" :key="i.name" :index="i.url" @click="addTag(i)">{{i.name}}</el-menu-item>
            </el-sub-menu>
          </template>
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
          <el-icon class="border-collapse" size="20" v-if="isCollapse === false" @click="changeAsideMenu"><Fold /></el-icon>
          <el-icon class="border-collapse" size="20" v-else @click="changeAsideMenu"><Expand /></el-icon>
          <div class="tag-group">
            <span v-show="tags.length !== 0" class="tag-group__title">Tag标签</span>
            <el-tag
              v-for="item in tags"
              :key="item.name"
              effect="dark"
              closable
              @close="closeTag(item)"
              @click="clickTag(item)"
              @change="onChange(item)"
              :class="item.url === address ? 'isActive' : ''"
            >
              <span>{{ item.name }}</span>
            </el-tag>
            <el-button v-show="tags.length !== 0" @click="closeTagList" size="small" type="danger" :icon="Delete" circle />
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
import { Delete } from '@element-plus/icons-vue'
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
        type: 'success',
        url: '/goods'
      },
      {
        name: '会员',
        type: 'danger',
        url: '/member'
      },
      {
        name: '图表',
        type: 'warning',
        url: '/chart',
        children: [
          {
            name: '线性图',
            type: 'info',
            url: '/chart/lineChart'
          },
          {
            name: '饼图',
            type: 'info',
            url: '/chart/pieChart'
          }
        ]
      }
    ])
    let tags = reactive([])
    const address = ref('')
    const store = useStore()
    const checked = ref(false)
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
      clickTag(item)
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

    const onChange = (item) => {
      if (item.url === address.value) {
        checked.value = true
      }
    }

    const closeTagList = () => {
      tags.length = 0
      store.commit('tag/addTage', tags)
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
      clickEvent,
      onChange,
      checked,
      closeTagList,
      Delete
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
        border-right: 1px solid #333;
        .el-sub-menu {
          background-color: unset;
          color: #fff;
        }
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
      height: 33px;
      display: flex;
      align-items: center;
      line-height: 34px;
      border-bottom: 1px solid #333;
      padding: 0 10px;

      .border-collapse {
        cursor: pointer;
      }

      .el-tag {
        margin: 0 5px;
        cursor: pointer;
        background-color: unset;
        color: #333333;
        border: 1px solid #c0bbbb;
        span:before {
        }
      }
      .isActive {
        background-color: #42b983;
        color: #ffffff;
      }
      .close-icon {
        cursor: pointer;
        align-items: center;
      }
    }
  }
}
</style>
<style lang="less">
.el-menu {
  background-color: unset;
}
.el-sub-menu__title {
  color: #fff !important;
  font-size: 14px;
}

.el-sub-menu__title:hover {
  background-color: #1e2635;
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
.el-tag .el-tag__close {
  color: #333 !important;
}
</style>
