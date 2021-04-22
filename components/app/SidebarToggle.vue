<template>
  <AppButtonIcon @click="$accessor.sidebar.toggle()">
    <fa :icon="['fa', 'bars']" class="text-gray-500" />
  </AppButtonIcon>
</template>
<script>
export default {
  name: 'AppSidebarToggle',
}
</script>
