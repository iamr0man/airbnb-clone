<template>
  <v-app id="app">
    <Header />
    <router-view />
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: "App",
  components: {
    Header
  },
};
</script>

<style lang="scss">
  #app {
    font-family: 'Montserrat', sans-serif;
  }

  .v-application p {
    margin-bottom: 0;
  }


</style>
