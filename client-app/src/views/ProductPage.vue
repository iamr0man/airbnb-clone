<template>
    <div class="product-page">
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
        <div class="product-page__info">
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
                            @pick="checkDateRange"
                            range-separator=" | "
                            :disabled-date="disabledBeforeTodayAndAfterAWeek"
                            placeholder="Arrival - Departure"
                        />
                        <v-row class="rooms-date__guests my-2" justify="center">
                            <v-dialog v-model="dialog" persistent max-width="400px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        color="primary"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                        Select Guests
                                    </v-btn>
                                </template>
                                <v-card cl>
                                    <v-card-title>
                                        <span class="headline">Guests</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col class="guests__select" cols="12">
                                                    <div class="title">
                                                        <v-icon class="mdi mdi-human-male-female" />
                                                        <p>Adults</p>
                                                    </div>
                                                    <div class="counter">
                                                        <v-icon @click="maleFemale -= 1" class="mdi mdi-minus-circle-outline" />
                                                        <p>{{ maleFemale }}</p>
                                                        <v-icon @click="maleFemale += 1" class="mdi mdi-plus-circle-outline" />
                                                    </div>
                                                </v-col>
                                                <v-col class="guests__select" cols="12">
                                                    <div class="title">
                                                        <v-icon class="mdi mdi-human-child" />
                                                        <p>Children</p>
                                                    </div>
                                                    <div class="counter">
                                                        <v-icon @click="children -= 1" class="mdi mdi-minus-circle-outline" />
                                                        <p>{{ children }}</p>
                                                        <v-icon @click="children += 1" class="mdi mdi-plus-circle-outline" />
                                                    </div>
                                                </v-col>
                                                <v-col class="guests__select" cols="12">
                                                    <div class="title">
                                                        <v-icon class="mdi mdi-baby-carriage" />
                                                        <p>Baby</p>
                                                    </div>
                                                    <div class="counter">
                                                        <v-icon @click="babies -= 1" class="mdi mdi-minus-circle-outline" />
                                                        <p>{{ babies }}</p>
                                                        <v-icon @click="babies += 1" class="mdi mdi-plus-circle-outline" />
                                                    </div>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer />
                                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-row>
                        <p class="rooms-date__warning-text text-center">Until you pay for nothing</p>
                        <div v-show="date !== null" class="rooms-date__prices">
                            <div class="prices__item">
                                <p>$71 x 11 noches</p>
                                <p>$782</p>
                            </div>
                            <div class="prices__item">
                                <p>Cleaning fee</p>
                                <p>$59</p>
                            </div>
                            <div class="prices__item">
                                <p>Service fee</p>
                                <p>$145</p>
                            </div>
                            <hr />
                            <div class="prices__item">
                                <p>Total</p>
                                <p>$969</p>
                            </div>
                        </div>
                    </div>
                    <div class="product-page__rooms-order">
                        <p>Reserved</p>
                    </div>
                </div>
            </div>
            <div class="product-page__text-general">
                <v-tabs
                        v-model="tab"
                        background-color="transparent"
                        color="basil"
                        grow
                >
                    <v-tab
                            v-for="item in items"
                            :key="item"
                    >
                        {{ item }}
                    </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                    <v-tab-item>
                        <v-card color="basil" flat>
                            <v-card-text>{{ home.textDetails.house }}</v-card-text>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card color="basil" flat>
                            <v-card-text>{{ home.textDetails.availableForGuest }}</v-card-text>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card color="basil" flat>
                            <v-card-text>{{ home.textDetails.importantInfo }}</v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </div>
        </div>
    </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

import { mapGetters } from 'vuex'

export default {
    components: {
        DatePicker
    },
    data() {
        return {
            date: null,
            tab: null,
            dialog: false,
            maleFemale: 0,
            children: 0,
            babies: 0,
            bookedDate: [
                new Date('2020-10-16').setHours(0, 0, 0),
                new Date('2020-10-17').setHours(0, 0, 0),
                new Date('2020-10-18').setHours(0, 0, 0),
                new Date('2020-10-19').setHours(0, 0, 0),
                new Date('2020-10-20').setHours(0, 0, 0),
            ],
            items: [
                'House', 'What available for guest', 'Important Information',
            ],
        }
    },
    methods: {
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
        disabledBeforeTodayAndAfterAWeek(date) {
            const today = new Date()

            if(this.bookedDate.includes(date.getTime())) {
                return true
            }

            return date < today || date > new Date(today.getTime() + 365 * 24 * 3600 * 1000)
        },
    },
    computed: {
        ...mapGetters('home', ['home'])
    }
}
</script>

<!--<style lang="scss">-->
<!--    $namespace: 'xmx';-->
<!--    -->
<!--    @import '../../node_modules/vue2-datepicker/scss/index.scss'-->
<!--</style>-->

<style lang="scss" scoped>
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

                        .rooms-date__prices {
                            margin-top: 10px;
                            & > .prices__item {
                                display: flex;
                                justify-content: space-between;

                                p:first-child {
                                    text-decoration: underline;
                                }
                            }

                            & > .prices__item:nth-child(5) {
                                font-size: 20px;
                                font-weight: 800;

                                p:first-child {
                                    text-decoration: none;
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
                        height: 270px;

                        display: flex;
                        justify-content: center;
                        align-items: center;

                        padding: 50px;
                        border: 1px solid black;
                        border-radius: 50%;
                        margin: 0 25px;
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

        .title {
            display: flex;
        }

        .counter {
            display: flex;
            align-items: center;
        }
    }
</style>
