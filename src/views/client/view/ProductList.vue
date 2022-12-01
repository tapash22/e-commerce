<template>
    <div class="products">
        <h2 class="text-center text-h2 text-bold">Products</h2>
        <v-row class="d-flex justify-space-between p-3">
            <v-col cols="12" sm="12" md="3" lg="3" xl="3" v-for="product in products" :key="product.id" class=" d-flex justify-center p-2">
                <ProductItem  :product="product" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
import { mapActions, mapState } from 'vuex';

export default {
    components: {
        ProductItem,
    },

    computed: {
        ...mapState(['products']),
    },
    mounted(){
        this.getProducts();

    },
    methods:{
        ...mapActions(['getProducts']),
    }

}
</script>