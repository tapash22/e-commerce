<template>
<div class="man-trend">
    <v-row>
        <h2 class="text-center text-h4 green--text font-weight-bold my-5">Mans Trend</h2>
        <v-col cols="6" sm="6" md="3" lg="3" xl="3" v-for="man in mans" :key="man.id">
            <ProductItem :product="man" />
        </v-col>
    </v-row>
</div>
</template>

<script>
import { mapState } from 'vuex'
import ProductItem from '@/components/ProductItem.vue';

export default {
    name:'man-trends',
    computed:{
        ...mapState('product',{
            mans:'mans'
        })
    },
    components:{
        ProductItem
    }
}
</script>
