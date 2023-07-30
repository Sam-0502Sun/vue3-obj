<template>
  <div class="work-box-container">
    <el-table
      :data="memberData"
      max-height="500"
      style="width: 100%"
      highlight-current-row
      @row-click="onRowClick"
    >
      <el-table-column fixed prop="age" label="Age" width="150" />
      <el-table-column prop="xingming" label="Name" width="120" />
      <el-table-column prop="email" label="Email" width="240" />
      <el-table-column prop="year" label="Year" width="120" />
      <el-table-column prop="address" label="Address" width="600" />
      <el-table-column prop="zip" label="Zip" width="120" />
      <el-table-column fixed="right" label="Options" width="120">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="handleClick"
          >添加</el-button
          >
          <el-button @click.stop="deleteRow(scope.$index)" link type="primary" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button class="mt-4" style="width: 100%" @click="onAddItem">
      添加新成员
    </el-button>
  </div>
  <div>
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 40]"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import { findTaskData } from '@/api/taskApi'

export default {
  name: 'TaskChart',
  setup () {
    const currentPage = ref(1)
    const pageSize = ref(10)
    const disabled = ref(false)
    const background = ref(false)
    const memberData = ref([])
    // 请求参数
    const reqParams = ref({
      currentPage: 1,
      pageSize: 10
    })

    const handleSizeChange = () => {
    }
    const handleCurrentChange = () => {
    }
    findTaskData(reqParams).then(result => {
      memberData.value = result.data
    })

    return {
      memberData,
      currentPage,
      pageSize,
      disabled,
      background,
      handleSizeChange,
      handleCurrentChange
    }
  }
}
</script>

<style lang="less" scoped>

</style>
