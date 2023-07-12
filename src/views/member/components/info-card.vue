<template>
  <div class="info-card-container">
    <el-card :body-style="{ padding: '0px' }">
      <div class="img-box">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
      </div>
      <div style="padding: 14px">
        <span>Sam</span>
        <div class="bottom">
          <time class="time">{{ currentDate }}</time>
          <el-button text class="button">Operating</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'InfoCard',
  setup () {
    const currentDate = ref(new Date())

    return {
      currentDate
    }
  }
}
</script>

<style lang="less" scoped>
.img-box {
  overflow: hidden;
  .image {
    display: block;
    width: 100%;
  }
  .image:hover {
    animation: pic 1s ease-in-out;
  }
  @keyframes pic {
    0%{
      transform: scale(1);  /*开始为原始大小*/
    }
    70%{
      transform: scale(1.2);
    }
    100%{
      transform: scale(1);
    }
  }
}
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}
</style>
