<template>
  <div class="home">
    <!-- <TheNavigation /> -->
    <v-row style="margin-top:5px" class="d-flex justify-center">
      <TheSlider />
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col sm="12" lg="2" md="2" xl="2" v-for="lis in categorys" :key="lis.id">

        <v-sheet class="pa-2 d-flex justify-start" color="white" elevation="5" height="80" width="220" rounded="xl">
          <v-avatar size="64">

            <img :src="lis.cimage" alt="image" width="100%" height="100%">
          </v-avatar>
          <h6 class="ml-15 mt-5"> {{ lis.category_name }}</h6>
        </v-sheet>


        <!--  -->
      </v-col>
    </v-row>

    <v-row class="p-5 border-l-amber-500">
      <v-col class=" d-flex pink lighten-2" cols="12" sm="12" md="12" lg="12" elevation="4"
        color="deep-purple accent-4">
        <h2 class="white--text">{{ $t('message') }}</h2>
        <v-spacer></v-spacer>
        <v-btn @click="showAll()">View all</v-btn>
      </v-col>

      <v-col class="d-flex pink lighten-4" cols="12" sm="12" md="3" lg="3" xl="3" v-for="index in this.countLength"
        :key="index">
        <ProductItem :product="products[index - 1]" />
      </v-col>
    </v-row>

    <v-row>
      <h2>Form</h2>

      <v-form  >
        <!-- <BaseInput  v-on:childToParent="onChildClick" /> -->
        <BaseInput :name="employe.name" v-on:childToParent="onChildClick" />
        <BaseInput :age="employe.age"  v-on:childToParent="onChildClick" />
        <BaseInput :title="employe.title" v-on:childToParent="onChildClick" />


      </v-form>

      {{ counter }}
      {{ fromChild }}
    </v-row>

  </div>

</template>

<script>
import TheSlider from '@/components/TheSlider.vue';
import ProductItem from '@/components/ProductItem.vue';
import { mapActions, mapState } from 'vuex';
import BaseInput from '@/views/admin/components/BaseInput.vue';

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
    BaseInput,
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
