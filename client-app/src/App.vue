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
  .v-application--wrap {
    position: unset !important;
  }

  #app {
    font-family: 'KS', serif;
  }

  .v-application .headline,
  .v-application .title {
    font-family: 'KS', serif !important;
    font-weight: 900;
  }


  .v-application p {
    margin-bottom: 0;
  }


</style>
