<template>
  <div v-if="home" class="booking">
    <div class="booking__wrapper">
      <div class="booking__confirm">
        <div class="booking__title">Confirm and pay</div>
        <div class="booking__subtitle">Your trip</div>
        <div class="booking__input-row input-row">
          <div class="booking__field-label field-label">
            <p class="booking__label">Dates</p>
            <p class="booking__dates">{{ formatDate(bookingData.date[0]) }}–{{ formatDate(bookingData.date[1]) }}</p>
          </div>
          <ModelDataPicker />
        </div>
        <div class="booking__input-row input-row">
          <div class="booking__field-label field-label">
            <p class="booking__label">Guests</p>
            <p class="booking__dates">{{ amountOfGuests }}</p>
          </div>
          <v-row class="rooms-date__guests my-2" justify="end">
            <GuestsPicker
                :adults="bookingData.guests.adults"
                :children="bookingData.guests.children"
                :babies="bookingData.guests.babies"
                @changeAdults="updateAdults"
                @changeChildren="updateChildren"
                @changeBabies="updateBabies"
                buttonName="Edit"
            />
          </v-row>
        </div>
      </div>
      <HomeDetailsCard :home="home" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GuestsPicker from '../components/GuestsPicker'
import HomeDetailsCard from '../components/HomeDetailsCard'
import ModelDataPicker from "../components/ModelDataPicker";
export default {
  components: {
    ModelDataPicker,
    HomeDetailsCard,
    GuestsPicker
  },
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    updateAdults(newValue) {
      const data = Object.assign({}, this.bookingData)
      data.guests.adults = newValue

      this.$store.dispatch('home/setBookingData', { data })
    },
    updateChildren(newValue) {
      const data = Object.assign({}, this.bookingData)
      data.guests.children = newValue

      this.$store.dispatch('home/setBookingData', { data })
    },
    updateBabies(newValue) {
      const data = Object.assign({}, this.bookingData)
      data.guests.babies = newValue

      this.$store.dispatch('home/setBookingData', { data })
    },
    formatDate(v) {
      const mm = new Date(v).getMonth() + 1;
      const dd = new Date(v).getDate();

      return [v.getFullYear(),
        (mm>9 ? '' : '0') + mm,
        (dd>9 ? '' : '0') + dd
      ].join('-');
    }
  },
  computed: {
    ...mapGetters('home', ['home', 'bookingData']),
    amountOfGuests() {
      let res = 0
      for(const key in this.bookingData.guests) {
        res += this.bookingData.guests[key]
      }
      return res;
    },

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

        .booking__input-row {
          display: flex;
          justify-content: space-between;

          .booking__field-label {
            .booking__label {
              font-size: 19px;
              color: #1b1b1b;
            }
          }

          .booking__edit-button {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>