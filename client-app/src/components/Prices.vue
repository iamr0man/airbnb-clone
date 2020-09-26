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
        <hr v-if="isLineExist"/>
        <div class="prices__item">
            <p>Total<span v-if="!isLineExist">(USD)</span></p>
            <p>${{ total }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['home', 'nights', 'isLineExist'],
    data() {
        return {
          cleaningFee: '',
          serviceFee: '',
          total: ''
        }
    },
    mounted() {
      this.cleaningFee = Math.round(this.priceOfPickedDate * 0.0868)
      this.serviceFee = Math.round(this.priceOfPickedDate * 0.0559)
      this.total = this.priceOfPickedDate + this.cleaningFee + this.serviceFee
    },
    computed: {
      priceOfPickedDate() {
        return this.home.pricePerNight * this.nights
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

                span {
                  text-decoration: underline;
                }
            }
        }
    }
</style>