<template>
    <v-container>
        <v-row v-if="product">
            <v-col cols="12" sm="12" lg="3" md="3" xl="3">
                <v-img width="300px" height="300px" :src="product.pimage"></v-img>
            </v-col>
            <v-col cols="12" md="9" lg="9" sm="12" xl="9">
                <v-card class="mx-auto">
                    <v-card-title class="text-h4 justify-start">{{ product.pname }}</v-card-title>
                    <v-card-subtitle class="text-h6"> {{ product.pcategory }}</v-card-subtitle>
                    <v-card-text>
                        <v-row align="center" class="mx-0">
                            <v-rating :value="4.5" color="amber" dense half-increments readonly size="24"></v-rating>

                            <div class="grey--text mt-4">
                                4.5
                            </div>
                        </v-row>

                        <div class="my-5 text-h3 text-bold">
                            $ {{ product.price }}
                        </div>

                        <div class="my-2 text-justify text-h6">Small plates, salads & sandwiches - an intimate setting
                            with 12 indoor seats plus patio
                            seating.Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus
                            patio</div>
                    </v-card-text>
                    <v-card-actions class="d-flex justify-start my-5 mb-2">
                        <v-text-field class="shrink mt-1" dense hide-details outlined v-model.number="quantity">
                        </v-text-field>
                        <v-btn color="blue lighten-1" large @click="addToCart()">
                            Add To Card
                        </v-btn>
                    </v-card-actions>
                    <v-card-text>
                        <v-card-title class="text-h4 justify-start">Features</v-card-title>
                        <v-list>
                            <v-list-item class="d-block">
                                <v-list-item-title class="text-h6">this is the features of products</v-list-item-title>
                                <v-list-item-title class="text-h6">this is the features of products</v-list-item-title>
                                <v-list-item-title class="text-h6">this is the features of products</v-list-item-title>
                                <v-list-item-title class="text-h6">this is the features of products</v-list-item-title>
                                <v-list-item-title class="text-h6">this is the features of products</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    data() {
        return {
            id: null,
            quantity: 1
        }
    },
    computed: {
        ...mapState(['product'])
    },
    mounted() {
        this.id = this.$route.params.id;
        this.getProduct(this.id);
    },
    methods: {
        ...mapActions(['getProduct', 'addProductToCard']),

        addToCart() {
            this.addProductToCard({
                product: this.product,
                quantity: this.quantity
            });
        }
    }

}
</script>