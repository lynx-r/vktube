<template>
  <NuxtLink
    class="text-3xl font-semibold text-red-500 flex items-center space-x-2"
    to="/"
  >
    <div>
      <fa :icon="['fab', 'youtube']" />
    </div>
    <div>YouTube</div>
    <div class="text-blue-500">Clone</div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'Brand',
}
</script>
