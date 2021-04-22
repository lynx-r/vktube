<template>
  <div class="flex space-x-2">
    <DefaultButtonIcon>
      <FaVideoPlus />
    </DefaultButtonIcon>
    <DefaultButtonIcon>
      <FaApps />
    </DefaultButtonIcon>
    <DefaultButtonIcon>
      <fa icon="bell" class="text-gray-500" />
    </DefaultButtonIcon>
    <DefaultButtonIcon class="rounded-full bg-red-500 text-gray-100">
      AP
    </DefaultButtonIcon>
  </div>
</template>

<script>
export default {
  name: 'AccountBox',
}
</script>
