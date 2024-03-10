export default {
  namespaced: true,
  state: {
    searchResults: [],
    total: 0,
    msg: ''
  },
  actions: {
    async search({ commit }, keyword) {
      let response = await window.$axios.get('/user/search?q=' + keyword);
      if (response.data.msg) {
        commit('setSearchResults', response.data);
      }
    }
  },
  mutations: {
    setSearchResults(state, data) {
      state.searchResults = data.blogList
      state.total = data.blogList.length
      state.msg = data.msg
    }
  }
}
