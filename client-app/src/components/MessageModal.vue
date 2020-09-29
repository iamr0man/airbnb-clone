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

            <v-card class="message-modal">
                <v-card-title class="headline">
                    <h3 class="mx-auto">Message the host</h3>
                </v-card-title>
                <v-divider />
                <v-card-text>
                    <p class="subtitle-1">Let the host know why you're travelling and when you'll check in.</p>
                    <div class="message-modal__info">
                        <img src="../assets/img/original.jpg" alt="" class="message-model__img">
                        <div class="message_model__host">
                            <p class="message-model__name">Маріанна</p>
                            <p class="message-model__joined">Joined in 2019</p>
                        </div>
                    </div>
                    <v-textarea
                        solo
                    />
                </v-card-text>
                <v-divider />
                <v-card-actions>
                    <v-spacer />
                    <v-btn
                        color="primary"
                        text
                        @click="dialog = false"
                    >
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false
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
