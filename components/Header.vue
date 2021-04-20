<template>
  <header class="flex">
    <button @click="$accessor.sidebar.toggle()">Show sidebar</button>
    <div>Header</div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>
