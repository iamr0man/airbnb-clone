<template>
    <v-dialog v-model="dialog" persistent max-width="400px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
            >
                Edit
            </v-btn>
        </template>
        <v-card cl>
            <v-card-title>
                <span class="headline">Guests</span>
            </v-card-title>
            <v-card-text>
                <date-picker
                    v-model="date"
                    :range="true"
                    @pick="datePick"
                    range-separator=" | "
                    :disabled-date="disabledBeforeTodayAndAfterAWeek"
                    placeholder="Arrival - Departure"
                />
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

import { mapGetters } from 'vuex'
export default {
    components: {
        DatePicker
    },
    data() {
        return {
            dialog: false,
            date: null
        }
    },
    mounted() {
      this.date = this.bookingData.date
    },
    methods: {
        datePick(){
            if(this.date) {
                this.checkDateRange();
                this.countPrices()
            }
        },
        checkDateRange() {
            for(let i = 1; i <= 3; i++) {
                const current = new Date(this.date[0].getTime() + i * 24 * 3600 * 1000).getTime();
                if(this.home.bookedDate.includes(current)) {
                    alert("Please choose minimum 3 days!");
                    this.date = null
                    return;
                }
            }
        },
        countPrices() {
            const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
            const firstDate = new Date(this.date[0]);
            const secondDate = new Date(this.date[1]);

            const nights = Math.round(Math.abs((firstDate - secondDate) / oneDay));

            const cleaningFee = Math.round(this.priceOfPickedDate * 0.0868)
            const serviceFee = Math.round(this.priceOfPickedDate * 0.0559)
            const total = this.priceOfPickedDate + this.cleaningFee + this.serviceFee

            const data = Object.assign({}, this.bookingData)
            data.prices = { nights, cleaningFee, serviceFee, total}
            this.$store.commit('home/SET_BOOKING_DATA', { data })
        },
        disabledBeforeTodayAndAfterAWeek(date) {
            const today = new Date()

            if(this.home.bookedDate.includes(date.getTime())) {
                return true
            }

            return date < today || date > new Date(today.getTime() + 365 * 24 * 3600 * 1000)
        },
    },
    computed: {
        ...mapGetters('home', ['home', 'bookingData']),
        priceOfPickedDate() {
            return 1;
        }
    }
}
</script>