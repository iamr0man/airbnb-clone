<template>
    <div class="prices">
        <div class="prices__item">
            <p>${{ home.pricePerNight }} x {{ this.nights }} nights</p>
            <p>${{ priceOfPickedDate }}</p>
        </div>
        <div class="prices__item">
            <p>Cleaning fee</p>
            <p>${{ cleaningFee }}</p>
        </div>
        <div class="prices__item">
            <p>Service fee</p>
            <p>${{ serviceFee }}</p>
        </div>
        <hr />
        <div class="prices__item">
            <p>Total</p>
            <p>${{ total }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['pricePe'],
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
    .prices {
        margin-top: 10px;
        & > .prices__item {
            display: flex;
            justify-content: space-between;

            p:first-child {
                text-decoration: underline;
            }
        }

        & > .prices__item:nth-child(5) {
            font-size: 20px;
            font-weight: 800;

            p:first-child {
                text-decoration: none;
            }
        }
    }
</style>