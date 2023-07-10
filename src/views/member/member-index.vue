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
          <WorkBox/>
        </el-col>
        <el-col :span="6">
          123
        </el-col>
        <el-col :span="6">
          456
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import TopBox from './components/top-box'
import InfoBox from './components/info-box'
import WorkBox from './components/work-box'

export default {
  name: 'MemberIndex',
  components: {
    TopBox,
    InfoBox,
    WorkBox
  }
}
</script>

<style lang="less" scoped>
.member-container {
  .member-top-btn {
    height: 80px;
  }

  .member-line-chart {
    margin-top: 20px;
  }
}
</style>
