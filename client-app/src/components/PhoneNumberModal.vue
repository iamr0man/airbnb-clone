<template>
    <div class="text-center">
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

            <v-card class="phone-modal">
                <v-card-title class="headline">
                    <h3 class="mx-auto">Add phome number</h3>
                </v-card-title>
                <v-divider />
                <v-card-text>
                    <p class="subtitle-1">We’ll send you trip updates and a text to verify this number.</p>
                    <v-select
                        v-model="phoneCode"
                        :items="phoneCodes"
                        item-text="name"
                        item-value="dial_code"
                        label="Country/Region"
                    />
                    <v-text-field
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
    </div>
</template>

<script>
import phoneCodes from '../assets/lists/codes'
export default {
    data() {
        return {
            dialog: false,
            phoneCode: '',
            phoneCodes,
            phoneNumber: ''
        }
    }
}
</script>

<style lang="scss">
    .message-modal {
        &__info {
            margin: 20px 0;
            display: flex;
            .message-model__img {
                width: 100px;
                border-radius: 15px;
            }

            .message_model__host {
                margin-left: 15px;
            }
        }
    }
</style>
