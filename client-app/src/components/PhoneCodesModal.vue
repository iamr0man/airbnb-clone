<template>
    <v-dialog
        v-model="dialog"
        width="600"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                dark
                v-bind="attrs"
                v-on="on"
            >
                Add
            </v-btn>
        </template>
        <v-card :style="{ minHeight: '370px' }">
            <v-toolbar
                dark
                color="primary"
            >
                <v-btn
                    icon
                    dark
                    @click="dialog = false"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Add phone number</v-toolbar-title>
            </v-toolbar>
            <v-divider />
            <v-card-text>
                <p class="subtitle-1">We’ll send you trip updates and a text to verify this number.</p>
                <custom-select
                    class="mt-4 mb-16"
                    solo
                    :value="phoneCode"
                    @input="setSelected"
                    :options="phoneCodes"
                    label="name"
                >
                    <template slot="selected-option" slot-scope="option">
                        <span>{{ option.name }} ({{ option.dial_code }})</span>
                    </template>
                    <template slot="option" slot-scope="option">
                        {{ option.name }} ({{ option.dial_code }})
                    </template>
                </custom-select>
                <v-text-field
                    solo
                    v-model="phoneNumber"
                    label="Phone number"
                />
                <p>We'll text you a code to confirm your number. Standard message and data rates apply.</p>
            </v-card-text>
            <v-divider />
            <v-card-actions>
                <v-spacer />
                <v-btn
                    dark
                    @click="dialog = false"
                >
                    Continue
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import phoneCodes from '../assets/phoneCodes'
    export default {
        data() {
            return {
                dialog: false,
                phoneCodes,
                phoneCode: '',
                phoneNumber: ''
            }
        },
        methods: {
            setSelected($events) {
                this.phoneCode = $events
            }
        }
    }
</script>
