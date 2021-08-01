import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'
import 'element-ui/lib/theme-chalk/index.css';
import { createPersistedState, createSharedMutations } from 'vuex-electron'

const state = {
  main: 0,
  currPalyList: { name: 1 }
}

const mutations = {
  DECREMENT_MAIN_COUNTER(state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER(state) {
    state.main++
  },
  SET_CURR_PALY_LIST(state, value) {
    state.currPalyList = value;
  }
}

const actions = {
  someAsyncTas({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  },
  addPlayList({ commit },value) {
    console.log('addPlayList');
    commit('SET_CURR_PALY_LIST',value)
  }
}

Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(VueGoodTablePlugin);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: [
    // createPersistedState(),
    // createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
})
