<template>
  <div class="home">
    <div class="home__discover">
      <div class="discover__headlines">
        <h1 class="headline">Discover</h1>
        <h2 class="title">The Shipwreck Beach</h2>
        <h5 class="subtitle">Find the place to stay near the Shipwreck Beach in Greece  </h5>
      </div>
      <div class="discover__wrapper">
        <div class="wrapper__items">
          <div class="discover__item">
            <div class="item__left">
              <img src="../assets/img/background.jpg" />
            </div>
            <div class="item__decoration">
              <div class="child child--center"></div>
            </div>
            <div class="item__right"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>

$black-gradient: linear-gradient(-30deg, black, transparent);

body {
  overflow: hidden;
}

.home__discover {
  width: 100vw;
  height: 100vh;  
  background: url('../assets/img/slide-2.jpg') no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;

  .discover__headlines {
    margin-left: 150px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    
    .wrapper__items {
      width: 94%;
      border-radius: 10px;
      background: url('../assets/img/slide-3.jpg') no-repeat;
      background-size: cover;

      .discover__item {
        display: flex;
        padding: 10px;
        height: 350px;

        .item__left {
          width: 400px;
          height: 100%;
          background-color: white;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            padding: 10px;
          }
        }
        .item__decoration {
          height: 100%;

          .child {
            width: 35px;
            height: 100%;
            position: relative;

            &::before {
              content: '';
              position: absolute;
              background-color: #7482af9e;
              top: 0;
              width: 100%;
              height: 10%;
              border-bottom-left-radius: 15px;
              border-bottom-right-radius: 15px;
            }

            &--center {
              // background-color: #fff;
            }

            &::after {
              content: '';
              position: absolute;
              background-color: #7482af9e;
              bottom: 0;
              width: 100%;
              height: 10%;
              border-top-left-radius: 15px;
              border-top-right-radius: 15px;
            }
          }
          .item__right {
            width: 295px;
            height: 100%;
            background-color: #fff;
            padding: 10px;
          }
        }
      }
      
    }
  }
}

</style>