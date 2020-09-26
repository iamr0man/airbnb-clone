<template>
  <div class="product-page__header">
    <div class="product-page__details">
      <p class="details__apartment-type">{{ home.apartmentType }}</p>
      <p class="details__reviews">
        <v-icon color="#FF5A5F" class="mdi mdi-star"/>
        {{ home.reviews.start }} <span>({{ home.reviews.array.length }})</span>
      </p>
      <p class="details__location">{{ home.location.city }}</p>
    </div>
    <div class="product-page__name">
      <h2>{{ home.name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ['home']
}
</script>