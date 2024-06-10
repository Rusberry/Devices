<script>
import TheDropdownMenu from '../components/TheDropdownMenu.vue'
import TheMenu from '../components/TheMenu.vue'
export default {
  components: {
    TheDropdownMenu,
    TheMenu,
    name: 'MainPage'
  }
}
</script>

<template>
  <TheMenu />
  <TheDropdownMenu />
</template>

<style scoped>
/* Добавьте стили для страницы МФУ */
</style>
