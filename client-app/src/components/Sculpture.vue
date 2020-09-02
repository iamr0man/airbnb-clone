<template>
  <div class="post mt-8">
    <div class="card-top">
      <img class="card-top__img" src="../assets/img/original.jpg" />
    </div>
    <div class="card-info">
      <div class="card-info__top">
        <h2 class="top-title">Testing title</h2>            
      </div>
      <div class="card-info__bottom">
      </div>
    </div>
    <div class="post__background"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Post",
  computed: {
    ...mapGetters('user', ['user']),
  }
}
</script>

<style scoped lang="scss">

  .post {
    position: relative;
    width: 600px;
    
    border: 1px solid;
    box-shadow: -13px -10px 1px 1px black;
    
    transform: perspective(209px) rotateY(7deg);

    &:nth-child(2n){
      box-shadow: 13px -10px 1px 1px black;
      transform: perspective(119px) rotateY(3deg);
    }
    .card-top {
      &__img {
        width: 100%;
      }
    }

    .card-info {
      color: black;
      display: flex;
      justify-content: space-evenly;

      .top-title {
        font-size: 30px;
      }
    }

    &__background {
      position: absolute;
      background-color: #fdad1d;
      width: 270%;
      height: 100%;
      transform: perspective(0) rotateY(0);
      z-index: -1;
      top: 0;
    }
  }
</style>