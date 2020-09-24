<template>
  <div class="title-step">
    <div class="title-step__form">
      <div class="title-step__title gtitle">Create ad title</div>
      <p class="title-step__caption">Guests will be attracted by the name reflecting the uniqueness of the property</p>
      <div class="title-step__input-row">
        <v-text-field
          solo
          v-model="title"
          :counter="50"
        />
      </div>
    </div>
    <div class="example">
      <img class="example__img" src="../assets/img/lamp.svg" alt="">
      <p class="example__item">Silver Breeze</p>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  }
}
</script>

<style lang="scss">
  .title-step {
    width: 55%;
    display: flex;
    flex-direction: row !important;

    &__form {
      flex: 2;
      display: flex;
      flex-direction: column;
    }

    .example {
      flex: 1;
      display: flex;
      flex-direction: column;
      max-height: 130px;

      background: #fff;
      border: 1px solid #c4c4c4;

      margin-left: 40px;
      padding: 20px 30px 50px 30px;

      &__img {
        width: 30px;
        margin-bottom: 10px;
      }

      &__item {
        font-size: 20px;
        color: #c0c0c0;
      }
    }
  }
</style>