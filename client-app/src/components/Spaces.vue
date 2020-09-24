<template>
    <div class="spaces">
        <div class="spaces__title gtitle">Is the home equipped with facilities for people with special needs?</div>
        <p class="spaces__caption">
            Every month, thousands of guests are looking for accommodations with facilities for people with special needs. Add them to draw attention to your ad and make travel more accessible to everyone.
        </p>
        <p class="spaces__caption">
            Publish your ad. Please add facilities for people with special needs later. We will remind you of this and show you how to photograph them.
        </p>
        <div class="spaces__input-field counter-row">
            <p class="spaces__field-label field-label">Remind of facilities for people with special needs</p>
            <v-switch
                :success="isSpeacialNeeds"
                :error="!isSpeacialNeeds"
                v-model="isSpeacialNeeds"
                flat />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSpeacialNeeds: false
        }
    }
}
</script>

<style lang="scss">
    .spaces {
        &__input-field.counter-row {
            width: 65%;
            align-items: baseline;
        }
    }
</style>
