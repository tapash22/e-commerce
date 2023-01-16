<template>
  <div class="home">
    <!-- <TheNavigation /> -->
    <v-row style="margin-top:5px" class="d-flex justify-center">
      <TheSlider />
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="4" sm="6" lg="2" md="2" xl="2" v-for="lis in categorys" :key="lis.id" >

        <v-sheet class="d-flex justify-space-between" color="green lighten-1" elevation="5" height="60" rounded="xl">
          <v-avatar size="60" >
            <img :src="lis.cimage" alt="image" width="100%" height="100%">
          </v-avatar>
          <h6 class="text-body-1 align-self-center justify-flex-start pr-1  font-weight-medium"> {{ lis.category_name }} Trend</h6>
        </v-sheet>

      </v-col>
    </v-row>

    <v-row class="p-2 border-l-green-500">
      <v-col class="d-flex pa-0 " cols="12" sm="12" md="12" lg="12" elevation="4"
        color="deep-purple accent-4">
        <h2 class="text-h6">{{ $t('message') }}</h2>
        <v-spacer></v-spacer>
        <v-btn @click="showAll()" text class="text-body-1 font-weight-blod" color="green">View all</v-btn>
      </v-col>

      <v-col class="d-flex " cols="12" sm="12" md="3" lg="3" xl="3" v-for="index in this.countLength"
        :key="index">
        <ProductItem :product="products[index - 1]" />
      </v-col>
    </v-row>

  </div>

</template>

<script>
import TheSlider from '@/components/TheSlider.vue';
import ProductItem from '@/components/ProductItem.vue';
import { mapActions, mapState } from 'vuex';
// import BaseInput from '@/views/admin/components/BaseInput.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      employe: {
        name: 'tapash',
        age: 30,
        title: 'paul'
      },
      fromChild: '',
      // label: 'name',
      counter: 0,
    

    }
  },


  computed: {
    ...mapState(['products', 'categorys']),

    countLength() {
      return Math.min(4, this.products.length);
    }
  },

  components: {
    TheSlider,
    ProductItem,
    // BaseInput,
  },
  mounted() {
    this.getProducts();
    this.getCategorys();

  },

  methods: {
    ...mapActions(['getProducts', 'getCategorys']),

    showAllProduct() {
      this.$router.replace(`/${this.$i18n.locale}/flashnight`);
    },
    showAll() {
      this.$router.replace(`/${this.$i18n.locale}/productlist`);
    },
    getNew(data) {
      this.name1 = data;
    },
    onChildClick(value) {
      this.fromChild = value;

    }
  }
}
</script>

<style scoped>
.text{
  font-size: 1.2rem !important;
  text-align: center;
  align-self: center;
  padding-right: 5px;
}
</style>
