<template>
  <div v-transverse-slide class="member-container">
    <div>Member page</div>
    <div class="member-top-btn">
      <TopBox/>
    </div>
    <div class="member-line-chart">
      <InfoBox/>
    </div>
    <div class="member-bottom-container">
      <el-row :gutter="20">
        <el-col :span="12">
          <WorkBox @drawerMessage="getDrawerValue"/>
        </el-col>
        <el-col :span="6">
          123
        </el-col>
        <el-col :span="6">
          <InfoCard />
        </el-col>
      </el-row>
    </div>
    <div class="member-drawer">
      <el-drawer
        v-model="drawer"
        title="I am the title"
        :with-header="false"
        :before-close="handleClose"
      >
        <span class="InfoLable">学生信息卡</span>
        <el-form :inline="true" :model="drawerData" class="demo-form-inline">
          <el-form-item label="Activity time" prop="date" >
            <el-input v-model="drawerData.date" />
          </el-form-item>
          <el-form-item label="Activity name" prop="name" >
            <el-input v-model="drawerData.name" />
          </el-form-item>
          <el-form-item label="State" prop="state" >
            <el-input v-model="drawerData.state" />
          </el-form-item>
          <el-form-item label="city" prop="city" >
            <el-input v-model="drawerData.city" />
          </el-form-item>
          <el-form-item label="address" prop="address">
            <el-input v-model="drawerData.address" type="textarea" />
          </el-form-item>
        </el-form>
      </el-drawer>
    </div>
  </div>
</template>

<script>
import TopBox from './components/top-box'
import InfoBox from './components/info-box'
import WorkBox from './components/work-box'
import InfoCard from './components/info-card'
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { useStore } from 'vuex'

export default {
  name: 'MemberIndex',
  components: {
    TopBox,
    InfoBox,
    WorkBox,
    InfoCard
  },
  setup () {
    const drawer = ref(false)
    const drawerData = ref({
      date: '',
      name: '',
      state: '',
      city: '',
      address: ''
    })
    const store = useStore()

    const getDrawerValue = (data) => {
      drawerData.value = data
      drawer.value = true
    }

    const handleClose = () => {
      ElMessageBox.confirm('确定要保存并关闭信息卡吗？')
        .then(() => {
          store.commit('member/setTableData', drawerData)
          drawer.value = false
        })
        .catch(() => {
          // catch error
        })
    }

    return {
      drawer,
      handleClose,
      drawerData,
      getDrawerValue
    }
  }
}
</script>

<style lang="less" scoped>
.member-container {
  .member-top-btn {
    height: 80px;
  }

  .member-line-chart {
    margin-top: 30px;
  }

  .member-bottom-container {
    margin-top: 50px;
  }

  .member-drawer {
    .el-drawer {
      .el-form {
        .el-form-item {
          display: block;
        }
      }
    }
  }
}
</style>
