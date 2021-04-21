<template>
  <header class="flex justify-between items-center p-4 mb-10 bg-gray-50 shadow">
    <BrandAndSidebarToggle />
    <SearchInput class="w-1/3" />
    <AccountBox />
  </header>
</template>

<script>
import BrandAndSidebarToggle from '~/components/BrandAndSidebarToggle'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'Header',
  components: { BrandAndSidebarToggle},
}
</script>
