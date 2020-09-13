<template>
  <div class="museum">
    <div class="museum__image">
      <div class="museum__decoration">
        <div class="museum__decoration-text">
          Must see in vienna
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
              <h3 class="museum-name__item heading-1">KARLSKIRCHE</h3>
              <h4 class="museum-name__item heading-2">St. Charles Church</h4>
              <p class="museum-name__item subtitle-1">Must seen in Vienna</p>
            </div>
          </div>
          <div class="content">
            <p class="content__text">In 1713, one year after the last great plague epidemic, Charles VI, Holy Roman Emperor, pledged to build a church for his namesake patron saint, Charles Borromeo, who was revered as a healer for plague sufferers. An architectural competition was announced, in which Johann Bernhard Fischer von Erlach prevailed over, among others, Ferdinando Galli-Bibiena and Johann Lukas von Hildebrandt.</p>
            <p class="content__text">Construction began in 1716 under the supervision of Anton Erhard Martinelli. After J.B. Fischer's death in 1723, his son, Joseph Emanuel Fischer von Erlach, completed the construction in 1737 using partially altered plans. The church originally possessed a direct line of sight to the Hofburg. <span>Learn more</span></p>
          </div>
          <div class="footer">
            <div class="footer_btn">
              <v-btn>Find homes in Vienna</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Museum"
}
</script>

<style lang="scss" scoped>
  .museum {
    width: 100vw;
    height: 100vh;
    display: flex;

    &__image {
      flex: 1;
      background-image: url('../assets/img/museum.jpg');
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
