<template>
  <gmap-info-window
    :options="{ pixelOffset, maxWidth }"
    :position="{ lat: infoWindow.latitude, lng: infoWindow.longitude }"
    :opened="infoWinOpen"
    @closeclick="closeInfoWin"
  >
    <v-card>
      <v-card-text>
        <h1 class="mb-6">{{ infoWindow.title }}</h1>
        <p>{{ infoWindow.description }}</p>
        <p>{{ infoWindow.emoji }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn v-if="user && user._id === infoWindow.user" dark>!Edit</v-btn>
        <v-btn v-if="user && user._id === infoWindow.user" dark @click="deletePoint(infoWindow._id)">!Delete</v-btn>
      </v-card-actions>
      <v-card-text>
        <v-btn type="button" @click="likePoint">
          <v-icon class="thumb-up">mdi-thumb-up-outline</v-icon>
          <span>{{ infoWindow.likes.length ? infoWindow.likes.length : null }}</span>
        </v-btn>
      </v-card-text>
    </v-card>
  </gmap-info-window>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: "Expe",
  props: {
    infoWindow: {
      type: Object,
    },
    infoWinOpen: {
      type: Boolean,
    }
  },
  data(){
    return {
      pixelOffset: {height: '-3', width: 0},
      maxWidth: "300",
    }
  },
  methods: {
    closeInfoWin(){
      this.$emit('isInfoWinOpen', false)
      this.$router.push({ name: 'Map'})
    },
    async deletePoint(id){
      await this.$store.dispatch('data/deletePoint', { id})
    },
    async likePoint(){
      await this.$store.dispatch('data/likePoint', { id: this.$route.params.id })
    }
  },
  computed: {
    ...mapGetters('user', ['user']),
  },
  
}
</script>

<style>
  .thumb-up {
    cursor: pointer;
  }
</style>