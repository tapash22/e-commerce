
<template>
    <v-card class="mx-auto my-12" max-width="374">
        <v-img height="250" :src="list.image"></v-img>

        <v-card-title>{{list.productn}}</v-card-title>

        <v-card-text>
            <v-row align="center" class="mx-0">
                <v-rating :value="list.rating" color="amber" dense half-increments readonly size="14"></v-rating>

            </v-row>

            <div class="my-4 text-subtitle-1">
                ${{list.price}}
            </div>

            <div>{{list.des}}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
            <v-btn color="deep-purple lighten-2" >
                Add to Card
            </v-btn>
            <v-btn color="blue lighten-2" >
                View
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props:['list'],
}
</script>