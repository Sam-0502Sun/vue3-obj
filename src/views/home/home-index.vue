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
      <kinesis-element class="circle" type="depth" :strength="20">
      </kinesis-element>
    </kinesis-container>
    <button v-wave="{
  color: 'rebeccapurple',
  initialOpacity: 0.5,
  duration: 2,
  easing: 'ease-in',
}">primary
    </button>
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
    background-color: turquoise;
  }
}
</style>
