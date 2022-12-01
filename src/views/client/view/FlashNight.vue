<template>
    <div class="flash-night">
<h2 class="text-center text-h2 text-bold">FlashNight</h2>
        <v-row class="p-3">
            <v-col cols="12" sm="12" md="3" lg="3" xl="3" v-for="list in getList" :key="list">
                <TheCard :list="list" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import TheCard from '@/components/TheCard.vue';


export default {
    computed:{
      getList(){
        return this.$store.state.lists;
      }
    },

    components: { TheCard },

}
</script>