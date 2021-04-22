<template>
  <header class="flex justify-between items-center p-4 mb-10 bg-gray-50 shadow">
    <div class="flex space-x-4">
      <AppSidebarToggle />
      <BrandLogo />
    </div>
    <SearchInput class="w-1/3" />
    <AccountBox />
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>
