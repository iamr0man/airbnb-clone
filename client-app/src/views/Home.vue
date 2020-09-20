<template>
  <div class="home">
    <Discover v-if="loading" />
    <div v-else class="loading">
      Loading
    </div>
<!--    <AirbnbPlus v-if="true"/>-->
<!--    <Homes v-else/>-->
    <Museum />
  </div>
</template>

<script>
// import Homes from '../views/Homes.vue'
import Discover from '../views/Discover.vue'
import Museum from '../views/Museum.vue'
// import AirbnbPlus from '../views/AirbnbPlus.vue'
import { mapGetters } from 'vuex'
export default {
  name: "Home",
  components: {
    // Homes,
    Discover,
    Museum,
    // AirbnbPlus,
  },
  computed: {
    ...mapGetters('loading', ['loading'])
  },
  async mounted() {
    await this.$store.dispatch('pick/getPick')
  }
};
</script>

<style scoped>
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>