<template>
  <div class="create">
    <v-stepper v-model="e6" :vertical="false">

      <v-stepper-step :complete="e6 > 1" step="1">
        Rooms
      </v-stepper-step>
      <v-stepper-content step="1">
        <Room class="container" />
        <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2">
        Bedrooms
      </v-stepper-step>
      <v-stepper-content step="2">
        <Bedrooms class="container"/>
        <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
        <v-btn @click="e6 = 1" text>Cancel</v-btn>
      </v-stepper-content>


      <v-stepper-step :complete="e6 > 3" step="3">
        Bathrooms
      </v-stepper-step>
      <v-stepper-content step="3">
        <Bathrooms class="container"/>
        <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
        <v-btn @click="e6 = 2" text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 4" step="4">
        Location
      </v-stepper-step>
      <v-stepper-content step="4">
        <Location class="container"/>
        <v-btn color="primary" @click="e6 = 5">Continue</v-btn>
        <v-btn @click="e6 = 3" text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 5" step="5">
        Spaces
      </v-stepper-step>
      <v-stepper-content step="5">
        <Spaces class="container"/>
        <v-btn color="primary" @click="e6 = 6">Continue</v-btn>
        <v-btn @click="e6 = 4" text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 6" step="6">
        Photos
      </v-stepper-step>
      <v-stepper-content step="6">
        <Photos class="container"/>
        <v-btn color="primary" @click="e6 = 7">Continue</v-btn>
        <v-btn @click="e6 = 5" text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 7" step="7">
        Details
      </v-stepper-step>
      <v-stepper-content step="7">
        <Details class="container"/>
        <v-btn color="primary" @click="e6 = 8">Continue</v-btn>
        <v-btn @click="e6 = 6" text>Cancel</v-btn>
      </v-stepper-content>


      <v-stepper-step :complete="e6 > 8" step="8">
        Title
      </v-stepper-step>
      <v-stepper-content step="8">
        <TitleStep class="container"/>
        <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
        <v-btn @click="e6 = 7" text>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper>
  </div>
</template>

<script>
import Room from '../components/Room.vue'
import Bedrooms from '../components/Bedrooms.vue'
import Bathrooms from '../components/Bathrooms.vue'
import Location from '../components/Location.vue'
import Spaces from '../components/Spaces.vue'
import Photos from '../components/Photos.vue'
import Details from '../components/Details.vue'
import TitleStep from '../components/TitleStep.vue'

export default {
  components: {
    Room,
    Bedrooms,
    Bathrooms,
    Location,
    Spaces,
    Photos,
    Details,
    TitleStep
  },
  data () {
    return {
      e6: 7,
    }
  },
  created() {
    this.$vuetify.theme.themes.light.primary = '#008080'
  },
  destroyed() {
    this.$vuetify.theme.themes.light.primary = '#fc8589'
  }
}
</script>

<style lang="scss">

  .create {
    font-family: "Montserrat", sans-serif;
  }

  .container {
    display: flex;
    justify-content: center;

    background: linear-gradient(90deg, rgba(255,255,255,1) 60%, rgba(247,247,247,1) 60%, rgba(247,247,247,1) 100%);

    &:first-child {
      width: 45%;
      min-height: 400px;
      display: flex;
      flex-direction: column;

      .gtitle {
        color: #1b1b1b;
        font-weight: 700;
        font-size: 25px;
      }

      .attention {
        margin: 16px 0;
        padding: 10px;

        background: linear-gradient(145deg, #e3787b, #ff8e93);
        box-shadow: 10px 10px 60px #d67174, -10px -10px 60px #ff999e;

        text-align: center;
        border-radius: 50px;
        font-weight: 700;
      }
    }
  }

  // Overwrite vuetify styles
  .v-application p {
    margin-bottom: 5px !important;
  }

  .v-text-field {
     padding-top: 0 !important;
     margin-top: 0 !important;
  }

  .v-file-input {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
