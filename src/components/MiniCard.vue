<template>
    <v-card class="mx-auto" max-width="400">
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
            <v-list-item>
                <v-list-item-title>total:${{ totalPrice }}</v-list-item-title>
                <v-list-item-subtitle>
                    <v-btn color="primary mx-0" text @click.prevent="clearCardItem()">
                        check
                    </v-btn>
                </v-list-item-subtitle>
            </v-list-item>

        </v-list>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            // items: [
            //     { title: 'Click Me', price: 22, quantity: 34 },
            //     { title: 'Click Me', price: 222, quantity: 3 },
            //     { title: 'Click Me', price: 2, quantity: 32 },
            //     { title: 'Click Me 2', price: 202, quantity: 31 },
            // ],
        }
    },
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

        clearCardItem(){
            this.$store.dispatch('clearCardItem');
        }
    }

}
</script>