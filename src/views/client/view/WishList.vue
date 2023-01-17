<template>
<div class="wish-list">
    <v-card class="pa-0" elevation="1">
        <v-card-title class="text-body-1 pa-0 font-weight-bold mx-2 my-2 d-flex justify-start">Wish List</v-card-title>
        <v-divider></v-divider>
        <v-card-text class=" d-block">
            <template v-for="item in wishlist">
                <v-lsit class="pa-0 text my-3" :key="item.product.id" v-if="item">
                    <v-img width="50" height="80" :src="item.product.pimage" class="image" />
                    <div class="text1">
                        <v-list-item class="d-block first w-100">
                            <v-list-item-title class="text-body-1 "> this is leather jacket with button</v-list-item-title>
                            <v-list-item-subtitle class="text-caption"> this is leather jacket with button</v-list-item-subtitle>
                            <v-list-item-title class="text-body-1 my-2"> stock</v-list-item-title>
                        </v-list-item>
                        <v-list-item class="d-flex w-50 second">
                            <v-list-item-title class="my-1">${{item.product.price}}</v-list-item-title>
                            <v-list-item-subtitle>20%</v-list-item-subtitle>
                            <v-btn color="green lighten-1" @click.prevent="removeProductFromWishing(item.product)" icon>
                                <v-icon color="green">mdi-delete</v-icon>
                            </v-btn>
                        </v-list-item>
                        <!-- <v-list-item-action-text class="d-flex d-sm-flex d-md-block d-lg-block third w-75 my-2">
                            <v-text-field class="shrink " dense hide-details outlined v-model="value" />
                            <v-btn color="green lighten-1 " class="text-body-1" @click="countValue">count</v-btn>
                        </v-list-item-action-text> -->
                    </div>

                </v-lsit>
            </template>
        </v-card-text>
    </v-card>
</div>
</template>

<script>

export default {
    name: 'wish-list',
    computed: {
        wishlist() {
            return this.$store.state.wishing;
        },
    },
    components: {

    },

    mounted() {
        this.$store.dispatch('getWishItem');
    },

    methods: {

        removeProductFromWishing(product) {
            this.$store.dispatch('removeProductFromWishing', product);
        },

        clearCardItem() {
            this.$store.dispatch('clearWishingItem');
        },
    }

}
</script>

<style scoped>
.text {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 5px;
}

.text .text1 {
    display: flex;
    justify-content: space-evenly;
}

.text .image {
    align-self: center;
    justify-self: center;
    padding: 0;
}

.text .first {
    align-self: flex-start;
    justify-content: start;
}

.text .second {
    align-self: flex-start;
    justify-content: center;
}

.text .third {
    align-self: center;
    justify-content: flex-start;
}

@media only screen and (max-width: 600px) {
    .text {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap: 5px;
    }

    .text .text1 {
        display: grid;
        grid-auto-columns: 2fr;
    }
}
</style>