import { Context } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'
import { VKAPI } from 'vkontakte-api'
import { VideoRepository } from './repo/VideoRepository'

export const vkApi = new VKAPI({ isBrowser: true }).addRepository(
  'video',
  VideoRepository
)

export default (_: Context, inject: Inject) => {
  inject('vkApi', vkApi)
}
