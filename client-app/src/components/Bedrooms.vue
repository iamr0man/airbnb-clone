<template>
    <div class="bedrooms">
        <div class="bedrooms__title gtitle">How many guests can your place accommodate?</div>
        <p class="bedrooms_caption">Check that you have enough beds to accommodate all your guests comfortably.</p>
        <div class="bedrooms__counter-row counter-row">
            <p class="bedrooms__field-label field-label">Guests</p>
            <div class="bedrooms__counter-actions counter-actions">
                <div class="minus circle">
                    <v-icon color="teal" class="mdi mdi-minus-circle-outline " />
                </div>
                <p class="bedrooms__model model">{{ maxGuests }}</p>
                <div class="add circle">
                    <v-icon color="teal" class="mdi mdi-plus-circle-outline " />
                </div>
            </div>
        </div>
        <div class="bedrooms__input-row input-row">
            <p class="room__field-label field-label">How many bedrooms can guests use?</p>
            <v-select
                solo
                :items="[]"
            />
        </div>
        <div class="bedrooms__counter-row counter-row">
            <p class="bedrooms__field-label field-label">Beds</p>
            <div class="bedrooms__counter-actions counter-actions">
                <div class="minus circle">
                    <v-icon color="teal" class="mdi mdi-minus-circle-outline " />
                </div>
                <p class="bedrooms__model model">{{ amountOfBads }}</p>
                <div class="add circle">
                    <v-icon color="teal" class="mdi mdi-plus-circle-outline " />
                </div>
            </div>
        </div>
        <div class="bedrooms__input-row input-row">
            <p class="room__field-label field-label">Sleeping arrangements</p>
            <p>Sharing the types of beds in each room can help people understand the sleeping arrangements.</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            maxGuests: 0,
            amountOfBads: 0
        }
    }
}
</script>

<style>

</style>
