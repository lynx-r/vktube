<template>
  <div>
    <VideoCard v-for="video of videos" :key="video.id" :video="video" />
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      videos: [
        {
          id: 1,
          title: 'Video',
          url: 'http://url',
        },
      ],
    }
  },
}
</script>
