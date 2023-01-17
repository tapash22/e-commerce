<template>
<v-card class=" my-5 pa-0 ma-0" rounded="lg">
    <div class="image">
        <v-img class="img my-2 " width="180" height="300" :src="product.pimage">
            <v-btn icon class="d-flex justify-center" @click="addToWishlist">
                <v-icon color="red" class="text-h4">
                    mdi-heart
                </v-icon>
            </v-btn>
        </v-img>
    </div>
    <router-link class="text-decoration-none pa-0 black--text" :to="{name: 'productdetail', params: {id: product.id}}">
        <v-card-title class="d-flex justify-start text-body-1 ma-2 my-2 font-weight-bold pa-0">
            {{ product.pname }}
        </v-card-title>
    </router-link>
    <v-card-subtitle class="text-justify text-body-2">{{ product.pcategory }} for sweetable and comfortable and warm do you know this</v-card-subtitle>
    <v-card-text class="pa-0">
        <v-card-title class="d-flex justify-start pa-0 text-body-1 black--text mx-5"> ${{ product.price }}</v-card-title>
    </v-card-text>
    <v-card-actions class="w-25 d-flex justify-start pa-0 mx-4 my-2">
        <v-rating :value="4.5" color="amber" dense half-increments readonly size="18"></v-rating>
    </v-card-actions>
</v-card>
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

<style scoped>
.image {
    /*    
    height: 250px; */
    display: flex;
    justify-content: center;
    background: rgba(255, 0, 0, 0.623);
}

.v-image__image {
    background-position: unset !important;
    background-size: cover !important;
}
</style>
