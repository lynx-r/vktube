<template>
  <header class="flex justify-between">
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
