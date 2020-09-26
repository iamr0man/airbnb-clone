<template>
  <div v-if="home" class="booking">
    <div class="booking__wrapper">
      <div class="booking__confirm">
        <div class="booking__title">Confirm and pay</div>
        <div class="booking__subtitle">Your trip</div>
        <div class="booking__input-row input-row">
          <div class="booking__field-label field-label">
            <p class="booking__label">Dates</p>
            <p class="booking__dates">09-Oct-2020–16-Oct-2020</p>
          </div>
          <div class="booking__edit-button">Edit</div>
        </div>
        <div class="booking__input-row input-row">
          <div class="booking__field-label field-label">
            <p class="booking__label">Guests</p>
            <p class="booking__dates">09-Oct-2020–16-Oct-2020</p>
          </div>
          <div class="booking__edit-button">Edit</div>
        </div>
      </div>
      <HomeDetailsCard :home="home" />
    </div>
  </div>
</template>

<script>
import HomeDetailsCard from '../components/HomeDetailsCard'
export default {
  components: {
    HomeDetailsCard
  },
  data() {
    return {
      home: this.$route.params.home
    }
  },
}
</script>

<style lang="scss">
  .booking {
    width: 100vw;
    height: 100vh;;
    display: flex;
    justify-content: center;
    align-items: center;

    &__wrapper {
      width: 60%;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      .booking__confirm {
        flex: 2;
        display: flex;
        flex-direction: column;
        .booking__title {
          font-size: 40px;
          font-weight: 600;
          color: #222222
        }
      }
    }
  }
</style>