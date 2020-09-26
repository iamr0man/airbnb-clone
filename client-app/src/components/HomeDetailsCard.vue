<template>
  <div class="home-details">
    <div class="home-details__header">
       <img class="home-details__img" :src="home.photos[0]" alt="">
      <div class="home-details__info">
        <p class="home-details__location">{{  home.location.city }}</p>
        <p class="home-details__apartment-type">{{ home.apartmentRoomsDetails.amountOfBeds }} beds · {{ home.apartmentRoomsDetails.bathRooms}} bathrooms</p>
        <p class="home-details__stars">
          <v-icon class="mdi mdi-star-circle" />{{ home.reviews.stars }} out of 5
        </p>
      </div>
    </div>
    <div class="home-details__body">
      "Дом находится в самом сердце столицы. Общая площадь – 500 кв.м, всего 4 этажа. На территории дома имеется сад и газон для отдыха. Также есть большая кухня со всеми необходимыми принадлежностями. Обратите внимание, что стоимость аренды указана за 1 комнату! С радостью обсудим с Вами индивидуальные скидки при долгосрочном бронировании или большом количестве гостей"
    </div>
  </div>
</template>

<script>
export default {
  props: ['home']
}
</script>

<style lang="scss">
  .home-details {
      flex: 1;
      display: flex;
      flex-direction: column;

      padding: 20px;
      border: 1px solid #cccccc;

      &__header {
        display: flex;

        .home-details__img {
          width: 60px;
          height: 60px;
          object-fit: cover;
        }

        .home-details__info {
          display: flex;
          flex-direction: column;

          margin-left: 20px;
        }
      }
    }
</style>