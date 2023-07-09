<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <div class="grid-content ep-bg-purple"/>
      <el-card shadow="always">
        <div class="box">
          <el-icon class="icon">
            <HotWater/>
          </el-icon>
          <div class="lable">123</div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <div class="grid-content ep-bg-purple"/>
      <el-card shadow="always">
        <div class="box">
          <el-icon class="icon">
            <MostlyCloudy />
          </el-icon>
          <div class="lable">456</div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <div class="grid-content ep-bg-purple"/>
      <el-card shadow="always">
        <div class="box">
          <el-icon class="icon">
            <Eleme />
          </el-icon>
          <div class="lable">789</div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <div class="grid-content ep-bg-purple"/>
      <el-card shadow="always">
        <div class="box">
          <el-icon class="icon">
            <ElementPlus />
          </el-icon>
          <div class="lable">789</div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: 'TopBox',
  setup () {
    onMounted(() => {
      const paths = document.querySelectorAll('.icon .p')
      paths.forEach(path => {
        const len = path.getTotalLength()
        path.style.setProperty('--l', len)
      })
    })
  }
}
</script>

<style lang="less" scoped>
.el-card {
  cursor: pointer;
  .box {
    display: flex;
    .icon {
      display: block;
      color: #42b983;
      font-size: 25px;
    }

    .lable {
      width: 70%;
      text-align: center;
    }
  }
}

.el-card:hover {
  .icon {
    color: #42b983;
    font-size: 25px;
    animation: icon-move 0.4s linear forwards;
  }
  .lable {
    animation: lable-change 0.4s linear forwards;
  }
  @keyframes lable-change {
    from {
      font-size: 16px
    }
    to {
      font-size: 25px
    }
  }

  @keyframes icon-move {
    from {
      font-size: 25px
    }
    to {
      font-size: 40px
    }
  }
}
</style>
