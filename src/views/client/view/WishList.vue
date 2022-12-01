<template>
    <v-container>
        <v-card>
            <v-card-title class="text-h3">Feveriout list</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-list>
                    <v-list-item v-for="item in wishlist" :key="item.product.id">
                        <v-list-item-content>
                            <v-list-item-title>{{ item.product.pname }}</v-list-item-title>
                            <v-list-item-subtitle>{{ item.product.price }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <a @click.prevent="removeProductFromWishing(item.product)">
                                <v-icon color="grey lighten-1">mdi-delete</v-icon>
                            </a>
                        </v-list-item-action>
                        <hr />
                    </v-list-item>
                </v-list>
            </v-card-text>

            <v-divider></v-divider>
            <v-card-actions>
                <v-btn x-large color="info" dark width="100%" @click="clearCardItem">
                    Clear All
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>
<script>
export default {
    computed: {
        wishlist() {
            return this.$store.state.wishing;
        },
    },
    mounted() {
        this.$store.dispatch('getWishItem');
    },

    methods: {
        removeProductFromWishing(product) {
            this.$store.dispatch('removeProductFromWishing', product);
        },

        clearCardItem() {
            this.$store.dispatch('clearWishingItem');
        },
    }

}
</script>