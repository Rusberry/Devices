<script>
import TheHeader from './components/TheHeader.vue'
export default {
  components: {
    TheHeader
  }
}
</script>

<template>
  <TheHeader />
  <div class="ml-40">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
