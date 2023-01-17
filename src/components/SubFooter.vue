<template>
<!-- <div class="sub-footer"> -->
    <v-card class="w-100 pa-1 " color="transparent">
        <v-card-title class="d-flex justify-start pa-0 mx-4 font-weight-bold">{{name}}</v-card-title>
        <v-card-text class="pa-0 mx-2">
            <v-list class="pa-0" color="transparent">
                <v-list-item class="pa-0 mx-2" v-for="title in titels2" :key="title">
                    <v-list-item-title class="pa-0 text-caption">{{title}}</v-list-item-title>
                </v-list-item>

            </v-list>
        </v-card-text>
    </v-card>
<!-- </div> -->
</template>

<script>
export default {
    name:'sub-footer',
    props:['name','titels2']
}
</script>

<style scoped>
.v-list-item {
    min-height: 20px;
}
.v-card{
    box-shadow: none !important;
}
</style>
