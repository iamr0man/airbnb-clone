<template>
  <div class="login-container">
    <v-card shaped class="card" width="500">
      <v-card-text>
        <div class="text-center">
          <img src="../assets/img/book.png" class="book-img" alt="book">
          <h2 class="mb-5 text-uppercase">Become a polica member</h2>
          <p>Create your Polica Member profile and get first access to the very best of Polica products, inspiration and community.</p>
        </div>
        <v-text-field outlined solo rounded flat label="email" v-model="email" />
        <v-text-field outlined solo rounded flat type="password" label="password" v-model="password" />
        <v-text-field outlined solo rounded flat type="text" label="name" v-model="name" />
        <v-select
          outlined
          solo
          rounded
          flat
          label="Country/Region"
          :items="countries"
          item-text="name"
          item-value="code"
          return-object
        />
        <v-row>
          <v-radio-group
            v-model="gender"
            :mandatory="false">
            <v-col cols="6">
              <div >
                <v-radio 
                  label="Male"
                  value="male"
                  class="display-2"
                  color="#000"
                />
              </div>
            </v-col>
            <v-col cols="6">
              <div >
                <v-radio
                  label="Female"
                  value="female"
                  class="display-2"
                  color="#000"
                />
              </div>
            </v-col>
          </v-radio-group>
        </v-row>
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

import { countries } from '../helpers/static.js' 

export default {
  data(){
    return {
      gender: 'Female',
      countries,
      email: "",
      name: "",
      password: "",
    }
  },
  methods: {
    async registration(){
      return await this.$store.dispatch('user/registration', { email: this.email, name: this.name, password: this.password})
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

  .gender {
    border: 1px solid rgb(229, 229, 229);
    padding: 5px 12px; 
  }
</style>
