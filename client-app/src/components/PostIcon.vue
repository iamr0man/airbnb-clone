<template>
  <v-icon :style="{ color }">{{ icon }}</v-icon>
</template>

<script>
import { icons } from '../helpers/static.js'

export default {
  data() {
    return {
      icons
    }
  },
  computed: {
    icon() {
      return this.icons[Math.floor(Math.random() * 1264 - 1)]
    },
    color: function () {
      let o = Math.round, r = Math.random, s = 255; 
      return `rbg(${o(r() * s)}, ${o(r() * s)}, ${o(r() * s)})`
    }
  }
}
</script>

<style>

</style>