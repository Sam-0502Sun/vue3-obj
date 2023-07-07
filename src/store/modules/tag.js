
// tag模块
export default {
  namespaced: true,
  state () {
    return {
      tags: []
    }
  },
  mutations: {
    addTage (state, payload) {
      state.tags.value = payload
    }
  },
  actions: {}
}
