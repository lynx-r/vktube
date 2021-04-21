<template>
  <div>
    <input id="input" ref="input" type="text" class="rounded pr-9 w-full" />
    <fa
      icon="search"
      class="relative text-gray-500 -top-28px right-12px float-right cursor-pointer"
      @click="$refs.input.focus()"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
}
</script>
