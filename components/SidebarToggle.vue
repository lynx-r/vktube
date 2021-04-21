<template>
  <ButtonIcon @click="$accessor.sidebar.toggle()">
    <fa :icon="['fa', 'bars']" class="text-gray-500" />
  </ButtonIcon>
</template>
<script>
export default {
  name: 'SidebarToggle',
}
</script>
