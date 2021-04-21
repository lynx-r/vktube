import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'
// import { Context } from '@nuxt/types'

import * as sidebar from './sidebar'
import * as search from './search'

export const state = () => ({
  email: '',
})

// type RootState = ReturnType<typeof state>

export const getters = {
  // email: (state: RootState) => state.email,
  // fullEmail: (state: RootState) => state.email,
}

export const mutations = mutationTree(state, {
  // setEmail(state, newValue: string) {
  //   state.email = newValue
  // },
  // initialiseStore() {
  //   console.log('initialised')
  // },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    // async resetEmail({ commit }) {
    //   commit('setEmail', 'a@a.com')
    // },
    // async nuxtServerInit(_vuexContext, nuxtContext: Context) {
    //   console.log(nuxtContext.req)
    // },
  }
)

export const accessorType = getAccessorType({
  actions,
  getters,
  mutations,
  state,
  modules: {
    sidebar,
    search,
  },
})
