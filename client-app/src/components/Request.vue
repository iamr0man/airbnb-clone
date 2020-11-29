<template>
    <div class="request">
        <div class="request__text">
            <img class="request__img" src="../assets/img/original.jpg" alt="">
            <p class="request__status">{{ request.status }}</p>
            <p v-if="request" class="request__details"><span class="decoration">•</span><span class="name">{{ request.guest_id.name }}</span> at {{ request.home.name }} in the {{ request.home.city }}</p>
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
        props: ['request'],
        data() {
          return {
            rs: '',
            ic: '',
            currentSign: '',
            signOfNights: 0,
            monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
              "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ],
          }
        },
        async mounted() {
          this.rs = this.request.status
          if(!this.request.isCounted && this.isNeedToCount()) {
            this.chooseSign()
            this.countNights()
            await this.updateEarnedMoney()
            await this.markAsCounted()
          }
        },
        methods: {
            isNeedToCount() {
              return !(this.rs === 'request' || this.rs === 'reject')
            },
            chooseSign() {
              if(this.rs === 'confirm') {
                this.currentSign = '+'
              } else if (this.rs === 'disapproved') {
                this.currentSign = '-'
              }
              return false
            },
            countNights() {
              let amountOfNights = 0
              const [first, second] = this.request.date
              const oneDay = 24 * 60 * 60 * 1000;

              for (let i = first; i < second; i += oneDay) {
                amountOfNights++;
              }
              this.signOfNights = parseInt(this.currentSign + amountOfNights)
            },
            async updateEarnedMoney() {
              const expr = Math.abs(this.request.money)
              return await this.$store.dispatch('user/updateUser', {
                userFields: {
                  earnedAllTime: parseInt(this.currentSign + expr),
                  confirmedNights: parseInt(this.signOfNights)
                }
              })
            },
            async markAsCounted() {
              await this.$store.dispatch('data/updateRequest', {
                id: this.request._id,
                requestFields: {
                  isCounted: true
                }
              })
              await this.$store.dispatch('data/getRequests')
            },
            async setRequestStatus(status) {
              const requestFields = {
                  status,
                  isCounted: false
              };
              await this.$store.dispatch('data/updateRequest', {
                  id: this.request._id,
                  requestFields
              });
              await this.$store.dispatch('data/getRequests')

              this.rs = this.request.status
              if(this.request.isCounted && this.isNeedToCount()) {
                this.chooseSign()
                this.countNights()
                const user = await this.updateEarnedMoney()
                this.$emit('setMoney', user)
                await this.markAsCounted()
              }
            },
          },
          computed: {
              inNumbers() {
                const [first, second] = this.request.date.map(v => new Date(v));

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