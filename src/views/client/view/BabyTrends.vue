<template>
<div class="baby-trend">
    <v-row>
        <h2 class="text-center text-h4 green--text font-weight-bold my-5">Babys Trend</h2>
        <v-col cols="6" sm="6" md="3" lg="3" xl="3" v-for="baby in babys" :key="baby.id">
            <ProductItem :product="baby" />
        </v-col>
    </v-row>
</div>
</template>

<script>
import { mapState } from 'vuex'
import ProductItem from '@/components/ProductItem.vue';

export default {
    name:'baby-trends',
    computed:{
        ...mapState('product',{
            babys:'babys'
        })
    },
    components:{
        ProductItem
    }
}
</script>
