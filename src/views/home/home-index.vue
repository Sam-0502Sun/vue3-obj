<template>
  <div class="homepage-container" v-transverse-slide>
    <kinesis-container>
      Here, you can put
      <div class="box">
        <kinesis-element :strength="10">
          我
        </kinesis-element>
        <kinesis-element :strength="20">
          是
        </kinesis-element>
        <kinesis-element :strength="30">
          主
        </kinesis-element>
        <kinesis-element :strength="40">
          页
        </kinesis-element>
      </div>
    </kinesis-container>
    <button v-wave="{
      color: 'rebeccapurple',
      initialOpacity: 0.5,
      duration: 0.5,
      easing: 'ease-in'
    }">
      primary
    </button>
    <kinesis-container>
      <kinesis-element
        :strength="10"
        type="depth"
        class="circle"
      >
        <img src="../../assets/images/strobarry.jpg" alt="本地图片"/>
      </kinesis-element>
    </kinesis-container>
  </div>
</template>

<script>

export default {
  name: 'HomeIndex',
  components: {},
  setup () {
  }
}
</script>

<style lang="less" scoped>
.homepage-container {
  width: 100%;
  height: 100%;

  .box {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .circle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
  }
}
</style>
