<template>
  <div class="home">
    <!-- <TheNavigation /> -->
    <v-row style="margin-top:-330px;" class="d-flex justify-center">
      <TheSlider />
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col sm="12" lg="2" md="2" xl="2" v-for="lis in categorys" :key="lis.id">
        <v-chip x-large class="d-flex ">

          <v-img height="50px" width="80px" :src="lis.image"></v-img>

          {{ lis.name }}
        </v-chip>
      </v-col>
    </v-row>

    <v-row class="p-5" color="blue accent-4" >
      <v-col cols="12" sm="12" md="12" lg="12" class=" d-flex pink lighten-2"  elevation="4" color="deep-purple accent-4" >
        <h2 class="white--text">{{$t('message')}}</h2>
        <v-spacer></v-spacer>
        <v-btn @click="showAllProduct()">View all</v-btn>
      </v-col>

      <v-col class="d-flex pink lighten-5" cols="12" sm="12" md="3" lg="3" xl="3" v-for="index in this.pcount" :key="index">
        <TheCard :list="getiList[index-1]"/>
      </v-col>
    </v-row>

    <v-row class="p-5" >
      <v-col class=" d-flex pink lighten-2"   cols="12" sm="12" md="12" lg="12" elevation="4" color="deep-purple accent-4" >
        <h2 class="white--text">All Products</h2>
        <v-spacer></v-spacer>
        <v-btn @click="showAll()">View all</v-btn>
      </v-col>

      <v-col class="d-flex pink lighten-4" cols="12" sm="12" md="3" lg="3" xl="3" v-for="index in this.count" :key="index" >
        <ProductItem :product="getiProducts[index-1]"/>
       
      </v-col>
    </v-row>

  </div>

</template>

<script>
// import TheNavigation from '@/components/TheNavigation.vue';
import TheSlider from '@/components/TheSlider.vue';
import TheCard from '@/components/TheCard.vue';
import ProductItem from '@/components/ProductItem.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      pcount:0,
      count:0,
      categorys: [
        {
          id: 1,
          name: ' Man Fashion',
          image: 'https://cdn.vuetifyjs.com/images/john.png'
        },
        {
          id: 2,
          name: ' Women Fashion',
          image: 'https://cdn.vuetifyjs.com/images/john.png'
        },
        {
          id: 3,
          name: ' Baby Fashion',
          image: 'https://cdn.vuetifyjs.com/images/john.png'
        },
        {
          id: 4,
          name: ' New Fashion',
          image: 'https://cdn.vuetifyjs.com/images/john.png'
        },
      ]
    }
  },
  computed:{
    getiList(){
      return this.$store.state.lists;

    },
    getiProducts(){
      return this.$store.state.products;
    },
    
  },

  components: {
    TheSlider,
    // TheNavigation,
    ProductItem,
    TheCard
  },
  mounted(){
    this.pcount = Math.min(4,this.getiList.length);
    this.count = Math.min(4,this.getiProducts.length);
  },

  methods:{
    showAllProduct(){
      this.$router.replace(`/${this.$i18n.locale}/flashnight`);
    },
    showAll(){
      this.$router.replace(`/${this.$i18n.locale}/productlist`);
    }
  }
}
</script>
