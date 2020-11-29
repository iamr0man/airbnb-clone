<template>
    <div v-if="!!home" @click="showHome" class="discover__item swiper-slide" :style="itemStyles">
        <div class="item__left" :style="itemLeftStyles">
            <img :src="home.photos[0]" />
            <div class="item__left-shadow"></div>
            <div class="item__left-layout"></div>
        </div>
        <div v-show="isHorizontal" class="item__decoration">
            <div class="item__decoration-wrapper">
            </div>
        </div>
        <div class="item__right" :style="itemRightStyles">
            <div class="item__right-apartment">
                <p class="apartment__type">{{ home.apartmentType }}</p>
                <h6 class="apartment__name">{{ home.name }}</h6>
                <div class="apartment__reviews">
                    <v-rating :value="home.reviews.stars" />
                    <p>{{ home.reviews.array.length }}</p>
                </div>
                <div class="apartment__rooms">
                    <p class="apartment__rooms-item">
                        {{ getRooms }}
                    </p>
                </div>
            </div>
            <div class="item__right-actions">
                <div class="item__right-actions-price">${{ home.pricePerNight }} <span>/ per night</span></div>
                <v-btn class="item__right-actions-button">
                    <v-icon color="white" class="mdi mdi-arrow-right"/>
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['pageId', 'isHorizontal'],
    name: "HomeCard",
    data() {
        return {
            home: null
        }
    },
    methods: {
        showHome: async function() {
            await this.$store.commit('home/SET_HOME', { home: this.home })
            await this.$router.push({ name: 'ProductPage', params: { id: this.pageId } })
        }
    },
    computed: {
        getRooms: function() {
            const { maxGuests, bedRooms, amountOfBeds, bathRooms } = this.home.apartmentRoomsDetails
            return `${maxGuests} guests, ${bedRooms} bedrooms, ${amountOfBeds} beds, ${bathRooms} bath`
        },
        itemStyles: function() {
            if(!this.isHorizontal) {
                return {
                    width: '750px',
                    flexDirection: 'column'
                }
            }
            return {}
        },
        itemLeftStyles: function() {
            if(!this.isHorizontal) {
                return {
                    borderBottomLeftRadius: this.isHorizontal ? '30px' : '0px',
                    borderBottomRightRadius: this.isHorizontal ? '10px' : '0px',
                }
            }
            return {}
        },
        itemRightStyles: function() {
            if(!this.isHorizontal) {
                return {
                    borderTopLeftRadius: this.isHorizontal ? '10px' : '0px',
                    borderTopRightRadius: this.isHorizontal ? '30px' : '0px',
                }
            }
            return {}
        },
    },
    async mounted() {
        this.home = await this.$store.dispatch('home/getHome', {id: this.pageId})
    }
};
</script>

<style lang="scss" scoped>
    .discover__item {
        display: flex;
        min-width: 620px;
        max-width: 620px;
        height: 290px !important;
        padding: 10px;
        color: black;
        text-decoration: none;
        cursor: pointer;

        .item__left {
            width: 47%;
            height: 100%;
            background-color: white;
            position: relative;
            border-top-left-radius: 10px;
            border-top-right-radius: 30px;
            border-bottom-left-radius: 10px;

            img {
                position: relative;
                width: 100%;
                height: 100%;
                padding: 20px;
                border-radius: 35px;
                object-fit: cover;
                z-index: 2;
            }

            &-shadow {
                position: absolute;
                right: 38px;
                bottom: 28px;
                width: 80%;
                height: 80%;
                background-color: white;
                border-radius: 10px;
                z-index: 1;
                box-shadow: 20px 20px 60px #000000,
                -20px -20px 60px #b1b1b1;
            }

            &-layout {
                position: absolute;
                right: 38px;
                bottom: 4px;
                width: 80%;
                height: 90%;
                background-color: teal;
                border-radius: 10px;
                z-index: 0;
            }
        }

        .item__decoration {
            width: 3%;
            height: 100%;
            display: flex;
            align-items: center;
            clip-path: polygon(0% 0%, 0% 100%, 45% 100%, 45% 0, 55% 0, 55% 100%, 100% 100%, 100% 0%);

            &-wrapper {
                width: 100%;
                height: 80%;
                background-color: white;
            }
        }
        .item__right {
            width: 47%;
            height: 100%;
            background-color: #fff;
            padding: 10px;
            border-top-left-radius: 30px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            &-apartment {
                .apartment__type {
                    font-size: 20px;
                    font-weight: 500;
                }
                .apartment__name {
                    font-size: 22px;
                    font-weight: 700;
                }
                .apartment__reviews {
                    display: flex;
                    align-items: center;

                    .v-rating .v-icon:nth-child(1) {
                        padding-left: 0 !important;
                    }
                }
                .apartment__rooms {
                    display: flex;
                    flex-wrap: wrap;
                    color: #ccc;

                    &-item {
                        font-size: 19px;
                    }
                }
            }

            &-actions {
                display: flex;
                align-items: center;
                justify-content: space-between;

                &-price {
                    font-size: 33px;
                    font-weight: 700;

                    span {
                        color: #ccc;
                        font-size: 14px;
                    }
                }

                &-button {
                    background-color: teal !important;
                    border-radius: 40%;
                    font-size: 33px;

                    .v-icon {
                        color: white !important;
                    }
                }
            }
        }
    }
</style>
