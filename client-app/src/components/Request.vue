<template>
    <div class="request">
        <div class="request__text">
            <img class="request__img" src="../assets/img/original.jpg" alt="">
            <p class="request__status">{{ request.status }}</p>
            <p class="request__details"><span class="decoration">•</span><span class="name">{{ request.guest_id.name }}</span> at {{ request.home.name }} in the {{ request.home.city }}</p>
        </div>
        <div class="request__numbers">
            <p class="request__details">{{ inNumbers }}</p>
        </div>
        <div class="request__action">
            <v-btn
                class="mr-3"
                :disabled="isConfirmed"
                dark
                @click="confirmOrRejectRequest"
                >Confirm</v-btn>
            <v-btn
                :disabled="isDisapproved"
                dark
                @click="confirmOrRejectRequest"
                >Reject</v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['request'],
        data() {
            return {
                monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                ],
                newStatus: '',
                isDisapproved: false
            }
        },
        methods: {
            async confirmOrRejectRequest() {
                const requestFields = {
                    status: this.newStatus
                };
                await this.$store.dispatch('data/updateRequest', {
                    id: this.request._id,
                    requestFields
                });
                await this.$store.dispatch('data/getRequests')
            },
            requestStatus() {
                if (this.request.status === "request") {
                    this.newStatus = 'confirm';
                    return "confirm";
                } else if (this.request.status === "confirm") {
                    this.newStatus = 'disapproved';
                    this.$store.dispatch('user/updateUser', { userFields: {
                            money: -Math.abs(this.request.money)
                        }
                    })
                    return 'reject';
                } else if (this.request.status === "disapproved") {
                    this.$store.dispatch('user/updateUser', { userFields: {
                            money: -Math.abs(this.request.money)
                        }
                    })
                    this.isDisapproved = true
                } else if (this.request.status === "injuries") {
                    this.newStatus = 'reply';
                    return "reply"
                }
                return 'confirm'
            }
        },
        computed: {
            inNumbers() {
                const [first, second ] = this.request.date.map(v => new Date(v));

                let parsedData = '';
                if(first.getMonth() === second.getMonth()) {
                    parsedData = `${this.monthNames[first.getMonth()]} ${first.getDate()} - ${second.getDate()}`
                } else {
                    parsedData = `${this.monthNames[first.getMonth()]} ${first.getDate()} - ${this.monthNames[second.getMonth()]} ${second.getDate()}`
                }
                return [
                    parsedData,
                    `${this.request.guests} guests`,
                    `$${this.request.money}`
                ].join(' • ')
            },
            isConfirmed() {
                return this.request.status === 'confirm'
            }
        }
    }
</script>

<style lang="scss">
    .request {
        $self: &;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 5px;

        &__text {
            display: flex;
            align-items: center;

            #{ $self }__img {
                width: 60px;
                margin-right: 10px;
                border-radius: 50%;
            }

            #{ $self }__status {
                text-transform: capitalize;
                color: #42c1b6;
            }
            #{ $self }__details {
                .decoration {
                    margin: 0 10px;
                }
                .name {
                    font-weight: 700;
                }
            }

        }

        &__numbers {
            display: flex;
        }
    }
</style>