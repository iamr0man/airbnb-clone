<template>
  <div class="login-container">
    <v-card shaped class="card" width="500">
      <v-card-text>
        <div class="text-center">
          <img src="../assets/img/book.png" class="book-img" alt="book">
          <h2 class="mb-5">Your astound account</h2>
        </div>
        <v-text-field outlined solo rounded flat label="email" v-model="email" />
        <v-text-field outlined solo rounded flat type="password" label="password" v-model="password" />
      </v-card-text>
      <v-card-actions>
          <v-btn @click="doLogin" class="mx-auto" dark width="85%" color="#000">Login</v-btn>
      </v-card-actions>
      <v-card-text class="text-center">
        <p>Not a member? <router-link class="reg-style" to="/registration">Join now</router-link></p>
      </v-card-text>
    </v-card> 
  </div>
</template>

<script>
export default {
  data(){
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    async doLogin(){
      return await this.$store.dispatch('user/doLogin', { email: this.email, password: this.password})
    }
  },
  created(){
    this.email = 'k@g.com',
    this.password = 'simple'
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
</style>
