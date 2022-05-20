/* eslint-disable */
import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      items: [],
    }),

    // getters: {
    //   items: state => state.items.map(item => 'task:' + item)
    // },

    mutations: {
      getItems: (state, items) => {
        state.items = items;
      },
    },

    actions: {
      async getItems({ commit }) {
        let { data } = await this.$axios.get('/api/c1/items');
        commit('getItems', data);

        // await this.$axios.get('/api/c1/items')
        //   .then(data => {
        //     console.log(data);
        //     commit('getItems', data);
        //   })
        //   .catch(
        //     error => {console.log(error)}
        //   )
      },

      async remove({ commit }, { item }) {
        let { result } = await this.$axios.delete('/api/c1/items/' + item.id);
        let { data } = await this.$axios.get('/api/c1/items');
        commit('getItems', data);
      },

      async changeState({ commit }, { item }) {
        item.status = (item.status == 0) ? 1 : 0;
        let result = await this.$axios.put('/api/c1/items', item);
        let { data } = await this.$axios.get('/api/c1/items');
        commit('getItems', data);
      },

      async search({ commit }, { name }) {
        console.log(name);
        let { data } = await this.$axios.get('/api/c1/search/' + name);
        console.log(data);
        commit('getItems',data);
      },
    
      async add({ commit }, { name, status, date}) {
        
        let result = await this.$axios.post('/api/c1/items', { name: name, status: status, date:date });
        
        let { data } = await this.$axios.get('/api/c1/items')
        console.log(data)
        commit('getItems', data);
      }
    },
  })
};
export default createStore
/* eslint-enable */
