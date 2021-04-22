<template>
  <DefaultButtonIcon @click="$accessor.sidebar.toggle()">
    <fa :icon="['fa', 'bars']" class="text-gray-500" />
  </DefaultButtonIcon>
</template>
<script>
export default {
  name: 'DefaultSidebarToggle',
}
</script>
