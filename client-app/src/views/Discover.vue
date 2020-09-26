<template>
    <div
        v-if="!!discover"
         class="home__discover"
         :style="{ background: `url(${discover.backgroundUrl})`}"
    >
        <div class="discover__headlines">
            <h1 class="headline">Discover</h1>
            <h2 class="title">{{ discover.name }}</h2>
            <h5 class="subtitle">Find the place to stay near {{ discover.name }} in {{ discover.country }}  </h5>
        </div>
        <div class="discover__wrapper swiper-container">
            <div class="wrapper__items swiper-wrapper">
                <HomeCard v-for="(v, i) in discover.items" :pageId="v" :key="i" :is-horizontal="true"/>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';

import { mapGetters } from 'vuex'

import HomeCard from '../components/HomeCard.vue'
export default {
    name: "Discover",
    components: {
        HomeCard,
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters('pick', ['discover'])
    },
    mounted() {
        // eslint-disable-next-line
        new Swiper('.swiper-container', {
            slidesPerView: 2,
            spaceBetween: 0,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    },
};
</script>

<style lang="scss" scoped>

.home__discover {
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;

    .discover__headlines {
        margin: 80px 0 0 225px;
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: white;

        .headline {
            font-size: 150px !important;
            font-weight: 700;
        }

        .title {
            text-transform: capitalize;
            line-height: 185px !important;
            font-size: 100px !important;
            font-weight: 600;
        }

        .subtitle {
            font-size: 34px;
            font-weight: 500;
        }
    }

    .discover__wrapper {
        position: relative;
        bottom: 210px;
        width: 100%;
        margin-bottom: -210px;
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        .wrapper__items {
            position: relative;
            width: 88%;
            display: flex;
            margin: 15px;
            /*background: url('../assets/img/slide-3.jpg') no-repeat;*/
            background-size: cover;
            border-radius: 10px;
        }
    }
}

</style>
