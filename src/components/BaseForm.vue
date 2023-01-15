<template>
  <form
  >
  <BaseInput type="text" name='Email' v-model="props.form.email" />
    <BaseInput type="number" name='Credit' v-model="props.form.credits" />
    <!-- <BaseInput type="text" name='Date' v-model="form.nextrefilldate" /> -->
    <!-- <DatePicker v-model="form.nextrefilldate"/> -->
    <date-pick
    class="form-control w-64 padding d-block my-2 text-lg"
    style="font-size:16px;"
        v-model="props.form.nextrefilldate"
        :startWeekOnSunday="true"
        :format="'YYYY.MM.DD'"
    ></date-pick>

    <v-btn class="my-2 " color="success" @click="saveValue">Save</v-btn>


  </form>
</template>

<script>
// import axios from "axios";
import BaseInput from './BaseInput.vue';
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';

export default {
  props: ['form'],
  components:{
    BaseInput,
    DatePick
  },
  methods:{
    saveValue(){
      console.log(this.form);
    }
  }


 
};
</script>
