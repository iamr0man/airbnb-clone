<template>
  <div class="home">
    <Discover />
    <AirbnbPlus />
    <Museum />
  </div>
</template>

<script>
import Discover from '../views/Discover.vue'
import AirbnbPlus from '../views/AirbnbPlus.vue'
import Museum from '../views/Museum.vue'
export default {
  name: "Home",
  components: {
    Discover,
    Museum,
    AirbnbPlus,
  }
};
</script>
