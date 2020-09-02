<template>
  <Homes :is-row-reverse="true" />
</template>

<script>
import Homes from '../views/Homes.vue'
export default {
  components: {
    Homes
  }
}
</script>

<style lang="scss" scoped>
  $primary--text: #fc8589;
  
  .homes {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    background: url('../assets/img/venice.jpeg');


    &__headline {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      &-title {
        position: relative;
        font-size: 150px;
        font-weight: 800;
        transform: rotate(-90deg);
        color: white;

        // &::before {
          // content: url('../assets/img/airbnbplus.svg');
          // position: absolute;
          // bottom: -30px;
          // left: -10px;
          // font-size: 34px;
          // font-weight: 600;
          // transform: rotate(90deg);
        // }
      }
    }

    &__container {
      flex: 3;
      height: 90%;
      background-color: #ffffffb5;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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
        }
        &-item:nth-child(4) {
          grid-area: d;
        }
        &-item:nth-child(5) {
          grid-area: e;
        }
        &-item:nth-child(6) {
          grid-area: f;
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