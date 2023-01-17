<template>
<v-container>
    <v-row v-if="product">
        <v-col cols="12" sm="12" lg="3" md="3" xl="3">

            <v-img :src="product.pimage" class=" image rounded-lg "></v-img>
        </v-col>
        <v-col cols="12" md="9" lg="9" sm="12" xl="9">
            <v-card class="pa-2">
                <v-card-title class="h6 mx-4 text-uppercase font-weight-900 justify-start pa-0">{{ product.pname }}</v-card-title>
                <!-- first part -->

                <v-card-text class="pa-0 d-md-flex d-block d-lg-flex d-xl-flex d-sm-block justify-space-between">
                    <div class="first">
                        <v-row align="center" class="mx-0 my-2">
                            <v-rating :value="4.5" color="green lighten-2" dense half-increments readonly size="24"></v-rating>
                        </v-row>

                        <div class="my-5 mx-5 h5 text-bold ">
                            Price: $ {{ product.price }}
                        </div>
                    </div>

                    <div class="second">
                        <div class="property">
                            <v-list class="d-flex justify-start">
                                <v-list-item-title class="text-left head mx-5">
                                    Size:
                                </v-list-item-title>
                                <v-list-item class="pa-0 ma-0 d-flex justify-evenly">

                                    <v-btn outlined color="green" class="text-body-1" v-for="value in values" :key="value">
                                        {{value}}
                                    </v-btn>
                                </v-list-item>
                            </v-list>
                        </div>
                    </div>

                </v-card-text>
                <!-- first part end-->

                <!-- button part -->
                <v-card-actions class="d-flex justify-start pa-0 mx-5 my-2 w-50">
                    <v-text-field class="shrink mt-1 text-h6 font-weight-bold" color="green" single-line dense hide-details outlined v-model.number="quantity">
                    </v-text-field>
                    <v-btn color="green lighten-1 " class="text-body-1 white--text font-weight-bold" large @click="addToCart()">
                        count
                    </v-btn>
                </v-card-actions>
                <!-- button part end-->

                <!-- second  part -->
                <v-card-text class="green my-2" style="opacity:0.9">
                    <!-- mark -->
                    <div class="second">
                        <ProductCardInfo />
                    </div>
                    <!-- address -->

                    <div class="details my-5">
                        <h2 class="head">Details:</h2>
                        <div class="text-justify text-body-1 black--text mx-2 text ">Small plates, salads & sandwiches - an intimate setting
                            with 12 indoor seats plus patio
                            seating.Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus
                            patio</div>
                    </div>

                    <!-- features -->
                    <div class="details my-5">
                        <v-card-title class="text-header black--text">Features</v-card-title>
                        <v-list color="transparent" class="text">
                            <v-list-item class="d-block list-item" v-for="list in lists" :key="list.id">
                                <v-list-item-title class="text-body-1 pa-0 text-center">* {{list.text}}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </div>

                </v-card-text>
                <!-- second  part end -->
            </v-card>
        </v-col>
    </v-row>

</v-container>
</template>

<script>
import ProductCardInfo from '@/components/ProductCardInfo.vue';

import {
    mapActions,
    mapState
} from 'vuex';

export default {
    data() {
        return {
            id: null,
            quantity: 1,
            values: ['sm', 'lg', 'xl'],

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

    components: {
        ProductCardInfo
    },

    methods: {
        ...mapActions(['getProduct', 'addProductToCard']),

        addToCart() {
            this.addProductToCard({
                product: this.product,
                quantity: this.quantity
            });
            this.quantity++;
        }
    }

}
</script>

<style scoped>
/* .image {
    background-position: center;
} */

.list-item {
    min-height: 30px;
}

.first {
    width: 50%;
    padding: 0;
    margin: 0;
    display: block;
}

.second {
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: start;

}

.status {
    display: flex;
    justify-content: start;
}

.second .property {
    display: block;
    width: 100%;
}

.details {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1em;
    /* background: rgba(103, 243, 10, 0.349); */
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px white;
}

.details .text {
    /* background-color: white; */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px white;
}

.head {
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    align-self: center;
    color: #000;
}

@media only screen and (max-width: 600px) {
    .details {
        display: grid;
        grid-template-columns: 2fr;
        grid-template-rows: 50px 200px;
        grid-gap: 1em;
        /* background: rgba(103, 243, 10, 0.349); */
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px white;
    }
}
</style>
