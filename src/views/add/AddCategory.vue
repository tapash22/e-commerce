<template>
    <div class="add-category">
        <v-container>
            <v-row>
                <v-col cols="12" lg="12" sm="12" md="12">
                    <v-card>
                        <v-card-title>Add category</v-card-title>
                        <v-card-text>
                            <v-from>
                                <v-row class="d-block">
                                    <v-col>
                                        <v-text-field v-model="category_name" label="Category Name"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field v-model="cimage" label="Image Link"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field v-model="cdescription" label="Description"></v-text-field>
                                    </v-col>

                                    <v-col>
                                        <v-btn x-large @click="addCategoroy()"> Add category
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-from>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" sm="12" lg="12" md="12">
                    <v-card>
                        <v-card-title>category list</v-card-title>
                        <v-card-text>
                            <v-list>
                                <v-list-item v-for="category in categorys" :key="category.id" class="d-flex my-5">
                                    <v-img max-height="100px" max-width="100px" :src="category.cimage"></v-img>
                                    <v-list-item-title class="text-center">{{ category.category_name }}
                                    </v-list-item-title>
                                    <v-list-item-subtitle>{{ category.cdescription }}</v-list-item-subtitle>
                                    <v-list-item-action-text class="d-flex">

                                        <router-link :to="{ name: 'editcategory', params: { id: category.id } }">edit
                                        </router-link>

                                        <v-btn @click="removeCategory(category.id)">
                                            delete
                                        </v-btn>
                                    </v-list-item-action-text>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';


export default {
    data() {
        return {
           
            valid: false,
            category_name: '',
            cimage: '',
            cdescription: ''
        }
    },
    computed: {
        ...mapState(['categorys','category'])
    },

    mounted() {
        this.getCategorys();
    },

    methods: {
        ...mapActions(['getCategorys']),

        removeCategory(id) {
            this.$store.dispatch('removeCategory', id);
        },

        addCategoroy() {
            let data = new FormData();
            data.append('category_name', this.category_name);
            data.append('cimage', this.cimage);
            data.append('cdescription', this.cdescription);

            this.$store.dispatch('addCategory', data);

            // Category.addCategory(data, {
            //     header: {
            //         "Content-Type": "multipart/form-data",
            //     },
            // })
            //     .then((res) => {
            //         if (res.data.error) {
            //             console.log("errors", res.data.error);
            //             alert(res.data.error);
            //         } else {
            //             console.log(res.data.message);
            //             alert(res.data);
            //         }
            //     })
            //     .catch((err) => {
            //         console.log(err);
            //     });
        }
    }
}
</script>