<template>
  <div class="details">
    <div class="details__form">
      <div class="details__title gtitle">Tell guests about your accommodation</div>
      <p class="details__caption">Describe what your area is about and what features are like fast Wi-Fi or parking.</p>
      <div class="details__input-row">
        <v-textarea
          solo
          :counter="500"
        />
      </div>
      <transition name="fade">
        <div v-if="isMore" class="details__optiona-fields">
          <div class="details__input-row">
            <div class="details__field-label field-label">Your accommodation (optional)</div>
            <p class="details__field-caption">Describe the look and feel of your home. Draw your attention to the design, cozy reading corner or garden furniture.</p>
            <v-textarea
              solo
            />
          </div>
          <div class="details__input-row">
            <div class="details__field-label field-label">Communication with guests (optional)</div>
            <p class="details__field-caption">Write how often guests can contact you during their stay. For security reasons, do not provide your phone number or email before confirming your booking.</p>
            <v-textarea
              solo
            />
          </div>
          <div class="details__input-row">
            <div class="details__field-label field-label">Your area (optional)</div>
            <p class="details__field-caption">Describe what makes your area different from others. Mention the atmosphere, café, unique attraction, nearby establishments.</p>
            <v-textarea
              solo
            />
          </div>
          <div class="details__input-row">
            <div class="details__field-label field-label">Where to go (optional)</div>
            <p class="details__field-caption">Tell us about the public transport in your area, what is the best way to get there by car or on foot.</p>
            <v-textarea
              solo
            />
          </div>
        </div>
      </transition>
      <button class="details__optional-button" @click="isMore = !isMore">Add details (optional)</button>
    </div>
    <DetailsExample />
  </div>  
</template>

<script>
import DetailsExample from './DetailsExample.vue'
export default {
  components: {
    DetailsExample
  },
  data() {
    return {
      isMore: false
    }
  }
}
</script>

<style lang="scss">
  .details {
    width: 56% !important;
    flex-direction: row !important;

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
    &__form {
      flex: 2;
      .details__optional-button {
        color: teal;
      }
    }
  }
</style>