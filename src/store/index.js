import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let defaultCity = '上海'
try{
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch(e) {}

export default new Vuex.Store({
    state: {
        city: defaultCity 
    },
    // actions: {
    //     changeCity (ctx,e) {
    //         ctx.commit('changeCity',e)
    //     }
    // },
    mutations: {
        changeCity (state,e) {
            state.city = e
            try{
                localStorage.city = e
            } catch (e) {}
            
        }
    }
})