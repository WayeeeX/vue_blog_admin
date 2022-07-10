import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: sessionStorage.getItem('token') || localStorage.getItem('token'),
    autoLogin: false,
  },
  getters: {
  },
  mutations: {
    SET_TOKEN(state,token){
        if(state.autoLogin){
            localStorage.setItem('token',token)
            state.token = token
        }else{
            sessionStorage.setItem('token',token)
            state.token = token
        }
    },
    SET_AUTOLOGIN(state,status){
        state.autoLogin = status
    }
  },
  actions: {
  },
  modules: {
  }
})
