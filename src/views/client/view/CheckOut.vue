<template>
    <v-container>
        <v-row class="d-flex justify-center my-5">
            <v-col cols="12" md="12" sm="12">
                <v-card>
                    <v-card-title class="text-h5">E-Commerce</v-card-title>
                    <v-card-subtitle class="text-h6 text-center">Card detail</v-card-subtitle>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-list>
                            <template v-for="item in cart">

                                <v-list-item v-if="item" :key="item.product.id" class="d-flex justify-between my-5">
                                    <v-img max-height="150" max-width="250" :src="item.product.pimage" />
                                    <v-list-item-content class="mt-5 mx-4">
                                        <v-list-item-title class="text-h5" three-line>{{ item.product.pname }}</v-list-item-title>

                                        <v-list-item-subtitle class="text-subtitle-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ratione recusandae, nam laudantium tenetur mollitia impedit ad laboriosam fuga ipsam repellendus voluptas, consequuntur incidunt unde sed necessitatibus. Repellat, ad aperiam.</v-list-item-subtitle>
                                        <v-list-item-title class="text-h5">{{ item.quantity }}</v-list-item-title>
                                        <v-list-item-subtitle class="text-h6">${{ item.product.price }}
                                        </v-list-item-subtitle>
                                        
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-btn x-large color="info" text @click="removeProductFromCart(item.product)">
                                            Remove
                                        </v-btn>
                                    </v-list-item-action>
                                </v-list-item>


                            </template>
                        </v-list>

                    </v-card-text>

                    <v-divider></v-divider>
                    <v-card-actions class="d-flex justify-end">
                        <v-card-title>Total Amount: {{ totalPrice }}</v-card-title>
                        <v-btn x-large color="info" dark>
                            Payment
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    computed: {
        cart() {
            return this.$store.state.cart;
        },
        totalPrice() {
            return this.$store.getters.cardTotalPrice;
        }
    },
    methods: {
        removeProductFromCart(product) {
            this.$store.dispatch('removeProductFromCart', product);
        },
    }

}
</script>