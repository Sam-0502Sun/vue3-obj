<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <!--        <div class="logo-container">Logo</div>-->
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
              <el-icon>
                <aim/>
              </el-icon>
              <template #title>{{ item.name }}</template>
            </el-menu-item>
            <el-sub-menu v-else>
              <template #title>{{ item.name }}</template>
              <el-menu-item v-for="i in item.children" :key="i.name" :index="i.url" @click="addTag(i)">{{ i.name }}
              </el-menu-item>
            </el-sub-menu>
          </template>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-icon class="border-collapse" size="20" v-if="isCollapse === false" @click="changeAsideMenu">
            <Fold/>
          </el-icon>
          <el-icon class="border-collapse" size="20" v-else @click="changeAsideMenu">
            <Expand/>
          </el-icon>
          <el-button type="primary" @click="changeDrawer">
            open
          </el-button>
          <div class="header-right">
            <screenfull id="screenfull" class="right-fullscreen"/>
            <Avatar class="avatar" @child='clickEvent'/>
          </div>
        </el-header>
        <div class="main-top" v-show="openValue === true">
          <div class="tag-group">
            <span v-show="tags.length !== 0" class="tag-group__title">标签栏</span>
            <el-tag
              v-for="item in tags"
              :key="item.name"
              closable
              @close="closeTag(item)"
              @click="clickTag(item)"
              :class="item.url === address ? 'isActive' : ''"
            >
              <div class="sigle-tag">
                <div v-show="item.url === address" class="white-point"></div>
                <span>{{ item.name }}</span>
              </div>
            </el-tag>
            <el-button v-show="tags.length !== 0" @click="closeTagList" size="small" type="danger" :icon="Delete"
                       circle/>
          </div>
        </div>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
      <el-drawer v-model="drawer" title="I am the title" :with-header="false">
        <span>Hi there!</span>
        <el-switch
          v-model="switchValue"
          class="ml-2"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          @change="changeSwitch"
        />
      </el-drawer>
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
        url: '/'
      },
      {
        name: '产品',
        url: '/goods'
      },
      {
        name: '会员',
        url: '/member'
      },
      {
        name: '图表',
        url: '/chart'
      }
    ])
    let tags = reactive([])
    const address = ref('/')
    const store = useStore()
    tags = store.state.tag.tags
    address.value = router.currentRoute.value.path
    const drawer = ref(false)
    const switchValue = ref(true)
    const openValue = ref()
    openValue.value = switchValue.value

    const changeSwitch = () => {
      openValue.value = switchValue.value
    }

    const changeDrawer = () => {
      drawer.value = true
    }

    const changeAsideMenu = () => {
      isCollapse.value = !isCollapse.value
    }
    // 点击menu添加tag
    const addTag = (item) => {
      const arr = store.state.tag.tags
      // 判断是否已经打开相关tag
      if (JSON.stringify(arr).includes(item.name)) {
      } else {
        tags.push(item)
        store.commit('tag/addTage', tags)
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

    const closeTagList = () => {
      router.push('/')
      tags.length = 0
      store.commit('tag/addTage', tags)
      address.value = '/'
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
      closeTagList,
      Delete,
      changeDrawer,
      drawer,
      switchValue,
      openValue,
      changeSwitch
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
      height: 50px;

      .border-collapse {
        cursor: pointer;
      }

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
      height: 29px;
      display: flex;
      align-items: center;
      line-height: 34px;
      border-bottom: 1px solid #333;
      padding: 0 10px;

      .el-tag {
        margin: 0 5px;
        cursor: pointer;
        background-color: unset;
        color: #333333;
        border: 1px solid #c0bbbb;
      }

      .isActive {
        background-color: #42b983;
        color: #ffffff;

        .sigle-tag {
          display: flex;
          align-items: center;

          .white-point {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #ffffff;
            margin-right: 5px;
          }
        }
      }

      .close-icon {
        cursor: pointer;
        align-items: center;
      }
    }

    .el-main {
      background-color: #f0f2f5;
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
