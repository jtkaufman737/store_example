import Vue from 'vue'
import Vuex from 'vuex'

const getLocStorage = key => {

  if(localStorage[key]) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch(e) {
      return localStorage.getItem(key); // stupid stupidness breaking JSON
    }
  }
}

const state = {
  accountAll: null || getLocStorage('accountAll'),
  currTerminal: '' || getLocStorage('currTerminal'),
  headers: {} || getLocStorage('headers'),
  images:  null || getLocStorage('images'),
  loggedIn: false || getLocStorage('loggedIn'),
  msg:'',
  nodeInterfaces: null || getLocStorage('nodeInterfaces'),
  nodePointer: null || getLocStorage('nodePointer'),
  organizations: null || getLocStorage('organizations'),
  orgTags:  null || getLocStorage('orgTags'),
  permissions: null || getLocStorage('permissions'),
  regions: null || getLocStorage('regions'),
  services: null || getLocStorage('services'),
  simTopoNodeCombo: null || getLocStorage('simTopoNodeCombo'),
  simPointer:  null || getLocStorage('simPointer'),
  simulation: [],  // TODO revisit this data structure may be erroneous, think already phased out of Simulation component
  simulationNodeInterfaces: null || getLocStorage('simulationNodeInterfaces'),
  simulations: null || getLocStorage('simulations'),
  servicePointer: null || getLocStorage('servicePointer'),
  staffOrAdminUser: null || getLocStorage('staffOrAdminUser'),
  token: '' || getLocStorage('token'),
  topologies:  null || getLocStorage('topologies'),
  topoNodes:  null || getLocStorage('topoNodes'),
  transitionMsg: null || getLocStorage('transitionMsg'),
  username: '' || getLocStorage('username'),
  userID: '' || getLocStorage('userID'),
  workers: null || getLocStorage('workers'),
}

export default state;
