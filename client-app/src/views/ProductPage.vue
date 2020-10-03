<template>
    <div class="product-page">
        <ProductPageImage :home="home" />
        <div class="product-page__info">
            <ProductPageHeader :home="home"/>
            <div class="product-page__content">
                <div class="product-page__rooms-details">
                    <div class="rooms-details__questions">
                        <p class="rooms-details__item">How much guests?</p>
                        <p class="rooms-details__item">Number of bedrooms:</p>
                        <p class="rooms-details__item">How much beds?</p>
                        <p class="rooms-details__item">Number of bathrooms:</p>
                    </div>
                    <div class="rooms-details__answer">
                        <p class="rooms-details__item">{{ home.apartmentRoomsDetails.maxGuests }} guests</p>
                        <p class="rooms-details__item">{{ home.apartmentRoomsDetails.bedRooms }} bedroom</p>
                        <p class="rooms-details__item">{{ home.apartmentRoomsDetails.amountOfBeds }} bed</p>
                        <p class="rooms-details__item">{{ home.apartmentRoomsDetails.bathRooms }} bathroom</p>
                    </div>
                    <div class="product-page__rooms-date">
                        <div class="rooms-date__header">
                            <p class="price">${{ home.pricePerNight }} <span>/night</span></p>
                            <p class="details__reviews">
                                <v-icon color="#FF5A5F" class="mdi mdi-star"/>
                                {{ home.reviews.start }} <span>({{ home.reviews.array.length }})</span>
                            </p>
                        </div>
                        <date-picker
                            v-model="date"
                            :range="true"
                            @pick="datePick"
                            range-separator=" | "
                            :disabled-date="disabledBeforeTodayAndAfterAWeek"
                            placeholder="Arrival - Departure"
                        />
                        <v-row class="rooms-date__guests my-2" justify="center">
                            <GuestsPicker
                                :adults="adults"
                                :children="children"
                                :babies="babies"
                                @changeAdults="updateGuests"
                                @changeChildren="updateGuests"
                                @changeBabies="updateGuests"
                                buttonName="Select Guests"
                            />
                        </v-row>
                        <p class="rooms-date__warning-text text-center">Until you pay for nothing</p>
                        <Prices
                          v-if="isDatePick"
                          :home="home"
                          :nights="nights"
                          :isLineExist="true"
                        />
                    </div>
                    <button @click="booking" class="product-page__rooms-order">
                        <p>Reserved</p>
                    </button>
                </div>
            </div>
            <div class="product-page__text-general">
                <TabsText :home="home" />
            </div>
        </div>
    </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

import ProductPageImage from '../components/ProductPageImage.vue'
import ProductPageHeader from '../components/ProductPageHeader.vue'
import Prices from '../components/Prices.vue'
import GuestsPicker from '../components/GuestsPicker.vue'
import TabsText from '../components/TabsText.vue'

import { mapGetters } from 'vuex'

export default {
    components: {
        ProductPageImage,
        ProductPageHeader,
        DatePicker,
        Prices,
        GuestsPicker,
        TabsText
    },
    data() {
        return {
            date: null,
            adults: {
              name: 'adults', value: 0,
            },
            children: {
              name: 'children', value: 0,
            },
            babies: {
              name: 'babies', value: 0,
            },
            nights: -1,
            cleaningFee: 0,
            serviceFee: 0, 
            total: 0,
            bookedDate: [
                // new Date('2020-10-16').setHours(0, 0, 0),
                // new Date('2020-10-17').setHours(0, 0, 0),
                // new Date('2020-10-18').setHours(0, 0, 0),
                // new Date('2020-10-19').setHours(0, 0, 0),
                // new Date('2020-10-20').setHours(0, 0, 0),
            ],
        }
    },
    methods: {
        updateGuests(v) {
            this[v.name].value = v.value
        },
        datePick(){
            if(this.date) {
                this.checkDateRange()
                this.countNights()
            }
        },
        checkDateRange() {
            for(let i = 1; i <= 3; i++) {
            const current = new Date(this.date[0].getTime() + i * 24 * 3600 * 1000).getTime();
                if(this.bookedDate.includes(current)) {
                    alert("Please choose minimum 3 days!");
                    this.date = null
                    return;
                }
            }
        },
        countNights() {
          const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
          const firstDate = new Date(this.date[0]);
          const secondDate = new Date(this.date[1]);

          this.nights = Math.round(Math.abs((firstDate - secondDate) / oneDay));
        },
        disabledBeforeTodayAndAfterAWeek(date) {
            const today = new Date()

            if(this.bookedDate.includes(date.getTime())) {
                return true
            }

            return date < today || date > new Date(today.getTime() + 365 * 24 * 3600 * 1000)
        },
        async booking() {
          const data = {
              date: this.date,
              guests: {
                  adults: this.adults,
                  children: this.children,
                  babies: this.babies
              },
              prices: {
                  nights: this.nights,
                  priceOfPickedDate: this.priceOfPickedDate,
                  cleaningFee: this.cleaningFee,
                  serviceFee: this.serviceFee,
                  total: this.total

              }
          }
          await this.$store.dispatch('home/setBookingData', { data })
          await this.$router.push({ name: 'Booking', params: { id: this.home._id } })
        }
    },
    computed: {
        ...mapGetters('home', ['home']),
        isDatePick() {
            if(this.date) {
                const isItemsNull = this.date.every(v => v === null) 
                return !isItemsNull
            }
            return false;
        }
    }
}
</script>

<!--<style lang="scss">-->
<!--    $namespace: 'xmx';-->
<!--    -->
<!--    @import '../../node_modules/vue2-datepicker/scss/index.scss'-->
<!--</style>-->

<style lang="scss">
    .product-page {
        width: 100vw;
        height: 100vh;
        display: flex;

        &__image {
            flex: 1;

            &-wrapper {
                width: 100%;
                height: 100%;
                position: relative;

                .v-carousel {
                    top: 170px;
                    right: 50px;
                }

                .product-page__wrapper-item {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 90%;
                    height: 90%;
                    object-fit: scale-down;
                }

                &:before {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-color: #f1f4f5;
                    z-index: 0;
                    top: 0;
                    left: 0;
                }
            }
            &-text {
                position: absolute;
                min-width: 350px;
                max-width: 450px;
                left: 1%;
                bottom: 17%;
                font-size: 16px;
                font-family: "Montserrat", sans-serif;
            }
        }
        &__info {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            background: linear-gradient(to left, #d6d9dc, #f1f4f5);

            .product-page__header {
                line-height: 38px;
                .product-page__name {
                    margin-left: -2px;
                    font-size: 40px;
                    font-weight: 800;
                }
                .product-page__details {
                    display: flex;
                    font-size: 18px;

                    & > p {
                        margin-right: 15px;
                    }

                    .details__location {
                        color: #5e5e5e;
                        text-decoration: underline;
                        font-weight: 600;
                    }
                }
            }

            .product-page__content {
                .product-page__rooms-details {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    & > div {
                        flex: 1;
                    }

                    .product-page__rooms-date {
                        display: flex;
                        flex-direction: column;

                        padding: 30px;
                        border: 1px solid #c4c4c4;
                        border-radius: 33px;
                        box-shadow: 0 0 20px 0 #acacac;

                        .rooms-date__header {
                            display: flex;
                            justify-content: space-between;
                            margin-bottom: 10px;

                            .price {
                                font-size: 19px;
                                font-weight: 600;
                                 span {
                                     font-size: 14px;
                                     color: #5e5e5e;
                                 }
                            }
                        }


                        .mx-datepicker-range {
                            width: 240px !important;

                            .mx-input {
                                border: none !important;
                            }
                        }
                    }

                    .product-page__rooms-order {
                        height: 190px;

                        display: flex;
                        justify-content: center;
                        align-items: center;

                        padding: 50px;
                        border: 1px solid black;
                        border-radius: 50%;
                        margin: 0 25px;

                        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
                        background-size: 400% 400%;
                        animation: gradient 15s ease infinite;

                        cursor: pointer;
                        text-decoration: none;
                        color: #fff;
                        outline: none;

                        p {
                            font-weight: 900;
                            font-size: 20px;
                            font-style: italic;
                        }
                    }
                }
                .product-page__text-general {
                    padding-right: 50px;
                }

                .product-page__slider {
                    .item {
                        width: 390px;
                        height: 340px;
                        object-fit: cover;
                    }
                }
            }
        }
    }

    .guests__select {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title {
            display: flex;
        }

        .counter {
            display: flex;
            align-items: center;
            font-size: 20px;

            .v-icon.v-icon.v-icon--link {
              font-size: 28px !important;
            }
        }
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

</style>
