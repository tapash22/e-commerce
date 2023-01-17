<template>
<v-list class=" d-block d-sm-block d-md-flex d-lg-flex d-xl-flex" color="transparent">
    <v-list-item class="d-flex">

        <v-icon large color="white">mdi-map-marker</v-icon>
        <v-list-item-content class=" text-header font-weight-bold white  rounded-lg pa-4 text-center"> House:44; Road:01; Block:#E; Bonosree, Rampura, Dhaka-1229</v-list-item-content>
    </v-list-item>

    <v-list-item class="d-flex my-5 justify-center" v-for="other in others" :key="other.id">
        <v-icon class="text-h4" color="white">{{other.icon}}</v-icon>
        <v-list-item-title class="text-header font-weight-medium mx-2">{{other.detail}}</v-list-item-title>
    </v-list-item>

</v-list>
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
