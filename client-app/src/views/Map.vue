<template>
  <div class="map-wrapper">
    <gmap-map
      :center="center"
      :map-type-id="mapTypeId"
      :zoom="5"
      @rightclick="showNewMarker"
      >
      <gmap-marker 
        v-for="(item, i) in points"
        :position="{ lat: item.latitude, lng: item.longitude }"
        :key="i"
        @click="toggleInfoWindow(item,i)"
      />
      <expe
        v-if="infoWinOpen"
        @isInfoWinOpen="infoWinOpen = $event"
        :infoWindow="infoWindow"
        :infoWinOpen="infoWinOpen"
      />
      <new-expe
        v-if="createWinOpen"
        @isCreatedWinOpen="createWinOpen = $event"
        :newMarker="newMarker"
        :createWinOpen="createWinOpen" />
    </gmap-map>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import NewExpe from '../components/NewExpe.vue'
import Expe from '../components/Expe.vue'

export default {
  components: {
    NewExpe,
    Expe,
  },
  data(){
    return {
      to: '../',
      center: { lat: 50, lng: 30 },
      mapTypeId: "roadmap",
      infoWindow: {},
      newMarker: { position: { lat: 0, lng: 0}},
      createWinOpen: false,
      infoWinOpen: false,
      currentMidx: null,
      pixelOffset: {height: '-3', width: 0},
      maxWidth: "300",
    }
  },
  methods: {
    toggleInfoWindow(marker,idx){
      this.infoWindow = marker;

      if(this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
      this.$router.push({ name: 'Expe', params: { id: this.infoWindow._id }})
    },
    showNewMarker(markerArgs){
      this.newMarker.position = { lat: markerArgs.latLng.lat(), lng: markerArgs.latLng.lng() };
      this.createWinOpen = true;
    },
    async deletePoint(id){
      await this.$store.dispatch('data/deletePoint', { id }) 
    }
  },
  computed: {
    ...mapGetters('data', ['points']),
    ...mapGetters('user', ['user']),
  },
  async created(){
    await this.$store.dispatch('data/getPoints') 
  }
}

</script>
  
<style lang="scss" scoped>
  .map-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .map-background {
      position: absolute;
    }

    .vue-map-container {
      z-index: 7;
      width: 100%;
      height: 100%;
      box-shadow: 0px 20px 10px 10px black;
    }
    // .window {
    //   width: 30%;
    // }
  }
</style>