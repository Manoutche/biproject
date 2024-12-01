import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    product : [],
    categorie : [],
  },

  getters: {
  },

  mutations: {
    mutProducts(state, products){
      state.product = products
    },
    mutCategoie(state, categories){
      state.categorie = categories
    }
  }, 

  actions: {
    getProduct({ commit }){
        axios
      .get('http://127.0.0.1:8000/api/products')
      .then((response) => {
        commit('mutProducts',response.data)
        })
    },

    getCategorie({commit}){
      axios
      .get('http://127.0.0.1:8000/api/categories')
      .then((response)=>{
        commit('mutCategoie',response.data)
      })
    }
  },
  modules: {
  }
})
