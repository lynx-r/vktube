<template>
  <Button @click="$accessor.sidebar.toggle()">
    <SidebarIcon />
  </Button>
</template>
<script>
export default {
  name: 'ToggleSidebarButton',
}
</script>
