<template>
  <div>
    {{ video }}
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
}
</script>
