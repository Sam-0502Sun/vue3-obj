<template>
  <div class="card-container">
    <img :src="src" alt="" />
    <div class="card-text">
      <div class="text">{{txt}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PicIndex',
  props: ['src', 'txt'],
  setup () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.card-container {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    transition: opacity .3s ease;
  }
  .card-text {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .text {
      color: white;
    }
  }
}
.card-container:hover img {
  opacity: 1;
}
.card-text {
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  transition: opacity .3s ease;
}
.card-container:hover .card-text {
  opacity: 1;
}
</style>
