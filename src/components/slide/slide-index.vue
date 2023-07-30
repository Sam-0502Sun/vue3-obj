<template>
  <div>
    <hooper>
      <slide>
        slide 1
      </slide>
      <slide>
        slide 2
      </slide>
      ...
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'SlideIndex',
  setup () {
    return {
      Hooper,
      Slide
    }
  }
}
</script>

<style lang="less" scoped>

</style>
