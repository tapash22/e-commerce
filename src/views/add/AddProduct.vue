<template>
    <div class="add-product">
        <v-container>
            <v-card>
                <v-card-title>Add product</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col>
                            <v-text-field v-model="pname" label="Category Name"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field v-model="pimage" label="Category Name"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-textarea v-model="pdescription" label="Category Name"></v-textarea>
                        </v-col>
                        <v-col>
                            <v-text-field v-model="price" label="Category Name"></v-text-field>
                        </v-col>
                        <v-col>
                                <v-btn x-large @click="addProduct()"> Add category
                                </v-btn>
                            </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pname:'',
            pdescription:'',
            pimage:'',
            price:''
        }
    },
    methods:{
        addProduct(){
            
        }
    }
}
</script>