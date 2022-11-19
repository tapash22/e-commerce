<template>

    <div class="navigation">
        <v-app-bar color="deep-purple accent-4"  dark>


            <v-app-bar-title class="white--text" width="200px">E-commerce</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-text-field class="shrink" dense hide-details placeholder="search" rounded filled
                append-icon="mdi-magnify">
            </v-text-field>
            <v-spacer></v-spacer>


            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>
        <v-row style="padding-left:150px;margin:0">
            <v-navigation-drawer  width="400px" color="white" v-model="drawer" permanent
                mini-variant-width="200px" expand-on-hover style="z-index:99;">
                <v-list nav dense class="p-2">
                    <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4"
                        v-for="list in lists" :key="list">
                        <v-list-item>
                            <v-list-item-title class=" text-body-1">{{ list }}</v-list-item-title>
                        </v-list-item>

                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
        </v-row>
    </div>

</template>

<script>
export default {
    data: () => ({
        drawer: false,
        group: null,
        lists: ["New COllection","Men", "Women","Baby","Trend",  "Watch", "Bag","Shopping",]
    }),

    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>

