<template>
    <div class="location">
        <div class="location__title gtitle">Is the pin in the right place?</div>
        <p class="location__caption">If it necessary, you can adjust the map so that the pin is in the desired location. Only verified guests will see this and know how to get to your accommodation.</p>
        <div class="bedrooms__input-row input-row">
            <p class="bedrooms__attention attention" v-if="!isCreated">To create a marker, please, press the right right button of mouse :)</p>
            <v-btn v-else @click="isInCorrecting = !isInCorrecting">Correct</v-btn>
        </div>
        <gmap-map
            ref="gmap-map"
            :center="center"
            :map-type-id="mapTypeId"
            :zoom="zoom"
            @rightclick="showNewMarker"
        >
            <gmap-marker
                 v-if="Object.keys(point).length !== 0"
                :draggable="isInCorrecting"
                @dragend="setNewPosition"
                :position="{ lat: point.lat, lng: point.lng }"
            />
        </gmap-map>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isCreated: false,
            isInCorrecting: false,
            center: {lat: 50.447552, lng: 30.5305231},
            point: {
                // lat: 50.4478499, lng: 30.5888062
            },
            zoom: 18,
            mapTypeId: "roadmap",
        }
    },
    methods: {
        setNewPosition(markerArgs) {
            this.point = { lat: markerArgs.latLng.lat(), lng: markerArgs.latLng.lng() };
            this.isInCorrecting = false;
            this.zoom = 17
        },
        showNewMarker(markerArgs) {
            this.isCreated = true
            this.point = {lat: markerArgs.latLng.lat(), lng: markerArgs.latLng.lng()};
            this.zoom = 17
            // TODO remove this method after added marker to map
            // console.log(this.$refs)
            // this.$refs['gmap-map'].$el.removeEventListener('onrightclick', this.showNewMarker)
        },
    }
}
</script>

<style lang="scss" scoped>
    .bedrooms {
        &__input-row {
            margin-bottom: 20px;
        }
    }
    .vue-map-container {
        width: 600px;
        height: 500px;
    }
</style>
