<template>
<router-link class="text-decoration-none " :to="{name: 'productdetail', params: {id: product.id}}">
    <v-card class=" my-12 pa-0 ma-0">
        <v-img height="200" width="250" :src="product.pimage"></v-img>

        <v-card-title class="d-flex justify-start">
            {{ product.pname }}
        </v-card-title>
        <v-card-subtitle class="text-justify">{{ product.pcategory }} for sweetable and comfortable and warm do you know this</v-card-subtitle>
        <v-card-text class="">
            <v-card-title class="d-flex justify-start pa-0 "> ${{ product.price }}</v-card-title>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="d-flex justify-space-between">
            <v-btn color="deep-purple lighten-2" small class="text-caption" @click="addToCart()">
                Add to Card
            </v-btn>
            <v-btn color="blue lighten-2" class="text-caption" small @click="addToWishlist()">
                Favoriet
            </v-btn>
        </v-card-actions>
    </v-card>
</router-link>
</template>

<script>
export default {
    props: ['product'],

    methods: {
        addToCart() {
            this.$store.dispatch("addProductToCard", {
                product: this.product,
                quantity: 1
            });
        },
        addToWishlist() {
            this.$store.dispatch('addProductToWish', this.product);
        }
    }
}
</script>
