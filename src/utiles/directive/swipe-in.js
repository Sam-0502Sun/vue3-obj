const DISTANCE = -150
const DURATION = 2000

export default {
  mounted (el) {
    el.swipeIn = el.animate([
      {
        transform: `translateX(${DISTANCE}px)`,
        opacity: 0.5
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
