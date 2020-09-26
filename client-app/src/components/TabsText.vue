<template>
  <div class="">
    <v-tabs
        v-model="tab"
        background-color="transparent"
        color="basil"
        grow
    >
      <v-tab
          v-for="item in items"
          :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card color="basil" flat>
          <v-card-text>{{ home.textDetails.house }}</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card color="basil" flat>
          <v-card-text>{{ home.textDetails.availableForGuest }}</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card color="basil" flat>
          <v-card-text>{{ home.textDetails.importantInfo }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  props: ['home'],
  data() {
    return {
      tab: null,
      items: [
        'House', 'What available for guest', 'Important Information']
    }
  }
}
</script>