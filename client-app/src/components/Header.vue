<template>
  <header class="header">
    <div @click="goToHome" class="header__logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="0.833in" height="0.903in">
        <image  x="0px" y="0px" width="60px" height="65px"  xlink:href="data:img/png;base64,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" />
      </svg>
    </div>
    <v-text-field
      class="header__search"
      :outlined="true"
      :solo="true"
      :clearable="true"
      :flat="true"
      :dense="true"
      :full-width="false"
      placeholder="Try 'homes in Croatia'"
    />
    <div class="header__navigation">
      <p class="navigation__item">Homes</p>
      <p class="navigation__item">Restaurants</p>
      <p class="navigation__item">Experience</p>
    </div>
    <div class="header__account-info">
      <div class="account-info__buttons">
        <router-link tag="p" to="{ name: 'CreateHome' }" class="account-info__item">Become a host <v-icon color="white" class="mdi mdi-account-multiple-outline "/></router-link>
        <p class="account-info__item">Saved</p>
        <p class="account-info__item">Trips</p>
        <p class="account-info__item">Messages</p>
      </div>
      <img @click="goToDashboard" src="../assets/img/background.jpg" class="account-info__avatar"/>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    async goToHome() {
      await this.$router.push({ path: "/" })
    },
    async goToDashboard() {
      await this.$router.push({ name: "Dashboard" })
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    position: absolute;
    width: 95%;
    margin: 20px 60px;
    display: flex;
    align-items: center;
    height: 10%;
    color: white;
    font-family: 'Montserrat',serif;

    .v-input {
      flex: none;
    }

    .v-text-field.v-text-field--solo .v-input__control input {
      font-size: 17px !important;
      width: 250px;
    }

    &__navigation {
      display: flex;
      flex: 1;
      margin-bottom: 25px;

        .navigation__item {
          margin: 0 20px;
          font-size: 17px;
          cursor: pointer;
        }
    }

    &__account-info {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 25px;

      .account-info__buttons {
        display: flex;

        .account-info__item {
          margin: 0 10px;
          padding: 10px;
          border-radius: 30px;
          font-size: 17px;
          cursor: pointer;

          &:first-child {
            border: 1px solid;
          }

          &:hover {
            background: #ffffff73;
          }
        }
      }

      .account-info__avatar {
        width: 60px;
        height: 60px;
        border: 7px solid #fff;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
</style>
