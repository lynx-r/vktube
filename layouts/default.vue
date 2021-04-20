<template>
  <div class="flex flex-col h-full">
    <Header />
    <main class="flex-grow">
      <Sidebar>
        <Nuxt />
      </Sidebar>
    </main>
    <Footer />
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
