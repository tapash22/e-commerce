<template>
  <v-container>
    <v-row class="w-full md:w-full lg:w-full h-screen my-auto">

      <v-col cols="12" md="6" lg="6" class="bg-red-600">
        <DatePicker v-model="time1" type="date" format="MM-dd-yyyy" />
        {{ time1 }}
      </v-col>

      <v-col cols="12" md="6" lg="6" class="bg-amber-500 flex justify-center">

        <DatePicker v-model="time2" range />
        {{ time2 }}
      </v-col>

    </v-row>
  </v-container>

</template>
    
<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  data() {
    return {
      time1: null,
      time2: null,
      date: null,
    }
  },
  components: {
    DatePicker
  }
}
</script>
  