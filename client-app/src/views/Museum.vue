<template>
  <div class="museum">
    <div class="museum__image" :style="{ background: `url(${museum.backgroundUrl})` }">
      <div class="museum__decoration">
        <div class="museum__decoration-text">
          Must see in {{ museum.city }}
        </div>
      </div>
    </div>
    <div class="museum__wrapper">
      <div class="museum__layout">
        <div class="museum__information">
          <div class="header">
            <div class="header__digit">
              <img src="../assets/img/3.svg" alt="three">
            </div>
            <div class="header__museum-name">
              <h3 class="museum-name__item heading-1">{{ museum.name[0] }}</h3>
              <h4 class="museum-name__item heading-2">{{ museum.name[1] }}</h4>
              <p class="museum-name__item subtitle-1">Must seen in {{ museum.city }}</p>
            </div>
          </div>
          <div class="content">
            <p class="content__text">{{ museum.textInformation[0] }}</p>
            <p class="content__text">{{ museum.textInformation[1] }}<span>Learn more</span></p>
          </div>
          <div class="footer">
            <div class="footer_btn">
              <v-btn>Find homes in {{ museum.city }}</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name:"Museum",
  components: {
  },
  computed: {
    ...mapGetters('pick', ['museum'])
  }
}
</script>

<style lang="scss" scoped>
  .museum {
    width: 100vw;
    height: 100vh;
    display: flex;

    &__image {
      flex: 1;
      background-size: cover;

      display: flex;
      align-items: flex-end;

      .museum__decoration {
        width: 271px;
        height: 329px;
        margin: 0 0 40px 140px;
        background-color: #FF5A5F;

        &-text {
          font-size: 80px;
          font-weight: 800;
          transform: rotate(-90deg);
          color: white;
          text-transform: uppercase;
          width: 160%;
          margin: -86px 0 0 0;
        }
      }
    }

    &__wrapper {
      flex: 1;
      background-color: #ebebeb;
      padding: 50px 30px;

      .museum__layout {
        width: 100%;
        height: 100%;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        box-shadow: 0 0 20px 0 #acacac;

        .museum__information {
          width: 70%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-start;

          .header {
            display: flex;
            justify-content: space-evenly;

            &__digit {
              img {
                position: relative;
                left: -25px;
                bottom: 40px;
                width: 116px;
                height: 172px;
                object-fit: cover;
                clip-path: polygon(100% 0, 100% 26%, 44% 100%, 0 100%, 0 0);
              }
            }

            &__museum-name {
              position: relative;
              display: flex;
              flex-direction: column;
              line-height: 50px;

              &:before {
                content: "";
                position: absolute;
                top: -25px;
                left: -25px;
                transform: rotate(25deg);
                width: 20px;
                height: 130px;
                background-color: #FF5A5F;
              }

              .heading-1 {
                font-weight: 700;
                font-size: 60px;
              }

              .heading-2 {
                font-size: 50px;
              }
            }
          }

          .content {
            color: #5e5e5e;
            .content__text {
              margin-bottom: 15px;
            }
          }

          .footer {
            .footer_btn {

            }
          }
        }

      }
    }
  }
</style>
