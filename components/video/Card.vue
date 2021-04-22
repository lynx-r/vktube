<template>
  <div>
    <div>{{ title }}</div>
    <video-player :options="playerOptions" />
  </div>
</template>

<script lang="ts">
import { IVideo } from 'vkontakte-api'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'Card',
  props: {
    video: {
      type: Object as PropType<IVideo>,
      required: true,
    },
  },

  computed: {
    title(): string {
      return this.video.title || this.video.subsitle
    },
    poster(): string {
      return this.video?.image[0]?.url
    },
    player(): string {
      return this.video.player
    },
    playerOptions(): Object {
      return {
        controls: true,
        poster: this.poster,
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
        },
        sources: [{ src: this.player, type: 'video/mp4' }],
      }
    },
  },
})
</script>
