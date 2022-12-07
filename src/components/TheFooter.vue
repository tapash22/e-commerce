<template>
    <v-footer  class=" d-flex deep-purple accent-4">
        <v-card class="" width="100%" >
            <v-card-title class="deep-purple accent-4">
                <strong class="subheading white--text">Get connected with us on social networks!</strong>

                <v-spacer></v-spacer>

                <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
                    <v-icon size="42px">
                        {{ icon }}
                    </v-icon>
                </v-btn>
            </v-card-title>

            <v-card-text class="py-2 text-h6  text-center">
                {{ new Date().getFullYear() }} — <strong>E-commerce</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
}
</script>