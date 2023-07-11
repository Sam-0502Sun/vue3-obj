import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// 引入小模块
import tag from './modules/tag'
import member from './modules/member/member'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    tag,
    member
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
