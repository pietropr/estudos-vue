// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

Vue.use(BootstrapVue);
Vue.use(Vuex)

Vue.config.productionTip = false

const vuexPersist = new VuexPersist({
  key: 'app',
  storage: window.sessionStorage
})


const store = new Vuex.Store({
    state: {
      usuario: [],
      logado: false
    },
    getters: {
      getUsuario: state => {
          return state.usuario[1];
      }
    },
    mutations: {
      alteraLogin (state) {
        state.logado = true

      },
      reseta(state) {
        state.logado = false;
        state.usuario = false;
      },
      setUsuario(state, val) {
        state.usuario = val
      }
    },
    plugins: [vuexPersist.plugin]
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  store

})
