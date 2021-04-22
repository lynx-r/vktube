import { IVideo, Repository, TSendRequest } from 'vkontakte-api'

/**
 * @see https://vk.com/dev/wall.post
 */
export interface SearchParams {
  q: string
  sort?: 0 | 1 | 2
  hd?: number
  adult?: boolean
  filters?: string
  searchOwn?: boolean
  extended?: boolean
}

export interface SearchResult {
  count: number
  items: IVideo[]
}

export class VideoRepository extends Repository {
  constructor(sendRequest: TSendRequest) {
    super('video', sendRequest)
  }

  /**
   * @see https://vk.com/dev/wall.post
   */
  search = this.r<SearchParams, SearchResult>(
    'search',
    ({ filters = 'mp4', searchOwn = false, sort = 2, ...rest }) => ({
      filters,
      searchOwn,
      sort,
      ...rest,
    })
  )
}
