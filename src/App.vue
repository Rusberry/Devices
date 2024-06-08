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
  <div class="">
    <TheHeader />
    <TheMain />
    <TheMenu />
  </div>
</template>

<style scoped></style>
