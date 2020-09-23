<template>
  <div class="create">
    <v-stepper v-model="e6">

      <v-stepper-step :complete="e6 > 1" step="1">
        Rooms
      </v-stepper-step>
      <v-stepper-content step="1">
        <Room class="container" />
        <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>


      <v-stepper-step :complete="e6 > 2" step="2">
        Badrooms
      </v-stepper-step>
      <v-stepper-content step="2">
        <Bedrooms class="container"/>
        <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
        <v-btn @click="e6 = 1" text>Cancel</v-btn>
      </v-stepper-content>


      <v-stepper-step :complete="e6 > 3" step="3">Select an ad format and name ad unit</v-stepper-step>
      <v-stepper-content step="3">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step step="4">View setup instructions</v-stepper-step>
      <v-stepper-content step="4">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper>
  </div>
</template>

<script>
import Room from '../components/Room.vue'
import Bedrooms from '../components/Bedrooms.vue'
export default {
  components: {
    Room,
    Bedrooms
  },
  data () {
    return {
      e6: 1,
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
      width: 75%;
      display: flex;
      flex-direction: column;

      .gtitle {
        color: #1b1b1b;
        font-weight: 700;
        font-size: 25px;
      }

      .field-label {
        color: #c4c4c4;
        font-weight: 600;
      }

      .input-row {
        width: 23%;
      }

      .radio__hint {
        margin-left: 33px;
        color: #c4c4c4;
        font-size: 14px;
      }

      .counter-row {
        width: 23%;
        display: flex;
        justify-content: space-between;

        .counter-actions {
          display: flex;
          justify-content: center;
          align-items: baseline;
        }
      }
    }
  }
</style>
