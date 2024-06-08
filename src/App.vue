<script>
//import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue'
import TheMenu from './components/TheMenu.vue'
import TheMain from './components/TheMain.vue'
export default {
  components: {
    TheHeader,
    TheMenu,
    TheMain
  }
}
</script>

<template>
  <TheHeader />
  <div class="ml-40">
    <TheMain />
    <TheMenu />
  </div>
</template>

<style scoped></style>
