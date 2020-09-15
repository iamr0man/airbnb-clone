<template>
  <div class="home">
    <Discover />
    <AirbnbPlus v-if=""/>
    <Homes v-else/>
    <Museum />
  </div>
</template>

<script>

import Apartment from '../components/Apartment.vue'
import Homes from '../views/Homes.vue'
import Discover from '../views/Discover.vue'
import Museum from '../views/Museum.vue'
import AirbnbPlus from '../views/AirbnbPlus.vue'
export default {
  name: "Home",
  components: {
    Apartment,
    Homes,
    Discover,
    Museum,
    AirbnbPlus,
  },
  async mounted() {
    await this.store.dispatch('pick/getPick')
  }
};
</script>

