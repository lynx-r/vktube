<template>
  <div class="flex space-x-2">
    <AppButtonIcon>
      <FaVideoPlus />
    </AppButtonIcon>
    <AppButtonIcon>
      <FaApps />
    </AppButtonIcon>
    <AppButtonIcon>
      <fa icon="bell" class="text-gray-500" />
    </AppButtonIcon>
    <AppButtonIcon class="rounded-full bg-red-500 text-gray-100">
      AP
    </AppButtonIcon>
  </div>
</template>

<script>
export default {
  name: 'AccountBox',
}
</script>
