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
                v-if="isConfirmed"
                class="mr-3"
                dark
                @click="setRequestStatus('confirm')"
                >Confirm</v-btn>
            <v-btn
                v-if="isReject"
                dark
                @click="setRequestStatus('reject')"
                >Reject</v-btn>
            <v-btn
                v-if="isDisapproved"
                dark
                @click="setRequestStatus('disapproved')"
                >Disapprove</v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['request', 'monthNames', 'nights'],
        methods: {
            async setRequestStatus(status) {
                const requestFields = {
                    status
                };
                await this.$store.dispatch('data/updateRequest', {
                    id: this.request._id,
                    requestFields
                });
                await this.$store.dispatch('data/getRequests')
                this.updateAccount()
            },
            async updateAccount() {
                const rs = this.request.status
                const expr = Math.abs(this.request.money)
                await this.$store.dispatch('user/updateUser', {
                    userFields: {
                        earnedInAMonth: rs === "confirm" ? expr : rs === 'reject' ? 0 : -expr
                    }
                })
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
                    `$${this.request.money*this.nights}`
                ].join(' • ')
            },
            isConfirmed() {
                return this.request.status === 'request'
            },
            isReject() {
                return this.request.status === 'request' ||  this.request.status === 'confirm'
            },
            isDisapproved() {
                return this.request.status === 'reject'
            },

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