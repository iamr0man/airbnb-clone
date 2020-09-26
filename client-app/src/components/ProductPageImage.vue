<template>
  <div class="product-page__image">
    <div class="product-page__image-wrapper">
      <v-carousel
          cycle
          hide-delimiter-background
          show-arrows-on-hover
      >
        <v-carousel-item
            v-for="(v, i) in home.photos"
            :key="i"
        >
          <img class="product-page__wrapper-item" :src="v" alt="">
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="product-page__image-text">
      {{ home.textDetails.general }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['home']
}
</script>