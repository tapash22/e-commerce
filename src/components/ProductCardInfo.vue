<template>
<div class="delivery">
    <v-list class="d-flex" color="transparent">
        <v-list-item class="d-flex">
            <v-icon large color="white">mdi-map-marker</v-icon>
            <v-list-item-content class=" text-body-1 white  rounded-lg pa-4 text-center"> House:44; Road:01; Block:#E; Bonosree, Rampura, Dhaka-1229</v-list-item-content>
        </v-list-item>
    </v-list>

    <v-list class="d-flex" color="transparent">
        <v-list-item class="d-flex" v-for="other in others" :key="other.id">
            <v-icon large color="white">{{other.icon}}</v-icon>
            <v-list-item-title class="text-h6 font-weight-medium mx-2">{{other.detail}}</v-list-item-title>
        </v-list-item>
    </v-list>
</div>
</template>

<script>
export default {
    name: 'product-card-info',
    data() {
        return {
            others: [{
                    id: 1,
                    detail: '3-4 Days',
                    icon: 'mdi-timer-marker'
                },
                {
                    id: 2,
                    detail: 'Cash on Delivery',
                    icon: 'mdi-cash-marker'
                },
            ],
        }
    }
}
</script>

<style scoped>
.delivery {
    display: flex;
    justify-content: space-between;
}
</style>
