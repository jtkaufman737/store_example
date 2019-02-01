import Vue from 'vue'
import Vuex from 'vuex'
import { store, mutations } from '../store.js'

const  ACCOUNT_ACTION              = ({ commit }, data)  => { store.commit('ACCOUNT_MUT', data) }
const  ACCOUNT_ALL_ACTION          = ({ commit }, data)  => { store.commit('ACCOUNT_ALL_MUT',data) }
const  ADMIN_STAFF_ACTION          = ({ commit }, data)  => { store.commit('STAFF_OR_ADMIN_USER_MUT', data) }
const  CURR_TERMINAL_ACTION        = ({ commit }, data)  => { store.commit('CURR_TERMINAL_MUT', data) }
const  IMAGES_ACTION               = ({ commit }, data)  => { store.commit('IMAGES_MUT', data) }
const  LOGOUT_ACTION               = ({ commit, state }) => { store.commit('LOGOUT_MUT') }
const  NODE_INTERFACES_ACTION      = ({ commit }, data)  => { store.commit('NODE_INTERFACES_MUT', data) }
const  NODE_POINTER_ACTION         = ({ commit }, data)  => { store.commit('NODE_POINTER_MUT', data) }
const  ORGS_ACTION                 = ({ commit }, data)  => { store.commit('ORGS_MUT', data)}
const  ORG_TAGS_ACTION             = ({ commit }, data)  => { store.commit('ORG_TAGS_MUT', data) }
const  PERMISSIONS_ACTION          = ({ commit }, data)  => { store.commit('PERMISSIONS_MUT', data) }
const  REGIONS_ACTION              = ({ commit }, data)  => { store.commit('REGION_MUT', data) }
const  SERVICE_POINTER_ACTION      = ({ commit }, data)  => { store.commit('SERVICE_POINTER_MUT', data) }
const  SERVICES_ACTION             = ({ commit }, data)  => { store.commit('SERVICES_MUT', data) }
const  SIM_ACTION                  = ({ commit }, data)  => { store.commit('SIM_MUT',data) }
const  SIM_ALL_ACTION              = ({ commit }, data)  => { store.commit('SIM_ALL_MUT', data) }
const  SIM_NODE_INTERFACES_ACTION  = ({ commit }, data)  => { store.commit('SIM_NODE_INTERFACES_MUT', data) }
const  SIM_POINTER_ACTION          = ({ commit }, data)  => { store.commit('SIM_POINTER_MUT', data)}
const  SIM_TOPO_NODE_COMBO_ACTION  = ({ commit }, data)  => { store.commit('SIM_TOPO_NODE_COMBO_MUT', data) }
const  TOKEN_ACTION                = ({ commit }, data)  => { store.commit('TOKEN_MUT', data) }
const  TOPO_NODES_ACTION           = ({ commit }, data)  => { store.commit('TOPO_NODES_MUT',data) }
const  TOPOLOGIES_ACTION           = ({ commit }, data)  => { store.commit('TOPOLOGIES_MUT',data) }
const  TRANSITION_MSG_ACTION       = ({ commit }, data)  => { store.commit('TRANSITION_MSG_MUT', data) }
const  WORKERS_ACTION              = ({ commit }, data)  => { store.commit('WORKER_MUT', data) }


export default {
  ACCOUNT_ACTION,
  ACCOUNT_ALL_ACTION,
  ADMIN_STAFF_ACTION,
  CURR_TERMINAL_ACTION,
  IMAGES_ACTION,
  LOGOUT_ACTION,
  NODE_INTERFACES_ACTION,
  NODE_POINTER_ACTION,
  ORGS_ACTION,
  ORG_TAGS_ACTION,
  PERMISSIONS_ACTION,
  REGIONS_ACTION,
  SERVICE_POINTER_ACTION,
  SERVICES_ACTION,
  SIM_ACTION,
  SIM_ALL_ACTION,
  SIM_NODE_INTERFACES_ACTION,
  SIM_POINTER_ACTION,
  SIM_TOPO_NODE_COMBO_ACTION,
  TOKEN_ACTION,
  TOPO_NODES_ACTION,
  TOPOLOGIES_ACTION,
  TRANSITION_MSG_ACTION,
  WORKERS_ACTION,            
}
