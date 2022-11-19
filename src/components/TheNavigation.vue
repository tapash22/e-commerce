<template>

    <div class="navigation">
        <v-app-bar color="deep-purple accent-4" dark>
            <v-app-bar-title class="white--text">E-Commerce</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-text-field class="shrink" dense hide-details placeholder="search" rounded filled
                append-icon="mdi-magnify">
            </v-text-field>
            <v-spacer></v-spacer>

            <v-menu offset-y rounded color="red">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">
                        {{cartItemCount}} Cart
                    </v-btn>
                </template>
                
                <div @click="$event.stopPropagation()">
                    <MiniCard />
                </div>

            </v-menu>

            <language-switcher class="mx-5"></language-switcher>
     
        </v-app-bar>
        <v-row class="d-flex justify-start">
            <v-navigation-drawer width="400px" color="white" v-model="drawer" permanent mini-variant-width="200px"
                expand-on-hover style="z-index:99;margin-left:150px;margin-top:10px">
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
import LanguageSwitcher from './LanguageSwitcher.vue';
import MiniCard from './MiniCard.vue';

export default {
    data: () => ({
        drawer: false,
        group: null,
        lists: ["New COllection", "Men", "Women", "Baby", "Trend", "Watch", "Bag", "Shopping",],

    }),

    watch: {
        group() {
            this.drawer = false
        },
    },
    computed:{
        cartItemCount(){
            return this.$store.getters.cartItemCount;
        }
    },
    components: {
        LanguageSwitcher,
        MiniCard
    }
}
</script>

