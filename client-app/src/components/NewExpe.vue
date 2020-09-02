<template>
  <div>
    <gmap-marker
      :position="newMarker.position"
    />
    <gmap-info-window
      :options="{ pixelOffset, maxWidth }"
      :position="newMarker.position"
      :opened="createWinOpen"
      @closeclick="removeCreateMarker"
    >
      <expe-form
        :latitude="newMarker.position.lat"
        :longitude="newMarker.position.lng"
      />
    </gmap-info-window> 
  </div> 
</template>

<script>

import ExpeForm from './ExpeForm.vue'

export default {
  components: {
    ExpeForm 
  },
  props: {
    newMarker: {
      type: Object,
      required: true,
    },
    createWinOpen: {
      type: Boolean,
      required: true,
    },
  },
  data(){
    return {
      pixelOffset: {height: '-3', width: 0},
      maxWidth: "300",
    }
  },
  methods: {
    removeCreateMarker(){
      this.newMarker.position = null;
      this.$emit('isCreatedWinOpen', false);
    }
  }
}
</script>

<style>

</style>