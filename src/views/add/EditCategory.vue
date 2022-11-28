<template>
    <v-container>
        <v-card >
            <v-card-title>
                Edit Product
            </v-card-title>
            <v-card-text>
                <v-card-text>
                    <from v-if="category">
                        <v-row class="d-block">
                            {{category.category_name+ ''+category.cdescription}}
                            <v-col>
                                <v-text-field v-model="category.category_name" ></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field v-model="category.cimage" ></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field v-model="category.cdescription" ></v-text-field>
                            </v-col>

                            <v-col>
                                <v-btn x-large @click="editategoroy()"> Update category
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
            id: null
        }
    },
    computed: {
        ...mapState(['category'])
    },
    mounted() {
        this.id = this.$route.params.id;
        this.getCategory(this.id);
    },
    methods: {
        ...mapActions(['getCategory'])
    }
}
</script>