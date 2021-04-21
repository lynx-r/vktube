// import { defineNuxtPlugin } from '@nuxtjs/composition-api'
// import { vkServiceFactory } from '~/plugins/vk-service'
// import { StoredDocs } from './model'
// import { storedDocsToPostMessages } from './utils/utils'
//
// export default defineNuxtPlugin((ctx, inject) => {
//   const { $ctxUtils, store } = ctx
//
//   const docs: StoredDocs = $ctxUtils.getUserPosts()
//   const messages = storedDocsToPostMessages(docs)
//   store.commit('setMessages', messages)
//
//   inject('vkService', vkServiceFactory(ctx))
// })
