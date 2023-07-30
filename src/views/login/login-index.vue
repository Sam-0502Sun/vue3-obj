<template>
  <div class="login-container">
    <section class="section">
      <div class="color"></div>
      <div class="color"></div>
      <div class="color"></div>
    </section>
    <div class="login-box">
      <el-form :model="form" label-width="120px">
        <el-form-item label="Username">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="form.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button>注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { userAccountLogin } from '@/api/login'
import { useRouter } from 'vue-router'

export default {
  name: 'LoginIndex',
  setup () {
    const router = useRouter()
    const form = ref({
      username: 'sam',
      password: '123'
    })

    const onSubmit = () => {
      userAccountLogin(form).then((res) => {
        router.push('/')
        console.log(res)
        console.log('登陆成功!')
      })
    }

    return {
      form,
      onSubmit
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  height: 100vh;
  width: 100%;
  position: relative;
  .section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    filter: blur(150px);
    .color {
      position: absolute;
    }
    .color:nth-child(1) {
      top: -350px;
      width: 100%;
      height: 600px;
      background: #ff359b;
    }
    .color:nth-child(2) {
      bottom: 30px;
      left: 100px;
      width: 900px;
      height: 800px;
      background: #fffd87;
    }
    .color:nth-child(3) {
      bottom: 50px;
      right: 100px;
      width: 900px;
      height: 900px;
      background: #00dfff;
    }
  }
  .login-box {
    width: 500px;
    height: 300px;
    background-color: rgba(225, 225, 225, .6);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 3px solid rgba(255, 255, 255, .5);
    border-radius: 10px;
    display: flex;
    .el-form {
      width: 80%;
      height: 80%;
      margin: auto;
    }
  }
  .login-box:hover {
    border: 1px solid rgba(255, 255, 255);
    box-shadow: 20px 20px 40px 10px #333333;
  }
}
</style>
