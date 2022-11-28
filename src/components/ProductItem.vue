<template>
    <v-row>
        <v-card class="mx-auto my-12" max-width="374">
            <v-img height="250" :src="product.pimage"></v-img>

            <v-card-title>
                <router-link :to="{name: 'productdetail', params: {id: product.id}}" >{{ product.pname }} </router-link>

            </v-card-title>

            <v-card-text>

                <div class="my-4 text-subtitle-1">
                    ${{ product.price }}
                </div>

                <div>{{ product.pcategory }}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
                <v-btn color="deep-purple lighten-2" @click="addToCart()">
                    Add to Card
                </v-btn>
                <v-btn color="blue lighten-2" @click="addToWishlist()">
                    Favoriet
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-row>

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
        addToWishlist(){
            this.$store.dispatch('addProductToWish',this.product);
        }
    }
}
</script>