<template>
  <div class="flex space-x-2">
    <ButtonIcon>
      <FaVideoPlus />
    </ButtonIcon>
    <ButtonIcon>
      <FaApps />
    </ButtonIcon>
    <ButtonIcon>
      <fa icon="bell" class="text-gray-500" />
    </ButtonIcon>
    <ButtonIcon class="rounded-full bg-red-500 text-gray-100"> AP </ButtonIcon>
  </div>
</template>

<script>
export default {
  name: 'AccountBox',
}
</script>
