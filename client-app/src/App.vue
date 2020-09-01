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

<style>
  @font-face {
    font-family: 'Hagrid';
    src: url('./assets/fonts/Hagrid-Text-Extrabold-trial.ttf');
    font-weight: bolder;
  }
  #app {
    font-family: 'Montserrat', sans-serif;
  }
</style>
