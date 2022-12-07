<template>
  <div class="d-block">
    <label class="text-h6 my-2">{{name}}</label><br/>
    <input @input="updateValue" :value="value"  class="form-control"/>

  </div>
</template>

<script>
export default {
  props: ['value','name'],

  methods: {
    updateValue(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
