<template>
    <div class="dashboard">
        <div class="dashboard__header container">
            <div class="dashboard__welcome">
                <img src="../assets/img/background.jpg" alt="" class="dashboard__img">
                <div class="dashboard__description">
                    <p>Welcome back, Roman</p>
                    <p>Get excited to be welcome guests to your neighborhood.</p>
                </div>
            </div>
            <div class="dashboard__total">
                <h1 class="dashboard__price">$9230</h1>
                <p class="dashboard__month">for 12 nights in October</p>
            </div>
        </div>
        <div class="dashboard__content container">
            <h2 class="dashboard__title">Pending</h2>
            <h3 class="subtitle">Requests & Injuries</h3>
            <div class="dashboard__divider"></div>
            <Request v-for="v in requests" :request="v" :key="v._id"/>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Request from '../components/Request'
    export default {
        components: {
            Request
        },
        computed: {
            ...mapGetters('data', ['requests'])
        },
        async mounted() {
            await this.$store.dispatch('data/getRequests')
        }
    }
</script>

<style lang="scss" scoped>
    .dashboard {
        $self: &;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        &__header {
            width: 100vw;
            height: 400px;
            display: flex;
            justify-content: space-evenly;
            background: #42c1b6;

            #{ $self }__welcome {
                #{ $self }__img {
                    flex: 1;
                    width: 60px;
                    border-radius: 50%;
                    border: 3px solid white;
                }

                #{ $self }__description {
                    flex: 1;
                    margin-left: 20px;
                }
            }
            #{ $self }__total {
                background: #68c5bc;
            }

        }

        &__content {
            margin: 50px 0;
            display: flex;
            flex-direction: column;
        }
    }

    .container {
        width: 90%;
        margin: 0 auto;
    }
</style>