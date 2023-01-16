<template>
    <v-card class="mx-0 pa-0" width="250px">
        <v-card-title class="d-flex justify-center text-body-1 pa-0 font-weight-bold my-2">Pocket</v-card-title>
        <v-card-text class="pa-0">
            <v-list class="mx-2">
                <v-list-item v-for="item in cart" :key="item.product.id" class="pa-0">
                    <v-list-item-content>
                        <v-list-item-title class="text-body-1">{{ item.product.pname }}</v-list-item-title>
                        <v-list-item-subtitle class="text-caption">{{ item.quantity + 'X' + item.product.price }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <a @click.prevent="removeProductFromCart(item.product)">
                            <v-icon color="red lighten-1">mdi-delete</v-icon>
                        </a>

                    </v-list-item-action>
                    <hr />
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item class="d-flex justify-space-evenly pa-0 " >
                    <v-list-item-title class="text-body-1 pa-0 font-weight-bold">Total: ${{ totalPrice }}</v-list-item-title>

                    <v-btn color="green" small outlined class="text-body-2 black--text"  @click.prevent="clearCardItem()">
                        clear
                    </v-btn>

                </v-list-item>
            </v-list>
        </v-card-text>
        <v-card-actions class="pa-0 my-2">
            <router-link :to="{name:'checkout'}" class="text-decoration-none pa-0 w-100 ">
            <v-btn
              small
              color="green lignten-5"
              width="100%"
              
              class="black--text text-body-1"
            >
              Checkout
            </v-btn>
        </router-link>
        </v-card-actions>
    </v-card>
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
    mounted() {
        this.$store.dispatch('getCartItem');
    },

    methods: {
        removeProductFromCart(product) {
            this.$store.dispatch('removeProductFromCart', product);
        },

        clearCardItem() {
            this.$store.dispatch('clearCardItem');
        },
    }

}
</script>