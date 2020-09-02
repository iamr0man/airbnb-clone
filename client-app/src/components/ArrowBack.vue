<template>
  <v-btn type="button" class="button-back">
    <router-link :to="to" class="arrow-back">
      <v-icon>mdi-arrow-collapse-left</v-icon>
    </router-link>
  </v-btn>
</template>

<script>
export default {
  name: "ArrowBack",
  props: {
    to: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>
  .button-back{
    z-index: 1;
    position: fixed;
    top: 60px;
    left: 18px;
    background-color: turquoise;
  }

  .arrow-back {
    color: rgba(0, 0, 0, 0.87) !important;
  }
</style>