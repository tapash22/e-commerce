<template>
  <button :type="type">{{ label }}</button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "submit",
    },
    label: {
      type: String,
      default: "Submit",
    },
    onClick: {
      type: Function,
      default() {},
    },
  },
};
</script>