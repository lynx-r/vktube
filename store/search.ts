import { getterTree, mutationTree } from 'typed-vuex'
import { SearchResult } from '~/plugins/vk-api/repo/VideoRepository'

export const state = () => ({
  mainSearch: '',
  searchResult: {},
})

export const getters = getterTree(state, {
  mainSearch: (state) => state.mainSearch,
  searchResult: (state) => state.searchResult,
})

export const mutations = mutationTree(state, {
  setMainSearch(state, value: string) {
    state.mainSearch = value
  },
  setSearchResult(state, value: SearchResult) {
    state.searchResult = value
  },
})
