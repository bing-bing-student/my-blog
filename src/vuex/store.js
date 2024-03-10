import { createStore } from 'vuex'
import search from './search'
import pagination from './pagination'


export default createStore({
  modules: {search,pagination}
})