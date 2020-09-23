<template>
  <v-app id="app">
<!--    <Header />-->
    <router-view v-if="!loading"/>
    <Loading v-else/>
  </v-app>
</template>

<script>
// import Header from './components/Header.vue'
import Loading from './views/Loading.vue'

import { mapGetters } from 'vuex'

export default {
  name: "App",
  components: {
    // Header,
    Loading
  },
  computed: {
    ...mapGetters('loading', ['loading'])
  }
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
