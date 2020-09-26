<template>
  <div class="home-details">
    <div class="home-details__header">
      <div class="home-details__info">
        <p class="home-details__apartment-type">{{ home.apartmentType }} in {{ getCity }}</p>
        <p class="home-details__location">{{  home.name }}</p>
        <p class="home-details__apartmentRooms">{{ apartmentRooms }}</p>
        <p class="home-details__stars">
          <v-icon color="#FF5A5F" class="mdi mdi-star"/>{{ home.reviews.stars }} ({{ home.reviews.array.length }})
        </p>
      </div>
      <img class="home-details__img" :src="home.photos[0]" alt="">
    </div>
    <div class="home-details__body">
      <hr class="my-4" />
      <Prices
        :home="home"
        :nights="bookingData.prices.nights"
        :isLineExist="false"
      />
      <hr class="my-2" />
    </div>
    <div class="home-details__footer">
      <h6 class="home-details__cancellation-date">Free cancellation until 2:00 PM on {{ freeCancellationDate }}</h6>
      <p class="home-details__refund">After that, cancel before 2:00 PM on {{ formatData(this.bookingData.date[0]) }} and get a 50% refund, minus the first night and service fee.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Prices from '../components/Prices'
export default {
  props: ['home'],
  components: {
    Prices
  },
  data() {
    return {
      monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ]
    }
  },
  methods: {
    formatData(v) {
      return [v.getDate(), this.monthNames[v.getMonth()]].join(' ')
    }
  },
  computed: {
    ...mapGetters('home', ['bookingData']),
    getCity() {
      return this.home.location.city.split(', ')[0]
    },
    apartmentRooms() {
      const aob = this.home.apartmentRoomsDetails.amountOfBeds
      const br = this.home.apartmentRoomsDetails.bathRooms
      return [
        aob > 1 ? `${aob} beds` : `${aob} bed`,
        br > 1 ? `${br} bathrooms` : `${br} bath`,].join(' · ')
    },
    freeCancellationDate() {
      const fiveDay = new Date(5 * 24 * 60 * 60 * 1000)

      const firstDate = new Date(this.bookingData.date[0]);

      const res = new Date(firstDate - fiveDay)
      return this.formatData(res)
    },
  }
}
</script>

<style lang="scss">
  .home-details {
      flex: 1;
      display: flex;
      flex-direction: column;

      padding: 20px;
      border: 1px solid #cccccc;

      &__header {
        display: flex;
        justify-content: space-between;

        .home-details__img {
          width: 120px;
          height: 120px;
          border-radius: 25px;
          object-fit: cover;
        }

        .home-details__info {
          display: flex;
          flex-direction: column;
        }
      }

      &__footer {
        .home-details__cancellation-date {
          font-size: 16px;
        }
      }
    }
</style>