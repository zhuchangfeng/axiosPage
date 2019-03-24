//显示图片隐藏图片
import * as types from './types'
const state = {
    imageState: sessionStorage.getItem("imageState") != null ? Number(sessionStorage.getItem("imageState")) : 1,  //显示图片的状态
    test: sessionStorage.getItem("test") != null ? sessionStorage.getItem("test") : '55555',//测试值
};
const getters = {
    // 获取图片的显示状态
    // 获取state的值类似于computed 
    //调用this.$store.getters.属性名称
    getImageState(state) {
        return state.imageState;
    },
    getTest(state) {
        return state.test;
    }
};
const mutations = {
    // 同步方法 调用this.$store.commit('方法名称',参数)
    [types.SHOW_IMAGE](state) {
        sessionStorage.setItem("imageState", 1);
        state.imageState = 1;
    },
    [types.HIDE_IMAGE](state) {
        sessionStorage.setItem("imageState", 0);
        state.imageState = 0;
    },
    [types.CHANG_TEST](state, data) {
        sessionStorage.setItem("test", data);
        state.test = data;
    }
};
const actions = {
    //异步方法 调用this.$store.dispatch('方法名称',参数)
    show(context) {
        context.commit(types.SHOW_IMAGE)
    },
    hide(context) {
        context.commit(types.HIDE_IMAGE)
    }
}
export default {
    namespaced: true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}