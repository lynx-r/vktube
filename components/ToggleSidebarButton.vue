<template>
  <Button @click="$accessor.sidebar.toggle()">
    <fa :icon="['fa', 'bars']" />
  </Button>
</template>
<script>
export default {
  name: 'ToggleSidebarButton',
}
</script>
