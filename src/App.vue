<template>
  <div id="app">
    <TopNavbar />
    <router-view/>
  </div>
</template>

<script>
import TopNavbar from '@/components/TopNavbar'
export default {
  components: {
    TopNavbar,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
