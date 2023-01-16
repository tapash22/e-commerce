<template>
<v-container>
    <v-row class="d-flex justify-center ">
        <v-col cols="12" md="8" sm="12" lg="8" xl="8">
            <v-card class="pa-0" elevation="1" >
                <v-card-title class="text-body-1 pa-0 font-weight-bold mx-2 my-2 d-flex justify-start">E-Commerce</v-card-title>
                <v-divider></v-divider>
                <v-card-text class=" d-block">

                    <template v-for="item in cart" >
                        <v-lsit class="pa-0 text my-3" :key="item.product.id" v-if="item" >
                            <v-img width="80" height="60" :src="item.product.pimage" class="image" />
                            <v-list-item class="pa-0 d-block first">
                                <v-list-item-title class="text-body-1"> title</v-list-item-title>
                                <v-list-item-subtitle class="text-caption"> sub details</v-list-item-subtitle>
                                <v-list-item-title class="text-body-1 my-2"> title</v-list-item-title>
                            </v-list-item>
                            <v-list-item class="pa-0 d-block w-50 second">
                                <v-list-item-title class="my-1">$22</v-list-item-title>
                                <v-list-item-subtitle>20%</v-list-item-subtitle>
                                <v-btn color="green lighten-1" icon><v-icon color="green">mdi-delete</v-icon></v-btn>   
                            </v-list-item>
                            <v-list-item-action-text class="d-flex third">
                                <v-text-field class="shirnk" dense hide-details outlined v-model="value" />
                                <v-btn color="green lighten-1" large class="text-body-1 mt-n1">Count</v-btn>
                            </v-list-item-action-text>
                          
                        </v-lsit>
                    </template>

                </v-card-text>
            </v-card>
        </v-col>
        <!-- second part -->

        <v-col cols="4" md="4" sm="6" lg="4" xl="4">
            <v-card class="pa-0" elevation="1">
                <v-card-title class="text-body-1 font-weight-bold pa-0 my-2 mx-2 d-flex justify-start">Order Summery</v-card-title>
                <v-divider></v-divider>
                <v-card-text class="pa-0">
                    <v-list class="pa-0">

                        <v-list-item class="d-flex justify-space-between">
                            <v-list-item-title>Subtotal: </v-list-item-title>
                            <v-list-item-subtitle class="d-flex justify-end">$ 222</v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item class="d-flex justify-space-between">
                            <v-list-item-title>Shipping Fee: </v-list-item-title>
                            <v-list-item-subtitle class="d-flex justify-end">$ 20</v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item class="d-flex justify-space-between">
                            <v-text-field v-model="value" class="shrink w-75 text-h6" dense hide-details outlined />
                            <v-btn color="green lignten-1 mt-n2" large>Apply Code</v-btn>
                        </v-list-item>

                        <v-list-item class="d-flex justify-space-between">
                            <v-list-item-title class="text-body-1 font-weight-bold"> Total: </v-list-item-title>
                            <v-list-item-subtitle class="d-flex justify-end text-body-1 font-weight-bold">$ {{totalPrice}}</v-list-item-subtitle>
                        </v-list-item>

                    </v-list>
                </v-card-text>
                <v-card-actions class="pa-0 my-2">
                    <router-link :to="{name:''}" class="text-decoration-none pa-0 w-100 ">
                        <v-btn small color="green lignten-5" width="100%" class="black--text font-weight-bold text-body-2">
                            Proceed to checkout
                        </v-btn>
                    </router-link>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {

    data(){
        return{
            value:0,
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
    methods: {
        removeProductFromCart(product) {
            this.$store.dispatch('removeProductFromCart', product);
        },
    }

}
</script>

<style scoped>
.text{
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    grid-gap: 5px;
}
.text .image{
    align-self: center;
    justify-self: center;
}
.text .first{
    align-self: flex-start;
    justify-content: start;
}
.text .second{
    align-self: flex-start;
    justify-content: center;
}
.text .third{
    align-self: center;
    justify-content: flex-start;
}
</style>
