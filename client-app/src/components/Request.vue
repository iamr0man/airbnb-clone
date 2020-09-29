<template>
    <div class="request">
        <div class="request__text">
            <p class="request__status">{{ request.status }}</p>
            <p class="request__details"><span class="name">{{ request.guest_id.name }}</span> at {{ request.home.name }} in the {{ request.home.city }}</p>
        </div>
        <div class="rqeuest__numbers">
            <p class="request__date"></p>
            <p class="request__guests">{{ request.guests }}</p>
            <p class="request__money">{{ request.money }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['request']
    }
</script>