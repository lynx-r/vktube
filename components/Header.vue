<template>
  <header class="flex justify-between p-4 mb-10 bg-gray-50 shadow">
    <div class="flex">
      <ToggleSidebarButton />
      <div>YouTube Clone</div>
    </div>
    <SearchInput />
    <AccountBox />
  </header>
</template>

<script>
import ToggleSidebarButton from '~/components/ToggleSidebarButton'

export default {
  name: 'Header',
  components: { ToggleSidebarButton },
}
</script>
