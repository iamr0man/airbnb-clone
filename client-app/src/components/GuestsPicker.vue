<template>
    <v-dialog v-model="dialog" persistent max-width="500px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
            >
                {{ buttonName }}
            </v-btn>
        </template>
        <v-card cl>
            <v-card-title>
                <span class="headline">Guests</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col class="guests__select" cols="12">
                            <div class="title">
                                <v-icon color="#ee7752" class="mdi mdi-human-male-female" />
                                <p>Adults</p>
                            </div>
                            <div class="counter">
                                <v-icon @click="updateAdults(-1)" class="mdi mdi-minus-circle-outline" />
                                <p>{{ adults.value }}</p>
                                <v-icon @click="updateAdults(1)" class="mdi mdi-plus-circle-outline" />
                            </div>
                        </v-col>
                        <v-col class="guests__select" cols="12">
                            <div class="title">
                                <v-icon color="#23d5ab" class="mdi mdi-human-child" />
                                <p>Children</p>
                            </div>
                            <div class="counter">
                                <v-icon @click="updateChildren(-1)" class="mdi mdi-minus-circle-outline" />
                                <p>{{ children.value }}</p>
                                <v-icon @click="updateChildren(1)" class="mdi mdi-plus-circle-outline" />
                            </div>
                        </v-col>
                        <v-col class="guests__select" cols="12">
                            <div class="title">
                                <v-icon color="#23a6d5" class="mdi mdi-baby-carriage" />
                                <p>Baby</p>
                            </div>
                            <div class="counter">
                                <v-icon @click="updateBabies(1)" class="mdi mdi-minus-circle-outline" />
                                <p>{{ babies.value }}</p>
                                <v-icon @click="updateBabies(1)" class="mdi mdi-plus-circle-outline" />
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['adults', 'children', 'babies', 'buttonName'],
    data() {
        return {
            dialog: false,
        }
    },
    methods: {
        updateAdults(v) {
            this.$emit('changeAdults', { name: 'adults', value: this.adults.value+v })
        },
        updateChildren(v) {
            this.$emit('changeChildren', { name: 'children', value: this.children.value+v })
        },
        updateBabies(v) {
            this.$emit('changeBabies', { name: 'babies', value: this.babies.value+v })
        },
    }
}

</script>