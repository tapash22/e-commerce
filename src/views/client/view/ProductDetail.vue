<template>
<v-container>
    <v-row v-if="product">
        <v-col cols="12" sm="12" lg="3" md="3" xl="3">
            
            <v-img width="300" :src="product.pimage" class=" image rounded-lg "></v-img>
        </v-col>
        <v-col cols="12" md="9" lg="9" sm="12" xl="9">
            <v-card class="mx-auto">
                <v-card-title class="h6 text-uppercase font-weight-900 justify-start">{{ product.pname }}</v-card-title>
                <!-- <v-card-subtitle class="text-h6"> {{ product.pcategory }}</v-card-subtitle> -->
                <v-card-text class="pa-0">
                    <v-row align="center" class="mx-0">
                        <v-rating :value="4.5" color="amber" dense half-increments readonly size="24"></v-rating>
                    </v-row>

                    <div class="my-5 mx-5 text-h5 text-bold black--text">
                        $ {{ product.price }}
                    </div>
                </v-card-text>
                <v-card-actions class="d-flex justify-start my-5 mb-2 w-25">
                    <v-text-field class="shrink mt-1 text-h6 font-weight-bold" single-line dense hide-details outlined v-model.number="quantity">
                    </v-text-field>
                    <v-btn color="blue darken-5 " class="text-body-1 white--text font-weight-bold" large @click="addToCart()">
                    count
                    </v-btn>
                </v-card-actions>
                <v-card-text>

                    <div class="my-2 pa-2 text-justify text-body-2">Small plates, salads & sandwiches - an intimate setting
                        with 12 indoor seats plus patio
                        seating.Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus
                        patio</div>
                    <v-card-title class="text-h4 justify-start">Features</v-card-title>
                    <v-list>
                        <v-list-item class="d-block pa-0 ma-0" v-for="list in lists" :key="list.id">
                            <v-list-item-title class="text-body-1 pa-0">{{list.id}}.{{list.text}}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>

</v-container>
</template>

<script>
import {
    mapActions,
    mapState
} from 'vuex';

export default {
    data() {
        return {
            id: null,
            quantity: 1,
            lists: [{
                    id: 1,
                    text: 'This is good product'
                },
                {
                    id: 2,
                    text: 'comfortable to use and warm '
                },
                {
                    id: 3,
                    text: '100% premium quality and nice design'
                },
                {
                    id: 4,
                    text: '100% premium quality and nice design'
                },
                {
                    id: 5,
                    text: '100% premium quality and nice design'
                },
            ]
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
            this.quantity ++;
        }
    }

}
</script>

<style scoped>
.image {
    background-position: center;
}
</style>
