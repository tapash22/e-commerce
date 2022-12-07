<template>
  <div class="mx-24">
    <h2 class="text-center text-h2 my-5">Form</h2>
    <BaseInput type="text" name='Email' v-model="form.email" />
    <BaseInput type="number" name='Credit' v-model="form.credits" />
    <!-- <BaseInput type="text" name='Date' v-model="form.nextrefilldate" /> -->
    <!-- <DatePicker v-model="form.nextrefilldate"/> -->
    <date-pick
    class="form-control w-64 padding d-block my-2 text-lg"
    style="font-size:16px;"
        v-model="form.nextrefilldate"
        :startWeekOnSunday="true"
        :format="'YYYY.MM.DD'"
    ></date-pick>

    <v-btn class="my-2 " color="success" @click="saveValue">Save</v-btn>

    <v-list>
      <h2>List of value</h2>
      <v-list-item v-if="form">
        <v-list-item-title>{{form.email}}</v-list-item-title>
        <v-list-item-subtitle>{{form.nextrefilldate}}</v-list-item-subtitle>
      </v-list-item>
    </v-list>

    <div class="my-5">
      <ClickCountButton/>
    </div>
  </div>

</template>

<script>
import BaseInput from "@/components/BaseInput";
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';
import ClickCountButton from '@/components/ClickCountButton.vue';
import { EventBus } from '@/event-bus';

// import DatePicker from "@/components/DatePicker.vue";
// import BaseButton from "@/components/BaseButton";
// import BaseForm from "@/components/BaseForm";

// const clickHandler = function(clickCount) {
//   console.log(`The button has been clicked ${clickCount} times!`)
// }

// EventBus.$on('clicked', clickHandler);

export default {
  components: {
    BaseInput,
    DatePick,
    ClickCountButton
    // DatePicker
    // BaseButton,

  },
  data() {
    return {
      form: {
        email: "",
        credits: 0,
        nextrefilldate: "",
      },

      fetching: [],
    };
  },
  mounted(){
    EventBus.$once('clicked', this.clickHandler);
  },
  methods: {
    onChildClick(value) {
      this.from = value;
    },
    saveValue() {
      console.log(this.form)
    },
    clickHandler(clickCount){
      console.log(`The button has been clicked ${clickCount} times!`);
    }
  }
};
</script>