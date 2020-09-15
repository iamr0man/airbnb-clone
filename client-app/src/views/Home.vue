<template>
  <div class="home">
    <Discover />
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
export default {
  name: "Home",
  components: {
    // Homes,
    Discover,
    Museum,
    // AirbnbPlus,
  },
  async mounted() {
    await this.$store.dispatch('pick/getPick')
  }
};
</script>

