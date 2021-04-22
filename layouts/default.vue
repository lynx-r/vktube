<template>
  <div class="flex flex-col h-full">
    <DefaultHeader />
    <main class="flex-grow">
      <DefaultSidebar>
        <Nuxt />
      </DefaultSidebar>
    </main>
    <DefaultFooter />
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
