<template>
    <v-container>
        <v-card>
            <v-card-title>
                Update Product
            </v-card-title>
            <v-card-text>
                <v-card-text>
                    <from v-if="category">
                        <v-row class="d-block">
                            <v-col>
                                <v-text-field v-model="category.category_name"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field v-model="category.cimage"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field v-model="category.cdescription"></v-text-field>
                            </v-col>

                            <v-col>
                                <v-btn x-large @click="uCategoroy()"> Update category
                                </v-btn>
                            </v-col>
                        </v-row>
                    </from>
                </v-card-text>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    data() {
        return {
            id: null,
            form: null
        }
    },
    computed: {
        ...mapState(['category'])
    },
    mounted() {
        this.id = this.$route.params.id;
        this.getCategory(this.id);
        // this.updateCategoroy(this.id);
    },
    methods: {
        ...mapActions(['getCategory','updateCategoroy']),

        uCategoroy() {
            this.$store.dispatch('updateCategoroy',this.category);
            // console.log(this.category);
            // console.log(this.id);
            // this.$store.dispatch('updateCategoroy', id);
       
        }

    }
}
</script>