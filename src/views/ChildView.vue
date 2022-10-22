<template>
  <div>
    <h2>Child Component</h2>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style></style>
