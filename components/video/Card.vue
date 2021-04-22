<template>
  <div>
    <div>{{ title }}</div>
    <!--    <video-player :options="playerOptions" />-->
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
    imageUrl(): string {
      return this.video?.image[0]?.url
    },
    player(): string {
      return this.video.player
    },
    // playerOptions() {
    //   return {
    //     controls: true,
    //     poster: this.imageUrl,
    //     src: {
    //       withCredentials: false,
    //       type: 'application/x-mpegurl',
    //       src: this.player,
    //     },
    //   }
    // },
  },
})
</script>
