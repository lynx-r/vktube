<template>
  <button
    class="font-bold py-2 px-2 text-2xl border-none"
    :class="btnClass"
    @click="$emit('click', $event)"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  name: 'DefaultButtonIcon',
  props: {
    round: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'fill',
    },
    text: {
      type: String,
      default: 'Button',
    },
  },
  computed: {
    btnClass() {
      const classes = []
      if (this.round) {
        classes.push('rounded-full')
      }
      if (this.type === 'primary') {
        classes.push('bg-blue-500 hover:bg-blue-700')
      } else if (this.type === 'secondary') {
        classes.push('bg-gray-500 hover:bg-gray-700')
      } else if (this.type === 'fill') {
        classes.push('bg-fill')
      }
      return classes.join(' ')
    },
  },
}
</script>
