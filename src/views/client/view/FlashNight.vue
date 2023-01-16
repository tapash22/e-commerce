<template>
<div class="flash-night">
    <v-row>
        <h2 class="text-center text-h4 green--text font-weight-bold my-5">Flash Night</h2>
        <v-col cols="6" sm="6" md="3" lg="3" xl="3" v-for="product in products" :key="product">
            <ProductItem :product="product" />
        </v-col>
    </v-row>
</div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';

import {
    mapState
} from 'vuex'

export default {
    computed: {
        ...mapState('flashnight', {
            products: 'products'
        })
        //   getList(){
        //     return this.$store.state.lists;
        //   }
    },

    components:{
        ProductItem,
    }

}
</script>
