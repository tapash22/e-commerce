<template>
  <form
  v-on:input="handleForm"
  >
  <BaseInput v-model="form.user"/>
  <BaseInput v-model="form.title"/>

  </form>
</template>

<script>
// import axios from "axios";
import BaseInput from './BaseInput.vue';

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
 
    handleSubmit: {
      type: Function,
      default() {
       

        const form = new FormData(this.$refs.form);
        console.log(form);
      }
    }


        // axios({
        //   method: this.method,
        //   url: this.action,
        //   data: formData,
        // }).then((response) => {
        //   console.log(response.data);
        //   this.response = response.data;
        // });

  },
  data() {
    return {
      form:{
        user:'',
        title:''
      }
    };
  },
  components:{
    BaseInput
  },
  methods:{
    handleForm(value){
      this.form.push(value);
    }
  }
};
</script>
