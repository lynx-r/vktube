import { actionTree, getterTree, mutationTree } from 'typed-vuex'

export const state = () => ({
  opened: true,
})

export const getters = getterTree(state, {
  opened: (state) => state.opened,
})

export const mutations = mutationTree(state, {
  setOpen(state, open: boolean) {
    state.opened = open
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    toggle({ commit, getters }) {
      commit('setOpen', !getters.opened)
    },
  }
)
