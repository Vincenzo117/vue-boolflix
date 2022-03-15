<template>
  <div id="app">
    <MainHeader />
    <MainContent />
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import MainContent from "./components/MainContent.vue";

export default {
  name: 'App',
  components: {
    MainHeader,
    MainContent
  }
}
</script>

<style lang="scss">
@import "./assets/scss/common.scss";
@import "./assets/scss/variables.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  background-color: $bk_color;
  color: $primary_color;
}
</style>
