<template>
  <div class="home">
    <div class="home__discover">
      <div class="discover__headlines">
        <h1 class="headline">Discover</h1>
        <h2 class="title">The Shipwreck Beach</h2>
        <h5 class="subtitle">Find the place to stay near the Shipwreck Beach in Greece  </h5>
      </div>
        <div class="discover__wrapper swiper-container">
          <div class="wrapper__items swiper-wrapper">
            <Apartment v-for="(v, i) in 7" :key="i" :is-horizontal="true"/>
          </div>
        <div class="swiper-pagination"></div>
        </div>
    </div>
    <AirbnbPlus />
    <Museum />
<!--    <Homes />-->
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import Apartment from '../components/Apartment.vue'
// import Homes from '../views/Homes.vue'
import Museum from '../views/Museum.vue'
import AirbnbPlus from '../views/AirbnbPlus.vue'
export default {
  name: "Home",
  components: {
    Apartment,
    // Homes,
    Museum,
    AirbnbPlus,
  },
  data() {
    return {
      rating: 5,
      rooms: ['4 guests', '1 bedroom', '2 beds', '1 bath', 'kitchen', 'elevator']
    }
  },
  mounted() {
    // eslint-disable-next-line
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
};
</script>

<style lang="scss" scoped>

.home__discover {
  width: 100vw;
  height: 100vh;
  background: url('../assets/img/slide-2.jpg') no-repeat;
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
