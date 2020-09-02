<template>
  <div @mouseover="stopAnimation" @mouseout="beginAnimation" class="planets">
      <section class="stage">
        <figure ref="ball__art" class="ball ball__art">
          <router-link class="ball__innertext" to="/forum">art</router-link></figure>
      </section>
      <section class="stage">
        <figure ref="ball__music" class="ball ball__music">
          <router-link class="ball__innertext" to="/forum">music</router-link></figure>
      </section>
      <section class="stage">
        <div ref="ball__movie" class="ball ball__movie">
          <router-link class="ball__innertext" to="/forum">movie</router-link></div>
      </section>
      <section class="stage">
        <div ref="ball__literature" class="ball ball__literature">
          <router-link class="ball__innertext" to="/forum">literature</router-link></div>
      </section>
      <section class="stage">
        <div ref="ball__sculpture" class="ball ball__sculpture">
          <router-link class="ball__innertext" to="/forum">sculpture</router-link></div>
      </section>
  </div>  
</template>

<script>
export default {
  name: "Planets",
  data(){
    return {
      balls: [],
    }
  },
  methods: {
    stopAnimation(){
      this.balls.forEach(v => v.style.animationPlayState = "paused")
    },
    beginAnimation(){
      this.balls.forEach(v => v.style.animationPlayState = "running")
    },
  },
  mounted(){
    this.balls = [
      this.$refs.ball__art, this.$refs.ball__music, this.$refs.ball__movie,
      this.$refs.ball__literature, this.$refs.ball__sculpture
    ]
  }
}
</script>

<style lang="scss">
$width: 50vw;
$height: 50vw;
$shadow-color: #000000;

  .planets {
    width: $width;
    height: $height;
    // position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    // margin-top: 60px;
    border-radius: 50%;

    .stage {
      position: absolute;
      width: 140px;
      height: 140px;
      perspective: 1200px;
      perspective-origin: 50% 50%;
    }

    .ball {
      height: 140px;
      width: 140px;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 50%;

      &__innertext {
        text-decoration: none;
        text-transform: uppercase;
        color: white;
      }

        &__art {
          width: 100px;
          height: 100px;
          background-image: url("../assets/photos/mercury.jpg");
          background-position: center;
          animation: art 7s linear infinite;
        }
        &__music {
          background-image: url('../assets/photos/venus.jpg');
          background-position: center;
          animation: music 9s linear infinite;
        }
        &__movie {
          background-image: url('../assets/photos/earth.jpg');
          background-position: 27% 21%;
          animation: movie 10s linear infinite;
        }
        &__literature {
          width: 100px;
          height: 100px;
          background-image: url('../assets/photos/mars.jpg');
          background-position: center;
          animation: literature 12s linear infinite;
        }
        &__sculpture {
          width: 140px;
          height: 140px;
          background-image: url('../assets/photos/jupiter.png');
          background-position: center;
          animation: sculpture 6s linear infinite;
        }
      }
    }

    @keyframes art{
      0%{
        box-shadow: inset 0px 20px 20px 5px rgba(0, 0, 0, 0.8),
        inset 1px 20px 20px 4px rgba(0, 0, 0, 0.22);
        transform:rotate(0deg)
                  translateY(-110px)
                  rotate(0deg);
      }
      25% {
        box-shadow: inset -20px 0px 20px 6px rgba(0, 0, 0, 0.8),
        inset 20px -1px 20px 4px rgba(0, 0, 0, 0.22)
      }
      50% {
        box-shadow: inset 0px -20px 14px 0 rgba(0, 0, 0, 0.8),
          inset 0px -20px 20px 0px rgba(0, 0, 0, 0.22);
      }
      75% {
        box-shadow: inset 20px 1px 20px 11px rgba(0, 0, 0, 0.8),
        inset 20px 0px 20px 4px rgba(0, 0, 0, 0.22);
      }
      100%{
        box-shadow: inset 0px 20px 20px 5px rgba(0, 0, 0, 0.8),
          inset 1px 20px 20px 4px rgba(0, 0, 0, 0.22);
      transform:rotate(360deg)
                translateY(-110px)
                rotate(-360deg);
      }
    }
    @keyframes music{
      0%{
      box-shadow: inset 0px 20px 20px 5px rgba(0, 0, 0, 0.8),
        inset 1px 20px 20px 4px rgba(0, 0, 0, 0.22);
      transform:rotate(0deg)
                translateY(-160px)
                rotate(0deg);
      }
      25% {
        box-shadow: inset -20px 0px 20px 6px rgba(0, 0, 0, 0.8),
        inset 20px -1px 20px 4px rgba(0, 0, 0, 0.22)
      }
      50% {
        box-shadow: inset 0px -20px 14px 0 rgba(0, 0, 0, 0.8),
          inset 0px -20px 20px 0px rgba(0, 0, 0, 0.22);
      }
      75% {
        box-shadow: inset 20px 1px 20px 11px rgba(0, 0, 0, 0.8),
        inset 20px 0px 20px 4px rgba(0, 0, 0, 0.22);
      }
      100%{
        box-shadow: inset 0px 20px 20px 5px rgba(0, 0, 0, 0.8),
          inset 1px 20px 20px 4px rgba(0, 0, 0, 0.22);
      transform:rotate(360deg)
                translateY(-160px)
                rotate(-360deg);
      }
    }
    @keyframes movie{
      0%{
        box-shadow: inset 0px 20px 20px 5px rgba(0, 0, 0, 0.8),
          inset 1px 20px 20px 4px rgba(0, 0, 0, 0.22);
        transform:rotate(0deg)
                  translateY(-210px)
                  rotate(0deg);
      }
      25% {
        box-shadow: inset -20px 0px 20px 6px rgba(0, 0, 0, 0.8),
        inset 20px -1px 20px 4px rgba(0, 0, 0, 0.22)
      }
      50% {
        box-shadow: inset 0px -20px 14px 0 rgba(0, 0, 0, 0.8),
          inset 0px -20px 20px 0px rgba(0, 0, 0, 0.22);
      }
      75% {
        box-shadow: inset 20px 1px 20px 11px rgba(0, 0, 0, 0.8),
        inset 20px 0px 20px 4px rgba(0, 0, 0, 0.22);
      }
      100%{
        box-shadow: inset 0px 20px 20px 5px rgba(0, 0, 0, 0.8),
          inset 1px 20px 20px 4px rgba(0, 0, 0, 0.22);
        transform:rotate(360deg)
                  translateY(-210px)
                  rotate(-360deg);
      }
    }
    @keyframes literature{
      0%{
      box-shadow: inset 0px 20px 20px 5px rgba(0, 0, 0, 0.8),
        inset 1px 20px 20px 4px rgba(0, 0, 0, 0.22);
      transform:rotate(0deg)
                translateY(-260px)
                rotate(0deg);
      }
      25% {
        box-shadow: inset -20px 0px 20px 6px rgba(0, 0, 0, 0.8),
        inset 20px -1px 20px 4px rgba(0, 0, 0, 0.22)
      }
      50% {
        box-shadow: inset 0px -20px 14px 0 rgba(0, 0, 0, 0.8),
          inset 0px -20px 20px 0px rgba(0, 0, 0, 0.22);
      }
      75% {
        box-shadow: inset 20px 1px 20px 11px rgba(0, 0, 0, 0.8),
        inset 20px 0px 20px 4px rgba(0, 0, 0, 0.22);
      }
      100%{
        box-shadow: inset 0px 20px 20px 5px rgba(0, 0, 0, 0.8),
          inset 1px 20px 20px 4px rgba(0, 0, 0, 0.22);
        transform:rotate(360deg)
                translateY(-260px)
                rotate(-360deg);
      }
    }
    @keyframes sculpture{
      0%{
        box-shadow: inset 0px 20px 20px 5px rgba(0, 0, 0, 0.8),
          inset 1px 20px 20px 4px rgba(0, 0, 0, 0.22);
        transform:rotate(0deg)
                translateY(-310px)
                rotate(0deg);
      }
      25% {
        box-shadow: inset -20px 0px 20px 6px rgba(0, 0, 0, 0.8),
        inset 20px -1px 20px 4px rgba(0, 0, 0, 0.22)
      }
      50% {
        box-shadow: inset 0px -20px 14px 0 rgba(0, 0, 0, 0.8),
          inset 0px -20px 20px 0px rgba(0, 0, 0, 0.22);
      }
      75% {
        box-shadow: inset 20px 1px 20px 11px rgba(0, 0, 0, 0.8),
        inset 20px 0px 20px 4px rgba(0, 0, 0, 0.22);
      }
      100%{
        box-shadow: inset 0px 20px 20px 5px rgba(0, 0, 0, 0.8),
          inset 1px 20px 20px 4px rgba(0, 0, 0, 0.22);
        transform:rotate(360deg)
                translateY(-310px)
                rotate(-360deg);
      }
    }
</style>