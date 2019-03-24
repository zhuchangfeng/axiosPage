import Vue from 'vue'
import Vuex from 'vuex'
import imageStatus from './modules/imageStatus'
import shoppingCart from './modules/shoppingCart'
Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        imageStatus,
        shoppingCart
    },
    strict: process.env.NODE_ENV !== 'production'
});

export default store;