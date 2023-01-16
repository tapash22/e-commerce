<template>
    <v-row class="">
        <v-col sm="12" lg="12" md="12" xl="12" class="pa-0">
            <v-carousel cycle height="350px" class="rounded-lg" hide-delimiter-background show-arrows-on-hover>
                <v-carousel-item v-for="(slide,index) in slides" :key="index">
                    <v-sheet :color="colors[index]" height="100%">
                        <v-row class="fill-height" align="center" justify="center" >
                            <div class="text-h2 white--text text-center ">
                                {{slide}} Fashion
                            </div>
                        </v-row>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>

        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            slides: [
                'SHOPPING',
                'MAN',
                "WOMAN",
                "TRAND"
            ],
            colors: [
                'red lighten-1',
                'deep-purple accent-4',
                'warning',
                'pink darken-2',
            ]
        }
    }
}
</script>