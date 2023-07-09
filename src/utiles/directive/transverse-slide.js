// 滑入动效自定义指令
const DISTANCE = -150
const DURATION = 1500

export default {
  mounted (el) {
    el.animate([
      {
        transform: `translateX(${DISTANCE}px)`,
        opacity: 0
      },
      {
        transform: 'translateX(0)',
        opacity: 1
      }
    ], {
      duration: DURATION,
      easing: 'ease'
    })
  }
}
