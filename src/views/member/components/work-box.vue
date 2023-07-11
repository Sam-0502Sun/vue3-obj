<template>
  <div class="work-box-container">
    <el-table
      :data="memberData"
      max-height="500"
      style="width: 100%"
      highlight-current-row
      @row-click="onRowClick"
    >
      <el-table-column fixed prop="date" label="Date" width="150" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="City" width="120" />
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
  <el-dialog
    v-model="centerDialogVisible"
    title="添加新成员"
    width="30%"
    align-center
  >
    <el-form :inline="true" :model="newMemberData" class="demo-form-inline">
      <el-form-item label="Activity time" prop="date" >
        <el-input v-model="newMemberData.date" />
      </el-form-item>
      <el-form-item label="Activity name" prop="name" >
        <el-input v-model="newMemberData.name" />
      </el-form-item>
      <el-form-item label="State" prop="state" >
        <el-input v-model="newMemberData.state" />
      </el-form-item>
      <el-form-item label="city" prop="city" >
        <el-input v-model="newMemberData.city" />
      </el-form-item>
      <el-form-item label="address" prop="address">
        <el-input v-model="newMemberData.address" type="textarea" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancelNewMember">取消</el-button>
        <el-button type="primary" @click="saveNewMember">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'WorkBox',
  setup (props, { emit }) {
    const currentRow = ref()
    const store = useStore()
    const centerDialogVisible = ref(false)
    const newMemberData = ref({
      date: '',
      name: '',
      state: '',
      city: '',
      address: ''
    })
    const memberData = store.state.member.tableData
    const onRowClick = (row, event, column) => {
      currentRow.value = row
      emit('drawerMessage', currentRow.value)
    }

    const handleClick = () => {
      console.log('click')
    }

    // 打开添加会员浮窗
    const onAddItem = () => {
      centerDialogVisible.value = true
    }
    // 删除当前行
    const deleteRow = (index) => {
      memberData.splice(index, 1)
      store.commit('member/setTableData', memberData.value)
    }

    /*
    添加新会员Dialog悬浮框
    saveNewMember点击确定保存新添加成员信息
    cancelNewMember点击取消放弃添加新用户
     */
    const saveNewMember = () => {
      centerDialogVisible.value = false
      memberData.push(newMemberData.value)
      store.commit('member/setTableData', memberData.value)
    }
    const cancelNewMember = () => {
      centerDialogVisible.value = false
      newMemberData.value = {
        date: '',
        name: '',
        state: '',
        city: '',
        address: ''
      }
    }

    return {
      handleClick,
      memberData,
      currentRow,
      onRowClick,
      onAddItem,
      centerDialogVisible,
      newMemberData,
      saveNewMember,
      cancelNewMember,
      deleteRow
    }
  }
}
</script>

<style lang="less" scoped>
.el-dialog {
  .el-form {
    .el-form-item {
      display: block;
    }
  }
}
</style>
