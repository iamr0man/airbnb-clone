<template>
    <div class="dashboard">
        <div class="dashboard__header">
            <div class="dashboard__welcome">
                <img src="../assets/img/background.jpg" alt="" class="dashboard__img">
                <div class="dashboard__description">
                    <p>Welcome back, Roman</p>
                    <p>Get excited to be welcome guests to your neighborhood.</p>
                </div>
            </div>
            <div class="dashboard__total">
                <h1 class="dashboard__price">${{ user.earnedInAMonth }}</h1>
                <p class="dashboard__month">for {{ nights }} nights in {{ monthName }}</p>
            </div>
        </div>
        <div class="dashboard__content">
            <h2 class="dashboard__title">Pending</h2>
            <h3 class="subtitle">Requests & Injuries</h3>
            <div class="dashboard__divider" />
            <Request :monthNames="monthNames" v-for="v in requests" :nights="nights" :request="v" :key="v._id"/>
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
        data() {
            return {
                month: new Date().getMonth(),
                monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                ],
                nights: 0,
            }
        },
        methods: {
          countBookedDate() {
              if(this.requests.length) {
                   this.requests.forEach(v => {
                       const [first, second] = v.date.range

                       const currentMonth = new Date().getMonth()
                       const oneDay = 24 * 60 * 60 * 1000;
                       for(let i = first; i < second; i+=oneDay) {
                           console.log(new Date(i).getMonth())
                           if(new Date(i).getMonth() === currentMonth) {
                               this.nights++;
                           }
                       }
                  })
              }
          }
        },
        computed: {
            ...mapGetters('user', ['user']),
            ...mapGetters('data', ['requests', 'confirmedRequests']),
            monthName() {
                return this.monthNames[this.month]
            }
        },
        async mounted() {
            await this.$store.dispatch('data/getRequests')
            this.countBookedDate()
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
            align-items: center;
            background: #42c1b6;

            #{ $self }__welcome {
                display: flex;
                #{ $self }__img {
                    width: 60px !important;
                    border-radius: 50%;
                    border: 3px solid white;
                }

                #{ $self }__description {
                    margin-left: 20px;
                }
            }
            #{ $self }__total {
                display: flex;
                flex-direction: column;
                align-self: stretch;
                justify-content: center;

                padding: 0 50px;

                background: #68c5bc;
            }

        }

        &__content {
            width: 75%;
            margin: 50px auto;
            display: flex;
            flex-direction: column;

            #{ self }__divider {
                width: 100%;
                height: 2px;
                background-color: #c4c4c4;
            }
        }
    }
</style>
