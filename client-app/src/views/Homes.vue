<template>
  <div class="homes">
    <div class="homes__headline">
      <h1 class="homes__headline-item">
        Venice
      </h1>
    </div>
    <div class="homes__container">
      <div class="homes__container-header">
        <h4 class="container-header__headline">
          Homes In Venice
        </h4>
        <div class="container-header__button">
          Show All (369)
        </div>
      </div>
      <div class="homes__container-content">
        <Apartment :is-horizontal="false" />
        <Apartment :is-horizontal="false" />
        <Apartment :is-horizontal="true" />
        <Apartment :is-horizontal="true" />
        <!-- <Apartment :is-horizontal="true" /> -->
        <!-- <Apartment :is-horizontal="false" /> -->
      </div>
      <div class="homes__container-action">
        <v-btn placeholder="Find Homes in Venice" />
      </div>
    </div>
  </div>  
</template>

<script>
import Apartment from '../components/Apartment.vue'

export default {
  components: {
    Apartment,
  },
}
</script>

<style lang="scss">
  .homes {
    width: 100vw;
    height: 130vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: url('../assets/img/venice.jpeg');


    &__headline {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      &-item {
        position: relative;
        font-size: 150px;
        font-weight: 800;
        transform: rotate(-90deg);
        color: white;

        &::before {
          content: 'Live like locals in';
          position: absolute;
          top: 22px;
          left: 0px;
          font-size: 34px;
          font-weight: 600;
        }
      }
    }

    &__container {
      flex: 3;
      height: 90%;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 25px;

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
        "a b . ."
        "d d . .";
        grid-template-columns: 17% 17% 34% 34%;
        grid-template-rows: repeat(3, auto);

        &:nth-child(1) {
          grid-area: a;
        }
        &:nth-child(2) {
          grid-area: b;
        }
        &:nth-child(3) {
          grid-area: c;
        }
        &:nth-child(4) {
          grid-area: d;
        }
        // &:nth-child(4) {
        //   grid-area: e;
        // }
        // &:nth-child(5) {
        //   grid-area: f;
        // }
      }

      &-action {
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>