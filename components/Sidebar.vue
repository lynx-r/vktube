<template>
  <div class="flex">
    <nav
      class="transition-all transform overflow-x-hidden overflow-y-scroll bg-red-50"
      :class="{ 'w-0 py-4 hide-drawer': !opened, 'w-xs p-4': opened }"
    >
      <div>Home</div>
      <div>Trending</div>
    </nav>
    <div class="p-4 bg-indigo-50">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',

  computed: {
    opened() {
      return this.$accessor.sidebar.opened
    },
  },
}
</script>
