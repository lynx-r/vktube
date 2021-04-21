<template>
  <div>
    <div class="w-full relative">
      <input
        id="input"
        ref="input"
        type="text"
        class="rounded pr-9 w-full"
        :value="$accessor.search.mainSearch"
        @change="$accessor.search.setMainSearch($event.target.value)"
      />
      <fa
        icon="search"
        class="absolute text-gray-500 cursor-pointer right-3 bottom-3"
        @click="$refs.input.focus()"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
}
</script>
