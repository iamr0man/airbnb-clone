<template>
    <div class="photos">
        <div class="photos__items">
            <div class="photos__title gtitle">Liven up your ad with a photo</div>
            <div class="photos__caption">Shoot with your phone or camera. When publishing your ad, add at least one photo. You can later edit it or include new ones.</div>
            <div class="photos__items">
<!--                < v-for="()" class="photo-item"></>-->
                <div class="photos__file-input file-input">
                    <v-file-input
                        multiple
                        label="Upload photo"
                        v-model="addMore"
                    >
                        <template v-slot:selection="{ index, text }">
                            <v-chip
                                color="deep-purple accent-4"
                                dark
                                label
                                small
                            >
                                {{ text }}
                            </v-chip>
                        </template>
                    </v-file-input>
                </div>
            </div>
        </div>
        <div class="photos__article">
            <img class="tips__image" src="../assets/img/lamp.svg" alt="lamp">
            <div class="tips__title">How to take quality photos</div>
            <ul class="tips__items">
                <li v-for="(v,i) in tipsItems" :key="i">{{ v }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            addMore: null,
            tipsItems: [
                'Get rid of unnecessary things.',
                'Shoot in natural light and do not use a flash.',
                'When photographing a room from an angular perspective, use a horizontal format.',
                'Balance the floor to ceiling ratio in your shot.',
                'Accentuate décor and amenities.',
                'Add photos of all rooms available to guests.',
            ]
        }
    }
}
</script>

<style lang="scss">
.photos {
    flex-direction: row !important;

    &__items {
        .photos__add-new {
            padding: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px dashed #c4c4c4;
        }
    }

    &__article {
        .tips__title {
            font-size: 20px;
            font-weight: 600;
        }

        .tips__image {
            width: 55px;
        }
    }
}
</style>
