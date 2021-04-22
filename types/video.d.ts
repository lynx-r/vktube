// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IImage, IVideo } from 'vkontakte-api'

declare module 'vkontakte-api' {
  export interface IVideo {
    image: IImage[]
    subsitle: string
  }
}
