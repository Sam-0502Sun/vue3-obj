<template>
  <div v-transverse-slide>
    <div>123</div>
    <div v-for="item in FormData" :key="item.name">
      <div>{{item.name}}</div>
      <div>{{item.phone}}</div>
      <div>{{item.age}}</div>
    </div>
    <div class="pic-container">
      <div
        v-for="item in picData"
        @mouseover="checkAddClass(item)"
        :id="item.name" class="test-pic"
        :class="{linkUrl: isActive}"
        :key="item.name"
      >
        <router-link v-if="item.url" :to="item.url">
          <PicIndex :src="item.src" :txt="item.txt" />
        </router-link>
        <PicIndex v-else :src="item.src" :txt="item.txt" />
      </div>
    </div>
<!--    <div>-->
<!--      <SlideIndex />-->
<!--    </div>-->
  </div>
</template>

<script>
import { ref } from 'vue'
import { findForm } from '@/api/chartAPI'
import PicIndex from '@/components/picture-component/pic-index'
// import SlideIndex from '@/components/slide/slide-index'

export default {
  name: 'ChartTestIndex',
  components: {
    PicIndex
    // SlideIndex
  },
  setup () {
    const FormData = ref([])
    findForm().then(data => {
      FormData.value = data
    })
    const picData = ref([
      {
        name: 1,
        src: require('@/assets/images/5.jpg'),
        txt: '你好！',
        url: '/member'
      },
      {
        name: 2,
        src: require('@/assets/images/sunrise-7493833_1280.jpg'),
        txt: '我叫Sam！'
      },
      {
        name: 3,
        src: require('@/assets/images/autumn-7562289_960_720.jpg'),
        txt: '我是男生！'
      }
    ])
    const isActive = ref(false)

    const checkAddClass = (item) => {
      if (item.url) {
        isActive.value = true
      } else {
        isActive.value = false
      }
    }

    return {
      FormData,
      picData,
      checkAddClass,
      isActive
    }
  }
}
</script>

<style lang="less" scoped>
.pic-container {
  display: flex;
  .test-pic {
    width: 400px;
    height: 280px;
    margin: 0 20px;
  }
  .linkUrl {
    cursor: pointer;
  }
}
</style>
