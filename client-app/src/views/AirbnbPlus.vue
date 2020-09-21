<template>
  <Homes  v-if="city && city.isPlus"
          :is-row-reverse="city.isPlus"
          :city="city" />
</template>

<script>
import { mapGetters } from 'vuex'
import Homes from '../views/Homes.vue'
export default {
  components: {
    Homes
  },
  computed: {
    ...mapGetters('pick', ['city'])
  }
}
</script>

