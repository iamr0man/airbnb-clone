<template>
  <v-form>
    <v-text-field
        v-model="email"
    />
    <v-text-field
        v-model="password"
    />
    <v-btn @click="logIn">Sign In</v-btn>
    <v-btn @click="getMe">Get Me</v-btn>
  </v-form>
</template>

<script>
export default {
  data(){
    return {
      email: 'koriny4@gmail.com',
      password: 'gbnIIfgn1859415'
    }
  },
  methods: {
    logIn: async function() {
      await this.$store.dispatch('auth/logIn', {
        email: this.email,
        password: this.password
      })
    },
    getMe: async function() {
      await this.$store.dispatch('auth/getUser')
    }
  }
}
</script>