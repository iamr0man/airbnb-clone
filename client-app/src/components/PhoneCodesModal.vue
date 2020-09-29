<template>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            transition="dialog-bottom-transition"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                >
                    Add
                </v-btn>
            </template>
            <v-card :style="{ minHeight: '400px' }">
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
                    <v-toolbar-title>Settings</v-toolbar-title>
                </v-toolbar>
                <v-divider></v-divider>
                <custom-select
                        :options="phoneCodes"
                        label="name"
                    >
                    <template v-slot:option="option">
                        {{ option.name }} ({{ option.dial_code }})
                    </template>
                </custom-select>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import phoneCodes from '../assets/phoneCodes'
    export default {
        data() {
            return {
                dialog: false,
                phoneCodes,
            }
        }
    }
</script>