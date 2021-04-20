import { getterTree, mutationTree } from 'typed-vuex'

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

  toggle(state) {
    state.opened = !state.opened
  },
})
