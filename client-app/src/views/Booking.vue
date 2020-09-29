<template>
  <div v-if="home" class="booking">
    <div class="booking__wrapper">
      <div class="booking__confirm">
        <div class="booking__title">Confirm and pay</div>
        <div class="booking__subtitle">Your trip</div>
        <div class="booking__input-row input-row">
          <div class="booking__field-label field-label">
            <p class="booking__label">Dates</p>
            <span class="booking__dates">{{ formatDate(bookingData.date[0]) }}–{{ formatDate(bookingData.date[1]) }}</span>
          </div>
          <ModelDataPicker />
        </div>
        <div class="booking__input-row input-row">
          <div class="booking__field-label field-label">
            <p class="booking__label">Guests</p>
            <span class="booking__dates">{{ amountOfGuests }}</span>
          </div>
          <GuestsPicker
              class="rooms-date__guests my-2"
              :adults="bookingData.guests.adults"
              :children="bookingData.guests.children"
              :babies="bookingData.guests.babies"
              @changeAdults="updateAdults"
              @changeChildren="updateChildren"
              @changeBabies="updateBabies"
              buttonName="Edit"
          />
        </div>
        <hr class="my-3">
        <div class="booking__input-field counter-row">
          <p class="booking__field-label field-label">Is this a work trip?</p>
          <v-switch
              v-model="isWorkTrip"
              inset />
        </div>
        <hr class="my-3">
        <div class="booking__pay-with">
          <div class="booking__field-label field-label">Pay with</div>
          <div class="booking__partners">
            <img class="booking__partner" v-for="(v, i) in partners" :src="getImgUrl(v)" alt="v" :key="i">
          </div>
        </div>
        <form class="booking__form">
          <div class="booking__input-row input-row">
            <v-select
                v-model="payMethod"
                prepend-inner-icon="mdi mdi-credit-card-check-outline"
                solo
                :items="payMethods"
            />
          </div>
          <div v-if="payMethod === payMethods[0]" class="booking__card-inputs">
            <div class="booking__input-row input-row">
              <v-text-field
                  v-model="cardNumber"
                  solo
                  label="Card number"
              />
            </div>
            <div class="booking__input-row input-row">
              <v-text-field
                  class="mr-1"
                  v-model="expiration"
                  solo
                  label="Expiration"
              />
              <v-text-field
                  v-model="cvv"
                  solo
                  label="CVV"
              />
            </div>
            <div class="booking__input-row input-row">
              <v-text-field
                  v-model="postcode"
                  solo
                  label="Postcode"
              />
            </div>
            <div class="booking__input-row input-row">
              <v-select
                  v-model="country"
                  label="Country/Region"
                  solo
                  :items="[]"
              />
            </div>
          </div>
          <p class="booking__promocode">Enter a coupon</p>
          <div class="booking__subtitle">Required for your trip</div>
          <div class="booking__input-row input-row">
            <div class="booking__field-label field-label">
              <p class="booking__label">Message the host</p>
              <span class="booking__dates">Let the host know why you're travelling and when you'll check in.</span>
            </div>
            <button>Add</button>
          </div>
          <div class="booking__input-row input-row">
            <div class="booking__field-label field-label">
              <p class="booking__label">Phone number</p>
              <span class="booking__dates">Add and confirm your phone number to get trip updates.</span>
            </div>
            <PhoneCodesModal />
          </div>
          <div class="booking__cancellation-policy">
            <div class="booking__subtitle">Cancellation policy</div>
            <p class="booking__description">Free cancellation until 1:00 PM on 8 Oct. <span class="more">Learn more</span></p>
            <p class="booking__description"><span class="covid">Make sure this host’s cancellation policy works for you.</span> For reservations made after March 14, COVID-19 will not qualify as an extenuating circumstance. <span class="more">Learn more</span></p>
          </div>
          <p class="booking__condition">By selecting the button below, I agree to the House Rules, Safety Disclosures, Cancellation Policy, and the Guest Refund Policy. I also agree to pay the total amount shown, which includes Service Fees. Payment Terms between you and Airbnb Payments UK Ltd.</p>
          <button
            class="booking__submit"
            @submit.prevent="confirmAndPay"
          >Confirm and pay</button>
        </form>
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
import PhoneCodesModal from "../components/PhoneCodesModal";
export default {
  components: {
    ModelDataPicker,
    HomeDetailsCard,
    GuestsPicker,
    PhoneCodesModal
  },
  data() {
    return {
      dialog: false,
      isWorkTrip: false,
      partners: [
          'logo_visa',
          'logo_mastercard',
          'logo_discover',
          'logo_amex',
          'logo_paypal',
          'logo_googlepay'
      ],
      payMethod: 'Credit or debit card',
      payMethods: [
          'Credit or debit card',
          'PayPal',
          'Google Pay'
      ],
      cardNumber: '',
      expiration: '',
      cvv: '',
      postcode: '',
      country: 'Ukraine',
    }
  },
  methods: {
    getImgUrl(pet) {
      const images = require.context('../assets/img/', false, /\.svg$/)
      return images('./' + pet + ".svg")
    },
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
    },
    confirmAndPay() {

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
        margin-right: 75px;

        .booking__title {
          font-size: 40px;
          font-weight: 600;
          color: #222222
        }

        .booking__subtitle {
          font-size: 24px;
          font-weight: 600;
        }

        .booking__input-row {
          width: 100%;
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

        .booking__pay-with {
          display: flex;
          justify-content: space-between;
          .field-label {
            font-size: 24px;
          }

          .booking__partners {
            display: flex;

            .booking__partner {
              margin-right: 6px;
              width: 40px;
            }
          }
        }

        .booking__form {
          .booking__card-inputs {
            display: flex;
            flex-direction: column;

            .input-row {
              .v-input__slot {
                border: 1px solid #222222 !important;
              }
            }

            &:nth-child(2) {
              display: flex;
            }
          }

          .booking__promocode {
            font-size: 15px;
            font-weight: 600;
            text-decoration: underline;
          }

          .booking__cancellation-policy {
            position: relative;
            display: flex;
            flex-direction: column;
            margin: 30px 0 20px 20px;

            .booking__description .more {
              font-weight: 600;
              text-decoration: underline;
            }

            .booking__description .covid {
              font-weight: 600;
            }

            &:before {
              content: '';
              position: absolute;
              left: -20px;
              width: 5px;
              height: 100%;
              background-color: #fdaf1f;
            }
          }

          .booking__condition {
            font-size: 10px;
          }

          .booking__submit {
            padding: 10px 15px;
            font-weight: 600;
            background-image: radial-gradient(circle at center center, rgb(255, 56, 92) 0%, rgb(230, 30, 77) 27.5%, rgb(227, 28, 95) 40%, rgb(215, 4, 102) 57.5%, rgb(189, 30, 89) 75%, rgb(189, 30, 89) 100%);
            border-radius: 12px;
            color: white;
            outline: none;
          }
        }
      }
    }

    .field-label {
      color: #222222 !important;
      font-size: 18px;

      span {
        color: #c4c4c4;
      }
    }
  }
</style>
