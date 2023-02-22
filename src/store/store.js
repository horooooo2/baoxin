import Vue from 'vue'//引入vue
import Vuex from 'vuex'//引入vuex
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        apiUrl: location.hostname == 'localhost' ? '/api/' : location.protocol + '//' + location.hostname + '/',
        isLogin: false,
        userInfo: '',
    },
    plugins: [createPersistedState({storage: window.sessionStorage})],
    mutations: {
        pushIsLogin(state,e){
            state.isLogin = e
        },
        pushUserInfo(state,e){
            state.isLogin = e
        },
    }
});


export default store
