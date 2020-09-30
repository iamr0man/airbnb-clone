<template>
  <div class="login-container">
    <v-card shaped class="card" width="500">
      <v-card-text>
        <div class="text-center">
          <img src="../assets/img/book.png" class="book-img" alt="book">
          <h2 class="mb-5 text-uppercase">Become a Airbnb-plus member</h2>
          <p>Create your Airbnb-plus Member profile and get first access to the very best of Airbnb-plus products, inspiration and community.</p>
        </div>
        <v-text-field outlined solo rounded flat type="text" label="name" v-model="name" />
        <v-text-field outlined solo rounded flat label="email" v-model="email" />
        <v-text-field outlined solo rounded flat type="password" label="password" v-model="password" />
        <v-text-field outlined solo rounded flat type="password" label="password confirmation" v-model="passwordConfirmation" />
        <v-radio-group
          class="radio-gender"
          v-model="gender"
          :mandatory="false">
          <v-radio
            label="Male"
            value="male"
            class="display-2"
            color="#000"
          />
          <v-radio
            label="Female"
            value="female"
            class="display-2"
            color="#000"
          />
        </v-radio-group>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="registration" class="mx-auto" dark width="85%" color="#000">Registration</v-btn>
      </v-card-actions>
      <v-card-text class="text-center">
        <p>Already a member? <router-link class="reg-style" to="/login">Sign in</router-link></p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>

// import { countries } from '../helpers/static.js'

import router from "@/router";

export default {
  data(){
    return {
      gender: 'Female',
      email: "",
      name: "",
      password: "",
      passwordConfirmation: "",
    }
  },
  methods: {
    async registration(){
      await this.$store.dispatch('user/registration', {
        email: this.email,
        name: this.name,
        password: this.password,
        passwordConfirmation: this.passwordConfirmation
      })
      await this.$store.dispatch('user/getUser')
      await router.push({ path: '/', name: "Home" })
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background: url('../assets/img/background.jpg');
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  margin-right: 200px;
  box-shadow: 5px 13px 81px 12px black;
}

.book-img {
  width: 30px;
}

.v-application a {
  color: #000;
}

.radio-gender .v-input--radio-group--column .v-input--radio-group__input {
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-around;
  align-items: baseline;
}

.gender {
  border: 1px solid rgb(229, 229, 229);
  padding: 5px 12px;
}
</style>
