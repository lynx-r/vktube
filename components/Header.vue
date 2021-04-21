<template>
  <header class="flex justify-between p-4 mb-10 h-72px bg-gray-50 shadow">
    <div class="flex space-x-4">
      <ToggleSidebarButton />
      <Brand />
    </div>
    <SearchInput />
    <AccountBox />
  </header>
</template>

<script>
// import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ToggleSidebarButton from '~/components/ToggleSidebarButton'

export default {
  name: 'Header',
  components: { ToggleSidebarButton },
}
</script>
