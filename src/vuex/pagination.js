export default {
    namespaced: true,
    state: {
      currentPage: 1
    },
    mutations: {
      setCurrentPage(state, page) {
        state.currentPage = page;
      }
    }
};