import Vue from 'vue'
import Vuex from 'vuex'
import state from './store/state'
import mutations from './store/mutations'
import getters from './store/getters'
import actions from './store/actions'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: state,
  actions,
  mutations,
  getters,
})

console.log(store)

export default store;
