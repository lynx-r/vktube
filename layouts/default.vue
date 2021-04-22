<template>
  <div class="flex flex-col h-full">
    <AppHeader />
    <main class="flex-grow">
      <AppSidebar>
        <Nuxt />
      </AppSidebar>
    </main>
    <AppFooter />
  </div>
</template>

<style>
html,
body,
#__nuxt,
#__layout {
  height: 100%;
}
</style>
