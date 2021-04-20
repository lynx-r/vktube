<template>
  <button class="bg-blue-300" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
}
</script>
