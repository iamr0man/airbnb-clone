<template>
    <div class="room">
        <div class="room__title gtitle">What kind of place are you listing?</div>
        <div class="room__input-row input-row">
            <p class="room__field-label field-label">First, let’s narrow things down</p>
            <v-select
                solo
                :items="[]"
            />
        </div>
        <div class="room__input-row input-row">
            <p class="room__field-label field-label">Now choose a property type</p>
            <v-select
                solo
                persistent-hint="Houses are residential buildings that are often standalone structures. Some houses, like semi-detached properties, may share walls or outdoor areas with other houses."
                :items="[]"
            />
        </div>
        <div class="room__radio-row radio-row">
            <p class="room__field-label field-label">What will guests have?</p>
            <v-radio-group v-model="guestsHave" :mandatory="false">
                <v-radio label="Entire place" value="Entire place" />
                <p class="radio__hint">Guests have the whole place to themselves. This usually includes a bedroom, a bathroom, and a kitchen.</p>
                <v-radio label="Private room" value="Private room" />
                <p class="radio__hint">Guests have their own private room for sleeping. Other areas could be shared.</p>
                <v-radio label="Shared room" value="Shared room" />
                <p class="radio__hint">Guests sleep in a bedroom or a common area that could be shared with others.</p>
            </v-radio-group>
        </div>
        <div class="room__radio-row radio-row">
            <p class="room__field-label field-label">Is this set up as a dedicated guest space?</p>
            <v-radio-group v-model="radios" :mandatory="false">
                <v-radio label="Yes, it’s primarily set up for guests" value="Yes, it’s primarily set up for guests" />
                <v-radio label="No, I keep my personal belongings here" value="No, I keep my personal belongings here" />
            </v-radio-group>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            guestsHave: 'Entire place',
            isDedicatedSpace: 'Yes, it’s primarily set up for guests'
        }
    }
}
</script>

<style scoped>
    .room {
    }
</style>
