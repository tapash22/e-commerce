<template>
<div class="women-trend">
    <v-row>
        <h2 class="text-center text-h4 green--text font-weight-bold my-5">Womens Trend</h2>
        <v-col cols="6" sm="6" md="3" lg="3" xl="3" v-for="women in womens" :key="women.id">
            <ProductItem :product="women" />
        </v-col>
    </v-row>
</div>
</template>

<script>
import { mapState } from 'vuex'
import ProductItem from '@/components/ProductItem.vue';

export default {
    name:'women-trends',
    computed:{
        ...mapState('product',{
            womens:'womens'
        })
    },
    components:{
        ProductItem
    }
}
</script>
