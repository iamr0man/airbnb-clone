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
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 5" step="5">
        Spaces
      </v-stepper-step>
      <v-stepper-content step="5">
        <Spaces class="container"/>
        <v-btn color="primary" @click="e6 = 6">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 5" step="5">
        Photos
      </v-stepper-step>
      <v-stepper-content step="6">
        <Photos class="container"/>
        <v-btn color="primary" @click="e6 = 6">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
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

export default {
  components: {
    Room,
    Bedrooms,
    Bathrooms,
    Location,
    Spaces,
    Photos
  },
  data () {
    return {
      e6: 1,
      obj: { component: Bathrooms}
    }
  },
}
</script>

<style lang="scss">

  .create {
    font-family: "Montserrat", sans-serif;
  }

  .container {
    display: flex;
    justify-content: center;

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

      .field-label {
        color: #c4c4c4;
        font-weight: 600;
      }

      .input-row {
        width: 40%;

        // hint
        .v-text-field__details {
          width: 165% !important;

          .v-messages__message {
            font-size: 13px !important;
          }
        }
      }

      .radio__hint {
        margin-left: 33px;
        color: #c4c4c4;
        font-size: 14px;
      }

      .counter-row {
        width: 40%;
        display: flex;
        justify-content: space-between;

        .counter-actions {
          display: flex;
          justify-content: center;
          align-items: baseline;

          .model {
            margin: 0 10px;
          }
        }
      }

      .file-input {
        width: 95%;
        padding: 80px;
        border: 1px dashed;

        .v-input__prepend-outer {
          margin-bottom: 20px;
        }

        .v-label {
          left: 90px !important;
        }
      }
    }
  }

  // Overwrite vuetify styles
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
