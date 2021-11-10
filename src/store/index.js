import { createApp } from 'vue';
import { createStore } from 'vuex';

// 创建一个新的 store 实例
export const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state,payload) {
      state.count = state.count+payload;
    },
  },
  actions:{
    asyncIncrement({commit,state,rootState},payload){
      
      setTimeout(() => {
        console.log('asyncIncrement');
        commit('increment',payload)
      }, 1000);
    }
  }
});

const app = createApp({
  /* 根组件 */
});

// 将 store 实例作为插件安装
app.use(store);
