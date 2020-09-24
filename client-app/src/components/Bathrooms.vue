<template>
    <div class="bathrooms">
        <div class="bathrooms__title gtitle">How many bathrooms?</div>
        <p class="bathrooms__caption">Count bathrooms that don’t have a shower or bath as a half bathroom.</p>
        <div class="bathrooms__counter-row counter-row">
            <p class="bathrooms__field-label field-label">Bathrooms</p>
            <div class="bathrooms__counter-actions counter-actions">
                <div class="minus circle">
                    <v-icon color="teal" class="mdi mdi-minus-circle-outline " />
                </div>
                <p class="bathrooms__model model">{{ amountOfBath }}</p>
                <div class="add circle">
                    <v-icon color="teal" class="mdi mdi-plus-circle-outline " />
                </div>
            </div>
        </div>
        <div class="bathrooms__radio-row radio-row">
            <p class="bathrooms__field-label field-label">What will guests have?</p>
            <v-radio-group v-model="isPrivate" :mandatory="false">
                <v-radio label="Yes" value="Yes" />
                <v-radio label="No, it's shared" value="No, it's shared" />
            </v-radio-group>
        </div>
    </div>
</template>

<script>
export default  {
    data() {
        return {
            amountOfBath: 1,
            isPrivate: 'Yes'
        }
    }
}
</script>

<style lang="scss">

</style>
