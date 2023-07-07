import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// 引入小模块
import tag from './modules/tag'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    tag
  },
  // 配置插件，数据持久化
  plugins: [
    createPersistedState({
      key: 'sam-test-system',
      path: [
        'tag'
      ]
    })
  ]
})
