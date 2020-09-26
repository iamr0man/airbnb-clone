<template>
  <div class="homes" :style="homesStyles">
    <div class="homes__headline">
      <h1 class="homes__headline-title">
        {{ city.name }}
      </h1>
      <h5 v-if="!isRowReverse" class="homes__headline-subtitle">Live like locals in</h5>
      <img v-else class="homes__headline-logo" src="../assets/img/airbnbplus.svg" alt="">
    </div>
    <div class="homes__container">
      <div class="homes__container-header">
        <h4 class="container-header__headline">
          Homes In {{ city.name }}
        </h4>
        <div class="container-header__button">
          Show All (369)
        </div>
      </div>
      <div class="homes__container-content" :style="isRowReverse ? containerContentStyles : {}">
        <HomeCard class="homes__container-content-item" :pageId="city.items[0]" :is-horizontal="false" />
        <HomeCard class="homes__container-content-item" :pageId="city.items[1]" :is-horizontal="false" />
        <HomeCard class="homes__container-content-item" :pageId="city.items[2]" :is-horizontal="true" />
        <HomeCard class="homes__container-content-item" :pageId="city.items[3]" :is-horizontal="true" />
        <HomeCard class="homes__container-content-item" :pageId="city.items[4]" :is-horizontal="false" />
        <HomeCard class="homes__container-content-item" :pageId="city.items[5]" :is-horizontal="false" />
      </div>
      <div class="homes__container-action">
        <v-btn>Find Homes in {{ city.name }}</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCard from '../components/HomeCard.vue'

export default {
  props: ['city', 'isRowReverse'],
  components: {
    HomeCard,
  },
  computed: {
    homesStyles: function() {
      return this.isRowReverse ? {
        'flexDirection': 'row-reverse',
        'background': `url(${this.city.backgroundUrl})`
      } : {}
    },
    containerContentStyles: function() {
      return { 'marginRight': '-320px' }
    },
    // containerHeaderStyles: function() {
    //   return {
    //     'display': 'flex',
    //     'flexDirection': 'column',
    //     'alignItems': 'flexEnd'
    //   }
    // },
  }
}
</script>

<style lang="scss" scoped>
  $primary--text: #fc8589;

  .homes {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    background-repeat: no-repeat;
    background-size: cover;

    &__headline {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &-title {
        font-size: 150px;
        font-weight: 800;
        transform: rotate(-90deg);
        color: white;
      }
      &-subtitle {
        position: absolute;
        bottom: 459px;
        left: 70px;
        font-size: 34px;
        font-weight: 600;
        transform: rotate(-90deg);
        color: #fff;
      }
      &-logo {
        position: absolute;
        bottom: 125px;
        left: 45px;
        font-size: 34px;
        font-weight: 600;
      }
    }

    &__container {
      flex: 3;
      height: 100%;
      background-color: #ffffffb5;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &-header {
        .container-header__headline {
          font-size: 30px;
        }
        .container-header__button {
          font-size: 20px;
          color: teal;
        }
      }
      &-content {
        display: grid;
        grid-template-areas:
        "a b c c"
        "a b e f"
        "d d e f";
        grid-template-columns: repeat(4, 400px);
        grid-template-rows: 315px 190px 315px;

        &-item:nth-child(1) {
          grid-area: a;
        }
        &-item:nth-child(2) {
          grid-area: b;
        }
        &-item:nth-child(3) {
          grid-area: c;
          margin: 5px 0 0 -60px;
        }
        &-item:nth-child(4) {
          grid-area: d;
          margin: 0 0 0px -15px;
        }
        &-item:nth-child(5) {
          grid-area: e;
          margin: -10px 0px 0px -60px;
        }
        &-item:nth-child(6) {
          grid-area: f;
          margin: -10px 0px 0px -125px;
        }
      }

      &-action {
        display: flex;
        justify-content: space-between;

        button {
          background-color: $primary--text !important;
        }
      }
    }
  }
</style>
