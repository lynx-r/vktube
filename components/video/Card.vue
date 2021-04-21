<template>
  <div>
    {{ subtitle }}
    <!--    <video width="320" height="240" controls>-->
    <!--      <source :src="player" type='video/mp4' />-->
    <!--    </video>-->
    <img :src="imageUrl" alt="" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Card',
  props: {
    video: {
      type: Object,
      required: true,
    },
  },

  computed: {
    subtitle() {
      return this.video.subsitle
    },
    imageUrl() {
      return this.video?.image[1]?.url
    },
    player() {
      return this.video.player
    },
  },
}
</script>
