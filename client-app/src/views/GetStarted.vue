<template>
    <div class="get-started">
        <div class="get-started__top">
            <div class="get-started__type">FINANCIALS</div>
            <h2 class="get-started__heading">How you make money on Airbnb</h2>
            <p class="get-started__description">
                With Airbnb, enjoy a painless payment system, low fees, and freedom over what you charge.
            </p>
        </div>
        <div class="get-started__bottom">
            <h3 class="get-started__subheading">Tell us a little about your place</h3>
            <div class="get-started__controller">
                <div class="get-started__lists">
<!--                    <bounce :items="cities" />-->
                    <v-select
                        v-model="apartmentType"
                        :items="apartmentTypes"
                    />
                    <v-select
                        v-model="guests"
                        :items="guestItems"
                    />
                </div>
                <v-btn class="get-started__action">
                    <router-link :to="{ name: 'CreateHome' }">Get Started</router-link>
                </v-btn>
            </div>
        </div>
    </div>
</template>

<!--<template>-->

<!--</template>-->

<!--<script>-->
<!--    export default  {-->

<!--    }-->
<!--</script>-->

<!--<style lang="scss">-->

<!--</style>-->

<script>
export default {
    data() {
        return {
            apartmentType: 'Entire place',
            apartmentTypes: ['Entire place', 'Private room', 'Shared room'],
            guests: '1 guest',
            guestItems: ['1 guest', '2 guests', '3 guests', '4 guests', '5 guests', '6 guests', '7 guests', '8 guests',
                '9 guests', '10 guests', '11 guests', '12 guests', '13 guests', '14 guests', '15 guests', '16 guests']
        }
    }
}
</script>

<style lang="scss">
    .get-started {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background-color: #fff;
        font-family: "Montserrat", sans-serif;

        &__top {
            width: 100%;
            height: 80%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 100px 0;
            line-height: 65px;
            background-color: #e4e4e4;

            .get-started__type {
                font-size: 14px;
                font-weight: 600;
            }

            .get-started__heading {
                font-size: 47px;
                font-weight: 700;
            }

            .get-started__description {
                width: 30%;

                text-align: center;
                font-size: 20px;
                line-height: 25px;
            }
        }

        &__bottom {
            width: 50%;

            padding: 50px;

            position: relative;
            top: -140px;

            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            background: white;
            border-radius: 50px;
            box-shadow:  20px 20px 60px #d9d9d9,
            -20px -20px 60px #ffffff;

            .get-started__subheading {
                font-size: 30px;
            }

            .get-started__controller {
                margin-top: 30px;
                width: 90%;
                display: flex;
                justify-content: space-evenly;
                align-items: center;

                .get-started__controller {
                    display: flex;
                    flex-direction: column;

                    .get-started__action {
                        position: relative;
                        &:before {
                            content: "";
                            position: absolute;
                            width: 2px;
                            height: 20px;
                            background-color: #5e5e5e;
                        }
                    }
                }
            }
        }
    }
</style>
