import Vue from 'vue'
import Vuex from 'vuex'
import { store, state } from '../store'

const getLocStorage = key => {
  if(localStorage[key]) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch(e) {
      return localStorage.getItem(key); // stupid stupidness breaking JSON
    }
  }
}

const ACCOUNT_MUT = (state, data) => {
  setLocStorage('userID', data)
  state.userID = data
}

const ACCOUNT_ALL_MUT = (state, data) => {
  setLocStorage('accountAll',data)
  state.accountAll = data
}

const TOKEN_MUT = (state, data) => {
  setLocStorage('loggedIn', true)
  setLocStorage('token', data)
  setLocStorage({ "Content-Type": "application/json" ,"Accept": "application/json","Authorization":"Bearer " + data })
  state.headers = { "Content-Type": "application/json" ,"Accept": "application/json","Authorization":"Bearer " + data }
  state.loggedIn = true
  state.token = data
}

const LOGOUT_MUT = (state) => {
  localStorage.clear()
  state.loggedIn = false
  state.token = null
  state.staffOrAdminUser = false
}

const SIM_ALL_MUT = (state, data) => {
  setLocStorage('simulations', data)
  state.simulations = data
}

const TOPOLOGIES_MUT = (state, data) => {
  setLocStorage('topologies', data)
  state.topologies = data
}

const NODE_INTERFACES_MUT = (state, data) => {
  setLocStorage('nodeInterfaces', data)
  state.nodeInterfaces = data
}

const SIM_NODE_INTERFACES_MUT = (state, data) => {
  setLocStorage('simulationNodeInterfaces', data)
  state.simulationNodeInterfaces = data
}

const TOPO_NODES_MUT = (state, data) => {
  setLocStorage('topoNodes',data)
  state.topoNodes = data
}

const ORGS_MUT = (state, data) => {
  setLocStorage('organizations', data)
  state.organizations = data
}

const ORG_TAGS_MUT = (state, data) => {
  setLocStorage('orgTags', data)
  state.orgTags = data
}

const SIM_MUT = (state, data) => {
  state.simulation = data
}

const SIM_TOPO_NODE_COMBO_MUT = (state, data) => {
  setLocStorage('simTopoNodeCombo',data)
  state.simTopoNodeCombo = data
}

const IMAGES_MUT = (state, data) => {
  setLocStorage('images', data)
  state.images = data
}

const TRANSITION_MSG_MUT = (state, data) => {
  setLocStorage('transitionMsg', data)
  state.transitionMsg = data
}

const SIM_POINTER_MUT = (state,data) => {
  setLocStorage('simPointer', data)
  state.simPointer = data
}

const NODE_POINTER_MUT = (state, data) => {
  setLocStorage('nodePointer', data)
  state.nodePointer = data
}

const PERMISSIONS_MUT = (state, data) => {
  setLocStorage('permissions',data)
  state.permissions = data
}

const STAFF_OR_ADMIN_USER_MUT = (state, data) => {
  setLocStorage('staffOrAdminUser', data)
  state.staffOrAdminUser = data
}

const CURR_TERMINAL_MUT = (state, data) => {
  setLocStorage('currTerminal', data)
  state.currTerminal = data
}

const SERVICES_MUT = (state, data) => {
  setLocStorage('services', data)
  state.services = data
}

const REGION_MUT = (state, data) => {
  setLocStorage('regions', data)
  state.regions = data
}

const WORKER_MUT = (state, data) => {
  setLocStorage('workers', data)
  state.workers = data
}

const SERVICE_POINTER_MUT = (state, data) => {
  setLocStorage("servicePointer", data)
  state.servicePointer = data
}

const actions = {
  ACCOUNT_MUT,
  ACCOUNT_ALL_MUT,
  TOKEN_MUT,
  LOGOUT_MUT,
  SIM_ALL_MUT,
  TOPOLOGIES_MUT,
  NODE_INTERFACES_MUT,
  SIM_NODE_INTERFACES_MUT,
  TOPO_NODES_MUT,
  ORGS_MUT,
  ORG_TAGS_MUT,
  SIM_MUT,
  SIM_TOPO_NODE_COMBO_MUT,
  IMAGES_MUT,
  TRANSITION_MSG_MUT,
  SIM_POINTER_MUT,
  NODE_POINTER_MUT,
  PERMISSIONS_MUT,
  STAFF_OR_ADMIN_USER_MUT,
  CURR_TERMINAL_MUT,
  SERVICES_MUT,
  REGION_MUT,
  WORKER_MUT,
  SERVICE_POINTER_MUT,
}

export default actions;
