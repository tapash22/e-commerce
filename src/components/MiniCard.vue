<template>
    <v-card class="mx-0" width="250px">
        <v-card-text>
            <v-list>
                <v-list-item v-for="item in cart" :key="item.product.id">
                    <v-list-item-content>
                        <v-list-item-title>{{ item.product.pname }}</v-list-item-title>
                        <v-list-item-subtitle>{{ item.quantity + 'X' + item.product.price }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <a @click.prevent="removeProductFromCart(item.product)">
                            <v-icon color="grey lighten-1">mdi-delete</v-icon>
                        </a>

                    </v-list-item-action>
                    <hr />
                </v-list-item>
                <v-list-item class="d-flex justify-space-between">
                    <v-list-item-title>total:${{ totalPrice }}</v-list-item-title>

                    <v-btn color="primary " text @click.prevent="clearCardItem()">
                        clear
                    </v-btn>

                </v-list-item>
            </v-list>
        </v-card-text>
        <v-card-actions>
            <router-link :to="{name:'checkout'}">
            <v-btn
              x-large
              color="info"
              dark
              width="100%"
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