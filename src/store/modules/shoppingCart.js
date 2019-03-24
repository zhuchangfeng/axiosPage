import * as types from './types'
// 获取到购物车的商品列表
const state = {
    shoppingList: [],
    test: 555,
    inputValue:'',//输入值
    testValue:'',// 测试的值
}
const getters = {
    getShoppingList(state) {
        return state.shoppingList;
    },
    getTest(state) {
        return state.test;
    },
    getInputValue(state){
        return state.inputValue;
    },
    getTestValue(state){
        return state.testValue
    }
}
const mutations = {
    // 改变购物车的商品
    [types.CHANG_SHOPPING_LIST](state, item) {
        state.shoppingList = Object.assign([], [...state.shoppingList,...item])
    },
    [types.OBTAIN_SHOPPING](state) {
        if (state.shoppingList.length != 0) {
            console.log('去结算');
        } else {
            console.log('购物车的商品为空');
        }
    },
    [types.CHANGE_INPUT](state,data){
        state.inputValue = data;
    },
    [types.CHANGE_TESTVALUE](state,data){
        state.testValue=data;
    }
}
const actions = {
    // 去结算
    goPay(context) {
        context.commit(types.OBTAIN_SHOPPING)
    }
}
export default {
    namespaced: true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}