<template>
    <v-container>
        <v-row v-if="product" >
            <v-col cols="12" sm="12" lg="3" md="3" xl="3">
                <v-img width="300px" height="300px" :src="product.pimage"></v-img>
            </v-col>
            <v-col cols="12" md="9" lg="9" sm="12" xl="9">
                <v-card class="mx-auto" outlined>
                    <v-list-item three-line>
                        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
                        <v-list-item-content>
                            <div class="text-overline mb-4">
                                {{product.pname}}
                            </div>
                            <v-list-item-title class="text-h5 mb-1">
                               {{product.pcategory}}
                            </v-list-item-title>
                            <v-list-item-subtitle>{{product.price}}</v-list-item-subtitle>
                        </v-list-item-content>


                    </v-list-item>

                    <!-- <v-card-actions>
                        <v-btn outlined rounded text>
                            Button
                        </v-btn>
                    </v-card-actions> -->
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    props: ['id'],

    computed: {
        ...mapState(['product'])
    },
    mounted() {
        this.getProduct(this.id);
    },
    methods:{
        ...mapActions(['getProduct'])
    }

}
</script>