<template>
  <div class="details__example">
    <div class="details__subtitle">Example for inspiration: Housing with the highest ratings</div>
    <div class="details__decoration"></div>
    <div class="review">
      <div class="review__header">
        <img class="review__img" src="../assets/img/review.webp" alt="">
        <div class="review__info">
          <p class="review__location">Kyiv, Ukraine</p>
          <p class="review__apartment-type">Entire apartment · 1 badroom</p>
          <p class="review__stars">
            <v-icon class="mdi mdi-star-circle" />4.67 out of 5
          </p>
        </div>
      </div>
      <div class="review__body">
        "Дом находится в самом сердце столицы. Общая площадь – 500 кв.м, всего 4 этажа. На территории дома имеется сад и газон для отдыха. Также есть большая кухня со всеми необходимыми принадлежностями. Обратите внимание, что стоимость аренды указана за 1 комнату! С радостью обсудим с Вами индивидуальные скидки при долгосрочном бронировании или большом количестве гостей"
      </div>
    </div>
  </div>  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .details__example {
    flex: 1;
    display: flex;
    flex-direction: column;
    max-height: 450px;

    margin-left: 40px;
    padding: 10px;
    border: 1px solid #c4c4c4;

    .details__subtitle {
      font-weight: 600
    }

    .details__decoration {
      width: 100%;
      border-bottom: 1px solid #c4c4c4;
    }

    .review {
      display: flex;
      flex-direction: column;

      &__header {
        display: flex;

        .review__img {
          width: 60px;
          height: 60px;
          object-fit: cover;
        }

        .review__info {
          display: flex;
          flex-direction: column;

          margin-left: 20px;
        }
      }
    }
  }
</style>