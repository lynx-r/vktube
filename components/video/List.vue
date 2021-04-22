<template>
  <div>
    <div>Найдено всего видео: {{ videos.count }}</div>
    <VideoCard v-for="item of videoItems" :key="item.id" :video="item" />
  </div>
</template>

<script lang="ts">
import { IVideo } from 'vkontakte-api'
import Vue from 'vue'
import { SearchResult } from '~/plugins/vk-api/repo/VideoRepository'

export default Vue.extend({
  name: 'List',
  computed: {
    videos(): SearchResult {
      return this.$accessor.search.searchResult as SearchResult
    },
    videoItems(): IVideo[] {
      // return this.videos.items?.filter((v) => v.contentRestricted !== 1)
      return this.videos.items
    },
  },
})
</script>
